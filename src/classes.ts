interface UserInterface {
    name:string;
    age:number;
    UserName(name:string);
    AvengerName(text:string,name:string);
}

class User implements UserInterface {

     name:string;
     age:number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age

        this.UserName(this.name)
    }

     UserName(name){
     console.log('Username is',name);   
    }

    AvengerName(text,name){
     console.log('Avenger is',name);   
     console.log(name +' said ' + text);   
     
    }
}

class Avenger extends User {  // Avenger inherites User
    text:string;

    constructor(text:string,name:string,age:number){
        super(name,age) // this function is mandatory it contains parameter of class which it inherites
        this.text = text
        this.AvengerName(this.text,this.name)
    }

    AvengerName(text,name){
        super.AvengerName(text,name);
    }
}


let thanos = new User('Thanos',23);
let avenger : User = new Avenger('Earth is on holiday','Ironman',12);
