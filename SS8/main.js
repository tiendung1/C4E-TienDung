//Bai 1
console.log("Tạo 1 máy tính cơ bản với các chức năng + ; - ; *; / ")
let operation = prompt("Nhập phép tính");
let number1 = Number(prompt("Nhập số thứ nhất"));
let number2 = Number(prompt("Nhập số thứ hai"));
let result;
switch (operation){
case "+": result = number1 + number2 ;
console.log(number1 + " " + "+" + " " + number2 + " = " + result)
break;
case "-": result = number1 - number2 
console.log(number1 + " " + "-" + " " + number2 + " = " + result)
break;
case "*": result = number1 * number2 
console.log(number1 + " " + "*" + " " + number2 + " = " + result)
break;
case "/": result = number1 / number2 
console.log(number1 + " " + "/" + " " + number2 + " = " + result)
break;
default: console.log("Phép tính không hợp lệ")
break;
}
//Bai 2
console.log("Kiểm tra số nguyên tố")
let n = Number(prompt("Nhập số muốn kiểm tra"))
function prime_number_check(n){
    let flag = true;
    if (n<2){
        flag = false;
    }
    else{
        for(i=2;i<n-1;i++)
        {
            if (n%i == 0){
                flag = false;
                break;
            }
        }
    }
    if (flag == true){
        console.log(n + " là số nguyên tố")
    }else{
        console.log(n + " không phải số nguyên tố")
    }
}
prime_number_check(n)