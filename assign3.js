let myArr = []
add(myArr)
function add (myArr){
    myArr.push(1,2,3)
    console.log(myArr)
    for(let i=0; i<myArr.length; i++){myArr[i]=myArr[i]+2
}
console.log(myArr)
}