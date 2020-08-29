const btn = document.getElementById("btn-no");


btn.addEventListener("mouseover",cordenadas)

function cordenadas(){
    let cordenadasBtn={
        x: aleatorio(0,7)*60,
       y: aleatorio(0,10)*40
       }
       console.log(cordenadasBtn);
       pTop = cordenadasBtn.y + "px";
       pLeft = cordenadasBtn.x + "px";
       btn.style.left=pLeft;
       btn.style.top=pTop;
    btn.style.backgroundColor="red";
}


function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random()*(maxi - min + 1))+min;
	return resultado;
}