console.log("hello , world");
console.log(32);
console.log("the value of the 32 is :",32);
console.log(6*2)
console.log(8*9)
console.log(`Hare Krishna
    This is the Gurukulam's STW`)
console.log('5' + '3')
console.log('5' - '3')
console.log('5'==5) /* this is true , double qeual meain it only see the value*/
console.log('5'===5)/* triple equal meain original things concider*/
console.log('This is a text , the value of 2 + 3 : ${2+3}')
const name ="Gurukulam's STW"
console.log('Hey', name, "who are you?" )
let a=6;
let b=8;
console.log(a+b)
a=10
console.log(a+b)
console.log(typeof a)
console.log(typeof name)
a='Hello'/*this is applicaple in js due to it is not differ but name=123 this is wrong*/
const arr=[1,2,3,4,5]
console.log(arr)
console.log(arr[1])
const input=prompt('Enter your name')
console.log('your name is :', input)
console.log(typeof arr)

const obj ={
name:"Subha",
age :23,
isStudet: true 
}
console.log(typeof obj == typeof arr)

const abc=null;
const xyz= undefined;
console.log(abc==xyz)
console.log(xyz)
console.log(obj.name)
console.log(obj.collage)
//console.log(obj.school.name)

console.log('5'!=5)
console.log("5"!==5)
console.log('5'==5||obj.school.name)/* This is called short cercite and ans is true due to one of the condition is true */


if(2>5){
    console.log('math is wrong')
}
else{
    console.log('This will print')
    const str=''
    //let confusion = '500'- "abc"
    let confusion = 5/0
    console.log("confusion")
    if(str||confusion){
        console.log("will it print?")
    }
}

const marks = {
    math : 90,
    phys : 80,
    chem : 85,
    practical : {
        phys : 99
    }
}
let total = marks.math+marks.phys+marks.chem
total+=(marks.practical && marks.practical.phys)||0
console.log(total)

console.log(true+1)
console.log(true==1)
console.log(true==2)

console.log(5+parseInt('4a'))/*convert the 4a value in only integer*/
console.log(0.3+0.5)
console.log((0.3+0.5).toFixed(2))

const newChar="Subha"
console.log(newChar=="subha")
console.log(newChar.toLowerCase()=="subha")