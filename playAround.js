let object = {
    xedap:{
       hangton:{
        mau:'trang',
        kieu:'sport'
       },
       mau:{
        mau:'den',
        kieu:'basic'
       }, 
    },
    cho:2
}

const thu = Object.values(object.xedap)
console.log(thu)

// // let arr1 = [1,2,3]
// // let arr2 = [4,5,6]

// // console.log(arr1.concat(arr2))

// class Student{
//     constructor(name,age){
//         this.co = name + 'hehe'
//         this.lon = age + 1
//         this.univer = function(){
//             console.log('TLU')
//         }
//     }
//     ga(){
//         console.log('ga')
//     }
// }

// // let st1 = new Student('Thanh',21)
// // console.log(st1)
// // st1.univer()
// // st1.ga()

// class Univer extends Student{
//     constructor(cho,meo){
//         super()
//         // this.name = 'ga'
//     }
// }

// let u1 = new Univer('ngoc',21)
// console.log(u1)

// const string = 'ga cho meo'
// console.log(string)
// const arr = string.split(' ')
// console.log(arr)
// console.log(arr[1])

// const arr = [
//     {
//         name:"Thanh",
//         age:21
//     },
//     {
//         name:'Phuong',
//         age:21
//     }
// ]

// // console.log(arr)
// let name = 'name'
// let age = 'age'
// const test = arr.reduce((acc,cur) =>{
//     acc[name] = cur.name
//     acc[age] = cur.age
    
// },{})

// console.log(test)