var items=document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[1].textContent='hello 2'
items[1].style.fontWeight='bold'
items[2].style.backgroundColor='green'
//gives error
//items.style.backgroundColor='#f4f4f4'
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold'
}