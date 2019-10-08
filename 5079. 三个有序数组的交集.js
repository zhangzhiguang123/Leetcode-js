var arraysIntersection = function (arr1, arr2, arr3) {
    let set1 = new Set(arr1);
    let set2 = new Set();
    let lastSet = new Set();
    arr2.forEach(element => {
        if (set1.has(element)) set2.add(element);
    });
    arr3.forEach((element) => {
        if (set2.has(element)) lastSet.add(element);
    });
    return [...lastSet];
};
console.log(arraysIntersection([1, 2, 3, 4, 5, 5],
[1, 2, 5, 7, 9, 5],
[1, 3, 4, 5, 8, 5]));