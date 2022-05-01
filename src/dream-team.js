
function createDreamTeam (array){
  let secret =[];
for(let arrays of array){
  if (typeof arrays === 'string'){
  for(let i =0; i< arrays.length;i++){
      
      if(arrays[i]===arrays[i].toUpperCase()){
          secret.push(arrays[i]);
      }
  }
}

}
return((secret.sort()).join(''));
}
