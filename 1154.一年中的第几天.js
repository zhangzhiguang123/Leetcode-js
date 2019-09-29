const dayOfYear =date=>{
    let nowday = new Date(date);
    let year = date.substr(0,4);
    let firstDay = new Date(`${year}-01-01`);
    let minu = nowday.getTime()-firstDay.getTime();
    return Math.ceil(minu/1000/3600/24)+1;
};
console.log(dayOfYear("1976-11-1"));