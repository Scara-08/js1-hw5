 
//task1
// function task1() {
//   const Li = document.querySelector('li');
//   if (Li) {
//       return Li.textContent;
//   }
// }

// console.log(task1());



//task2
// function task2() {
//     let tema = document.querySelectorAll("li");
//     let result = Array.from(tema)
//     return result.map((item)=>{
//       return item.textContent
//     })
//   }

// console.log(task2());
() =>{

}

//task3

// function task3() {
//       let tema = document.querySelectorAll(".list-item");
//       let result = Array.from(tema)
//       return result.map((item)=>{
//         return item.textContent
//       })
//     }

// console.log(task3());



//task4

// let task4 = ()=> {
//   let list = document.querySelectorAll(".list-item");
//   let result= Array.from(list).map((item) =>{
//     return item.getAttribute('data-test-id')
//   }
//   )
//   return result;
// }



// console.log(task4());




//task5
// const task5 =()=>{
// let list = document.querySelectorAll(".list-item");
//   let result = Array.from(list)
//   return result.map((item) =>{
//     return item.getAttribute('data-test-id')
//   }
//   )}
  
//   console.log(task5());



//task6


const task6 = ()=>{
  let bitch = document.querySelectorAll('.list-item')
  let femboy = Array.from(bitch).filter((item)=>{
    return !item.className.includes(item.textContent)
  })
  return femboy.map((item) =>{
        return item.getAttribute('data-test-id')
      }
      )}
      
console.log(task6());















