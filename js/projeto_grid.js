/**
 * Projeto CSS3 grid versão 1.1
 * @author Artur da Silva Rezende
 */


var sorteio = Math.floor(Math.random() * 6 + 1);

switch (sorteio) {
    case 1:
        document.querySelector(".img-aside").src = "img/propaganda-banner-1.jpg";
        break;
    case 2:
        document.querySelector(".img-aside").src = "img/propaganda-banner-2.jpg";
        break;
    case 3:
        document.querySelector(".img-aside").src = "img/propaganda-banner-3.jpg";
        break;
    case 4:
        document.querySelector(".img-aside").src = "img/propaganda-banner-4.jpg";
        break;
    case 5:
        document.querySelector(".img-aside").src = "img/propaganda-banner-5.jpg";
        break;
    case 6:
        document.querySelector(".img-aside").src = "img/propaganda-banner-6.jpg";
        break;
    case 7:
        document.querySelector(".img-aside").src = "img/propaganda-banner-7.jpg";
        break;
    default:
        //Caso contrário
        break;
}