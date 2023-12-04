/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let l1 =[];
    let l2 = [];
    for(let i = 0; i < str1.length ; i++){
        l1.push(str1.charAt(i));
    }
    for(let i = 0; i < str2.length ; i++){
        l2.push(str2.charAt(i));
    }
    l1.sort();
    l2.sort();

    let sortedStr1 = l1.join('');
    let sortedStr2 = l2.join('');

    if(sortedStr1 == sortedStr2){
        return true;
    }else{
        return false;
    }
}
    
  
isAnagram("openpi", "aiopen"); // Output: true
  
module.exports = isAnagram;