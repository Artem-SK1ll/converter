function convert() {
    let usa = parseFloat(document.getElementsByName("usd")[0].value);
    let choice = document.getElementsByName("choice")[0].value;
    let result = document.getElementsByName("result")[0];

    if (choice == "rub") {
        let total = usa * 125;
        result.value=`${total} рублей`;       
        }
    else if(choice == "sum") {
        let total = usa * 13000
        result.value=`${total} сумов`;      
    }   
    else if(choice == "eu") {
    let total = usa * 1.25
    result.value =`${total} евро`;   
    }
}

function codeCountry(){
    const country = document.getElementsByName("country")[0].value;
    let phone = document.getElementsByName("phone")[0]


    if (country == "none") {
        phone.value = "Выберите страну";
    } else if (country == "uz") {
        phone.value = "+998";
    } else if (country == "ru") {
        phone.value = "+7";
    } else if (country == "usa") {
        phone.value = "+1";
    }

function activeButton(){
    let check = document.getElementsByName("check")[0].checked;
    let activeBtn = document.getElementsByName("btn")[0];
    if (check == true){
        activeBtn.disabed = false;
    } else {
        activeBtn.disabled = true;
    }
}

function corseForm(){
    
    let course = document.querySelector("#course").value
    let totalPrice= document.getElementById("totalPrice")
    let Frontend_PRICE = 14000000;
    let Python_PRICE = 12000000;
    let DATA_PRICE = 16000000;
    let price 
    if (course == "none" ){
        price=0;
        
    }else if (course == "Frontend") {
        price = Frontend_PRICE;    
    }else if (course =="Python") {
        price = Python_PRICE    
    }else if (course == "Data") {
        price = DATA_PRICE  
    }
    totalPrice.value = price
    
}