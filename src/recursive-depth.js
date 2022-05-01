const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.curent = 1;
    this.maxCurent = 0;
    this.iteration = 1;
    this.result = 0;
  }

  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    arr.forEach(item => {
      if (Array.isArray(item)) {
        this.iteration++;
        this.curent++;
        this.calculateDepth(item);
      }
    });
    this.maxCurent = Math.max(this.maxCurent, this.curent);
    this.curent--;

    this.iteration--;
    if (this.iteration === 0) {
      this.result = this.maxCurent;
      this.curent = 1;
      this.maxCurent = 0;
      this.iteration = 1;
    }

    return this.result;
  }
}

module.exports = {
  DepthCalculator
};
