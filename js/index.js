let response_one = document.getElementsByClassName("response")[0]
let response_two = document.getElementsByClassName("response")[1]
let response_three = document.getElementsByClassName("response")[2]
let response_four = document.getElementsByClassName("response")[3]
let response_five = document.getElementsByClassName("response")[4]

console.log(response_one)

let open = 0 ;

function abrir(){

}

document.addEventListener("click" , (e)=>{
    if(e.target.matches(".q_one")){
        if(open==0){
            response_one.style.display = "block"
            open =+ 1
        }else{
            response_one.style.display = "none"
            open = open - 1
        }
    }
    if(e.target.matches(".q_two")){
        if(open==0){
            response_two.style.display = "block"
            open =+ 1
        }else{
            response_two.style.display = "none"
            open = open - 1
        }
    }
    if(e.target.matches(".q_three")){
        if(open==0){
            response_three.style.display = "block"
            open =+ 1
        }else{
            response_three.style.display = "none"
            open = open - 1
        }
    }
    if(e.target.matches(".q_four")){
        if(open==0){
            response_four.style.display = "block"
            open =+ 1
        }else{
            response_four.style.display = "none"
            open = open - 1
        }
    }
    if(e.target.matches(".q_five")){
        if(open==0){
            response_five.style.display = "block"
            open =+ 1
        }else{
            response_five.style.display = "none"
            open = open - 1
        }
    }
})