const Max_out_of_three = (A,B,C) => {
    if (A>B && A>C)
   {
     return A;
   }
   
   else if (B>C && B>A)
   {
     return B;
   }
   else if(C>A && C>B)
   {
     return C;
   }
   else
   {
     return "-1";
   }

};