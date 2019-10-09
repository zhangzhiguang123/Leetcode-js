var removeDuplicates = function(S) {
    while(true){
        let SS = '';  //保存每次删除过重复字的字符串
        for(let i=0;i<S.length;i++){
            if(i===S.length-1){ //比较到最后一个直接加上
                SS+=S[i];
                break;
            }
            if(S[i]===S[i+1]){ //出现相同字符直接跳过，不执行SS+=S[i]
                i++;
                continue;
            }
            SS +=S[i];
        }
        if(S===SS) break; //如果去除后与没去除前的字符串一样，跳出循环
        S = SS;
    }
    return S;
};

console.log(removeDuplicates('aca'));