const changeNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const changeBtn = document.querySelector('.changeBtn');
const bodyBcg = document.querySelector('body');
const change = document.querySelector('.change');

changeBtn.addEventListener('click',getChange);

function getChange(){
  let changeCol = '#';

  for(let i =0; i < 6; i++){
    let random = Math.floor(Math.random() * changeNumbers.length);
    changeCol += changeNumbers[random];
  }

  bodyBcg.style.backgroundColor = changeCol;
  change.innerHTML = changeCol;
}
