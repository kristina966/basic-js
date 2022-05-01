function getSeason(...date){
   
  if(Object.prototype.toString.call(date) === '[object Date]' ){
  console.log('Invalid date!')    
  }
  let season ="";
   let dateD= new Date(date); 
   let month = dateD.getMonth();
switch(month){
  case 12:
  case 0: 
  case 1:
      season = 'winter';
      break;
      case 2:
      case 3:  
      case 4:
          season ='spring';
          break;
          case 5:
          case 6:  
          case 7:  
          season = 'summer';
          break;
         case 8:
         case 9:  
         case 10: 
         season = 'fall'
         break;
}
  
console.log(season);

}

getSeason(49996);