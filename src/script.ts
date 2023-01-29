import "./styles/style.scss";

import * as _ from "lodash";

window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName: string) {
        if (!window.application.blocks[screenName]) {
            console.log("Такого экрана нет");
        } else {
            this.blocks[screenName];
        }
    },
    renderBlock: function (blockName: string, container: Element) {
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
    if (container != null) {
        container.textContent = "";
    }

    const levelBox = document.createElement("div");
    levelBox.classList.add("levelBox");

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = "Выбери сложность";

    const levelNumberBox = document.createElement("div");
    levelNumberBox.classList.add("levelNumberBox");

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

    if (container != null) {
        container.appendChild(levelBox);
    }

    levelBox.appendChild(title);
    levelBox.appendChild(levelNumberBox);
    levelBox.appendChild(levelButton);
    levelNumberBox.appendChild(number1);
    levelNumberBox.appendChild(number2);
    levelNumberBox.appendChild(number3);
    levelChange();
    const button = document.querySelector("button");
    if (button != null) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            renderGameScreen();
            console.log("click");
        });
    }
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
            if (!(event.target instanceof HTMLElement)) return;
            const target: HTMLElement = event.target;
            if (target != null) {
                target.classList.add("change");
                window.application.level = target.textContent;
                console.log(window.application.level);
            }
        });
    });
}

function renderGameScreen() {
    if (container != null) {
        container.textContent = "";
    }
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
    if (container != null) {
        container.appendChild(infoGameBox);
        container.appendChild(cardsBox);
    }
    infoGameBox.appendChild(timeBox);
    timeBox.appendChild(timerNameBox);
    timeBox.appendChild(timerBox);
    timerBox.appendChild(minTimer);
    timerBox.appendChild(secTimer);
    timerNameBox.appendChild(minName);
    timerNameBox.appendChild(secName);
    infoGameBox.appendChild(gameButton);

    let numberOfCards = 0;

    if (window.application.level === "1") {
        numberOfCards = 3;
    } else if (window.application.level === "2") {
        numberOfCards = 6;
    } else if (window.application.level === "3") {
        numberOfCards = 9;
    }

    let card = 0;
    let randomCard = card;


    function getRandomInt(min: number, max: number) {
        card = Math.floor(Math.random() * (max - min)) + min;
        return card;
    }

    const cards: number[] = [];

    for (let i = 0; i < numberOfCards; i++) {
        let randomCard = getRandomInt(1, 37);
        if (cards.includes(randomCard)) {
            let randomCard = getRandomInt(1, 37);
            cards.push(randomCard);
        } else {
            cards.push(randomCard);
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

    const items = document.querySelectorAll(".item");

    function cardsHidden() {
        items.forEach((item) => {
            const upperBlock = document.createElement("div");
            upperBlock.classList.add("shirt");
            item.appendChild(upperBlock);
        });
    }

    let sec = 0;
    let min = 0;

    function startTimer() {
        setInterval(function () {
            sec++;
            secTimer.textContent = String(sec);
            if (sec < 10) {
                secTimer.textContent = "0" + sec;
            }
            if (sec === 60) {
                sec = 0;
                min++;
                minTimer.textContent = min + ".";
                if (min < 10) {
                    minTimer.textContent = "0" + min + ".";
                }
            }
        }, 1000);

        const newGame = document.querySelector(".buttonNewStart");

        if (newGame != null) {
            newGame.addEventListener("click", function (event) {
                event.preventDefault();
                renderGameScreen();
            });
        }
    }
    window.application.timers.push(setTimeout(cardsHidden, 5000));
    window.application.timers.push(setTimeout(startTimer, 4000));

    let compared: Element[] = [];
    let counter = 0;

    items.forEach((item) => {
        item.addEventListener("click", function () {
            if (item.children.length > 1) {
                if (item.lastElementChild != null) {
                    item.removeChild(item.lastElementChild);
                }
                if (item.firstElementChild != null) {
                    compared.push(item.firstElementChild);
                    console.log(compared);
                }
            } else {
                return;
            }
            if (compared.length >= 2) {
                if (
                    compared[0].attributes.src.nodeValue ===
                    compared[1].attributes.src.nodeValue
                ) {
                    console.log("ok");
                    compared = [];
                    items.forEach((item) => {
                        if (item.children.length === 1) {
                            counter += 1;
                            console.log(counter);
                            const comparisonСounter = numberOfCards * 4;
                            console.log(comparisonСounter);
                            if (counter === comparisonСounter) {
                                renderWinScreen();
                                const loseTime =
                                    <any>minTimer.textContent +
                                    <any>secTimer.textContent;
                                window.application.loseGame = loseTime;
                                console.log(loseTime);
                                console.log(window.application.loseGame);
                                renderWinScreen();
                            }
                        }
                    });
                } else {
                    const loseTime =
                        <any>minTimer.textContent + <any>secTimer.textContent;
                    window.application.loseGame = loseTime;
                    console.log(loseTime);
                    console.log(window.application.loseGame);
                    renderLoseScreen();
                }
            }
        });
    });
}
window.application.screens["game"] = renderGameScreen;

function renderWinScreen() {
    if (container != null) {
        container.textContent = "";
    }
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
    cardsBox.classList.add("cardsBoxWin");
    const hiddenBox = document.createElement("div");
    hiddenBox.classList.add("hiddenBox");
    const winBox = document.createElement("div");
    winBox.classList = "winBox";
    const winImage = document.createElement("img");
    winImage.classList.add("winImage");
    winImage.src = "../img/win.png";
    const title = document.createElement("p");
    title.classList = "titleWin";
    title.textContent = "Вы выйграли";
    const winInfo = document.createElement("p");
    winInfo.classList = "winInfo";
    winInfo.textContent = "Затраченное время:";
    const timeInfo = document.createElement("p");
    timeInfo.classList = "timeInfo";
    timeInfo.textContent = window.application.loseGame;
    const winButton = document.createElement("button");
    winButton.classList = "button";
    winButton.classList = "winButton";
    winButton.textContent = "Играть снова";

    if (container != null) {
        container.appendChild(infoGameBox);
        container.appendChild(cardsBox);
        container.appendChild(hiddenBox);
        container.appendChild(winBox);
    }
    winBox.appendChild(winImage);
    winBox.appendChild(title);
    winBox.appendChild(winInfo);
    winBox.appendChild(timeInfo);
    winBox.appendChild(winButton);

    infoGameBox.appendChild(timeBox);
    timeBox.appendChild(timerNameBox);
    timeBox.appendChild(timerBox);
    timerBox.appendChild(minTimer);
    timerBox.appendChild(secTimer);
    timerNameBox.appendChild(minName);
    timerNameBox.appendChild(secName);
    infoGameBox.appendChild(gameButton);

    for (let i = 0; i < 36; i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.classList.add("card36");
        cardsBox.appendChild(item);

        let cardNumber = i + 1;

        const img = document.createElement("img");
        img.src = "img/" + cardNumber + ".png";
        img.classList.add("image");
        item.appendChild(img);
    }

    winButton.addEventListener("click", function (event) {
        event?.preventDefault();
        renderLevelScreen();
    });
}
window.application.screens["win"] = renderWinScreen;

function renderLoseScreen() {
    if (container != null) {
        container.textContent = "";
    }
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
    cardsBox.classList.add("cardsBoxWin");
    const hiddenBox = document.createElement("div");
    hiddenBox.classList.add("hiddenBox");
    const winBox = document.createElement("div");
    winBox.classList = "winBox";
    const loseImage = document.createElement("img");
    loseImage.classList.add("loseImage");
    loseImage.src = "../img/lose.png";
    const title = document.createElement("p");
    title.classList = "titleWin";
    title.textContent = "Вы проиграли";
    const winInfo = document.createElement("p");
    winInfo.classList = "winInfo";
    winInfo.textContent = "Затраченное время:";
    const timeInfo = document.createElement("p");
    timeInfo.classList = "timeInfo";
    timeInfo.textContent = window.application.loseGame;
    const winButton = document.createElement("button");
    winButton.classList = "button";
    winButton.classList = "winButton";
    winButton.textContent = "Играть снова";

    if (container != null) {
        container.appendChild(infoGameBox);
        container.appendChild(cardsBox);
        container.appendChild(hiddenBox);
        container.appendChild(winBox);
    }
    winBox.appendChild(loseImage);
    winBox.appendChild(title);
    winBox.appendChild(winInfo);
    winBox.appendChild(timeInfo);
    winBox.appendChild(winButton);

    infoGameBox.appendChild(timeBox);
    timeBox.appendChild(timerNameBox);
    timeBox.appendChild(timerBox);
    timerBox.appendChild(minTimer);
    timerBox.appendChild(secTimer);
    timerNameBox.appendChild(minName);
    timerNameBox.appendChild(secName);
    infoGameBox.appendChild(gameButton);

    for (let i = 0; i < 36; i++) {
        const item = document.createElement("div");
        item.classList.add("item");
        item.classList.add("card36");
        cardsBox.appendChild(item);

        let cardNumber = i + 1;

        const img = document.createElement("img");
        img.src = "img/" + cardNumber + ".png";
        img.classList.add("image");
        item.appendChild(img);
    }

    winButton.addEventListener("click", function (event) {
        event?.preventDefault();
        renderLevelScreen();
    });
}
window.application.screens["lose"] = renderLoseScreen;
