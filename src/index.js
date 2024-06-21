import createItem from "./service/item.js";
import * as cartService from "./service/cart.js"
const myCart=[];
const myWhishlist=[];
console.log("WeLcome to the your shopee cart!");
const item1= await createItem("hotwheels ferrari",20.90,2);
const item2= await createItem("hotwheels lamborghini",20.80,3);
await cartService.addItem(myCart,item1);
await cartService.addItem(myCart,item2);

await cartService.removeItem(myCart,item2)

await cartService.displaycard(myCart);
//deletar item
// await cartService.deleteItem(myCart,item2.name);
// await cartService.deleteItem(myCart,item1.name);
console.log("shopee cart total is:") 
await cartService.calculeteTotal(myCart)