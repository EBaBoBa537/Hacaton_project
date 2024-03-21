// image

if(scrollY < 950) {
    document.getElementById('image_id').style = "margin-top: " + String(scrollY*0.4) + "px;";
} else {
    document.getElementById('image_id').style = "margin-top: " + String(950*0.4) + "px;";
}

// toBeginButton

if(scrollY < 1000) {
    document.getElementById('toBeginButton_id').style = "opacity: " + String(scrollY*0.001) + ";";
} else {
    document.getElementById('toBeginButton_id').style = "opacity: " + String(1) + ";";
}

// menu

if(scrollY < 955) {
    document.getElementById('menu_id').style = "visibility: hidden;";
} else {
    document.getElementById('menu_id').style = "visibility: visible;";
}



document.onscroll = function() { 
    // image

    if(scrollY < 950) {
        document.getElementById('image_id').style = "margin-top: " + String(scrollY*0.4) + "px;";
    } else {
        document.getElementById('image_id').style = "margin-top: " + String(950*0.4) + "px;";
    }

    // toBeginButton

    if(scrollY < 1000) {
        document.getElementById('toBeginButton_id').style = "opacity: " + String(scrollY*0.001) + ";";
    } else {
        document.getElementById('toBeginButton_id').style = "opacity: " + String(1) + ";";
    }

    // menu

    if(scrollY < 955) {
        document.getElementById('menu_id').style = "opacity: 0";
    } else {
        document.getElementById('menu_id').style = "opacity: 1";
    }
}
