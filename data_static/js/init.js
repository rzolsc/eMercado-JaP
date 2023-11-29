const CATEGORIES_URL = "http://localhost:3000/cats/cat";
const PUBLISH_PRODUCT_URL = "http://localhost:3000/sell/publish";
const PRODUCTS_URL = `http://localhost:3000/cats_products/101`; //${CAT_ID}
const PRODUCT_INFO_URL = `http://localhost:3000/products/`; //${PROD_ID}
const PRODUCT_INFO_COMMENTS_URL = `http://localhost:3000/product_comments/`; //${PROD_ID}
const CART_INFO_URL = "http://localhost:3000/user_cart/25801";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}
 
let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}