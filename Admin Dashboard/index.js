let editinglet = null;
const editing = document.getElementById("editing");
const judul = document.getElementById("judul");
const namainp = document.getElementById("namainp");
const gambarinp = document.getElementById("gambarinp");
const gambard = document.getElementById("gambard");
const urlinp = document.getElementById("urlinp");
const url2inp = document.getElementById("url2inp");
const titleinp = document.getElementById("titleinp");
function mingf(stringm) {
    editinglet = stringm;
    if(editinglet == 'minggu04') {
        judul.innerHTML = '"G01"';
        namainp.value = database_gup.json.minggu04.nama;
        urlinp.value = database_gup.json.minggu04.url;
        url2inp.value = database_gup.json.minggu04.url2;
        titleinp.value = database_gup.json.minggu04.title;
        gambard.src = gambar04.src;
    }
    else if(editinglet == 'minggu1') {
        judul.innerHTML = '"G02"';
        namainp.value = database_gup.json.minggu1.nama;
        urlinp.value = database_gup.json.minggu1.url;
        url2inp.value = database_gup.json.minggu1.url2;
        titleinp.value = database_gup.json.minggu1.title;
        gambard.src = gambar1.src;
    }
    else if(editinglet == 'minggu2') {
        judul.innerHTML = '"G03"';
        namainp.value = database_gup.json.minggu2.nama;
        urlinp.value = database_gup.json.minggu2.url;
        url2inp.value = database_gup.json.minggu2.url2;
        titleinp.value = database_gup.json.minggu2.title;
        gambard.src = gambar2.src;
    }
    else if(editinglet == 'minggu3') {
        judul.innerHTML = '"G04"';
        namainp.value = database_gup.json.minggu3.nama;
        urlinp.value = database_gup.json.minggu3.url;
        url2inp.value = database_gup.json.minggu3.url2;
        titleinp.value = database_gup.json.minggu3.title;
        gambard.src = gambar3.src;
    }
    else if(editinglet == 'minggu4') {
        judul.innerHTML = '"G05"';
        namainp.value = database_gup.json.minggu4.nama;
        urlinp.value = database_gup.json.minggu4.url;
        url2inp.value = database_gup.json.minggu4.url2;
        titleinp.value = database_gup.json.minggu4.title;
        gambard.src = gambar4.src;
    }
    else if(editinglet == 'minggu5') {
        judul.innerHTML = '"G06"';
        namainp.value = database_gup.json.minggu5.nama;
        urlinp.value = database_gup.json.minggu5.url;
        url2inp.value = database_gup.json.minggu5.url2;
        titleinp.value = database_gup.json.minggu5.title;
        gambard.src = gambar5.src;
    }
    if(editinglet == null) {
        editing.classList.add("n");
    }
    else {
        editing.classList.remove("n");
    }
}
let huruf = ["a", "b", "c", "d",
"e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "P", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z", " "];
let angka = [12,20,11,12,4,3,17,14,14,12];
const formp = document.getElementById("formp");
const passi = document.getElementById("passi");
const textp = document.getElementById("textp");
const pass_form = document.getElementById("pass_form");
const editing_form = document.getElementById("editing_form");
const tut1 = document.getElementById("tut1");
const tut2 = document.getElementById("tut2");
formp.addEventListener("submit", (e)=>{
    let passfull = "";
    let passarray = [];
    e.preventDefault();
    for(let i = 0; i < angka.length; i++) {
        passarray[i] = huruf[angka[i]];
    }
    for(let i = 0; i < passarray.length; i++) {
        passfull = passfull + passarray[i];
    }
    if(passi.value == passfull) {
        // console.log("benar");
        textp.innerHTML = "Password Yang Anda Masukan Benar";
        textp.classList.add("benar");
        textp.classList.remove("salah");
        pass_form.classList.add("n");
        editing_form.classList.remove("n");
        tut1.classList.add("n");
        tut2.classList.remove("n");
        passfull = "";
        loadingscreen_fast();
    }
    else {
        // console.log("salah");
        textp.innerHTML = "Password Yang Anda Masukan Salah!!";
        textp.classList.remove("benar");
        textp.classList.add("salah");
        pass_form.classList.remove("n");
        editing_form.classList.add("n");
        tut1.classList.remove("n");
        tut2.classList.add("n");
        passfull = "";
    }
});

const startsc = document.getElementById("startsc");
const starttext = document.getElementById("starttext");
const loadingsc = document.getElementById("loadingsc");
const loadingtext = document.getElementById("loadingtext");
const content = document.getElementById("content");
let startscreenl = false;
let titik = 0;
let loadingscreenl = false;
let titik2 = 0;
function startscreen() {
    titik = 0;
    startscreenl = true;
    startsc.classList.remove("n");
    content.classList.add("n");
    document.body.style.overflowY = "hidden";
    setTimeout(function() {
        startscreenl = false;
        startsc.classList.add("n");
        content.classList.remove("n");
        document.body.style.overflowY = "auto";
    }, 5000);
}
startscreen();
function loadingscreen_fast() {
    titik2 = 0;
    loadingscreenl = true;
    loadingsc.classList.remove("n");
    content.classList.add("n");
    document.body.style.overflowY = "hidden";
    setTimeout(function() {
        loadingscreenl = false;
        loadingsc.classList.add("n");
        content.classList.remove("n");
        document.body.style.overflowY = "auto";
    }, 2000);
}
function loadingscreen_start() {
    titik2 = 0;
    loadingscreenl = true;
    loadingsc.classList.remove("n");
    content.classList.add("n");
    document.body.style.overflowY = "hidden";
}
function loadingscreen_stop() {
    loadingscreenl = false;
    loadingsc.classList.add("n");
    content.classList.remove("n");
    document.body.style.overflowY = "auto";
}

setInterval(() => {
    if(startscreenl == true) {
        if(titik == 0) {
            starttext.innerHTML = "Load Data";
            titik = 1;
        }
        else if(titik == 1) {
            starttext.innerHTML = "Load Data.";
            titik = 2;
        }
        else if(titik == 2) {
            starttext.innerHTML = "Load Data..";
            titik = 3;
        }
        else if(titik == 3) {
            starttext.innerHTML = "Load Data...";
            titik = 0;
        }
    }

    if(loadingscreenl == true) {
        if(titik2 == 0) {
            loadingtext.innerHTML = "Tunggu Sebentar";
            titik2 = 1;
        }
        else if(titik2 == 1) {
            loadingtext.innerHTML = "Tunggu Sebentar.";
            titik2 = 2;
        }
        else if(titik2 == 2) {
            loadingtext.innerHTML = "Tunggu Sebentar..";
            titik2 = 3;
        }
        else if(titik2 == 3) {
            loadingtext.innerHTML = "Tunggu Sebentar...";
            titik2 = 0;
        }
    }
}, 1000);

setInterval(() => {
    console.clear();
}, 20);


// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};