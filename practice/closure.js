function range(start, end) {
    if (end === undefined) return function upperRange(end) {
        let rangeArr = []
        for (let i = start; i <= end; i++) {
            rangeArr.push(i)
            if (i === end) return rangeArr
        }
    }
    let rangeArr = []
    for (let i = start; i <= end; i++) {
        rangeArr.push(i)
        if (i === end) return rangeArr
    } 
}

var start3 = range(3);
var start4 = range(4);

console.log(
    range(3, 8),
    start3(3),
    start3(8),
    start4(6)
    )