let open_nav= document.getElementById("btn-open-nav");
let close_nav= document.getElementById('btn-close-nav');
let navElt= document.querySelector('.navbar');

console.log(navElt);

open_nav.addEventListener('click',(e)=>{
    navElt.style.left="0px";
})

close_nav.addEventListener('click',(e)=>{
    navElt.style.left= '-'+getComputedStyle(navElt).width;
})

document.querySelectorAll('.navbar ul li a').forEach(function(li){
   li.addEventListener('click',(e)=>{
       navElt.style.left='-'+getComputedStyle(navElt).width;
   })
})