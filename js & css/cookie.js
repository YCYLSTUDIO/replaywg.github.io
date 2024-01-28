//cookie
document.addEventListener('DOMContentLoaded', function () {
    // Cek apakah ID pengguna sudah disimpan di local storage
    let UserId2 = localStorage.getItem('userId2');
    let jemaat = localStorage.getItem('jemaat');
    let lgn = localStorage.getItem('lgn');

    if (!UserId2) {
        // Jika belum ada, buat ID baru
        UserId2 = generateUserId2();
        // Simpan ID di local storage
        localStorage.setItem('UserId2', UserId2);
    }
    if (!jemaat) {
        // Jika belum ada, buat ID baru
        jemaat = generatejemaat();
        // Simpan ID di local storage
        localStorage.setItem('jemaat', jemaat);
    }
    if (!lgn) {
        // Jika belum ada, buat ID baru
        lgn = generatelgn();
        // Simpan ID di local storage
        localStorage.setItem('lgn', lgn);
    }

    // alert("userId2: " + UserId2);
    // alert("jemaat: " + jemaat);
    // alert("login: " + lgn);
});

function generateUserId2() {
    return 'user_' + Math.random().toString(36).substr(2, 9);
}

function generatejemaat() {
    return true;
}
function generatejemaat2() {
    return false;
}

function generatelgn() {
    return false;
}
function generatelgn2() {
    return true;
}

function DOM_jemat() {
    let jemaat = localStorage.getItem('jemaat');
    jemaat = generatejemaat2();
    localStorage.setItem('jemaat', jemaat);
}
function DOM_jemat2() {
    let jemaat = localStorage.getItem('jemaat');
    jemaat = generatejemaat();
    localStorage.setItem('jemaat', jemaat);
}

function DOM_lgn() {
    let lgn = localStorage.getItem('lgn');
    lgn = generatelgn2();
    localStorage.setItem('lgn', lgn);
}
function DOM_lgn2() {
    let lgn = localStorage.getItem('lgn');
    lgn = generatelgn();
    localStorage.setItem('lgn', lgn);
}

const logid = document.getElementById("logid");
const logoutid = document.getElementById("logoutid");
const adda = document.getElementById("adda");
setInterval(() => {
    let jemaat = localStorage.getItem('jemaat');
    let lgn = localStorage.getItem('lgn');
    if(jemaat == "false") {
        adda.classList.remove("n");
    }
    else {
        adda.classList.add("n");
    }

    if(lgn == "true") {
        logid.classList.add("n");
        logoutid.classList.remove("n");
    }
    else {
        logid.classList.remove("n");
        logoutid.classList.add("n");
    }
}, 20);