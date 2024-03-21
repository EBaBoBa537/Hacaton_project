// toBeginButton

if(scrollY < 1000) {
    document.getElementById('toBeginButton_id').style = "opacity: " + String(scrollY*0.001) + ";";
} else {
    document.getElementById('toBeginButton_id').style = "opacity: " + String(1) + ";";
}



document.onscroll = function() { 
    // toBeginButton

    if(scrollY < 1000) {
        document.getElementById('toBeginButton_id').style = "opacity: " + String(scrollY*0.001) + ";";
    } else {
        document.getElementById('toBeginButton_id').style = "opacity: " + String(1) + ";";
    }
}