window.onload = function () {

    //url para ele puxar os arquivos como fotos s scripts (salvamos tudo em um repositorio git hub)
    let urlDiretorio = "https://Samuel-Sbf.github.io/estilo/";
    let cards = "";

    const slide = document.querySelector('.card-wrapper');

    listaPessoas.forEach(x => {

        cards +=
            `<div class="card swiper-slide">

            <div class="card-img">
                <img class="foto" src="https://Samuel-Sbf.github.io/estilo/img/${x.slack}.jpg" alt="">
            </div>

            <div class="card-nome">
                <h1>${x.nome}</h1>
                <h3>${x.cargo ? x.cargo : ''}</h3>
            </div>

            <div class="card-contatos">
                <button
                    onclick="window.open('https:\/\/mail.google.com/mail/u/0/?tf=cm&fs=1&to=${x.email}&hl=pt-BR')">
                    <img src="https://Samuel-Sbf.github.io/estilo/Icons/gmail.png" alt="">
                </button>
                <button
                    onclick="window.open('https:\/\/app.slack.com/client/T04RF492V/${x.slack}')" )>
                    <img src="https://Samuel-Sbf.github.io/estilo/Icons/slack.png" alt="">

                </button>
            </div>
        </div>`;
    });

    slide.innerHTML = cards.toString();

    //setInterval(() => document.querySelector('.swiper-button-next').click(), 5000);
}

//Evento de clique quando o usuario clicar a seta do teclado ele pula um slide
document.onkeyup = (x) => {
    switch (x.key) {
        case "ArrowRight":
        case "ArrowDown":
            document.querySelector('.swiper-button-next').click()
            break;
        case "ArrowLeft":
        case "ArrowUp":
            document.querySelector('.swiper-button-prev').click()
            break;

        default:
            break;
    }
}

//Numero de slides para serem apresentados simultaneamente
var slideCard = 1;

switch (listaPessoas.length) {
    case 1:
        slideCard = 1;
        break;
    case 2:
        slideCard = 2;
        break;
    default:
        slideCard = 3;
        break
}

let obj = {
    slidesPerView: slideCard,
    slidesPerGroup: slideCard,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {},
};

//Colocamos uma configuração de estilo da tela assim quando tive com a tela menor ele diminui o número 
//de cards apresentando simultaneamente para ele acompanhar o tamanho da tela
if (slideCard >= 1) {
    obj.breakpoints[0] = {
        slidesPerView: 1,
        slidesPerGroup: 1,
    };
}
if (slideCard >= 2) {
    obj.breakpoints[400] = {
        slidesPerView: 2,
        slidesPerGroup: 2,
    };
}
if (slideCard >= 3) {
    obj.breakpoints[950] = {
        slidesPerView: 3,
        slidesPerGroup: 3,
    };
}

let swiper = new Swiper(".slide-content", obj);
console.log(obj);