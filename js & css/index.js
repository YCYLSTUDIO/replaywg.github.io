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
let ptf = true;
let bgs = "light";
let minggu = 5;
let terbaru = "minggu4(bl)"; //minggu4(bl),minggu1,minggu2,minggu3,minggu4,minggu5
let thumnail = "thumnail/black.jpeg";
let warta =
        [
            {
                "nama": "WARTA GEREJA MINGGU 31 DESEMBER 2023",
                "gambar": "thumnail/31 DES 2023.png",
                "url": "https://drive.google.com/file/d/1Mz9BIHcytsbRk2gbnZT5x55Ehy_lWHKt/preview",
                "url2": "",
                "title": "31 DES 2023"
            },
            {
                "nama": "",
                "gambar": "",
                "url": "",
                "url2": "",
                "title": ""
            },
            {
                "nama": "",
                "gambar": "",
                "url": "",
                "url2": "",
                "title": ""
            },
            {
                "nama": "",
                "gambar": "",
                "url": "",
                "url2": "",
                "title": ""
            },
            {
                "nama": "",
                "gambar": "",
                "url": "",
                "url2": "",
                "title": ""
            },
            {
                "nama": "",
                "gambar": "",
                "url": "",
                "url2": "",
                "title": ""
            }
        ]


        //function
        mlaw();
        function mlaw() {
            setTimeout(function() {
            // awal
            if(terbaru == "minggu4(bl)") {
                mulai(0)
            }
            else if(terbaru == "minggu1") {
                mulai(1)
            }
            else if(terbaru == "minggu2") {
                mulai(2)
            }
            else if(terbaru == "minggu3") {
                mulai(3)
            }
            else if(terbaru == "minggu4") {
                mulai(4)
            }
            else if(terbaru == "minggu5") {
                mulai(5)
            }
            else {
                alert("kami mempunyai sedikit masalah")
            }
            }, 1000);
        }

        function display() {
            // awal
            if(terbaru == "minggu4(bl)") {
                mulai(0)
            }
            else if(terbaru == "minggu1") {
                mulai(1)
            }
            else if(terbaru == "minggu2") {
                mulai(2)
            }
            else if(terbaru == "minggu3") {
                mulai(3)
            }
            else if(terbaru == "minggu4") {
                mulai(4)
            }
            else if(terbaru == "minggu5") {
                mulai(5)
            }
            else {
                alert("kami mempunyai sedikit masalah")
            }

            //awal sesi2
            if(minggu == 0) {
                ming1.classList.add("ini");
                ming1.classList.add("n");
                ming2.classList.add("ini");
                ming2.classList.add("n");
                ming3.classList.add("isi");
                ming3.classList.add("n");
                ming4.classList.add("isi");
                ming4.classList.add("n");
                ming5.classList.add("isi");
                ming5.classList.add("n");
            }
            else if(minggu == 1) {
                ming2.classList.add("ini");
                ming2.classList.add("n");
                ming3.classList.add("isi");
                ming3.classList.add("n");
                ming4.classList.add("isi");
                ming4.classList.add("n");
                ming5.classList.add("isi");
                ming5.classList.add("n");
            }
            else if(minggu == 2) {
                ming3.classList.add("isi");
                ming3.classList.add("n");
                ming4.classList.add("isi");
                ming4.classList.add("n");
                ming5.classList.add("isi");
                ming5.classList.add("n");
            }
            else if(minggu == 3) {
                ming4.classList.add("isi");
                ming4.classList.add("n");
                ming5.classList.add("isi");
                ming5.classList.add("n");
            }
            else if(minggu == 4) {
                ming5.classList.add("isi");
                ming5.classList.add("n");
            }
            // panggil
            minggu1();
            minggu2();
            minggu3();
            minggu4();
            minggu5();
            minggu6();

            // function
            function minggu1() {
                if
                (warta[0].gambar == "" || warta[0].gambar == null || warta[0].gambar == undefined || warta[0].gambar == NaN
                || warta[0].url == "" || warta[0].url == null || warta[0].url == undefined || warta[0].url == NaN) {
                    gambars.src = thumnail;
                    titles.innerHTML = "(kosong)";
                    titles.style.marginTop = "-110px";
                    ming44.classList.add("n");
                }
                else {
                    gambars.src = warta[0].gambar;
                    titles.innerHTML = warta[0].title;
                    titles.style.marginTop = "-110px";
                    ming44.classList.remove("n");
                }
            }
            function minggu2() {
                if
                (warta[1].gambar == "" || warta[1].gambar == null || warta[1].gambar == undefined || warta[1].gambar == NaN
                || warta[1].url == "" || warta[1].url == null || warta[1].url == undefined || warta[1].url == NaN) {
                    gambars2.src = thumnail;
                    titles2.innerHTML = "(kosong)";
                    titles2.style.marginTop = "-110px";
                    ming1.classList.add("n");
                }
                else {
                    gambars2.src = warta[1].gambar;
                    titles2.innerHTML = warta[1].title;
                    titles2.style.marginTop = "-110px";
                    ming1.classList.remove("n");
                }
            }
            function minggu3() {
                if
                (warta[2].gambar == "" || warta[2].gambar == null || warta[2].gambar == undefined || warta[2].gambar == NaN
                || warta[2].url == "" || warta[2].url == null || warta[2].url == undefined || warta[2].url == NaN) {
                    gambars3.src = thumnail;
                    titles3.innerHTML = "(kosong)";
                    titles3.style.marginTop = "-110px";
                    ming2.classList.add("n");
                }
                else {
                    gambars3.src = warta[2].gambar;
                    titles3.innerHTML = warta[2].title;
                    titles3.style.marginTop = "-110px";
                    ming2.classList.remove("n");
                }
            }
            function minggu4() {
                if
                (warta[3].gambar == "" || warta[3].gambar == null || warta[3].gambar == undefined || warta[3].gambar == NaN
                || warta[3].url == "" || warta[3].url == null || warta[3].url == undefined || warta[3].url == NaN) {
                    gambars4.src = thumnail;
                    titles4.innerHTML = "(kosong)";
                    titles4.style.marginTop = "-110px";
                    ming3.classList.add("n");
                }
                else {
                    gambars4.src = warta[3].gambar;
                    titles4.innerHTML = warta[3].title;
                    titles4.style.marginTop = "-110px";
                    ming3.classList.remove("n");
                }
            }
            function minggu5() {
                if
                (warta[4].gambar == "" || warta[4].gambar == null || warta[4].gambar == undefined || warta[4].gambar == NaN
                || warta[4].url == "" || warta[4].url == null || warta[4].url == undefined || warta[4].url == NaN) {
                    gambars5.src = thumnail;
                    titles5.innerHTML = "(kosong)";
                    titles5.style.marginTop = "-110px";
                    ming4.classList.add("n");
                }
                else {
                    gambars.src = warta[4].gambar;
                    titles.innerHTML = warta[4].title;
                    titles.style.marginTop = "-110px";
                    ming4.classList.remove("n");
                }
            }
            function minggu6() {
                if
                (warta[5].gambar == "" || warta[5].gambar == null || warta[5].gambar == NaN
                || warta[5].url == "" || warta[5].url == null || warta[5].url == NaN) {
                    gambars6.src = thumnail;
                    titles6.innerHTML = "(kosong)";
                    titles6.style.marginTop = "-110px";
                    ming5.classList.add("n");
                }
                else {
                    gambars6.src = warta[5].gambar;
                    titles6.innerHTML = warta[5].title;
                    titles6.style.marginTop = "-110px";
                    ming5.classList.remove("n");
                }
            }
        }

        function mulai(warke) {
            if
            (!warta[warke].gambar == "" || !warta[warke].gambar == null || !warta[warke].gambar == NaN
            || !warta[warke].url == "" || !warta[warke].url == null || !warta[warke].url == NaN) {
            // alert(warke);
            vid.src = warta[warke].url;
            jdl.innerHTML = warta[warke].nama + "";
            if(warta[warke].url2 == null || warta[warke].url2 == "" || warta[warke].url2 == NaN) {
                desk1.innerHTML = "Sesi 1-3: ";
                desk2.innerHTML = "Sesi 3: ";
                desdiv2.style.display = "none";
                vid.src = warta[warke].url;
                jdl.innerHTML = warta[warke].nama + "<br>(Sesi 1-3)";
            }
            else {
                desk1.innerHTML = "Sesi 1-2: ";
                desk2.innerHTML = "Sesi 3: ";
                desdiv2.style.display = "flex";
                vid.src = warta[warke].url;
                jdl.innerHTML = warta[warke].nama + "<br>(Sesi 1-2)";
            }

            

            if(warke == 0) {
                ming44.classList.add("ini2");
            }
            else if(warke == 1) {
                ming1.classList.add("ini2");
            }
            else if(warke == 2) {
                ming2.classList.add("ini2");
            }
            else if(warke == 3) {
                ming3.classList.add("ini2");
            }
            else if(warke == 4) {
                ming4.classList.add("ini2");
            }
            else if(warke == 5) {
                ming5.classList.add("ini2");
            }

            // terakhir tonton
            if(lastmulai == 0) {
                titles.style.marginTop = "-110px";
                gambars.src = warta[lastmulai].gambar;
                titles.innerHTML = warta[lastmulai].title;
                ming44.classList.remove("ini2");
            }
            else if(lastmulai == 1) {
                titles2.style.marginTop = "-110px";
                gambars2.src = warta[lastmulai].gambar;
                titles2.innerHTML = warta[lastmulai].title;
                ming1.classList.remove("ini2");
            }
            else if(lastmulai == 2) {
                titles3.style.marginTop = "-110px";
                gambars3.src = warta[lastmulai].gambar;
                titles3.innerHTML = warta[lastmulai].title;
                ming2.classList.remove("ini2");
            }
            else if(lastmulai == 3) {
                titles4.style.marginTop = "-110px";
                gambars4.src = warta[lastmulai].gambar;
                titles4.innerHTML = warta[lastmulai].title;
                ming3.classList.remove("ini2");
            }
            else if(lastmulai == 4) {
                titles5.style.marginTop = "-110px";
                gambars5.src = warta[lastmulai].gambar;
                titles5.innerHTML = warta[lastmulai].title;
                ming4.classList.remove("ini2");
            }
            else if(lastmulai == 5) {
                titles6.style.marginTop = "-110px";
                gambars6.src = warta[lastmulai].gambar;
                titles6.innerHTML = warta[lastmulai].title;
                ming5.classList.remove("ini2");
            }

            //set lastmulai
                setTimeout(function() {
                    lastmulai = warke;
                    // console.clear();
                }, 1000);
            }
        }
        function gantib(ibd) {
            vid.src = warta[lastmulai].url2;
            jdl.innerHTML = warta[lastmulai].nama;
            if(ibd == "1-2" && warta[lastmulai].url2 == null || warta[lastmulai].url2 == "" || warta[lastmulai].url2 == NaN) {}
            else if (ibd == "1-2") {
                vid.src = warta[lastmulai].url;
                jdl.innerHTML = warta[lastmulai].nama + " (Sesi 1-2)";
            }
            else {
                vid.src = warta[lastmulai].url2;
                jdl.innerHTML = warta[lastmulai].nama + " (Sesi 3)";
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
        // enid.classList.remove("endnav2");
        // enid.classList.add("endnav");
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
                    bgrid.style.marginRight = "-65vh";

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

        //panggil
        display();

        //no drag
        document.addEventListener('dragstart', function (event) {
            event.preventDefault();
        });