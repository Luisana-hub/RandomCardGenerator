function devuelveNumero(){
    let numero = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    let positionNumero = (Math.floor(Math.random() * numero.length + 0));
    
    return numero[positionNumero];
}

function devuelvePinta(){
    let pinta = ['♦','♥','♠','♣'];
    let positionPinta = (Math.floor(Math.random() * pinta.length + 0));

    return pinta[positionPinta];
}
console.log(devuelveNumero());
console.log(devuelvePinta());

    document.getElementById("pintaizquierda").innerHTML = devuelvePinta();
    document.getElementById("numero").innerHTML = devuelveNumero();
    document.getElementById("pintaderecha").innerHTML = devuelvePinta();

//if(pinta[positionPinta]='♦' || pinta[positionPinta]='♥'){
    //document.getElementById("pintaizquierda").innerHTML = devuelvePinta();
    //document.getElementById("pintaizquierda").style.color = "magenta";
    //document.getElementById("numero").innerHTML = devuelveNumero();
    //document.getElementById("pintaderecha").innerHTML = devuelvePinta();
    //document.getElementById("pintaderecha").style.color = "magenta";
//} else 
    
//}

