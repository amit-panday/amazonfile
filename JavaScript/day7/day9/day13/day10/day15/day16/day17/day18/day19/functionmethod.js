let HomeBudget = {
    savings : function(month, year){
        console.log(`${this.person} saves ${this.earns-this.spends} in the month ${month}, ${year}`);
    }
}
// console.log(HomeBudget.savings())

let father = {
    person : "Father",
    earns : 80000,
    spends : 50000
}
let mother = {
    person : "Mother",
    earns : 50000,
    spends : 20000
}
let son = {
    person : "Son",
    earns : 25000,
    spends : 5000
}
let doughter = {
    person : "Doughter",
    earns : 30000,
    spends : 7000
}
// !call()
// HomeBudget.savings.call(father,"July","2023");
// HomeBudget.savings.call(mother,"July","2023");
// HomeBudget.savings.call(son,"July","2023");
// HomeBudget.savings.call(doughter,"July","2023");

// !apply()
// HomeBudget.savings.apply(son,[…