// toBeginButton

if(scrollY < 1000) {
    document.getElementById('toBeginButton_id').style = "opacity: " + String(scrollY*0.001) + ";";
} else {
    document.getElementById('toBeginButton_id').style = "opacity: " + String(1) + ";";
}

// menu

if(scrollY < 860) {
    document.getElementById('menu_id').style = "visibility: hidden;";
} else {
    document.getElementById('menu_id').style = "visibility: visible;";
}



document.onscroll = function() { 
    // toBeginButton

    if(scrollY < 1000) {
        document.getElementById('toBeginButton_id').style = "opacity: " + String(scrollY*0.001) + ";";
    } else {
        document.getElementById('toBeginButton_id').style = "opacity: " + String(1) + ";";
    }

    // menu

    if(scrollY < 860) {
        document.getElementById('menu_id').style = "opacity: 0";
    } else {
        document.getElementById('menu_id').style = "opacity: 1";
    }
}