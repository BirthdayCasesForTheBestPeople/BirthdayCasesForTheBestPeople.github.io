const isLoggedIn = localStorage.getItem('isLoggedIn');
if(!isLoggedIn && isLoggedIn !== "true") {
    window.location.href = "/login.html";
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
}

const goTo = url => {
    window.location.href = url
}


