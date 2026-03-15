const viewBtns = document.querySelectorAll(".viewBtn");
const favBtns = document.querySelectorAll(".favBtn");

const popup = document.getElementById("popup");
const popupData = document.getElementById("popupData");
const close = document.getElementById("close");

const favorites = document.getElementById("favorites");
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

/* popup */

viewBtns.forEach(btn=>{
btn.onclick = function(){

const card = btn.parentElement;
const name = card.dataset.name;
const info = card.dataset.info;
const img = card.querySelector("img").src;

popupData.innerHTML = `
<h2>${name}</h2>
<img src="${img}" style="width:100%">
<p>${info}</p>
`;

popup.style.display="block";

}
});

close.onclick = ()=>{
popup.style.display="none";
}

/* sevimlilar */

favBtns.forEach(btn=>{
btn.onclick = function(){

const card = btn.parentElement.cloneNode(true);

card.querySelector(".viewBtn").remove();
card.querySelector(".favBtn").remove();

favorites.appendChild(card);

}
});

/* qidiruv */

search.addEventListener("keyup",function(){

const value = search.value.toLowerCase();

cards.forEach(card=>{

const name = card.dataset.name.toLowerCase();

if(name.includes(value)){
card.style.display="block"
}else{
card.style.display="none"
}

});

});