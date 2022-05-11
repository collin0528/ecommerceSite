
function store(){

    let firstname = document.getElementById('for1').value;
    let surname = document.getElementById('for2').value;
    let mail = document.getElementById('for3').value;
    let password = document.getElementById('for4').value;
    let mobile = document.getElementById('for5').value;
    

        let myObj= {
            id : new Date().getTime(),
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




// cart and storing of product to the local storage
// start //
window.addEventListener("load",function(){

    let checkCart  = this.localStorage.getItem("cart");

    checkCart = JSON.parse(checkCart);

    let checkProduct = this.localStorage.getItem("product")

    checkProduct = JSON.parse(checkProduct);

    if(checkCart != null && checkProduct != null) {

        let cartDisplay = document.querySelector("#cartDisplay");

        cartDisplay.innerHTML = checkCart;

        for(let i = 0; i < checkProduct.length; i++) {

            product.push(checkProduct[i]);

        }

    }


});


let product = [];

generalBtn = document.getElementsByClassName('addCart');

let ok = generalBtn.length;

for(let i = 0; i < ok; i++) {

    document.getElementsByClassName('addCart')[i].addEventListener('click', function() {

        let cart = document.getElementById('cartDisplay');

        if(cart.innerHTML  >= 0) {

            let dad = document.getElementsByClassName('addCart')[i].parentNode;

            let img = dad.childNodes[1].src;

            console.log(img);

            let child1 = dad.childNodes[3].innerHTML; //product name

            let clear1 = child1.substring(0, child1.indexOf("<"));

            let child2 = dad.childNodes[5].innerHTML; //product size

            let clear2 = child2.substring(child2.indexOf("e") + 2);

            let child3 = dad.childNodes[7].innerHTML; //product price

            let clear3 = child3.substring(child3.indexOf("<") + 3);
            let clearAgain3 = clear3.substring(0, clear3.indexOf("<"));
            

            console.log(clear1);
            console.log(clear2);
            console.log(clearAgain3);

            let data = {
                productName: clear1.trim(),
                productSize: clear2.trim(),
                productPrice: clearAgain3.trim(),
                productImg: img.trim()
            }

            product.push(data);

            localStorage.setItem("product", JSON.stringify(product));

            sum  = parseInt(cart.innerHTML) + 1;

            cart.innerText = sum;

            localStorage.setItem("cart", JSON.stringify(sum));
            
        }
    })
}

let showBtn=document.querySelector(".showBtn");
    showBtn.addEventListener("click",function() {
        let chatform=document.getElementsByClassName("chatform")[0];
        let popmsge=document.getElementsByClassName("popmsge")[0];
        chatform.style.display ="block";
        showBtn.style.display ="none";
        popmsge.style.display ="block";
        
    })
let exitbtn=document.querySelector(".exitbtn");
    exitbtn.addEventListener("click",function() {
        let chatform=document.getElementsByClassName("chatform")[0];
        chatform.style.display ="none";
        
    })





    (function(){
   

        // refactor to get rid of DRY code
        const buttons = document.querySelectorAll('.btn')
        const storeItems = document.querySelectorAll('.store-item')
    
        buttons.forEach((button)=> {
            button.addEventListener('click', (e) => {
                e.preventDefault()
                const filter = e.target.dataset.filter
                
                storeItems.forEach((item)=> {
                    if (filter === 'all'){
                        item.style.display = 'block'
                    } else {
                        if (item.classList.contains(filter)){
                            item.style.display = 'block'
                        } else {
                            item.style.display = 'none'
                        }
                    }
                })
            })
        })
    
    })();
    
    //wire up filter search box
    (function(){
    
        const searchBox = document.querySelector('#search-item')
        const storeItems = document.querySelectorAll('.store-item')
    
        searchBox.addEventListener('keyup', (e) => {
        
            const searchFilter = e.target.value.toLowerCase().trim()
            //display only items that contain filter input
    
            storeItems.forEach((item) => {
                if (item.textContent.includes(searchFilter)){
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        })
    
    })();



