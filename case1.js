console.log("case 1");

const presentList = [
    {
        name: "Блендер",
        img: "../img/blenders.jpg"
    },
    {
        name: "Хлібопічка",
        img: "../img/breadoven.jpg"
    },
    {
        name: "Кавоварка",
        img: "../img/coffee.jpg"
    },
    {
        name: "Гриль",
        img: "../img/grill.jpg"
    },
    {
        name: "Соковижималка",
        img: "../img/juice.jpg"
    },
    {
        name: "Чайник",
        img: "../img/kittels.jpg"
    },
    {
        name: "Мікрохвильовка",
        img: "../img/microwave.jpg"
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
    }, 10500);
}

const isWin = localStorage.getItem('case1');

if(isWin && isWin === "true") {
    document.getElementsByClassName('roller-element')[67].classList.add("win");
    document.getElementById('roller1').style.left = "-7197px"
    document.getElementById('spin').style.display = "none"
}