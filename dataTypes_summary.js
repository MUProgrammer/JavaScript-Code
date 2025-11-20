// 2 dataTypes in js 
// 1 primitive dataTypes
    // number, string, boolean, null, undefined, symbol,bigInt
    const score = 100;
    const name = "Umar";
    const isLoggedIn = false;
    const isTemp=null;
    const userName = undefined;
    const bigNumber = 1234567890123456789012345678901234567890123456789012345678901234567890n;
    const mySymbol = Symbol("123");
    const mySymbol2 = Symbol("123");
    console.log(mySymbol);
    console.log(mySymbol2);
    console.log(mySymbol==mySymbol2);
    // symbol is a primitive data type in js and it is used to create unique identifiers for objects
    
    
// 2 reference dataTypes
    // Array, object, functions
    const heros = ["shazam", "batman", "superman"];
    const myObj = {
        name: "Umar",
        age: 22,
    };
    function logger(){
        console.log("Hello World");
    } 
    const logger = () => console.log("Hello World");
    
