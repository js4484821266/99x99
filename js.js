var lmn_a, lmn_b, lmnoa, lmnob, rspns, crrct, answr, a, b;
function set_pair() {
    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);
    lmn_a.innerHTML = a;
    lmn_b.innerHTML = b;
}
window.onload = function () {
    lmn_a = document.getElementById("a");
    lmn_b = document.getElementById("b");
    lmnoa = document.getElementById("old_a");
    lmnob = document.getElementById("old_b");
    rspns = document.getElementById("response");
    crrct = document.getElementById("correct");
    answr = document.getElementById("answer");
    set_pair();
}
function submit(e) {
    if (e.keyCode == 13) {
        lmnoa.innerHTML = a;
        lmnob.innerHTML = b;
        crrct.innerHTML = a * b;
        if (answr.value != a * b) {
            rspns.innerHTML = answr.value;
        }
        else {
            rspns.innerHTML = "";
        }
        set_pair();
        answr.value = "";
    }
}