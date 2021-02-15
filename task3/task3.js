// task 3
function printSegiitiga(num){
    if(typeof num == "number"){
        let hasil = ""
        for(i = num; i >= 1 ; i--){
            for(y = 1; y <= i; y++){
            hasil += y;
            }
            console.log(hasil)
            hasil = ""
        }
        }else{
        console.log("inputan harus angka")
        }
    }