var aString = 'This is a string';
var aNumber = 24;
var aBoolean = true;
var anArray = ["na na", "na na", "na na", "Batman"];
// tuples
var aTuple = ["the string", 24];
//enum
var teams;
(function (teams) {
    teams[teams["Millos"] = 0] = "Millos";
    teams[teams["River"] = 1] = "River";
    teams[teams["Gremio"] = 2] = "Gremio";
    teams[teams["Palmeiras"] = 250] = "Palmeiras";
})(teams || (teams = {}));
;
console.log(aString);
console.log(aNumber);
console.log(aBoolean);
console.log(anArray);
console.log(aTuple);
console.log(teams.Millos);
//FUNCTIONS
function printString() {
    return aString;
}
function noReturnFunction() {
    console.log("Printing...");
}
function fnWithParams(num1, num2) {
    return num1 + num2;
}
//FUNCTION TYPES
var funcType;
funcType = fnWithParams;
console.log(funcType(10, 12));
//OBJECTS
var emptyObject;
var theObject = {
    name: 'Frank',
    age: 32,
};
var newFunc = function (val) {
    return [val];
};
console.log(newFunc(2));
var nullable = 12;
nullable = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
