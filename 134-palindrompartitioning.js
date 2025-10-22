var partition = function(s) {
    let result = []; 
    let isPalindrome = (s) => { 
        let i =0; 
        let j = s.length - 1; 
    while(i < j) { 
        if(s[i++] != s[j--]) 
        return false; 
    } 
    return true; 
  } 
  let backtrack = (path, remainingString) => { 
    if(!remainingString.length) { 
        result.push([...path]);
    } 
    for(let i=1; i <= remainingString.length; i++){ 
        let choice = remainingString.substring(0, i); 
        if(!isPalindrome(choice)) 
         continue; 
         path.push(choice); 
         backtrack(path, remainingString.substring(i)); 
         path.pop(); 
        } 
    }
    backtrack([], s); 
    return result;
};