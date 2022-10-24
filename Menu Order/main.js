
function openpage(namepage, elmnt) {
    var i, j, tabcontent, tabminicontent, tabbutton;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabminicontent = document.getElementsByClassName("tabminicontent");
    for (i = 0; i < tabminicontent.length; i++) {
        tabminicontent[i].style.display = "none";
    }

    tabbutton = document.getElementsByClassName("tabbutton");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].style.backgroundColor = "white";
        
    }
     
    document.getElementById(namepage).style.display = "block";
    document.getElementById(elmnt).style.backgroundColor = "#C8102E";
    document.getElementById(elmnt).style.color = "white";
}

    document.getElementById("sweetbutton").click();
    function closelogin() {
        document.getElementById("login").style.display = 'none';

    }
    function openlogin() {
        document.getElementById("login").style.display = 'flex';
        console.log("test")
    }
