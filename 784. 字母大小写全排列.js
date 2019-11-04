const letterCasePermutation = (S) => {
    let resultArr = [];//最终答案数组
    resultArr.push(S);
    for (let i = 0; i < S.length; i++) {
        let middle = JSON.parse(JSON.stringify(resultArr));//声明一个新数组，复制每次循环后的数组，防止遍历时因改变数组本身导致的不符合预期情况
        // console.log(middle);
        if (S[i] >= `a` && S[i] <= `z`) {  //碰到小写字母，将其转为大写字母，并替换上次resultArr中每个元素的i位，并添加到resultArr中
            resultArr.map(item => { 
                let str = item.slice(0, i) + item[i].toUpperCase() + item.slice(i + 1);
                middle.push(str);
            });
        } else if (S[i] >= `A` && S[i] <= `Z`) { //大写字母转小写字符，也如上
            resultArr.map(item => {
                let str = item.slice(0, i) + item[i].toLowerCase() + item.slice(i + 1);
                middle.push(str);
            });
        }
        resultArr = middle;
    }
   return resultArr;
};

console.log(letterCasePermutation("12345"));