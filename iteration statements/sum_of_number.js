const Number_Sum = (N) => 
{
	var count=0,i;
	while(N>0)
	{
	  i = N%10
	  count=count+i
	  N=parseInt(N/10)
	}
	
	return count;
	
};