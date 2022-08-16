var Palin_Check = (str) =>
{
	 let len = str.length-1;
let count=0;
	 for(let i=0;i<str.length;i++){
	   
	   if(str[i]===str[len]){
	     count++;
	     len--;
	   }else{
	     
	     return "False";
	   }
	 }
	 if(count>0){
	 return "True";
	 }
}
