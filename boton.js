const btn = document.getElementById("btn-no");
/* Message */
const buttonOpen = document.getElementById('btn-yes');
const buttonClose = document.getElementById('close');
const modal = document.getElementById('modal');
const toggleActiveModal = () => modal.classList.toggle('active');
buttonClose.addEventListener('click', toggleActiveModal);
buttonOpen.addEventListener('click', toggleActiveModal);

btn.addEventListener("mouseover", cordenadas)

function cordenadas() {
    let cordenadasBtn = {
        x: aleatorio(0, 7) * 60,
        y: aleatorio(0, 10) * 40
    }
    console.log(cordenadasBtn);
    /* if (cordenadasBtn.y == 0){
        cordenadasBtn.y = cordenadasBtn.y + 16;
     }else if (cordenadasBtn.x == 0){
      cordenadasBtn.x = cordenadasBtn.x + 16;
     } */
    let pTop = cordenadasBtn.y + "px";
    let pLeft = cordenadasBtn.x + "px";
    btn.style.position = "absolute";
    btn.style.left = pLeft;
    btn.style.top = pTop;
}

btn.addEventListener("click", cordenadasCell)

function cordenadasCell() {
    let cordenadasBtn = {
        x: aleatorio(0, 7) * 20,
        y: aleatorio(0, 10) * 35
    }
    console.log(cordenadasBtn);
    /* if (cordenadasBtn.y == 0){
        cordenadasBtn.y = cordenadasBtn.y + 16;
     }else if (cordenadasBtn.x == 0){
      cordenadasBtn.x = cordenadasBtn.x + 16;
     } */
    let pTop = cordenadasBtn.y + "px";
    let pLeft = cordenadasBtn.x + "px";
    btn.style.position = "absolute";
    btn.style.left = pLeft;
    btn.style.top = pTop;
}

function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}