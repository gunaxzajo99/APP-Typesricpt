module Citizen{
 export function CheckCard(numcard:String){
     var sum=0;
     for(var i=0,k=13;i<numcard.length-1;i++,k--){
         sum=sum+(Number(numcard[i])*k);
     }
     sum = sum%11;
     sum = 11 - sum;
     sum = sum%10;
     var check = false;
     if(Number(numcard[12])==sum){
         check = true;
     }
     return check;
 }
}
export = Citizen