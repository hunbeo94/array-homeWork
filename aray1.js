//bài 1: tính tổng trong màng
// let mang = [1, 2, 3];
// let sum = 0
//     for (let i = 0; i < mang.length; i++){
//         sum += mang[i];
//         // console.log(mang[i])
//     }
//  console.log(sum);

//bài2: Tìm số lớn nhất trong mảng
// + cách 1: sử dụng math object
// let array1 = [1, 2, 3, 4, 5];
// let max = Math.max(...array1);

// console.log(max);
// + cách 2:sử dụng logic bằng vòng lặp for
// let array = [1, 6, 3, 2, 5];
// let max = array[0];

// for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//     max = array[i];
//     }
    
// }
// console.log(max);

// bài 3: Tìm phần tử nhỏ nhất trong mảng 

// let arr = [10, 8, 3, 9, 1, 2]
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//     min = arr[i];
//     }
    
// }
// console.log(min);

// bài 4: Kiểm tra xem phần tử có tồn tại trong mảng hay không
// Cho mảng ban đầu, làm theo 2 cách:
// + Cách 1: Không sử dụng hàm có sẵn
// + Cách 2: Sử dụng hàm có sẵn
// Input: [1, 2, 3, 4, 5];
// Output: true/false

//+ Cách 1: Không sử dụng hàm có sẵn

// let arr= [1, 2, 3, 4, 5];
// let value = 6;
// let found = false; 
// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] === value) {
//         found = true;
//         break;
//      }
    
// } 
// console.log(found);

//+ Cách 2: SỬ dụng hamg có sẵn

// var array = [1, 2, 3, 4, 5];
// var value = 3;
// console.log (array.includes (value));

//Bài tập 5: Đảo ngược giá trị trong mảng
//Input: [1, 2, 3, 4, 5]
// Ouput: [5, 4, 3, 2, 1]

// let numbers = [1, 2, 3, 4, 5];
// let reversedNumbers = [...numbers].reverse();
// console.log(reversedNumbers); 
// console.log(numbers); 

// Bài tập 6: Lọc các phần tử chẵn trong mảng:
// Input: [1, 2, 3, 4, 5]
// Ouput: [2, 4]

// let arr = [1, 2, 3, 4, 5];
// let evenNumbers = [];
// for (let i = 0; i < arr.length; i++) {
    // if (arr[i] % 2 === 0 ) {
        // evenNumbers.push(arr[i]);
    // }
    // 
// }
// console.log(evenNumbers);

// Bài tập 7: Tìm số lần xuất hiện của một phần tử trong mảng
// + Cho mảng ban đầu và cho người dùng nhập 1 giá trị bất kỳ. Nếu có giá trị trong mảng thì sẽ báo số lần phần tử xuất hiện trong mảng
// Input: [1, 2, 3, 2, 4, 2, 5] => người dùng nhập 2
// Output: 3

// let arr = [1, 2, 3, 2, 4, 2, 5, 6];
// let inPut = prompt("Nhap gia tri can tim: ");
// inPut = Number(inPut)
//  let count = 0 ;
//  for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === inPut) {
//         count++;
//     }
    
//  }
// console.log("So lan xuat hien cua " + inPut + " trong mang la: " + count);

// Bài tập 8: Sắp xếp lại mảng theo giá trị tăng dần
// Input: [4, 2, 9, 5, 1]
// Output: [1, 2, 4, 5, 9]

let array = [4, 2, 9, 5, 1];
let length = array.length;
while (length > 0) {
  for (let i = 0; i < length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
    }
  }
  length--;
}
console.log(array);
