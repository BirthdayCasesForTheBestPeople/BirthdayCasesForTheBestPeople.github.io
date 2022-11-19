console.log("case 2");

const presentList = [
    {
        name: "1",
        img: "../img/case2/lol.jpg"
    },
    {
        name: "2",
        img: "../img/case2/termo.avif"
    },
    {
        name: "3",
        img: "../img/case2/loz.avif"
    },
    {
        name: "4",
        img: "../img/case2/plate.jpg"
    },
    {
        name: "5",
        img: "../img/case2/main.jpg"
    },
    {
        name: "6",
        img: "../img/case2/pp.avif"
    },
    {
        name: "7",
        img: "../img/case2/tee.avif"
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
    
    rollerEl.classList.add("roll-animation2");
    document.getElementById("spin").style.display = "none";
    
    setTimeout(() => {
        document.getElementsByClassName('roller-element')[67].classList.add("win");
        localStorage.setItem('case2', 'true');
    }, 10500);
}

const isWin = localStorage.getItem('case2');

if(isWin && isWin === "true") {
    document.getElementsByClassName('roller-element')[67].classList.add("win");
    document.getElementById('roller1').style.left = "-7267px"
    document.getElementById('spin').style.display = "none"
}