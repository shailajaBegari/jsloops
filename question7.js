//question 8***********//
// var sum=0
// for(var i=1;i<=100;i++){
//     sum=sum+i
//     // console.log(sum)
// }
// console.log(sum)



//question  7  ******//

// for(var num=1;num<=100;num++){
//     if (num%7===0){
//         console.log(num)
//     }
// }


//question 9  ********//


var sum=0
for (let num=1;num<10;num++){
    const n=require("readline-sync")
    let num=n.questionInt("enter number:")
    sum=sum+num
}
console.log(sum)