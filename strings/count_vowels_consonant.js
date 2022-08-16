var Count_Vowels= (S) => 
{
       let count = 0;
    let Vowels = ["a","e","i","o","u"];

    for(let letter of S.toLowerCase()){
        for(let V of Vowels){
            if(letter===V){
                count++;
            }
        }
    }
    return count;
};
var Count_Consonants= (S) => 
{
    return S.length - Count_Vowels(S);   
    
};
 
 