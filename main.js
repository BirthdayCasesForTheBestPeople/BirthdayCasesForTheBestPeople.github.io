const isLoggedIn = localStorage.getItem('isLoggedIn');
const case1 = localStorage.getItem('case1');
const case2 = localStorage.getItem('case2');
const case3 = localStorage.getItem('case3');
const case4 = localStorage.getItem('case4');

const caseBtn1El = document.getElementById("caseBtn1");
const caseBtn2El = document.getElementById("caseBtn2");
const caseBtn3El = document.getElementById("caseBtn3");
const caseBtn4El = document.getElementById("caseBtn4");


if(!isLoggedIn && isLoggedIn !== "true") {
    window.location.href = "/login.html";
}

if(case1 && case1 === "true") {
    if(caseBtn2El) {
        caseBtn2El.classList.remove("closed");
    }
}

if(case2 && case2 === "true") {
    if(caseBtn3El) {
        caseBtn3El.classList.remove("closed");
    }
}

if(case3 && case3 === "true") {
    if(caseBtn4El) {
        caseBtn3El.classList.remove("closed");
    }
}

const logout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = "/login.html";
}

const openCase = id => {
    console.log("case opened", id);

    if(id === 1) {
        window.location.href = "/cases/lot31253411.html"
    }

    if(id === 2) {
        const val = prompt("Введіть ключ");
        if(val.toLowerCase() === "галатська вежа") {
            window.location.href = "/cases/lot39255429.html"
        } else {
            alert("Не вірно");
        }
    }

    if(id === 3) {
        const val = prompt("Введіть ключ");
        if(val.toLowerCase() === "житомир") {
            window.location.href = "/cases/lot99123434.html"
        } else {
            alert("Не вірно");
        }
    }

    if(id === 4) {
        const val = prompt("Введіть ключ");
        if(val.toLowerCase() === "червоний") {
            window.location.href = "/cases/lot99911541.html"
        } else {
            alert("Не вірно");
        }
    }
}

const goTo = url => {
    console.log("goTo", url)
    window.location.href = url
}

const getPrize = id => {
    if(id === 1) {
        alert("Щоб забрати призи - залишилось відкрити ще 2 скрині");
    }

    if(id === 2) {
        alert("Щоб забрати призи - залишилось відкрити ще 1 скриню. Сподіваюсь, ти знаєш яке місто є столицею світу? Ми там були.");
    }

    if(id === 3) {
        alert("На вулиці Івана Франка, 9 є така Уляна");
    }

    if(id === 4) {
        alert("Вулиця 35");
    }
}
