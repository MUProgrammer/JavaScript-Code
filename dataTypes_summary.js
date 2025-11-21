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
    
/*************    *************/
    // stack vs heap
    // stack is a LIFO (Last In First Out) data structure
    // heap is a specialized tree-based data structure that satisfies the heap property
    // stack is used for function calls and local variables
    // heap is used for storing objects in memory
    // example of a stack
    const stack = [];
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.pop()); // 3
    console.log(stack.pop()); // 2
    console.log(stack.pop()); // 1
/*******  08cd8657-944f-4a1c-b21f-2844f38355c8  *******/    