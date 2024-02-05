

    let casa1 = document.getElementById('casa1');
    let casa2 = document.getElementById('casa2');
    let casa3 = document.getElementById('casa3');
    let casa4 = document.getElementById('casa4');
    let casa5 = document.getElementById('casa5');
    let casa6 = document.getElementById('casa6');
    let casa7 = document.getElementById('casa7');
    let casa8 = document.getElementById('casa8');
    let casa9 = document.getElementById('casa9');

    
    var textoVitoria = document.getElementsByTagName('p')[0];

    let placarX = document.getElementById("placarX");
    let placarO = document.getElementById("placarO");

    var h = 0;

    const xisOuBola = [];

    function clickBG(i){
    if((textoVitoria.innerHTML == '') && (i.style.backgroundImage == "")){

            if(h % 2 == 0){
                i.style.backgroundImage = "url('jogodavelha/x.jpg')";
                xisOuBola.splice(i, 0, "x");
                h++;
            } else {
                i.style.backgroundImage = "url('jogodavelha/o.jpg')";            
                xisOuBola.splice(i, 0, "o");
                h++;
            }
            vitoria();
        };
    };

    function vitoria (){
        var casaX = 'url("jogodavelha/x.jpg")';
        var casaO = 'url("jogodavelha/o.jpg")';


        if(
            (casaX===casa1.style.backgroundImage && casaX===casa2.style.backgroundImage && casaX===casa3.style.backgroundImage) || 
            (casaX===casa4.style.backgroundImage && casaX===casa5.style.backgroundImage && casaX===casa6.style.backgroundImage) || 
            (casaX===casa7.style.backgroundImage && casaX===casa8.style.backgroundImage && casaX===casa9.style.backgroundImage) ||
            (casaX===casa1.style.backgroundImage && casaX===casa4.style.backgroundImage && casaX===casa7.style.backgroundImage) ||
            (casaX===casa2.style.backgroundImage && casaX===casa5.style.backgroundImage && casaX===casa8.style.backgroundImage) ||
            (casaX===casa3.style.backgroundImage && casaX===casa6.style.backgroundImage && casaX===casa9.style.backgroundImage) ||
            (casaX===casa1.style.backgroundImage && casaX===casa5.style.backgroundImage && casaX===casa9.style.backgroundImage) ||
            (casaX===casa3.style.backgroundImage && casaX===casa5.style.backgroundImage && casaX===casa7.style.backgroundImage))       
                {
                   textoVitoria.innerHTML = "vitoria do X"; 
                   h--;
                   vitoriaAe();
                   contadorDeVitoria();
                   trofeu();
                                                                }
        else if(
            (casaO===casa1.style.backgroundImage && casaO===casa2.style.backgroundImage && casaO===casa3.style.backgroundImage) ||
            (casaO===casa4.style.backgroundImage && casaO===casa5.style.backgroundImage && casaO===casa6.style.backgroundImage) ||
            (casaO===casa7.style.backgroundImage && casaO===casa8.style.backgroundImage && casaO===casa9.style.backgroundImage) ||
            (casaO===casa1.style.backgroundImage && casaO===casa4.style.backgroundImage && casaO===casa7.style.backgroundImage) ||
            (casaO===casa2.style.backgroundImage && casaO===casa5.style.backgroundImage && casaO===casa8.style.backgroundImage) ||
            (casaO===casa3.style.backgroundImage && casaO===casa6.style.backgroundImage && casaO===casa9.style.backgroundImage) ||
            (casaO===casa1.style.backgroundImage && casaO===casa5.style.backgroundImage && casaO===casa9.style.backgroundImage) || 
            (casaO===casa3.style.backgroundImage && casaO===casa5.style.backgroundImage && casaO===casa7.style.backgroundImage))
                {
                    textoVitoria.innerHTML = "vitoria do O"; 
                    h--;
                    vitoriaAe();
                    contadorDeVitoria();
                    trofeu();
                                                                }   
        else    {
            verificaEmpate();
        }
    };

    function verificaEmpate(){
        if(xisOuBola.length == 9){
            textoVitoria.innerHTML = "EITAAA, deu empate";

            setTimeout(function(){
                let divs = document.querySelectorAll('.jogoDaVelha');

                for(i=0; i<9; i++){
                    divs[i].style.backgroundImage = '';
                    textoVitoria.innerHTML = '';
					xisOuBola.splice(0);
                }                                
   
            }, 2000);
        }
    }

    function vitoriaAe() {
        setTimeout(function(){
                let divs = document.querySelectorAll('.jogoDaVelha');

                for(i=0; i<divs.length; i++){
                    divs[i].style.backgroundImage = '';
                    textoVitoria.innerHTML = '';
                    xisOuBola.splice(0);
                }                                
   
            }, 2000)
        }

        function contadorDeVitoria() {
            if(textoVitoria.innerHTML == "vitoria do X"){
                let placarXX = parseInt(placarX.innerHTML);
                placarXX = placarXX + 1;
                placarX.innerText = placarXX;
            } else {
                let placarOO = parseInt(placarO.innerHTML);
                placarOO = placarOO + 1;
                placarO.innerText = placarOO;
            }
        }

        function trofeu(){
            let trofeuX = document.getElementById("trofeu");

            if(placarO.innerHTML == placarX.innerHTML){
                if(trofeuX.classList.value == 'trofeu esquerda'){
                trofeuX.classList.add("esquerdaRe");
                    }
                if(trofeuX.classList.value == 'trofeu direita'){
                trofeuX.classList.add("direitaRe");
                    }
                    
                setTimeout(function(){
                trofeuX.classList.remove("esquerda");
                trofeuX.classList.remove("direita");
                trofeuX.classList.remove("esquerdaRe");
                trofeuX.classList.remove("direitaRe");
                },2000);
            } else {

            if(placarX.innerHTML > placarO.innerHTML){
                trofeuX.classList.add("esquerda");
            } else {
                trofeuX.classList.add("direita");
                }
            }
        }