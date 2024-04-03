// 1-masala


// let total = [1,2,3,4,5,6,7,8,9]
// let even = 0
// let odd = 0
// for(let i = 0; i < total.length; i++){
//     if(total[i] % 2 == 0){
//         even++
//     }else{
//         odd++
//     }
// }
// console.log("Bu son juft son " + even)
// console.log("Bu son toq son " + odd)




// // 2-masala

// let nam = prompt("Enter your number..")
// let item = [1,-5,3,9,7,-9,10,25]
// let count = 0
// let even = 0 
// let odd = 0
// for(let i = 0; i < item.length; i++){
//     count +=item[i]
//     if(item[i] % 2 === 0){
//         even +=item[i]
       
//     } else if (item[i] % 2 === 1){
//         odd +=item[i]
//     }
// }

// console.log(`Natija Juft sonlar yig'indisi-${even}, Toq sonlar yig'indisi-${odd} Promp bilan arry ayirmasi-${Math.abs(nam - count)}`);



// 3-masala


// let item = +prompt(" Birinchi sonni kiriting...")
// let box = +prompt(" Ikkinchi sonni kiriting...")
// let even = 0
// if(item < box){
//     for (let i = item + 1; i < box; i++) {
//         if(i % 2 === 0){
//             even +=+i
//         }
//  }
// }else{
//     alert('Siz 2-sondan katta son kiridingiz')
// }
// console.log(even);


// 4-masala 


// function item(params){
//     let obj1 = {num1: 1, num2: 2, num3: 3, num4: 4}
//     let obj2 = {num5: 5, num6: 6, num7: 7, num8: 8}
//     let obj_new = Object.assign(obj1,obj2)
//     let box_arr = []
//     for(let value in obj_new){
//         box_arr.push(obj_new[value])
//     }
//     let max_num = Math.max(...box_arr)
//     let min_num = Math.min(...box_arr)
//     console.log(Math.abs(max_num - params) + "ga valuelarning kattasidan function parametiri kichik");
//     console.log(Math.abs(min_num - params) + "ga valuelarning kattasidan function parametiri katta");

// }
// item(9)



// 5-masala


// function value (params){
//     let item = []
//     for(const value in params){
//         item.push(params[value])
//     }
//     console.log(item);
// }
// value({num1: 1, num2: 2, num3: 3, num4: 4})



// function key (params){
//     let item = []
//     for(const key in params){
//         item.push(key)
//     }
//     console.log(item);
// }
// key({num1: 1, num2: 2, num3: 3, num4: 4})


// // 6-masala 

// function item (){
//     let arr = [1,0,3,8,3,8,1]
//     let new_arr = [1,0,3,8]
//     for(let i = 0; i < item.length; i++){
//         if(!new_arr.includes(arr[i])){
//             new_arr.push(arr[i])
//         }
//     }
//     let min = Math.min(...new_arr)
//     let max = Math.max(...new_arr)
//     let min_index = new_arr.indexOf(min)
//     let max_index = new_arr.indexOf(max)
//     new_arr[max_index] = min
//     new_arr[min_index] = max
//     console.log(new_arr);

// }
// item()



// 7-masala 

// function getInitailOdds(n){
//     let arr = []
//     for(let i = 0; i < n*2; i++){
//         if(i % 2 === 0){

//         }else{
//             arr.push(i)
//         }
//         console.log(arr);
//     }
// }
// getInitailOdds(20)


// 8-masala 

// let item = [2,7,11,15]
// for (let i = 0; i < item.length; i++) {
//     for (let j = i+1; j < item.length; j++) {
//         if (item[i]+item[j]=== 9) {
//             console.log(item[i],item[j]);
//         }
//     }
// }


// 9-masala    


// let arr = [1, 3, 2, 2, 3 ]
// let new_arr = []
// for(let i = 0; i < arr.length; i++){
//     if(!new_arr.includes(arr[i]))
//     new_arr.push(arr[i])
// }
// console.log(new_arr);



// // 10-masala

// function getLevel(n) {
//         let pow_result = Math.pow(2,n)
//         let item = []
//         for(let i = 0;i <= pow_result; i++){
//             for(let j = 1; j <= n; j++){
//                 if(Math.pow(2,j)==i){
//                     item.push(i)
//                 }
    
//             }
//         }
//         console.log(item);
//     }
//     getLevel(5)
