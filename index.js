// var items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent='hello 2'
// items[1].style.fontWeight='bold'
// items[2].style.backgroundColor='green'
// //gives error
// //items.style.backgroundColor='#f4f4f4'
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold'
// }
// var li=document.getElementsByClassName('list-group-item')
// console.log(li)
// console.log(li[1])
// li[1].textContent='hello 2'
// li[1].style.fontWeight='bold'
// li[1].style.backgroundColor='green'
// //gives error
// //li.style.backgroundColor='#f4f4f4'
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='red'
// }
var header =document.querySelector('#main-header')
header.style.borderBottom='solid 4px #ccc'
var input =document.querySelector('input')
input.value='hello world'
var submit =document.querySelector('input[type="submit"]')
submit.value="SEND"
var item=document.querySelector('list-group-item')
item.style.color='red'
var lastitem=document.querySelector('list-group-item:last-child')
lastitem.style.color='blue'
var title=document.querySelectorAll('.title')
console.log(title)

