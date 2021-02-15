// task2
function mean (ind, eng, mat, ipa){
    if(
        typeof ind != "undefined" ||
        typeof eng != "undefined" ||
        typeof mat != "undefined" ||
        typeof ipa != "undefined"
    ){
        if(
            typeof ind &&
            typeof eng &&
            typeof mat &&
            typeof ipa === "number"
        ){
            let rata2 = (ind + eng + mat + ipa) / 4
            if(rata2 >= 90){
            console.log("rata rata = " + rata2)
            console.log("Grade = A")
            }
            else if(rata2 >= 80){ 
            console.log("rata rata = " + rata2)
            console.log("Grade = B") 
            }
            else if(rata2 >= 70){
            console.log("rata rata = " + rata2)
            console.log("Grade = C")
            }
            else if(rata2 >= 60){
            console.log("rata rata = " + rata2)
            console.log("Grade = D")
            }
            else if(rata2 >= 0){
            console.log("rata rata = " + rata2)
            console.log("Grade = E")
            }
        }else{
            console.log("data harus berupa angka")
        }
        }else{
            console.log("data harus lengkap")
        }
}

mean(90, 71, 83, 85)