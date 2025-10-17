// Rotates a set of attractive sentences for the project teaser.
(function(){
const container = document.querySelector('.sentences-list');
const target = document.querySelector('.dynamic-sentence');
if(!container || !target) return;


const lines = Array.from(container.querySelectorAll('span')).map(s=>s.textContent.trim());
let idx = 0;


function show(i){
target.classList.add('fade');
setTimeout(()=>{
target.textContent = lines[i];
target.classList.remove('fade');
}, 260);
}


// initial
show(0);


setInterval(()=>{
idx = (idx + 1) % lines.length;
show(idx);
}, 3200);
})();