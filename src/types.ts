// TypeScript Types 

let myString: string;
let myNumber: number;
let myBoolean: boolean;
let myAny: any;

let myArrString: Array<string>;
let myArrNumber: Array<number>;
let myArrBoolean: Array<boolean>;
let myTuple: [string,number]; 

let myVoid:void = undefined
let myNull:null = null 
let myUndefined:undefined = null

myString = 'Hello TypeScript';
myNumber = 22;
myBoolean = false;
myAny = 4;
myArrString = ['Hello','World'];
myArrNumber = [1,2,3];
myArrBoolean = [true,false];
myTuple = ['Hello ',8] // Array with fixed number of elements , first element has to be string as declare above and vice versa

console.log('String : ',myString);
console.log('Number :',myNumber);
console.log('Boolean : ',myBoolean);
console.log('Any : ',myAny);
console.log('String Array : ',myArrString);
console.log('Number Array  : ',myArrNumber);
console.log('Boolean Array : ',myArrBoolean);
console.log('Tuple Array : ',myTuple);
console.log('Void : ',myVoid);
console.log('Null : ',myNull);
console.log('Undefined : ',myUndefined);




