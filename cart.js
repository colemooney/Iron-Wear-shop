// console.log(document.querySelector("body > div.calculatePrices > button"))

// document.querySelector("body > div.calculatePrices > button").onclick = function(){
//   var unitPriceOne = document.querySelector("#product > ul > li:nth-child(1) > div:nth-child(2) > span");
//   var unitQuantityOne = document.querySelector("#product > ul > li:nth-child(1) > div:nth-child(3) > input[type=text]");
  
//   document.querySelector("#product > ul > li:nth-child(1) > div:nth-child(4) > span").innerHTML = "$" + unitPriceOne.innerHTML.slice(1) * unitQuantityOne.value
  
//   console.log(unitPriceOne.innerHTML.slice(1) * unitQuantityOne.value);
  
//   var unitPriceTwo = document.querySelector("#product > ul > li:nth-child(2) > div:nth-child(2) > span");
//   var unitQuantityTwo = document.querySelector("#product > ul > li:nth-child(2) > div:nth-child(3) > input[type=text]");
  
//   document.querySelector("#product > ul > li:nth-child(2) > div:nth-child(4) > span").innerHTML = "$" + unitPriceTwo.innerHTML.slice(1) * unitQuantityTwo.value
  
//   console.log(unitPriceTwo.innerHTML.slice(1) * unitQuantityTwo.value);
//   let totalPrice = unitPriceOne.innerHTML.slice(1) * unitQuantityOne.value + unitPriceTwo.innerHTML.slice(1) * unitQuantityTwo.value;
//   document.querySelector("body > div.total > h1 > span").innerHTML = totalPrice;
// }

// // document.querySelector("body > div.calculatePrices > button").onclick = function(){
// //   // document.querySelector("#product > ul > li:nth-child(1) > div:nth-child(4) > span")
// //   // document.querySelector("#product > ul > li:nth-child(2) > div:nth-child(4) > span")
// //   document.querySelector("body > div.total > h1 > span").innerHTML


// // }







// function deleteItem(e){
// let remove = document.getElementsByClassName("btn-delete");
// for (let d= 0;d<remove.length; d++){
//   if(d == 1){
//     //document.querySelector("#product > ul > li:nth-child(1)").innerHTML("");
//     console.log("works");
//   } else if (d == 2){
//     document.querySelector("#product > ul > li:nth-child(2)").innerHTML("");
//   } else;
  
 
// }

//   console.log("works");



// }

// function getPriceByProduct(itemNode){

// }

// function updatePriceByProduct(productPrice, index){

// }

// function getTotalPrice() {
//   // let rows = document.getElementsByClassName("product-group");
//   // for(let r=0; r< rows.length; r++){
//   //     let price = document.querySelector(`#product > ul > li:nth-child(${r+1}) > div:nth-child(2) > span`);
//   //     let quantity = document.querySelector(`#product > ul > li:nth-child(${r+1}) > div:nth-child(3) > input[type=text]`);


//   //     console.log(price*quantity.value);
//   //   }

// }

// function createQuantityInput(){

// }

// function createDeleteButton(){

// }

// function createQuantityNode(){

// }

// function createItemNode(dataType, itemData){

// }

// function createNewItemRow(itemName, itemUnitPrice){

// }

// function createNewItem(){

// }
// // let button = document.getElementById("body > div.calculatePrices > button");
// // button.onclick = function(){
// //   //document.querySelector("#product > div:nth-child(3) > input[type=text]")
// //   return console.log("works");
// // }

// //document.querySelector("body > div.calculatePrices > button").onmouseover. = "red"
// // = function(e){

// // }

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   calculatePriceButton.onclick = getTotalPrice;
//   createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };
//  function runThrough(){
//     for (i=1; i<4; i++){
//         const item = document.querySelector(`body > div > div.rick > div:nth-child(${i})`).onclick
//         return ;
//     }
//  }

// function addToCart(){
//     function runThrough(){
//         for (i=1; i<4; i++){
//             const item = document.querySelector(`body > div > div.rick > div:nth-child(${i})`).onclick
//         }
// }
// }

for (i=1; i<5; i++){
    document.querySelector(`body > div > div.rick > div:nth-child(${i})`).onclick = function(e){
        console.log(e.target)
    }
}
for (i=1; i<5; i++){
    document.querySelector(`body > div > div.raf > div:nth-child(${i})`).onclick = function(e){
        console.log(e.target)
    }
}
for (i=1; i<5; i++){
    document.querySelector(`body > div > div.junya > div:nth-child(${i})`).onclick = function(e){
        console.log(e.target)
    }
}
for (i=1; i<5; i++){
    document.querySelector(`body > div > div.visvim > div:nth-child(${i})`).onclick = function(e){
        console.log(e.target)
    }
}
for (i=1; i<5; i++){
    document.querySelector(`body > div > div.cdg > div:nth-child(${i})`).onclick = function(e){
        console.log(e.target)
    }
}
for (i=1; i<5; i++){
    document.querySelector(`body > div > div.ysl > div:nth-child(${i})`).onclick = function(e){
        console.log(e.target)
    }
}
///file:///Users/colemooney/Desktop/IHweek1/project/cart.html?name=pants&size=small