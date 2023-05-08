"use strict";


const myInfo= {
    name1:"Andrew Muok",
    address:"123 ABC Street",
    city:"Atlanta",
    state:"Georgia",
    zip:"12345",
};



function printContact(Info){
    console.log(Info.name1);
    console.log(Info.address);
    console.log(Info.city , Info.state , Info.zip);
}

printContact(myInfo);