var lengthOfLongestSubstring = function(s){
  if(!s) return 0;
  let longestLength = 0;
  let currStr = '';
  let pointA = 0, pointB =0;
  while(pointB < s.length){
    let index = currStr.indexOf(s.charAt(pointB));
    if(index > -1){
      longestLength = longestLength > pointB-pointA ? longestLength : pointB-pointA;
      currStr = currStr.slice(index+1);
      pointA += index+1;
    }
    currStr += s.charAt(pointB);
    pointB ++;
  }

  return longestLength > pointB-pointA ? longestLength : pointB-pointA;
};