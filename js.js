var lmn_a, lmn_b;
function get_pair() {
    lmn_a = document.getElementById("a");
    lmn_b = document.getElementById("b");
}
function set_pair() {
    lmn_a.innerHTML = Math.floor(Math.random() * 100);
    lmn_b.innerHTML = Math.floor(Math.random() * 100);
}
window.onload = function () {
    get_pair();
    set_pair();
}