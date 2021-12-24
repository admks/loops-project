function fibonacciGen(num) {
    if (num > 0) {
        if (num == 0) {
            console.log("0")
        } else if (num == 1) {
            console.log("0")
        } else {
            let starter = [0, 1];
            for (let i = 2; i < num; i++) {
                starter.push(starter[i - 2] + starter[i - 1]);
            }
            console.log(starter)
        }
    }
}//0 1 2 3 4 5 6
//0 1 1 2 3 5
fibonacciGen(-1);

function fibonacciFinder(num) {

}



