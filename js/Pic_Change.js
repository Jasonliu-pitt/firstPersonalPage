var photoArray = new Array(3); 
var counter = 1;
if(document.images) {
    for(i = 1; i < 4; i++){
        photoArray[i] = new Image(540, 720);
        photoArray[i].src = "Images/life_photo_"+ i + ".jpg";
    }
}
function changePic(){
    if(counter > 3)
        counter = 1;
    document.life_photo.src = photoArray[counter].src; 
    counter++; 
}
var timer = window.setInterval("changePic()", 3000);