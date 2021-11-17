// Ex1

function tossCoin() {
    let value = Math.random();
    if (value < 0.5) {
        console.log('Mặt ngửa');
    } else {
        console.log('Mặt xấp');
    }
}
 tossCoin();

 // Ex2
function countMoney(money) {
    var total = 0;
    for (var money of money) {
        if (!money.fake){
        total += money.value;
        } else {
            console.log('Money fake', money);
            break; // thoát vòng lặp giữa trừng 
        }
    }
    return total;
}
var money = [
    {value: 10000},
    {value: 20000},
    {value: 50000, fake: true},
    {value: 100000},
    {value: 1000}
];

var total = countMoney(money);
console.log(total);
///////////////////////////////////////////////////////////

//Ternary Operator
function tossCoin() {
    let value = Math.random();
    let result = (value < 0.5) ? 'Mặt ngửa' : 'Mặt xấp' ;
    // if (value < 0.5) {
    //     result = 'Mặt ngửa';
    // } else {
    //     result = 'Mặt xấp';
    // }
    console.log(result);
}
 tossCoin();


// if else lồng nhau 
// Example : calculate bus ticket fee
function getTicketFee(person) {
    let basePrice = 10000;
    if (person.age < 15) {
        return basePrice * 0.8;
    }else if (person.age > 60 ) {
        return basePrice * 0.9;
    }else {
        return basePrice;
    }
}

let person = {
    age: 16
};
let fee = getTicketFee(person);
console.log(fee);