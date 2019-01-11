function Cong() {
    var strSo1 = parseInt(document.idSo.so1.value);
    var strSo2 = parseInt(document.idSo.so2.value);
    var kq= (strSo1 + strSo2);
    var ht = document.getElementById("idH1");
    ht.innerText = "Kết quả = " + kq;
}
function Tru() {
    var strSo1 = parseInt(document.idSo.so1.value);
    var strSo2 = parseInt(document.idSo.so2.value);
    var kq = (strSo1 - strSo2);
    var ht = document.getElementById("idH1");
    ht.innerText = "Kết quả = " + kq;
}
function Nhan() {
    var strSo1 = parseInt(document.idSo.so1.value);
    var strSo2 = parseInt(document.idSo.so2.value);
    var kq = (strSo1 * strSo2);
    var ht = document.getElementById("idH1");
    ht.innerText = "Kết quả = " + kq;
}
function Chia() {
    var strSo1 = parseInt(document.idSo.so1.value);
    var strSo2 = parseInt(document.idSo.so2.value);
    var kq = (strSo1 / strSo2);
    var ht = document.getElementById("idH1");
    ht.innerText = "Kết quả = " + kq;
}