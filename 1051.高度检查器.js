var heightChecker = function(heights) {
    let heights1 = heights.slice(); 
    heights.sort((a,b)=>a-b);
    let j = 0;//计数器
    for(let i in heights){
        if(heights[i]!==heights1[i]) j++;
    }
    return j;
};
console.log(heightChecker([1,1,3,2,1,4]));