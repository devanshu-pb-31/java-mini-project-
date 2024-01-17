let gameStarted = false;

let level = 0;

let color = ["blue", "green", "red", "purple"];

let highScore = [];

let gameColorSeq = [];

let userColorSeq = [];

let body = document.querySelector("body");

let h3 = document.querySelector("h3");
let h2 = document.querySelector("h2");

body.addEventListener('keypress', function () {
    if (gameStarted == false) {
        // console.log(`game is off`);
        gameStarted = true;
        console.log(` key is press game  is started`);
        h2.style.color = 'white';
    }
    levelup();
})

function check(inndex) {
    // console.log(` current level ${level}`);

    if (userColorSeq[inndex] === gameColorSeq[inndex]) {
        if (userColorSeq.length == gameColorSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h3.innerText = `Game over! press any key to start again`;
        h3.style.color = 'red';
        highScore.push(level);
        let highScoreValue = (Math.max(...highScore));
        h2.style.color = 'black';
        h2.innerText = "High Score : " + highScoreValue;
        reset();
    }

}

function reset() {
    gameStarted = false;
    gameColorSeq = [];
    userColorSeq = [];
    level = "0";
}

function levelup() {
    level++;
    h3.innerText = (`Level ${level}`);
    userColorSeq = [];
    colorFlash();
}

let buttons = document.querySelectorAll(".button");
for (btn of buttons) {
    btn.addEventListener("click", function () {
        let clickedColor = this.getAttribute("id");
        userColorSeq.push(clickedColor);
        console.log(" user color pattern ", userColorSeq);
        buttoncolor = this;
        buttoncolor.style.backgroundColor = "#E49B0F";
        let originalColor = this.getAttribute("backgroundColor");
        setTimeout(function () {
            buttoncolor.style.backgroundColor = originalColor;
        }, 500);
        check(userColorSeq.length - 1);
    });
}


function colorFlash() {
    let randonIndex = Math.floor(Math.random() * 4);
    let randomColor = document.getElementById(color[randonIndex]);
    gameColorSeq.push(color[randonIndex]);
    console.log("game color seq ", gameColorSeq);
    let originalColor = getComputedStyle(randomColor).backgroundColor;
    randomColor.style.backgroundColor = ' #FFC0CB';
    setTimeout(function () {
        randomColor.style.backgroundColor = originalColor;
    }, 500);
}

