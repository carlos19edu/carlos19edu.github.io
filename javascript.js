
window.onload = initPage;

function initPage ()
{
	 document.getElementById("player").addEventListener('click',escolher,true);

}



function escolher(el)
{
	var escolha = document.getElementById("escPlayer");
	escolha.src =el.target.src;
	escolha.dataset.tipo = el.target.dataset.tipo;

	jogar();


}

function jogar()
{  
    var resultado = "";
    var escolha = document.getElementById("escPlayer");
    
     var radomComp  =Math.floor(Math.random() * 3) + 1;
     

   randomimg(radomComp);

     var player  = parseInt(escolha.dataset.tipo);

       var pontosPlayer = document.getElementById("pP");
       var pontosComp = document.getElementById("pC");
	
    if(player ==  radomComp)
	{
      resultado = "Empate";
	}
	else
	{

	if(( player == 2 && radomComp == 1 ) || (player == 1 && radomComp == 3 )|| (player == 3 && radomComp == 2 ))
	{
       resultado = "Venceu";
       pontosPlayer.innerHTML = parseInt(pontosPlayer.innerHTML) + 1 ;
	}
	else
	{
	  resultado = "Perdeu";
	  pontosComp.innerHTML = parseInt(pontosComp.innerHTML) + 1 ;

	}
    }
    
	
      document.getElementById("resultado").innerHTML  = resultado ;


}


function randomimg(randnum)
{
	var childDivs = document.getElementById('com').getElementsByTagName('img');

for( i=0; i< childDivs.length; i++ )
{
	 if (parseInt( childDivs[i].dataset.tipo) == randnum )
	 {
       document.getElementById("escComp").src =childDivs[i].src ;
	 }
}
	
}

// function animateImg()
// {
// 	var childDivs = document.getElementById('com').getElementsByTagName('img');

// 	var cont = childDivs.length;
	
	
// 		var intervalo = setInterval(setImage(childDivs[cont - 1].src),1000);
	
	
	
// 	function setImage(cominhoimg)
// 	{
// 		if(cont >= 0)
// 		{
// 			cont --;
// 			document.getElementById("escComp").src =cominhoimg ;
// 		}else
// 		{
// 			clearInterval(intervalo);
// 		}

// 	}
// }



