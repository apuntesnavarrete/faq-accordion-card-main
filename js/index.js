let response_one = document.getElementsByClassName("response")[0]
let response_two = document.getElementsByClassName("response")[1]
let response_three = document.getElementsByClassName("response")[2]
let response_four = document.getElementsByClassName("response")[3]
let response_five = document.getElementsByClassName("response")[4]

let question_one = document.getElementsByClassName("question")[0]
let question_two = document.getElementsByClassName("question")[1]
let question_thre = document.getElementsByClassName("question")[2]
let question_four = document.getElementsByClassName("question")[3]
let question_five = document.getElementsByClassName("question")[4]

let question_img_one = document.getElementsByClassName("question_img")[0]
let question_img_two = document.getElementsByClassName("question_img")[1]
let question_img_thre = document.getElementsByClassName("question_img")[2]
let question_img_four = document.getElementsByClassName("question_img")[3]
let question_img_five = document.getElementsByClassName("question_img")[4]

console.log(response_one)

let open = 0 ;

function abrir(){

}

document.addEventListener("click" , (e)=>{
    if(e.target.matches(".q_one")){
        if(open==0){
            question_one.style.fontWeight = "600"
            response_one.style.display = "block"
            question_img_one.style.transform = "rotate(180deg)"
            open =+ 1
        }else{
            response_one.style.display = "none"
            question_one.style.fontWeight = "500"
            question_img_one.style.transform = "rotate(0deg)"


            open = open - 1
        }
    }
    if(e.target.matches(".q_two")){
        if(open==0){
            response_two.style.display = "block"
            question_two.style.fontWeight = "600"
            question_img_two.style.transform = "rotate(180deg)"


            open =+ 1
        }else{
            response_two.style.display = "none"
            question_two.style.fontWeight = "500"
            question_img_two.style.transform = "rotate(0deg)"


            open = open - 1
        }
    }
    if(e.target.matches(".q_three")){
        if(open==0){
            response_three.style.display = "block"
            question_thre.style.fontWeight = "600"
            question_img_thre.style.transform = "rotate(180deg)"


            open =+ 1
        }else{
            response_three.style.display = "none"
            question_thre.style.fontWeight = "500"
            question_img_thre.style.transform = "rotate(0deg)"


            open = open - 1
        }
    }
    if(e.target.matches(".q_four")){
        if(open==0){
            response_four.style.display = "block"
            question_four.style.fontWeight = "600"
            question_img_four.style.transform = "rotate(180deg)"


            open =+ 1

        }else{
            response_four.style.display = "none"
            question_four.style.fontWeight = "500"
            question_img_four.style.transform = "rotate(0deg)"


            open = open - 1
        }
    }
    if(e.target.matches(".q_five")){
        if(open==0){
            response_five.style.display = "block"
            question_five.style.fontWeight = "600"
            question_img_five.style.transform = "rotate(180deg)"


            open =+ 1
        }else{
            response_five.style.display = "none"
            question_five.style.fontWeight = "500"
            question_img_five.style.transform = "rotate(0deg)"


            open = open - 1
        }
    }
})