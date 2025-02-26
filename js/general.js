function showModal(event) {
    var modal = document.getElementById("hoverModal");
    modal.style.display = "block";
    modal.style.left = event.pageX + "px";
    modal.style.top = event.pageY + "px";
}

function hideModal() {
    document.getElementById("hoverModal").style.display = "none";
}

let upButton = document.getElementsByClassName("hoverbtn")[0];

window.onscroll = function () { scrollDisplay() };

function scrollDisplay() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upButton.style.display = "block";
}
else {
    upButton.style.display = "none";
}
}

function scrollFunction(){
window.scrollTo({top: 0, behavior: 'smooth'});
}