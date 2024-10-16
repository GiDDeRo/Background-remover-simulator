const imgBox = document.querySelector(".img-box")
const original = document.getElementById("original");
const imgWrap = document.getElementById("imgWrap");
const icon = document.getElementById("icon")

original.style.width = (imgBox.offsetWidth - 5) + "px";

const leftSpace = imgBox.offsetLeft; // return postion of element

imgBox.onmousemove = function (e) {
    const boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    icon.style.left = boxWidth;
}

