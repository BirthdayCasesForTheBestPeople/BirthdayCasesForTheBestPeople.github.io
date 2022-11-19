console.log("case 3");

const presentList = [
    {
        name: "1",
        img: "../img/case3/milka.jpg"
    },
    {
        name: "2",
        img: "../img/case3/versh.jpg"
    },
    {
        name: "3",
        img: "../img/case3/ff.jpg"
    },
    {
        name: "4",
        img: "../img/case3/main.jpg"
    },
    {
        name: "5",
        img: "../img/case3/og.jpg"
    },
    {
        name: "6",
        img: "../img/case3/fin.jpg"
    },
    {
        name: "7",
        img: "../img/case3/tea.jpg"
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
    
    rollerEl.classList.add("roll-animation3");
    document.getElementById("spin").style.display = "none";
    
    setTimeout(() => {
        document.getElementsByClassName('roller-element')[66].classList.add("win");
        localStorage.setItem('case3', 'true');
        document.getElementById("getPrz").style.display = "block";
    }, 10500);
}

const isWin = localStorage.getItem('case3');

if(isWin && isWin === "true") {
    document.getElementsByClassName('roller-element')[66].classList.add("win");
    document.getElementById('roller1').style.left = "-7137px"
    document.getElementById('spin').style.display = "none"
    document.getElementById("getPrz").style.display = "block";
}