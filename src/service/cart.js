// adicionar uma item 
async function addItem(userCart, item){
userCart.push(item);
}

//deletar item
async function deleteItem(userCart, name){
const index = userCart.findIndex((item)=>item.name==name)
if(index!=-1){
userCart.splice(index,1)
}
}
//remover um item
async function removeItem(userCart, item){
const indexFound=userCart.findIndex((p)=>p.name==item.name)

if(indexFound==-1){
    console.log("item nao encontrado");
    return;
}

if(userCart[indexFound].quantity>1){
    userCart[indexFound].quantity-=1
}

if(userCart[indexFound].quantity==1){
    userCart.splice(indexFound,1)
}

}
//calcular o total
async function calculeteTotal(userCart){
const result= userCart.reduce((total,item)=>total+=item.subtotal(),0)
console.log(result)
}
async function displaycard(userCart){
console.log("shopee cart list");
userCart.forEach((item,index) => {
    console.log(`${index+1}. ${item.name} - R$ ${item.prace} | ${item.quantity} | subtotal= ${item.subtotal()}`)
});
}
export{
    addItem,deleteItem,removeItem,calculeteTotal,displaycard
};