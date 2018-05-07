// fuctions in typescript 
function getSum(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}
console.log(getSum('1', '2'));
var mySum = function (num1, num2) {
    return (num1) + (num2);
};
console.log(mySum(5, 43));
var getName = function (firstname, lastname) {
    if (lastname == undefined) {
        return firstname;
    }
    return firstname + ' ' + lastname;
};
console.log(getName('Thanos', 'Baba'));
console.log(getName('Thanos'));
