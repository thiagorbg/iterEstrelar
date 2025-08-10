
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');//aqui eu chamo o atributo no html dos acorddions

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtul = this.window.scrollY;

        if ( posicaoAtul < alturaHero) {
            ocultarElementosDOHerader();
            
        }else{
            exibeElementosDoHeader();
        }
    })

    // seçao de atraçoes , programação das abas 
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(evento) {
            const abaAlvo = evento.currentTarget.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotãoAtivo();
            evento.target.classList.add('shows__tabs__button--is-active');
        });
    }


    // seção FAQ, accordion
    for (let i = 0; i < questions.length; i++){//acordions
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});



function ocultarElementosDOHerader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}
function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}






function abreOuFechaResposta (elemento){//acordons
    const classe ='faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;


    elementoPai.classList.toggle(classe)
}





function removeBotãoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}


function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
