const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }
  encrypt(message, key) {
    return this.getMachineResult(message, key, true);
  }
  decrypt(message, key) {
    return this.getMachineResult(message, key, false);
  }
  createKeyStr(key, length) {
    return key.repeat(Math.ceil(length / key.length)).slice(0, length);
  }
  getIndexes(messageChar, keyChar) {
    return [this.getIndex(messageChar), this.getIndex(keyChar)];
  }
  getIndex(ch) {
    return this.alphabet.indexOf(ch.toLowerCase());
  }
  getMachineResult(message, key, ecnryptFlag) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    const keyStr = this.createKeyStr(key, message.length);
    let skipCount = 0;
    const result = message.split("").map((c, i) => {
      const [messageIndex, keyIndex] = this.getIndexes(
        c,
        keyStr[i - skipCount]
      );
      if (messageIndex === -1) {
        skipCount += 1;
        return c;
      }
      return this.alphabet[
        ecnryptFlag
          ? (messageIndex + keyIndex) % 26
          : messageIndex > keyIndex
          ? messageIndex - keyIndex
          : (messageIndex - keyIndex + 26) % 26
      ];
    });
    return (
      this.direction ? result.join("") : result.reverse().join("")
    ).toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
