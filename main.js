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

    if(id === 2) {
        window.location.href = "/cases/lot39255429.html"
    }

    if(id === 3) {
        window.location.href = "/cases/lot99123434.html"
    }

    if(id === 4) {
        window.location.href = "/cases/"
    }
}

const goTo = url => {
    window.location.href = url
}


