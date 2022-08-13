const Find_Prod = (array, N) => 
{
 let prod= 1;
    for(let i = 0; i< array.length; i++) {
       prod*= array[i];
     }
     
     return prod;
     

};