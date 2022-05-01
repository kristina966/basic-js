function transform(arr){
  if((Array.isArray(arr))){
   
    let array =arr.slice(0);
for(let i = 0;i<arr.length;i++ ){
  
switch(arr[i]){
  
  case '--discard-next':
    array.splice(i,2);
    break;
  case '--discard-prev':
    array.splice(i-1,2);
    break;
  case '--double-next':
    array.splice(i,0,array[i+1]);
   array.splice(array.indexOf('--double-next', 0),1); 
    break;
  case '--double-prev':  
  array.splice(i-1,0,array[i-1]);
  array.splice(array.indexOf('--double-prev', 0),1); 
  break;
}
}
  
 
    return array;
}
console.log('arr parameter must be an instance of the Array!');
}
