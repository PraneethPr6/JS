
const isEligible = (a) => {
    var res;
    
    if(a>=18) 
    {
      res ="Eligible for Voting";
      return res;
    }
    else
     {
       res ="Not Eligible for Voting";
       return res;
     }
};