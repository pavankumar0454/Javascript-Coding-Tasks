var isPalindrome = function(s) {
    s = s.toLowerCase();
    var beg = 0;
    var end = s.length - 1;
    
    while(beg < end) {
        if(!s[beg].match(/[a-z0-9]/)) {
            beg++;
        } else if(!s[end].match(/[a-z0-9]/)) {
            end--;
        } else if(s[beg] !== s[end]) {
            return false;
        } else {
            end--;
            beg++;
        }
    }
    
    return true;
};
