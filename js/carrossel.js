window.onload = function () {

    let urlDiretorio = "https://Samuel-Sbf.github.io/estilo/"
    var cards = "";
    const slide = document.querySelector('.card-wrapper');
    
    for (let x = 0; x != listaPessoas.length; x++) {
        cards += `
            <div class="card swiper-slide">
                <div class="image-content">
                    <span class="overlay"></span>
    
                    <div class="card-image">
                        <img src="${urlDiretorio}img/${listaPessoas[x]['slack']}.jpg" class="card-img">
                    </div>
                </div>
    
                <div class="card-content">
                    <h2 class="name"> ${listaPessoas[x]['nome']} </h2>
    
                    <p class="description">  </p>
                    
                    <div class="contact">
                        <button onclick="window.open('https:\/\/app.slack.com/client/T04RF492V/${listaPessoas[x]['slack']}')"
                            style="background-image: url('${urlDiretorio}Icons/slack.png');"></button>
                        <button
                            onclick="window.open('https:\/\/mail.google.com/mail/u/0/?tf=cm&fs=1&to=${listaPessoas[x]['email']}&hl=pt-BR')"
                            style="background-image: url('${urlDiretorio}Icons/gmail.jpg');"></button>
                    </div>
                </div>
            </div>
    `;
    }
    
    slide.innerHTML = cards.toString();
    
    setInterval(() => document.querySelector('.swiper-button-next').click(), 5000)
    }
    
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
    
        var swiper = new Swiper(".slide-content", {
            slidesPerView: 3,
            slidesPerGroup: 3,
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
    
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                520: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                950: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            },
        });
    