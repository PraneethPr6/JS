// Problem: 1
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.
// Input:
// abcadeecfb
// Output:
// abcdef

var s='abcadeecfb';
let n=s.length;
let set=new Set();
for(let i=0;i<n;i++){
    set.add(s.charAt(i));
}
console.log(set);

// Problem: 2
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
// Input:
// abcadeecfb
// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1

function countChars(text) 
{
    return text.split('').reduce((map, char) => {
     map[char] = (map[char] || 0) + 1;
    return map;}, {});
}
console.log(countChars('abcadeecfb'));