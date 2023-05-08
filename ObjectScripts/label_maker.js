"use strict";


const myInfo= {
    name1:"Andrew Muok",
    address:"123 ABC Street",
    city:"Atlanta",
    state:"Georgia",
    zip:"12345",
};

printContact(myInfo);

function printContact(myInfo){
    console.log(myInfo.name1);
    console.log(myInfo.address);
    console.log(myInfo.city);
    console.log(myInfo.state);
    console.log(myInfo.zip);
}