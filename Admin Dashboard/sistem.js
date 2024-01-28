passi.value = "";
wtinp.value = "";
namainp.value = "";
gambarinp.value = "";
urlinp.value = "";
url2inp.value = "";
titleinp.value = "";
function load_data(data) {
    namainp.value = "";
    gambarinp.value = "";
    urlinp.value = "";
    url2inp.value = "";
    titleinp.value = "";
    editing.classList.add("n");
    database_gup = data;
    //warta terbaru
    wtinp.value = data.json.warta_terbaru;
    //function
    function minggu04_get() {
        let ada = true; 
        const gambar04 = document.getElementById("gambar04");
        const nama04 = document.getElementById("nama04");
        const url04 = document.getElementById("url04");
        const url204 = document.getElementById("url204");
        const title04 = document.getElementById("title04");
        //ada/gak
        const ming04id = document.getElementById("ming04id");
        const h204id = document.getElementById("h204id");
        if(data.json.minggu04.nama == "" || data.json.minggu04.nama == null
        || data.json.minggu04.nama == NaN || data.json.minggu04.nama == undefined) {
            nama04.innerText = "???";
        }
        else {
            nama04.innerText = data.json.minggu04.nama;
        }

        if(data.json.minggu04.url == "" || data.json.minggu04.url == null
        || data.json.minggu04.url == NaN || data.json.minggu04.url == undefined) {
            url04.innerText = "???";
            ada = false;
        }
        else {
            url04.innerText = data.json.minggu04.url;
            ada = true;
        }

        if(data.json.minggu04.url2 == "" || data.json.minggu04.url2 == null
        || data.json.minggu04.url2 == NaN || data.json.minggu04.url2 == undefined) {
            url204.innerText = "???";
        }
        else {
            url204.innerText = data.json.minggu04.url2;
        }

        if(data.json.minggu04.title == "" || data.json.minggu04.title == null
        || data.json.minggu04.title == NaN || data.json.minggu04.title == undefined) {
            title04.innerText = "???";
        }
        else {
            title04.innerText = data.json.minggu04.title;
        }
        function get_images() {
            storageRef.listAll().then(function(result) {
                result.items.forEach(function(itemRef) {
                    var file2 = data.json.minggu04.gambar;
                    itemRef.getDownloadURL();
                    if(itemRef.name == file2) {
                        var string = "images/" + itemRef.name;
                    
                    
                        firebase.storage().ref(string).getDownloadURL().then(function(url) {
                            // console.log("Download URL:", url);
                            gambar04.src = url;
                        }).catch(function(error) {
                            console.error("Failed to get download URL:", error);
                        });
                    }
                });
            }).catch(function(error) {
                console.error("Gagal mendapatkan daftar file anak:", error);
            });
        }
        if(ada == true) {
            get_images();
            ming04id.classList.remove("n");
            h204id.classList.add("n");
        }
        else {
            ming04id.classList.add("n");
            h204id.classList.remove("n");
        }
    }



    function minggu1_get() {
        let ada = true; 
        const gambar1 = document.getElementById("gambar1");
        const nama1 = document.getElementById("nama1");
        const url1 = document.getElementById("url1");
        const url21 = document.getElementById("url21");
        const title1 = document.getElementById("title1");
        //ada/gak
        const ming1id = document.getElementById("ming1id");
        const h21id = document.getElementById("h21id");
        if(data.json.minggu1.nama == "" || data.json.minggu1.nama == null
        || data.json.minggu1.nama == NaN || data.json.minggu1.nama == undefined) {
            nama1.innerText = "???";
        }
        else {
            nama1.innerText = data.json.minggu1.nama;
        }

        if(data.json.minggu1.url == "" || data.json.minggu1.url == null
        || data.json.minggu1.url == NaN || data.json.minggu1.url == undefined) {
            url1.innerText = "???";
            ada = false;
        }
        else {
            url1.innerText = data.json.minggu1.url;
            ada = true;
        }

        if(data.json.minggu1.url2 == "" || data.json.minggu1.url2 == null
        || data.json.minggu1.url2 == NaN || data.json.minggu1.url2 == undefined) {
            url21.innerText = "???";
        }
        else {
            url21.innerText = data.json.minggu1.url2;
        }

        if(data.json.minggu1.title == "" || data.json.minggu1.title == null
        || data.json.minggu1.title == NaN || data.json.minggu1.title == undefined) {
            title1.innerText = "???";
        }
        else {
            title1.innerText = data.json.minggu1.title;
        }
        function get_images() {
            storageRef.listAll().then(function(result) {
                result.items.forEach(function(itemRef) {
                    var file2 = data.json.minggu1.gambar;
                    itemRef.getDownloadURL();
                    if(itemRef.name == file2) {
                        var string = "images/" + itemRef.name;
                    
                    
                        firebase.storage().ref(string).getDownloadURL().then(function(url) {
                            // console.log("Download URL:", url);
                            gambar1.src = url;
                        }).catch(function(error) {
                            console.error("Failed to get download URL:", error);
                        });
                    }
                });
            }).catch(function(error) {
                console.error("Gagal mendapatkan daftar file anak:", error);
            });
        }
        if(ada == true) {
            get_images();
            ming1id.classList.remove("n");
            h21id.classList.add("n");
        }
        else {
            ming1id.classList.add("n");
            h21id.classList.remove("n");
        }
    }


    
    function minggu2_get() {
        let ada = true; 
        const gambar2 = document.getElementById("gambar2");
        const nama2 = document.getElementById("nama2");
        const url2 = document.getElementById("url2");
        const url22 = document.getElementById("url22");
        const title2 = document.getElementById("title2");
        //ada/gak
        const ming2id = document.getElementById("ming2id");
        const h22id = document.getElementById("h22id");
        if(data.json.minggu2.nama == "" || data.json.minggu2.nama == null
        || data.json.minggu2.nama == NaN || data.json.minggu2.nama == undefined) {
            nama2.innerText = "???";
        }
        else {
            nama2.innerText = data.json.minggu2.nama;
        }

        if(data.json.minggu2.url == "" || data.json.minggu2.url == null
        || data.json.minggu2.url == NaN || data.json.minggu2.url == undefined) {
            url2.innerText = "???";
            ada = false;
        }
        else {
            url2.innerText = data.json.minggu2.url;
            ada = true;
        }

        if(data.json.minggu2.url2 == "" || data.json.minggu2.url2 == null
        || data.json.minggu2.url2 == NaN || data.json.minggu2.url2 == undefined) {
            url22.innerText = "???";
        }
        else {
            url21.innerText = data.json.minggu2.url2;
        }

        if(data.json.minggu2.title == "" || data.json.minggu2.title == null
        || data.json.minggu2.title == NaN || data.json.minggu2.title == undefined) {
            title2.innerText = "???";
        }
        else {
            title2.innerText = data.json.minggu2.title;
        }
        function get_images() {
            storageRef.listAll().then(function(result) {
                result.items.forEach(function(itemRef) {
                    var file2 = data.json.minggu2.gambar;
                    itemRef.getDownloadURL();
                    if(itemRef.name == file2) {
                        var string = "images/" + itemRef.name;
                    
                    
                        firebase.storage().ref(string).getDownloadURL().then(function(url) {
                            // console.log("Download URL:", url);
                            gambar2.src = url;
                        }).catch(function(error) {
                            console.error("Failed to get download URL:", error);
                        });
                    }
                });
            }).catch(function(error) {
                console.error("Gagal mendapatkan daftar file anak:", error);
            });
        }
        if(ada == true) {
            get_images();
            ming2id.classList.remove("n");
            h22id.classList.add("n");
        }
        else {
            ming2id.classList.add("n");
            h22id.classList.remove("n");
        }
    }


    
    function minggu3_get() {
        let ada = true; 
        const gambar3 = document.getElementById("gambar3");
        const nama3 = document.getElementById("nama3");
        const url3 = document.getElementById("url3");
        const url23 = document.getElementById("url23");
        const title3 = document.getElementById("title3");
        //ada/gak
        const ming3id = document.getElementById("ming3id");
        const h23id = document.getElementById("h23id");
        if(data.json.minggu3.nama == "" || data.json.minggu3.nama == null
        || data.json.minggu3.nama == NaN || data.json.minggu3.nama == undefined) {
            nama3.innerText = "???";
        }
        else {
            nama3.innerText = data.json.minggu3.nama;
        }
    
        if(data.json.minggu3.url == "" || data.json.minggu3.url == null
        || data.json.minggu3.url == NaN || data.json.minggu3.url == undefined) {
            url3.innerText = "???";
            ada = false;
        }
        else {
            url3.innerText = data.json.minggu3.url;
            ada = true;
        }
    
        if(data.json.minggu3.url2 == "" || data.json.minggu3.url2 == null
        || data.json.minggu3.url2 == NaN || data.json.minggu3.url2 == undefined) {
            url23.innerText = "???";
        }
        else {
            url23.innerText = data.json.minggu3.url2;
        }
    
        if(data.json.minggu3.title == "" || data.json.minggu3.title == null
        || data.json.minggu3.title == NaN || data.json.minggu3.title == undefined) {
            title3.innerText = "???";
        }
        else {
            title3.innerText = data.json.minggu3.title;
        }
        function get_images() {
            storageRef.listAll().then(function(result) {
                result.items.forEach(function(itemRef) {
                    var file2 = data.json.minggu3.gambar;
                    itemRef.getDownloadURL();
                    if(itemRef.name == file2) {
                        var string = "images/" + itemRef.name;
                    
                    
                        firebase.storage().ref(string).getDownloadURL().then(function(url) {
                            // console.log("Download URL:", url);
                            gambar3.src = url;
                        }).catch(function(error) {
                            console.error("Failed to get download URL:", error);
                        });
                    }
                });
            }).catch(function(error) {
                console.error("Gagal mendapatkan daftar file anak:", error);
            });
        }
        if(ada == true) {
            get_images();
            ming3id.classList.remove("n");
            h23id.classList.add("n");
        }
        else {
            ming3id.classList.add("n");
            h23id.classList.remove("n");
        }
    }


    
    function minggu4_get() {
        let ada = true; 
        const gambar4 = document.getElementById("gambar4");
        const nama4 = document.getElementById("nama4");
        const url4 = document.getElementById("url4");
        const url24 = document.getElementById("url24");
        const title4 = document.getElementById("title4");
        //ada/gak
        const ming4id = document.getElementById("ming4id");
        const h24id = document.getElementById("h24id");
        if(data.json.minggu4.nama == "" || data.json.minggu4.nama == null
        || data.json.minggu4.nama == NaN || data.json.minggu4.nama == undefined) {
            nama4.innerText = "???";
        }
        else {
            nama4.innerText = data.json.minggu4.nama;
        }
    
        if(data.json.minggu4.url == "" || data.json.minggu4.url == null
        || data.json.minggu4.url == NaN || data.json.minggu4.url == undefined) {
            url4.innerText = "???";
            ada = false;
        }
        else {
            url4.innerText = data.json.minggu4.url;
            ada = true;
        }
    
        if(data.json.minggu4.url2 == "" || data.json.minggu4.url2 == null
        || data.json.minggu4.url2 == NaN || data.json.minggu4.url2 == undefined) {
            url24.innerText = "???";
        }
        else {
            url24.innerText = data.json.minggu4.url2;
        }
    
        if(data.json.minggu4.title == "" || data.json.minggu4.title == null
        || data.json.minggu4.title == NaN || data.json.minggu4.title == undefined) {
            title4.innerText = "???";
        }
        else {
            title4.innerText = data.json.minggu4.title;
        }
        function get_images() {
            storageRef.listAll().then(function(result) {
                result.items.forEach(function(itemRef) {
                    var file2 = data.json.minggu4.gambar;
                    itemRef.getDownloadURL();
                    if(itemRef.name == file2) {
                        var string = "images/" + itemRef.name;
                    
                    
                        firebase.storage().ref(string).getDownloadURL().then(function(url) {
                            // console.log("Download URL:", url);
                            gambar4.src = url;
                        }).catch(function(error) {
                            console.error("Failed to get download URL:", error);
                        });
                    }
                });
            }).catch(function(error) {
                console.error("Gagal mendapatkan daftar file anak:", error);
            });
        }
        if(ada == true) {
            get_images();
            ming4id.classList.remove("n");
            h24id.classList.add("n");
        }
        else {
            ming4id.classList.add("n");
            h24id.classList.remove("n");
        }
    }


    
    function minggu5_get() {
        let ada = true; 
        const gambar5 = document.getElementById("gambar5");
        const nama5 = document.getElementById("nama5");
        const url5 = document.getElementById("url5");
        const url25 = document.getElementById("url25");
        const title5 = document.getElementById("title5");
        //ada/gak
        const ming5id = document.getElementById("ming5id");
        const h25id = document.getElementById("h25id");
        if(data.json.minggu5.nama == "" || data.json.minggu5.nama == null
        || data.json.minggu5.nama == NaN || data.json.minggu5.nama == undefined) {
            nama5.innerText = "???";
            ada = false;
        }
        else {
            nama5.innerText = data.json.minggu5.nama;
            ada = true;
        }
    
        if(data.json.minggu5.url == "" || data.json.minggu5.url == null
        || data.json.minggu5.url == NaN || data.json.minggu5.url == undefined) {
            url5.innerText = "???";
        }
        else {
            url5.innerText = data.json.minggu5.url;
        }
    
        if(data.json.minggu5.url2 == "" || data.json.minggu5.url2 == null
        || data.json.minggu5.url2 == NaN || data.json.minggu5.url2 == undefined) {
            url25.innerText = "???";
        }
        else {
            url25.innerText = data.json.minggu5.url2;
        }
    
        if(data.json.minggu5.title == "" || data.json.minggu5.title == null
        || data.json.minggu5.title == NaN || data.json.minggu5.title == undefined) {
            title5.innerText = "???";
        }
        else {
            title5.innerText = data.json.minggu5.title;
        }
        function get_images() {
            storageRef.listAll().then(function(result) {
                result.items.forEach(function(itemRef) {
                    var file2 = data.json.minggu5.gambar;
                    itemRef.getDownloadURL();
                    if(itemRef.name == file2) {
                        var string = "images/" + itemRef.name;
                    
                    
                        firebase.storage().ref(string).getDownloadURL().then(function(url) {
                            // console.log("Download URL:", url);
                            gambar5.src = url;
                        }).catch(function(error) {
                            console.error("Failed to get download URL:", error);
                        });
                    }
                });
            }).catch(function(error) {
                console.error("Gagal mendapatkan daftar file anak:", error);
            });
        }
        if(ada == true) {
            get_images();
            ming5id.classList.remove("n");
            h25id.classList.add("n");
        }
        else {
            ming5id.classList.add("n");
            h25id.classList.remove("n");
        }
    }
    //call function
    minggu04_get();
    minggu1_get();
    minggu2_get();
    minggu3_get();
    minggu4_get();
    minggu5_get();
}