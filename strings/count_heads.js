var Count_Occ = (s) => 
{
     let newString = "";
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;
  for (let letter of letters) {
    for (let character of s) {
      if (letter === character) {
        count++;
      }
    }
    if (count > 1) {
      newString += `${letter}${count}`;
    }
    count = 0;
  }
  return newString;
};