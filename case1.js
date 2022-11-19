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
    {
        name: "Міксeh",
        img: "../img/mixers.jpg"
    },
    {
        name: "Мультиварка",
        img: "../img/multi.jpg"
    },
    {
        name: "Тосер",
        img: "../img/tosters.jpg"
    }
]

const rollerEl = document.getElementById("roller1");
for(let q = 0; q < 5; q++) {
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
}