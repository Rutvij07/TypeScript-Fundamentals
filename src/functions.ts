// fuctions in typescript 

function getSum(num1:string,num2:string):number{  // passing string and resturing as number 
    return parseInt(num1) + parseInt(num2)
}

console.log(getSum('1','2'));

let mySum = function(num1:number,num2:number):number {
    return (num1) + (num2); 
}

console.log(mySum(5,43));

let getName = function(firstname:string,lastname?:string):string{ // '?' stands for optional is lastname is not passeed as parameter it will show undefined
    if(lastname == undefined){
        return firstname;
    }
    return firstname+' '+lastname;

}

console.log(getName('Thanos','Baba'));
console.log(getName('Thanos'));

