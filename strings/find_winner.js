var Game_Winner = (S) => 
{
   var ca=0,cd=0
  for(let i=0;i<S.length;i++)
  {
    if(S[i]=='A')
    ca++
    else
    cd++
  }
 
  if(ca>cd)
  return 'Aditya'
  else if(ca<cd)
  return 'Danish'
  else
  return 'Draw'
}
 