var minCostToMoveChips = function(chips) {
    let odd = 0; //奇数计数器
    let even = 0;//偶数计数器
    chips.forEach(element => {
        if(element%2===0){
            even++;
        }else{
            odd++;
        }
    });
    return Math.min(odd,even);//返回最小的一个，因为偶移动到偶，或者奇移动到奇代价为0，只许把所有奇数或者所有偶数移动到对立位即可，移动最小的
};