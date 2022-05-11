
function store(){

    let firstname = document.getElementById('for1').value;
    let surname = document.getElementById('for2').value;
    let mail = document.getElementById('for3').value;
    let password = document.getElementById('for4').value;
    let mobile = document.getElementById('for5').value;
    

        let myObj= {

            "firstname" : firstname,
            "surname" : surname,
            "mail" : mail,
            "password" : password,
            "mobile" : mobile
        }


        let getUser = getUserDetails();

        getUser.push(myObj);

        getUser = JSON.stringify(getUser);
        localStorage.setItem("users", getUser);
        alert("Registration Successful");

        location.reload();
    }



    function getUserDetails(){

        let storedUser = localStorage.getItem("users");
        if (storedUser == null || storedUser == undefined) {
                return [];

        }else{
            storedUser = JSON.parse(storedUser);
            return storedUser;

        }
    }


    
function check(){

    let getUserAll = localStorage.getItem('users');
    getUserAll = JSON.parse(getUserAll);

    if(getUserAll == null) {

        alert("You are not a registered user");


    } else {


        let tracker = [];

        for (i = 0; i < getUserAll.length; i++){

            let storedEmail = getUserAll[i].mail;
            let storedPw = getUserAll[i].password;

            

            let userPass = document.getElementById('loginfor2');
            let userEmail = document.getElementById('loginfor3');

            if(userEmail.value == storedEmail && userPass.value == storedPw){

                alert('login successfully');


                tracker.push(userEmail);

                break;

                
                
            } 


        }

        if (tracker.length > 0) {
            
            window.location.href = "shopItem.html";

        }
    }

}






















window.addEventListener("load",function(){
    let cartDisplay=document.querySelector("#cartdisplay");
    valuecart=selectedCart();

    if (valueCart.length == 0){
        cartDisplay.innerHTML = "0";
        
    }else{
       cartDisplay.innerHTML = `${valueCart.length}`;
    }

});


// console.log(product);

let generalBtn = document.getElementsByClassName('addCart');

let ok = generalBtn.length;

let sum = [];

for( i = 0; i < ok; i++) {

    document.getElementsByClassName('addCart')[i].addEventListener('click', function() {

        // let cart = document.getElementById('cartDisplay').innerHTML;
        let test = document.getElementsByClassName('addCart')[5];

        console.log(test);
    })
}


// console.log(ok.childNodes[1]);



// generalBtn.forEach( (addCart) => {

//     addCart.addEventListener("click",function(){


//         let dad = addCart.parentNode;
//         // let productName=dad.childNodes[].innerHTML;
//         // let productPrice=dad.childNodes[].innerHTML;
//         // let productsize=dad.childNodes[].innerHTML;
//         // let plasma=dad.childNodes[].src;

        
//     })
    
// });

// let btn = document.getElementsByClassName("addCart")[0];
//                     btn.addEventListener("click",function () {
//                         //  alert("welcome");


//                      let productName=document.querySelector("#productName").value;
//                      let productPrice=document.querySelector("#productPrice").value;
//                      let productsize=document.querySelector("#productPrice").value;
                  
                     
//                      let myCartObjt={
//                         "productName" : productName,
//                         "productPrice" : productPrice,
//                          "productPrice" : productsize
//                      }
//                      valuecart=selectedCart();
//                      valuecart.push(myCartObjt);
//                         valuecart=JSON.stringify(valuecart);
//                      localStorage.setItem("cartKey",valuecart);
//                           location.reload();
                    
                        
//                     })
//                     function selectedCart() {
                            
//                         let setCartKey= localStorage.getItem("cartKey");
//                             if (setCartKey == null || setCartKey == undefined) {
//                                 return[];
                                
//                             }else{
//                                 setCartKey=JSON.parse(setCartKey);
//                                 return selectedCart;

//                             }
                        
//                     }
           