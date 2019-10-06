var countCharacters = function(words, chars) {
    let lastLength = 0;  //最终掌握单词的长度
    let charsObj = Object.create(null);
    for(let i of chars){  //将chars内的单词及其出现过的次数的映射存入一个对象中。
        if(charsObj[i]){
            charsObj[i]++;
        }else{
            charsObj[i]=1;
        }
    }
    for(let str of words){ //遍历单词数组，将每一个单词映射到一个相应的对象中
        let awordObj = Object.create(null);
        for(let i of str){
         if(awordObj[i]){
             awordObj[i]++;
         }else{
             awordObj[i]=1;
         }
        }
        let flag = 1;
        for(let i in awordObj){ //比较单个单词对象与chars对象的每个属性的值
            if(awordObj[i]>charsObj[i]||!charsObj[i]){
                flag=0;
                break;
            }
        }
        if(flag){ //flag为1时，说明记住了
            lastLength+=str.length;
        }
        awordObj = null;
    }
     return lastLength;
};

console.log(countCharacters(["cat","bt","hat","tree"],"atach"));