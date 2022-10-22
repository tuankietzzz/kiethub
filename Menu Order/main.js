function open(namepage, elmnt) {
    var i, tabcontent, tabminicontent, tabbutton;
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
        tabbutton[i].style.backgroundcolor = "";
    }
     
    document.getElementById(namepage).style.display = "block";
    elmnt.style.backgroundcolor = "red";
}
