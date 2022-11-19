console.log("case 1");

const presentList = [
    {
        name: "1",
        img: "../img/case1/mono.jpg"
    },
    {
        name: "2",
        img: "../img/case1/fb.jpg"
    },
    {
        name: "3",
        img: "../img/case1/domino.jpg"
    },
    {
        name: "4",
        img: "../img/case1/catan.jpg"
    },
    {
        name: "5",
        img: "../img/case1/card.jpg"
    },
    {
        name: "6",
        img: "../img/case1/jenga.jpg"
    },
    {
        name: "7",
        img: "../img/case1/geom.jpg"
    },
]

const rollerEl = document.getElementById("roller1");
for(let q = 0; q < 10; q++) {
    for(let i = 0; i < presentList.length; i++){
        rollerEl.innerHTML += `<div class="roller-element" style="background-image: url(${presentList[i].img})"></div>`;
    }
}

const prizesEl = document.getElementById("prizes1");
for(let i = 0; i < presentList.length; i++){
    prizesEl.innerHTML += `<div class="c-prizes-item" style="background-image: url(${presentList[i].img})")"></div>`;
}


const spin = () => {
    console.log("test");
    
    rollerEl.classList.add("roll-animation1");
    document.getElementById("spin").style.display = "none";
    
    setTimeout(() => {
        document.getElementsByClassName('roller-element')[67].classList.add("win");
        localStorage.setItem('case1', 'true');
        document.getElementById("getPrz").style.display = "block";
    }, 10500);
}

const isWin = localStorage.getItem('case1');

if(isWin && isWin === "true") {
    document.getElementsByClassName('roller-element')[67].classList.add("win");
    document.getElementById('roller1').style.left = "-7197px"
    document.getElementById('spin').style.display = "none"
    document.getElementById("getPrz").style.display = "block";
}