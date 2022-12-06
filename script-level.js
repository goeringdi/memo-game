window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) { },
    renderBlock: function (blockName, container) {
        if (!window.application.blocks[blockName]) {
            console.log('Такого блока нет');
        } else {
            this.blocks[blockName](container);
        }
    },
    timers: []
};

const container = document.querySelector('.container');
window.application.renderScreen('level');


function renderLevelScreen() {
    container.textContent = '';

    const levelBox = document.createElement('div');
    levelBox.classList = 'levelBox';

    const title = document.createElement('p');
    title.classList = 'title';
    title.textContent = 'Выбери сложность';

    const levelNumberBox = document.createElement('div');
    levelNumberBox.classList = 'levelNumberBox';
    
    const number1 = document.createElement('div');
    number1.classList = 'number one';
    number1.textContent = '1';

    const number2 = document.createElement('div');
    number2.classList = 'number two';
    number2.textContent = '2';

    const number3 = document.createElement('div');
    number3.classList = 'number three';
    number3.textContent = '3';

    const levelButton = document.createElement('button');
    levelButton.classList = 'button';
    levelButton.textContent = 'Старт';

    container.appendChild(levelBox);
    levelBox.appendChild(title);
    levelBox.appendChild(levelNumberBox);
    levelBox.appendChild(levelButton);
    levelNumberBox.appendChild(number1);
    levelNumberBox.appendChild(number2);
    levelNumberBox.appendChild(number3);
    levelChange();
}

window.application.screens['level'] = renderLevelScreen();

function levelChange() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(numb => {
        numb.addEventListener('click', function(event) {  
            numbers.forEach(numb => {
                if (numb.classList.contains('change')) {
                    numb.classList.remove('change');
                }
            })     
            const target = event.target;
            target.classList.add('change');
            window.application.level = target.textContent;
            console.log(window.application.level); 
        })
    }        
    )
}

    const button = document.querySelector('button');
    button.addEventListener('click', function(event) {
        event.preventDefault();
        renderGameScreen();
        console.log('click');
    })



function renderGameScreen() {
    container.textContent = '';
    container.textContent = 'тут пока ничего нет';
}
window.application.screens['game'] = renderGameScreen;