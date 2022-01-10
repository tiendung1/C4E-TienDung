//Bai 1
console.log("Viết function checkAge để kiểm tra tuổi nhập vào. Nếu tuổi lớn hơn 18 thì cho hẹn hò, không thì ở nhà ngủ")
/*
    let Age ;
    let InvalidAge = false;
    while (!InvalidAge){
        Age = Number(prompt("Nhập tuổi của bạn"));
        InvalidAge = Number.isInteger(Age);
        if (InvalidAge){
        console.log("Số tuổi nhập không hợp lệ");
    }}
    checkAge(Age)
    function checkAge(Age){
        let result = true;
        
        if (Age < 18){
            result = false
            console.log("Phòng ngủ - đi thẳng rẽ trái")
        }
        else{
            console.log("Bạn có thể hẹn hò")
        }
    }*/
//Bai 2
console.log("Viết function tìm số nhỏ nhất trong 3 số nhập vào")
/*
let arr = []
let number
insertArr()
minarr()
function insertArr(){
for (i=0;i<=arr.length;i++){
    if (arr.length <= 2){
    number = Number(prompt("Nhập số vào mảng"))
    arr.push(number)
    }

else { 
    break;
}
}
console.log(arr)
}
function minarr(){
    let min = arr[0];
    let min_index = 0;
    for (let i = 1; i < arr.length; i++){
if (min>arr[i]) {
    min = arr[i];
    min_index = i;
}
    }
    console.log("min = " + min);
    console.log("min_index = " + min_index);
    }
*/
    //Bai 3
    console.log("Viết 1 mảng shop quần áo với ít nhất 3 loại quần áo");
    let ClothesShop = ["Vest","Shirt","Skirt"];
    let option = prompt("Nhập yêu cầu của bạn (read/create/update/delete)");
    switch (option){
        case("read"): 
        console.log(ClothesShop);
        break;
        case("create"):
        let insert = prompt("Nhập tên quần áo muốn thêm");
        ClothesShop.push(insert);
        console.log(ClothesShop);
        break;
        case("update"):
        let UpClothes_index = Number(prompt("Nhập vị trí quần áo muốn cập nhật"));
        ClothesShop[UpClothes_index] = prompt("Nhập tên quần áo muốn cập nhật");
        console.log(ClothesShop);
        break;
        case("delete"):
        let Del_Clothes = prompt("Nhập vị trí muốn xóa");
        delete ClothesShop[Del_Clothes];
        console.log(ClothesShop);
        break;
        case("0"):
        console.log("Chương trình kết thúc");
        default: 
        alert("Lệnh không hợp lệ")
        break;
    }
    