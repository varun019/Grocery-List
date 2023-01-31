let items = [];
let toBuy = [];
let alreadybought = [];
const tb = document.getElementById("tobuy");
const ab = document.getElementById("alreadybought");
const quant = document.querySelector("ul#quant");
const qty = document.getElementById("qty");
let input = document.getElementById("input");
const btn = document.getElementById("submit");
let text = document.getElementById("formerror0");
let text1 = document.getElementById("formerror1");

const mirror = () => {
    // console.log("Mirror Called");
    tb.innerText = "";
    ab.innerText = "";
    // console.log(items,"Main");
    toBuy = [];
    alreadybought = [];
    items.forEach((a,i) => {
        if(a.checked){
            alreadybought.push(a)
            console.log("alreadybought ==========",alreadybought);
            ab.innerHTML = "";
            alreadybought.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${item.name} ${item.quantity}<input type='checkbox'name='checkbox' checked onChange='changeCheck(${item.id})'/>`;
                ab.append(listItem);
            })
        } else {
            
            toBuy.push(a)
            console.log("toBuy ============",toBuy);
            tb.innerHTML = "";
            toBuy.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `${item.name} ${(item.quantity)}<input type='checkbox'name='checkbox' onChange='changeCheck(${item.id})'/>`;
                
                tb.append(listItem);
                
            })
        }
    })
    

}   
mirror()

const changeCheck = (id) => {
    console.log(id)
    const currentIndex = items.findIndex(item => item.id === id)
    console.log(items[currentIndex]);
    if(items[currentIndex].checked){
        items[currentIndex].checked = false
        const index = alreadybought.findIndex(item => item.id === id)
        alreadybought.splice(index,1)
    }  else {
        items[currentIndex].checked = true
        const index = toBuy.findIndex(item => item.id === id)
        toBuy.splice(index,1)
    }
    console.log(items[currentIndex]);
    mirror()
}


btn.addEventListener('click', () => {
    if(input.value !== ""){
        const list = {id: items.length, name: input.value, quantity: qty.value, checked: false};
        items.push(list)
        input.value = ""
        qty.value = ""
        mirror()
    }
})

