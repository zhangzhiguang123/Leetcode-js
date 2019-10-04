var heightChecker = function(heights) {
    let heights1 = heights.slice();
    heights.sort((a,b)=>b-a);
    let j = 0;//计数器
    for(let i in heights){
        if(heights[i]!==heights1[i]) j++;
    }
    return j;
};