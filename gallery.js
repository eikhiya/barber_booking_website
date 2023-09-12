
// control the image carousel in the home page

$(document).ready( () => {

    const carousel = document.getElementById("carousel"); // get the carousel element from the DOM
    const leftBtn = document.getElementById("left_button"); // get the left arrow button from the DOM
    const rightBtn = document.getElementById("right_button"); // get the right arrow button from the DOM

    let currentImageIndex = 0; // set the current image index to 0
    const imageList = document.getElementById("image_list").querySelectorAll("img"); // get all images from the image list

    // hide all images except the first 3
    for (let i = 3; i < imageList.length; i++) {
        imageList[i].style.display = "none";
    }

    // add click event listener to the right arrow button
    // shift the images to the left at a time. Display the next 3 images
    // if the last 3 images are displayed, the right arrow button should be disabled
    rightBtn.addEventListener("click", function() {
        if (currentImageIndex < imageList.length - 3) {
            currentImageIndex++;
            for (let i = 0; i < imageList.length; i++) {
                if (i >= currentImageIndex && i < currentImageIndex + 3) {
                    imageList[i].style.display = "block";
                } else {
                    imageList[i].style.display = "none";
                }
            }
            if (currentImageIndex === imageList.length - 3) {
                rightBtn.disabled = true;
            }
            leftBtn.disabled = false;
        }
    });

    // add click event listener to the left arrow button
    // shift the images to the left at a time. Display the next 3 images
    // if the first 3 images are displayed, the left arrow button should be disabled
    leftBtn.addEventListener("click", function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            for (let i = 0; i < imageList.length; i++) {
                if (i >= currentImageIndex && i < currentImageIndex + 3) {
                    imageList[i].style.display = "block";
                } else {
                    imageList[i].style.display = "none";
                }
            }
            if (currentImageIndex === 0) {
                leftBtn.disabled = true;
            }
            rightBtn.disabled = false;
        }
    });
});