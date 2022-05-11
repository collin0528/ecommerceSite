// display product in checkout page
window.addEventListener('load', function() {

    
    this.setTimeout(run(), 4000);

    this.setTimeout(callOnly(), 2000);

    this.setTimeout(cartClear(), 1000);
    
})

// show all the product in the page
function run() {

    let checkProduct = this.localStorage.getItem("product");

    checkProduct = JSON.parse(checkProduct);

    if(checkProduct != null) {

        

        let i = 0; 

        while(i < checkProduct.length) {

            let imgOnly = checkProduct[i].productImg;

            let nameOnly = checkProduct[i].productName;

            let sizeOnly = checkProduct[i].productSize;

            let priceOnly = checkProduct[i].productPrice;

            createOnly(imgOnly, nameOnly, sizeOnly, priceOnly, i);


            i++;
        }


    }
}


let tBody = document.querySelector('#att');

function createOnly(imgOnly, nameOnly, sizeOnly, priceOnly, i) {



    let tr = document.createElement('tr');

    let td1 = document.createElement('td');

    let td2 = document.createElement('td');

    let td3 = document.createElement('td');

    let td4 = document.createElement('td');

    let img = document.createElement('img');

    let button = document.createElement('button');

    button.innerText = "Delete";

    button.style.marginTop = "36px";

    button.style.marginLeft = "20px";

    button.style.cursor = "grab";

    button.setAttribute("class", `click`)

    let inputHide = document.createElement('input');

    inputHide.type= "hidden";

    inputHide.value = i;

    inputHide.setAttribute("class", `myInput`)

    img.src = imgOnly;

    td2.innerText = nameOnly;

    td3.innerText = sizeOnly;

    td4.innerText = priceOnly;
    
    img.style.width = "90px";

    img.style.height = "90px";

    td1.appendChild(img);

    tr.appendChild(td1);

    tr.appendChild(td2);

    tr.appendChild(td3);

    tr.appendChild(td4);

    tr.appendChild(button);

    tr.appendChild(inputHide);

    tBody.appendChild(tr);

}


// delete an item or product


function callOnly() {

    
    let myArr = [];

    let removeArray = [];

    let generalBtn = document.getElementsByClassName('click');

    let ok = generalBtn.length;

    for(let i = 0; i < ok; i++) {

        document.getElementsByClassName('click')[i].addEventListener('click', function() {

            let inPut = document.getElementsByClassName('myInput')[i].value;
                
            myArr.push("ok");

            localStorage.setItem("clicked", JSON.stringify(myArr));
                
            let getProduct = localStorage.getItem("product");

            getProduct = JSON.parse(getProduct);

            let check = getProduct;

            localStorage.removeItem("product");

            if(check != null) {

                check.splice(inPut, 1);

                for(let i = 0; i < check.length; i++) {


                    if(check[i] != null) {

                        removeArray.push(check[i]);

                        localStorage.setItem("product", JSON.stringify(removeArray));

                        window.location.href = "checkout.html";

                    }

                }

            } else {

                window.location.href = "checkout.html";

            }

            if(check.length == 0) {

                window.location.href = "checkout.html";

            }


        })
    }

}


function cartClear() {

    let checkClick  = localStorage.getItem("clicked");

    checkClick = JSON.parse(checkClick)

    if(checkClick != null) {

        let cartNum = localStorage.getItem("cart");

        cartNum = JSON.parse(cartNum);

        let sumOnly = parseInt(cartNum) - parseInt(checkClick.length);

        localStorage.setItem('cart', JSON.stringify(sumOnly))

        localStorage.removeItem('clicked');

    }
    
}