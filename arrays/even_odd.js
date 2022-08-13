const findEvenOdd = (N, Arr) => 
{
    let odd_sum= 0;
    let even_sum= 0;
    let P=[2];
    for(let i=0; i<N; i++){
      if(Arr[i]%2 == 0 ){
        even_sum+=Arr[i];
      }
      else{
        odd_sum+=Arr[i];
      }
    }
    P[0]=even_sum ;
    P[1]=odd_sum;
    return P;  
};