let uniqueOccurrences =arr=>{
    let obj = Object.create(null);//创建一个__proto__指向null的对象
    arr.forEach(element => {
        if(obj[element]){
            obj[element]++;
        }else{
            obj[element]=1;
        }
    });
    let objSet = new Set();
    let i = 0;  //对象属性个数计数器
    for(let o in obj){
       i++;
       objSet.add(obj[o]);
    }
    return i===objSet.size;
};

