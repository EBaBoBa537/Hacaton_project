// image

if(scrollY < 950) {
    document.getElementById('image_id').style = "margin-top: " + String(20 + scrollY*0.4) + "px;";
} else {
    document.getElementById('image_id').style = "margin-top: " + String(20 + 950*0.4) + "px;";
}

// toBeginButton

if(scrollY < 1000) {
    document.getElementById('toBeginButton_id').style = "opacity: " + String(scrollY*0.001) + ";";
} else {
    document.getElementById('toBeginButton_id').style = "opacity: " + String(1) + ";";
}



document.onscroll = function() { 
    // image

    if(scrollY < 950) {
        document.getElementById('image_id').style = "margin-top: " + String(20 + scrollY*0.4) + "px;";
    } else {
        document.getElementById('image_id').style = "margin-top: " + String(20 + 950*0.4) + "px;";
    }

    // toBeginButton

    if(scrollY < 1000) {
        document.getElementById('toBeginButton_id').style = "opacity: " + String(scrollY*0.001) + ";";
    } else {
        document.getElementById('toBeginButton_id').style = "opacity: " + String(1) + ";";
    }
}
