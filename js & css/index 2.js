//utama
const ming44 = document.getElementById("ming44");
const ming1 = document.getElementById("ming1");
const ming2 = document.getElementById("ming2");
const ming3 = document.getElementById("ming3");
const ming4 = document.getElementById("ming4");
const ming5 = document.getElementById("ming5");
const gambars = document.getElementById("gambar1");
const titles = document.getElementById("titleg1");
const gambars2 = document.getElementById("gambar2");
const titles2 = document.getElementById("titleg2");
const gambars3 = document.getElementById("gambar3");
const titles3 = document.getElementById("titleg3");
const gambars4 = document.getElementById("gambar4");
const titles4 = document.getElementById("titleg4");
const gambars5 = document.getElementById("gambar5");
const titles5 = document.getElementById("titleg5");
const gambars6 = document.getElementById("gambar6");
const titles6 = document.getElementById("titleg6");
const vid = document.getElementById("vid");
const jdl = document.getElementById("jdl");
const desk1 = document.getElementById("desk1");
const desk2 = document.getElementById("desk2");
const desdiv2 = document.getElementById("desdiv2");
const fbg = document.getElementById("fbg");
const fi = document.getElementById("fi");
//ganti style
const ldnav = document.getElementById("ldnav");
const ldbg = document.getElementById("ldbg");
const lddes = document.getElementById("lddes");
const ldlw = document.getElementById("ldlw");
const ldv = document.getElementById("ldv");
const topjd = document.getElementById("topjd");
//ganti class
const snid = document.getElementById("snid");
const cnaid = document.getElementById("cnaid");

// const enid = document.getElementById("enid");

const burgerid = document.getElementById("burgerid");
const bgrid = document.getElementById("bgrid");
const threebtn = document.getElementById("threebtn");
const xbtn = document.getElementById("xbtn");
//bagian info

//code
let lastmulai = null;
let hitungan = 0;
let terbaru;
let minggu;
let warta;

let images_url = ["","","","","","",""];

//startloading
const bodye = document.body;
const sl_l1 = document.getElementById("sl_l1");
const sl_l2 = document.getElementById("sl_l2");
const loading_text = document.getElementById("loading_text");
const loading_bar = document.getElementById("loading_bar");
const loading_red = document.getElementById("loading_red");
const sl = document.getElementById("sl");
const terb_div = document.getElementById("terb_div");
function startloadingf() {
    bodye.style.overflowY = "hidden";
    sl_l1.style.animation = "1s l1 ease-in-out";
    sl_l1.style.marginRight = "0px";
    sl_l1.style.opacity = "1";
    sl_l2.style.animation = "1s l2 ease-in-out";
    sl_l2.style.marginLeft = "10px";
    sl_l2.style.opacity = "1";
    setTimeout(function() {
        loading_text.style.animation = "1s naik ease-in-out";
        loading_text.style.marginTop = "10px";
        loading_text.style.opacity = "1";
        setTimeout(function() {
            loading_bar.style.animation = "0.5s naik ease-in-out";
            loading_bar.style.marginTop = "10px";
            loading_bar.style.opacity = "1";
            setTimeout(function() {
                loadingbool = true;
                loading_proses = true;
            }, 1500);
        }, 800);
    }, 1000);
}
startloadingf();

let loadingbool = false;
let loadingstep2 = false;
let persen = 0;
let loading_proses = false;
function loading() {
    if(loadingbool == true && loading_proses == true) {
        if(nomor == penentu_nomor && persen < 40) {
            persen += 1;
            loading_text.innerHTML = "Loading: " + persen + "%";
            loading_red.style.width = persen + "%";
        }

        if(persen > 39 && persen < 80 && jdl.innerHTML !== "???") {
            persen += 1;
            loading_text.innerHTML = "Loading: " + persen + "%";
            loading_red.style.width = persen + "%";
        }

        if(persen == 80) {
            setTimeout(function() {
                loadingstep2 = true;
            }, 1500);
        }

        if(loadingstep2 == true && persen < 100) {
            persen += 1;
            loading_text.innerHTML = "Loading: " + persen + "%";
            loading_red.style.width = persen + "%";
        }

        if(persen == 100) {
            bodye.style.overflowY = "auto";
            loading_proses = false;
            sl.style.animation = "1.5s op ease";
            sl.style.opacity = "0";
            setTimeout(function() {
                sl.style.display = "none";
            }, 1500);
        }
    }
}

setInterval(() => {
    if(loading_proses == true) {
        loading();
    }
}, 50);

//function
function auto_play() {
    if(warta.json.warta_terbaru == "G01") {
        mulai(0);
        terb_div.classList.remove("n");
    }
    else if(warta.json.warta_terbaru == "G02") {
        mulai(1);
        terb_div.classList.remove("n");
    }
    else if(warta.json.warta_terbaru == "G03") {
        mulai(2);
        terb_div.classList.remove("n");
    }
    else if(warta.json.warta_terbaru == "G04") {
        mulai(3);
        terb_div.classList.remove("n");
    }
    else if(warta.json.warta_terbaru == "G05") {
        mulai(4);
        terb_div.classList.remove("n");
    }
    else if(warta.json.warta_terbaru == "G06") {
        mulai(5);
        terb_div.classList.remove("n");
    }
}
function get_images() {
    storageRef.listAll().then(function(result) {
        result.items.forEach(function(itemRef) {
            var file2 = warta.json.minggu04.gambar;
            itemRef.getDownloadURL();
            if(itemRef.name == file2) {
                var string = "images/" + itemRef.name;
            
            
                firebase.storage().ref(string).getDownloadURL().then(function(url) {
                    images_url[0] = url;
                    nomor += 1;
                    check_file();
                }).catch(function(error) {
                    console.error("Failed to get download URL:", error);
                });
            }
        });
    }).catch(function(error) {
        console.error("Gagal mendapatkan daftar file anak:", error);
    });
}
function get_images1() {
    storageRef.listAll().then(function(result) {
        result.items.forEach(function(itemRef) {
            var file2 = warta.json.minggu1.gambar;
            itemRef.getDownloadURL();
            if(itemRef.name == file2) {
                var string = "images/" + itemRef.name;
            
            
                firebase.storage().ref(string).getDownloadURL().then(function(url) {
                    images_url[1] = url;
                    nomor += 1;
                    check_file();
                }).catch(function(error) {
                    console.error("Failed to get download URL:", error);
                });
            }
        });
    }).catch(function(error) {
        console.error("Gagal mendapatkan daftar file anak:", error);
    });
}
function get_images2() {
    storageRef.listAll().then(function(result) {
        result.items.forEach(function(itemRef) {
            var file2 = warta.json.minggu2.gambar;
            itemRef.getDownloadURL();
            if(itemRef.name == file2) {
                var string = "images/" + itemRef.name;
            
            
                firebase.storage().ref(string).getDownloadURL().then(function(url) {
                    images_url[2] = url;
                    nomor += 1;
                    check_file();
                }).catch(function(error) {
                    console.error("Failed to get download URL:", error);
                });
            }
        });
    }).catch(function(error) {
        console.error("Gagal mendapatkan daftar file anak:", error);
    });
}
function get_images3() {
    storageRef.listAll().then(function(result) {
        result.items.forEach(function(itemRef) {
            var file2 = warta.json.minggu3.gambar;
            itemRef.getDownloadURL();
            if(itemRef.name == file2) {
                var string = "images/" + itemRef.name;
            
            
                firebase.storage().ref(string).getDownloadURL().then(function(url) {
                    images_url[3] = url;
                    nomor += 1;
                    check_file();
                }).catch(function(error) {
                    console.error("Failed to get download URL:", error);
                });
            }
        });
    }).catch(function(error) {
        console.error("Gagal mendapatkan daftar file anak:", error);
    });
}
function get_images4() {
    storageRef.listAll().then(function(result) {
        result.items.forEach(function(itemRef) {
            var file2 = warta.json.minggu4.gambar;
            itemRef.getDownloadURL();
            if(itemRef.name == file2) {
                var string = "images/" + itemRef.name;
            
            
                firebase.storage().ref(string).getDownloadURL().then(function(url) {
                    images_url[4] = url;
                    nomor += 1;
                    check_file();
                }).catch(function(error) {
                    console.error("Failed to get download URL:", error);
                });
            }
        });
    }).catch(function(error) {
        console.error("Gagal mendapatkan daftar file anak:", error);
    });
}
function get_images5() {
    storageRef.listAll().then(function(result) {
        result.items.forEach(function(itemRef) {
            var file2 = warta.json.minggu5.gambar;
            itemRef.getDownloadURL();
            if(itemRef.name == file2) {
                var string = "images/" + itemRef.name;
            
            
                firebase.storage().ref(string).getDownloadURL().then(function(url) {
                    images_url[5] = url;
                    nomor += 1;
                    check_file();
                }).catch(function(error) {
                    console.error("Failed to get download URL:", error);
                });
            }
        });
    }).catch(function(error) {
        console.error("Gagal mendapatkan daftar file anak:", error);
    });
}

let nomor = 0;
let penentu_nomor = 0;
function check_images() {
    if(warta.json.minggu04.gambar == "" || warta.json.minggu04.gambar == null)
    {
        // penentu_nomor += 1;
    }
    else {
        penentu_nomor += 1;
    }

    if(warta.json.minggu1.gambar == "" || warta.json.minggu1.gambar == null)
    {
        // penentu_nomor += 1;
    }
    else {
        penentu_nomor += 1;
    }

    if(warta.json.minggu2.gambar == "" || warta.json.minggu2.gambar == null)
    {
        // penentu_nomor += 1;
    }
    else {
        penentu_nomor += 1;
    }

    if(warta.json.minggu3.gambar == "" || warta.json.minggu3.gambar == null)
    {
        // penentu_nomor += 1;
    }
    else {
        penentu_nomor += 1;
    }

    if(warta.json.minggu4.gambar == "" || warta.json.minggu4.gambar == null)
    {
        // penentu_nomor += 1;
    }
    else {
        penentu_nomor += 1;
    }

    if(warta.json.minggu5.gambar == "" || warta.json.minggu5.gambar == null)
    {
        // penentu_nomor += 1;
    }
    else {
        penentu_nomor += 1;
    }
}
function check_file() {
    if(nomor == penentu_nomor) {
        start();
        auto_play();
    }
}




function getdata(data) {
    // warta = data;
    warta = {"json": data};
    // start();
    get_images();
    get_images1();
    get_images2();
    get_images3();
    get_images4();
    get_images5();
    check_images();
}
function start() {
    // console.log(warta);
    minggu04func();
    minggu1func();
    minggu2func();
    minggu3func();
    minggu4func();
    minggu5func();
    function minggu04func() {
        if(warta.json.minggu04.url == "" || warta.json.minggu04.url == null)
        {
            ming44.classList.add("n");
        }
        else
        {
            ming44.classList.remove("n");
            gambars.src = images_url[0];
            titles.innerHTML = warta.json.minggu04.title;
        }
    }
    function minggu1func() {
        if(warta.json.minggu1.url == "" || warta.json.minggu1.url == null)
        {
            ming1.classList.add("n");
        }
        else
        {
            ming1.classList.remove("n");
            gambars2.src = images_url[1];
            titles2.innerHTML = warta.json.minggu1.title;
        }
    }
    function minggu2func() {
        if(warta.json.minggu2.url == "" || warta.json.minggu2.url == null)
        {
            ming2.classList.add("n");
        }
        else
        {
            ming2.classList.remove("n");
            gambars3.src = images_url[2];
            titles3.innerHTML = warta.json.minggu2.title;
        }
    }
    function minggu3func() {
        if(warta.json.minggu3.url == "" || warta.json.minggu3.url == null)
        {
            ming3.classList.add("n");
        }
        else
        {
            ming3.classList.remove("n");
            gambars4.src = images_url[3];
            titles4.innerHTML = warta.json.minggu3.title;
        }
    }
    function minggu4func() {
        if(warta.json.minggu4.url == "" || warta.json.minggu4.url == null)
        {
            ming4.classList.add("n");
        }
        else
        {
            ming4.classList.remove("n");
            gambars5.src = images_url[4];
            titles5.innerHTML = warta.json.minggu4.title;
        }
    }
    function minggu5func() {
        if(warta.json.minggu5.url == "" || warta.json.minggu5.url == null)
        {
            ming5.classList.add("n");
        }
        else
        {
            ming5.classList.remove("n");
            gambars6.src = images_url[5];
            titles6.innerHTML = warta.json.minggu5.title;
        }
    }
}

let pilwar_akhir;
function mulai(pilwar) {
    if(pilwar == 0) {
        if(warta.json.minggu04.url2 == "" || warta.json.minggu04.url2 == null)
        {
            desdiv2.classList.add("n");
            desk1.innerHTML = "Sesi 1 - 3:";
            jdl.innerHTML = warta.json.minggu04.nama;
            vid.src = warta.json.minggu04.url;
        }
        else
        {
            desdiv2.classList.remove("n");
            desk1.innerHTML = "Sesi 1 - 2:";
            jdl.innerHTML = warta.json.minggu04.nama;
            vid.src = warta.json.minggu04.url;
        }

        if(warta.json.warta_terbaru == "G01") {
            terb_div.classList.remove("n");
        }
        else {
            terb_div.classList.add("n");
        }
    }
    else if(pilwar == 1) {
        if(warta.json.minggu1.url2 == "" || warta.json.minggu1.url2 == null)
        {
            desdiv2.classList.add("n");
            desk1.innerHTML = "Sesi 1 - 3:";
            jdl.innerHTML = warta.json.minggu1.nama;
            vid.src = warta.json.minggu1.url;
        }
        else
        {
            desdiv2.classList.remove("n");
            desk1.innerHTML = "Sesi 1 - 2:";
            jdl.innerHTML = warta.json.minggu1.nama;
            vid.src = warta.json.minggu1.url;
        }

        if(warta.json.warta_terbaru == "G02") {
            terb_div.classList.remove("n");
        }
        else {
            terb_div.classList.add("n");
        }
    }
    else if(pilwar == 2) {
        if(warta.json.minggu2.url2 == "" || warta.json.minggu2.url2 == null)
        {
            desdiv2.classList.add("n");
            desk1.innerHTML = "Sesi 1 - 3:";
            jdl.innerHTML = warta.json.minggu2.nama;
            vid.src = warta.json.minggu2.url;
        }
        else
        {
            desdiv2.classList.remove("n");
            desk1.innerHTML = "Sesi 1 - 2:";
            jdl.innerHTML = warta.json.minggu2.nama;
            vid.src = warta.json.minggu2.url;
        }

        if(warta.json.warta_terbaru == "G03") {
            terb_div.classList.remove("n");
        }
        else {
            terb_div.classList.add("n");
        }
    }
    else if(pilwar == 3) {
        if(warta.json.minggu3.url2 == "" || warta.json.minggu3.url2 == null)
        {
            desdiv2.classList.add("n");
            desk1.innerHTML = "Sesi 1 - 3:";
            jdl.innerHTML = warta.json.minggu3.nama;
            vid.src = warta.json.minggu3.url;
        }
        else
        {
            desdiv2.classList.remove("n");
            desk1.innerHTML = "Sesi 1 - 2:";
            jdl.innerHTML = warta.json.minggu3.nama;
            vid.src = warta.json.minggu3.url;
        }

        if(warta.json.warta_terbaru == "G04") {
            terb_div.classList.remove("n");
        }
        else {
            terb_div.classList.add("n");
        }
    }
    else if(pilwar == 4) {
        if(warta.json.minggu4.url2 == "" || warta.json.minggu4.url2 == null)
        {
            desdiv2.classList.add("n");
            desk1.innerHTML = "Sesi 1 - 3:";
            jdl.innerHTML = warta.json.minggu4.nama;
            vid.src = warta.json.minggu4.url;
        }
        else
        {
            desdiv2.classList.remove("n");
            desk1.innerHTML = "Sesi 1 - 2:";
            jdl.innerHTML = warta.json.minggu4.nama;
            vid.src = warta.json.minggu4.url;
        }

        if(warta.json.warta_terbaru == "G05") {
            terb_div.classList.remove("n");
        }
        else {
            terb_div.classList.add("n");
        }
    }
    else if(pilwar == 5) {
        if(warta.json.minggu5.url2 == "" || warta.json.minggu5.url2 == null)
        {
            desdiv2.classList.add("n");
            desk1.innerHTML = "Sesi 1 - 3:";
            jdl.innerHTML = warta.json.minggu5.nama;
            vid.src = warta.json.minggu5.url;
        }
        else
        {
            desdiv2.classList.remove("n");
            desk1.innerHTML = "Sesi 1 - 2:";
            jdl.innerHTML = warta.json.minggu5.nama;
            vid.src = warta.json.minggu5.url;
        }

        if(warta.json.warta_terbaru == "G06") {
            terb_div.classList.remove("n");
        }
        else {
            terb_div.classList.add("n");
        }
    }
    pilwar_akhir = pilwar;
}

function gantib(sesi) {
    if(sesi == '1-2') {
        if(pilwar_akhir == 0) {
            vid.innerHTML = warta.json.minggu04.url;
        }
        else if(pilwar_akhir == 1) {
            vid.innerHTML = warta.json.minggu1.url;
        }
        else if(pilwar_akhir == 2) {
            vid.innerHTML = warta.json.minggu2.url;
        }
        else if(pilwar_akhir == 3) {
            vid.innerHTML = warta.json.minggu3.url;
        }
        else if(pilwar_akhir == 4) {
            vid.innerHTML = warta.json.minggu4.url;
        }
        else if(pilwar_akhir == 5) {
            vid.innerHTML = warta.json.minggu5.url;
        }
    }
    if(sesi == '3') {
        if(pilwar_akhir == 0) {
            vid.innerHTML = warta.json.minggu04.url2;
        }
        else if(pilwar_akhir == 1) {
            vid.innerHTML = warta.json.minggu1.url2;
        }
        else if(pilwar_akhir == 2) {
            vid.innerHTML = warta.json.minggu2.url2;
        }
        else if(pilwar_akhir == 3) {
            vid.innerHTML = warta.json.minggu3.url2;
        }
        else if(pilwar_akhir == 4) {
            vid.innerHTML = warta.json.minggu4.url2;
        }
        else if(pilwar_akhir == 5) {
            vid.innerHTML = warta.json.minggu5.url2;
        }
    }
}

//lightdarkmode
ldnav.style.backgroundColor = "#000000";
ldbg.style.backgroundColor = "#2c2c2c";
lddes.style.backgroundColor = "rgb(116, 116, 116)";
ldlw.style.backgroundColor = "#3f3f3f";
ldv.style.backgroundColor = "rgb(116, 116, 116)";
ldbg.style.color = "white";
topjd.style.color = "white";
cnaid.classList.remove("cna2");
cnaid.classList.add("cna");
burgerid.classList.remove("endnav2");
burgerid.classList.add("endnav");

let burgermenu = false;
let times = true;
function burger() {
    if(times == true) {
        if(burgermenu == false) {
            // animation 
            threebtn.style.animation = "0.5s hilang ease";
            xbtn.style.animation = "0.5s muncul ease";
            bgrid.style.animation = "0.6s ada ease";

            // ganti value
            threebtn.style.rotate = "90deg";
            xbtn.style.rotate = "0deg";
            threebtn.style.opacity = "0";
            xbtn.style.opacity = "1";
            bgrid.style.marginRight = "0vh";

            burgermenu = true;
        }
        else {
            // animation 
            threebtn.style.animation = "0.5s muncul ease";
            xbtn.style.animation = "0.5s hilang ease";
            bgrid.style.animation = "0.6s gak ease";

            // ganti value
            threebtn.style.rotate = "0deg";
            xbtn.style.rotate = "90deg";
            threebtn.style.opacity = "1";
            xbtn.style.opacity = "0";
            bgrid.style.marginRight = "-75vh";

            burgermenu = false;
        }
        times = false;
        gettime();
    }
}

function gettime() {
    setTimeout(function() {
        times = true;
    }, 1000);
}

const npinp22 = document.getElementById("npinp22");
const passimg = document.getElementById("passimg");
function pass() {
    if(npinp22.type == "password") {
        npinp22.type = "text";
        passimg.src = "icon/eye (1).png";
        passimg.classList.remove("passimg2");
        passimg.classList.add("passimg");
    }
    else {
        npinp22.type = "password";
        passimg.src = "icon/eye.png";
        passimg.classList.remove("passimg");
        passimg.classList.add("passimg2");
    }
}

const namainp = document.getElementById("namainp");
const passinp = document.getElementById("npinp22");
const pembsb = document.getElementById("pembsb");
const bgre = document.getElementById("bgre");
const ktkr = document.getElementById("ktkr");
ktkr.style.borderColor = "transparent";
function login(data) {
    if(namainp.value == data.nama && passinp.value == data.pass) {
        pembsb.innerHTML = "";
        ktkr.style.borderColor = "rgb(0, 201, 33)";
        close_login();
        DOM_jemat();
        DOM_lgn();
    }
    else {
        pembsb.innerHTML = "Username / Password yang anda masukan tidak ada di database";
        ktkr.style.borderColor = "rgb(255, 25, 25)";
    }
}

function close_login() {
    bgre.style.animation = "0.5s hilango ease";
    bgre.style.opacity = "0";
    namainp.value = "";
    passinp.value = "";
    setTimeout(function() {
        bgre.classList.add("n");
        bodye.style.overflowY = "auto";
    }, 1000);
}
function open_login() {
    burger();
    bgre.classList.remove("n");
    bgre.style.animation = "0.5s munculo ease";
    bgre.style.opacity = "1";
    namainp.value = "";
    passinp.value = "";
    bodye.style.overflowY = "hidden";
}
function logout() {
    DOM_jemat2();
    DOM_lgn2();
    location.reload();
}

const parent_info = document.getElementById("parent_info");
const isi_info = document.getElementById("isi_info");
function tampil(data) {
    var ada = 0;
    if(data.info == "" || data.info == NaN || data.info == undefined || data.info == null || data.info == "0") {
        // ada++;
    }
    else {
        ada++;
    }

    if(ada > 0) {
        isi_info.innerHTML = data.info;
        parent_info.classList.remove("n");
    }
    else {
        parent_info.classList.add("n");
    }
}

setTimeout(function() {
    const bgfull = document.getElementById("bgfull");
    bgfull.classList.remove("n");
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
