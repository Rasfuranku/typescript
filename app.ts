let aString: string = 'This is a string';
let aNumber: number = 24;
let aBoolean: boolean = true;
let anArray: string[] = ["na na", "na na", "na na", "Batman"];

// tuples
let aTuple: [string, number] = ["the string", 24];

//enum
enum teams {
    Millos,
    River,
    Gremio,
    Palmeiras = 250
};


console.log(aString);
console.log(aNumber);
console.log(aBoolean);
console.log(anArray);
console.log(aTuple);
console.log(teams.Millos);

//FUNCTIONS
function printString(): string {
    return aString;
}

function noReturnFunction(): void {
    console.log("Printing...");
}

function fnWithParams(num1: number, num2: number): number {
    return num1 + num2;
}


//FUNCTION TYPES
let funcType: (val1: number, val2: number) => number;
funcType = fnWithParams;
console.log(funcType(10, 12));

//OBJECTS
let emptyObject: {};
let theObject: {name: string, age: number} = {
    name: 'Frank',
    age: 32,
};

//types

type Func = (val: number) => number[];

let newFunc: Func = function(val: number): number[] {
    return [val];
}
console.log(newFunc(2));

let nullable = 12;
nullable = null;


type BankAccount = {money: number, deposit: (value: number) => void};
let bankAccount: BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);