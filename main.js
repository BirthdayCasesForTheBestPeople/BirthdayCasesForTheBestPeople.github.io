const isLoggedIn = localStorage.getItem('isLoggedIn');
if(isLoggedIn !== "true") {
    window.location.href = "/login.html";
}

const logout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = "/login.html";
}

const presentList = [
    {
        name: "Блендер",
        img: "./img/blenders.jpg"
    },
    {
        name: "Хлібопічка",
        img: "./img/breadoven.jpg"
    },
    {
        name: "Кавоварка",
        img: "./img/coffee.jpg"
    },
    {
        name: "Гриль",
        img: "./img/grill.jpg"
    },
    {
        name: "Соковижималка",
        img: "./img/juice.jpg"
    },
    {
        name: "Чайник",
        img: "./img/kittels.jpg"
    },
    {
        name: "Мікрохвильовка",
        img: "./img/microwave.jpg"
    },
    {
        name: "Міксeh",
        img: "./img/mixers.jpg"
    },
    {
        name: "Мультиварка",
        img: "./img/multi.jpg"
    },
    {
        name: "Тосер",
        img: "./img/tosters.jpg"
    }
]

const list = document.getElementById("roller1");
for(let i = 0; i < presentList.length; i++){
    list.innerHTML += `<div class="roller-element" style="background-image: url(${presentList[i].img})"></div>`;
}
for(let i = 0; i < presentList.length; i++){
    list.innerHTML += `<div class="roller-element" style="background-image: url(${presentList[i].img})"></div>`;
}
for(let i = 0; i < presentList.length; i++){
    list.innerHTML += `<div class="roller-element" style="background-image: url(${presentList[i].img})"></div>`;
}
for(let i = 0; i < presentList.length; i++){
    list.innerHTML += `<div class="roller-element" style="background-image: url(${presentList[i].img})"></div>`;
}
for(let i = 0; i < presentList.length; i++){
    list.innerHTML += `<div class="roller-element" style="background-image: url(${presentList[i].img})"></div>`;
}

const test = () => {
    console.log("test");
    list.classList.add("roll-animation1");
}