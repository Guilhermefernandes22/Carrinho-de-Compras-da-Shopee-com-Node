// criar item com subtotal certo
async function createItem(name, prace,quantity){
    return {name, prace, quantity, subtotal:()=>quantity*prace}
}
export default createItem;