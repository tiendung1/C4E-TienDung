function fun1(){
    const i = Math.PI
    let r = Number(prompt("Nhập bán kính hình tròn"))
    let S = Math.pow(r,2) * i
    let C = 2*r*i
    console.log(i)
    alert("Chu vi hình tròn là: " + C + " ; Diện tích hình tròn là: " + S)
    }
    function fun2(){
        let fullname = prompt("Nhập họ và tên")
        let Upname = fullname.toUpperCase()
        console.log(fullname.length)
        console.log(Upname)
    }
    function fun3(){
        let a = document.getElementById("pass").value 
        let str = a.length
        if(str >= 8){
            console.log("Mật khẩu hợp lệ :" + a)
            alert("Mật khẩu hợp lệ")
        }
        else{
            alert("Mật khẩu không hợp lệ")
            console.log(a)
        }
    }
    function fun4(){
        let num1 = parseInt(prompt("Nhập tháng muốn tìm"))
        let month = Math.abs(num1)
        if(month <=3 && month<=12){
            console.log("Mùa Xuân")
        }
        else if(month>3 && month<=6 && month<=12){
            console.log("Mùa Hạ")
        }
        else if(month>6 && month<=9 && month<=12 ){
            console.log("Mùa Thu")
        }
        else if(month>9 && month<=12 ){
            console.log("Mùa Đông")
        }
        else {
            console.log("Không hợp lệ")
        }
    }
    function fun5(){
        let a = Number(prompt("Nhập chiều dài cạnh a"))
        let b = Number(prompt("Nhập chiều dài cạnh b"))
        let c = Number(prompt("Nhập chiều dài cạnh c"))
    if(a+b<=c || b+c <= a || a+c <= b){
        console.log("Đây không phải là hình tam giác")
    }
    else{
        console.log("Đây là hình tam giác")
    }
    }