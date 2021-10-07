let number = 1000;
let cycle = 0;
console.log(number + ' - 7');

while (number > 0) {
    cycle++;
    if (number >= 7) {
        console.log(number + ' - 7');
        number -= 7;
    } else if (number < 7) {
        console.log(number + ' - 7');
        console.log('блин, не ровно');
        console.log(number + ' - ' + number);
        number -= number
        console.log('теперь чётко');
    }
    
}

console.log(number);
console.log('цикл сработал ' + cycle + ' раза');