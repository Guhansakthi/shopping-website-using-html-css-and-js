let products = document.getElementById("products");
console.log(products);
let search = document.getElementById("search-input");
console.log(search)
let productList = products.querySelectorAll("div");

search.addEventListener("keyup", function(){
    let enteredValue= event.target.value.toUpperCase()
    productList.forEach(function(product) {
        // Get the text content of the product item
        let productText = product.textContent.toUpperCase();
        
        // If the entered search term is found in the product text, show the product; otherwise, hide it
        if (productText.indexOf(enteredValue) > -1) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
})