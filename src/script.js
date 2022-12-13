window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {},
    renderBlock: function (blockName, container) {
        if (!window.application.blocks[blockName]) {
            console.log("Такого блока нет");
        } else {
            this.blocks[blockName](container);
        }
    },
    timers: [],
};

const container = document.querySelector(".container");
window.application.renderScreen("level");

function renderLevelScreen() {
    container.textContent = "";

    const levelBox = document.createElement("div");
    levelBox.classList = "levelBox";

    const title = document.createElement("p");
    title.classList = "title";
    title.textContent = "Выбери сложность";

    const levelNumberBox = document.createElement("div");
    levelNumberBox.classList = "levelNumberBox";

    const number1 = document.createElement("div");
    number1.classList = "number one";
    number1.textContent = "1";

    const number2 = document.createElement("div");
    number2.classList = "number two";
    number2.textContent = "2";

    const number3 = document.createElement("div");
    number3.classList = "number three";
    number3.textContent = "3";

    const levelButton = document.createElement("button");
    levelButton.classList = "button";
    levelButton.textContent = "Старт";

    container.appendChild(levelBox);
    levelBox.appendChild(title);
    levelBox.appendChild(levelNumberBox);
    levelBox.appendChild(levelButton);
    levelNumberBox.appendChild(number1);
    levelNumberBox.appendChild(number2);
    levelNumberBox.appendChild(number3);
    levelChange();
}

window.application.screens["level"] = renderLevelScreen();

function levelChange() {
    const numbers = document.querySelectorAll(".number");
    numbers.forEach((numb) => {
        numb.addEventListener("click", function (event) {
            numbers.forEach((numb) => {
                if (numb.classList.contains("change")) {
                    numb.classList.remove("change");
                }
            });
            const target = event.target;
            target.classList.add("change");
            window.application.level = target.textContent;
            console.log(window.application.level);
        });
    });
}

const button = document.querySelector("button");
button.addEventListener("click", function (event) {
    event.preventDefault();
    renderGameScreen();
    console.log("click");
});

function renderGameScreen() {
    container.textContent = "";
    const infoGameBox = document.createElement("div");
    infoGameBox.classList.add("infoGame");
    const timeBox = document.createElement("div");
    timeBox.classList.add("timeBox");
    const timerNameBox = document.createElement("div");
    timerNameBox.classList.add("timerNameBox");
    const minName = document.createElement("p");
    minName.classList.add("minName");
    minName.textContent = "min";
    const secName = document.createElement("p");
    secName.classList.add("secName");
    secName.textContent = "sec";
    const timerBox = document.createElement("div");
    timerBox.classList.add("timerBox");
    const minTimer = document.createElement("p");
    minTimer.classList.add("min");
    minTimer.textContent = "00.";
    const secTimer = document.createElement("p");
    secTimer.classList.add("sec");
    secTimer.textContent = "00";
    const gameButton = document.createElement("button");
    gameButton.classList.add("button");
    gameButton.classList.add("buttonNewStart");
    gameButton.textContent = "Начать заново";
    const cardsBox = document.createElement("div");
    cardsBox.classList.add("cardsBox");
    container.appendChild(infoGameBox);
    container.appendChild(cardsBox);
    infoGameBox.appendChild(timeBox);
    timeBox.appendChild(timerNameBox);
    timeBox.appendChild(timerBox);
    timerBox.appendChild(minTimer);
    timerBox.appendChild(secTimer);
    timerNameBox.appendChild(minName);
    timerNameBox.appendChild(secName);
    infoGameBox.appendChild(gameButton);

    let numberOfCards;

    if (window.application.level === "1") {
        numberOfCards = 3;
    } else if (window.application.level === "2") {
        numberOfCards = 6;
    } else if (window.application.level === "3") {
        numberOfCards = 9;
    }

    let card;

    function getRandomInt(min, max) {
        min = 1;
        max = 37;
        card = Math.floor(Math.random() * (max - min)) + min;
        return card;
    }

    const cards = [];

    for (let i = 0; i < numberOfCards; i++) {
        getRandomInt();
        if (cards.includes(card)) {
            getRandomInt();
            cards.push(card);
        } else {
            cards.push(card);
        }
        console.log(cards);
    }
    console.log(cards);
    cards.push(...cards);
    console.log(cards);

    cards.sort(() => Math.random() - 0.5);
    console.log(cards);

    for (let i = 0; i < cards.length; i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        if (numberOfCards === 3) {
            item.classList.add("card3");
        } else if (numberOfCards === 6) {
            item.classList.add("card6");
        } else if (numberOfCards === 9) {
            item.classList.add("card9");
        }
        cardsBox.appendChild(item);

        const img = document.createElement("img");
        img.src = "img/" + cards[i] + ".png";
        img.classList.add("image");
        item.appendChild(img);
    }

    function cardsHidden() {
        const items = document.querySelectorAll(".item");
        const images = document.querySelectorAll(".image");

        items.forEach((item) => {
            item.classList.add("shirt");
        });

        images.forEach((image) => {
            image.classList.remove("image");
            image.classList.add("hidden");
        });
    }

    let sec = 0;
    let min = 0;
    let timer;

    function startTimer() {
        timer = setInterval(function () {
            sec++;
            secTimer.textContent = sec;
            if (sec < 10) {
                secTimer.textContent = "0" + sec;
            }
            if (sec == 60) {
                sec = 0;
                min++;
                minTimer.textContent = min + ".";
                if (min < 10) {
                    minTimer.textContent = "0" + min + ".";
                }
            }
        }, 1000);

        const newGame = document.querySelector(".buttonNewStart");

        newGame.addEventListener("click", function (event) {
            event.preventDefault();
            renderGameScreen();
        });
    }
    window.application.timers.push(setTimeout(cardsHidden, 5000));
    window.application.timers.push(setTimeout(startTimer, 4000));
}
window.application.screens["game"] = renderGameScreen;
