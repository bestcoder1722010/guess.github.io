const numb = Math.floor(Math.random() * 100);
function check(){
    let input = document.getElementById("take").value;
    if(input == numb){
        document.getElementById("tell").innerHTML = "YAY! YOU FIND THE NUMBER";
    }
    else if(input>numb){
        document.getElementById("tell").innerHTML = "NO! YOUR NUMBER IS TOO HIGH";
        input.value = '';
    }
    else{
        document.getElementById("tell").innerHTML = "NO! YOUR NUMBER IS TOO SMALL";
        input.value = '';
    }
}