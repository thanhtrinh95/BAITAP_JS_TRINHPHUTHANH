//Bài 1 :
document.getElementById('btnTinhLuong').onclick = function(){
    //input: soNgayLam
    var soNgayLam = +document.getElementById('ngaylam').value;
    //output: luong
    var luong = soNgayLam * 100000;
    var vndFormat = new Intl.NumberFormat('it-IT');
    //Hiện thị output ra giao diện
     document.getElementById('ket-qua-bai-1').innerHTML = `Tiền lương của bạn là ${vndFormat.format(luong)} VNĐ`;
}


//Bài 2 :
document.getElementById('btnTinhTB').onclick = function(){
    //input : so1, so2 ,so3 ,so4 ,so5
    var so1 = +document.getElementById('so1').value;
    var so2 = +document.getElementById('so2').value;
    var so3 = +document.getElementById('so3').value;
    var so4 = +document.getElementById('so4').value;
    var so5 = +document.getElementById('so5').value;
    //out:trungbinh
    var trungbinh = (so1 + so2 + so3 + so4 +so5)/5;
    //Hiển thị out ra giao diện
    document.getElementById('ket-qua-bai-2').innerHTML = 'Gía trị Trung Bình là ' + trungbinh;

}

//Bài 3 :
document.getElementById('btnQuyĐoi').onclick = function(){
    //input : soUSD
    var soUSD = +document.getElementById('soUSD').value;
    //out : soVND
    var soVND = soUSD*23500;
    var vndFormat = new Intl.NumberFormat('it-IT');

    document.getElementById('ket-qua-bai-3').innerHTML = `Thành tiền ${vndFormat.format(soVND)} VNĐ`
}

//Bài 4 :

document.getElementById('btnTinhDTCV').onclick = function(){
    //input : chieudai , chieurong
    var chieudai = +document.getElementById('chieudai').value;
    var chieurong = +document.getElementById('chieurong').value;
    //output: dienTich , chuVi
    var dienTich = chieudai*chieurong;
    var chuVi = (chieudai*chieurong)/2;
    //Hiện thị ra giao diện
    document.getElementById('ket-qua-bai-4').innerHTML = `
        Diện tích hình chữ nhật là : ${dienTich} <br>
        Chu Vi hình chữ nhật là : ${chuVi}
    `;
}

//Bài 5: 
document.getElementById('btnTinhKýSo').onclick = function(){
    //input : kyso
    var kyso = +document.getElementById('kyso').value;
    //output: soHangdv, soHangchuc
    var soHangdv = Math.floor(kyso/10);
    var soHangchuc = kyso%10;
    var tongKyso = soHangdv + soHangchuc;
    document.getElementById('ket-qua-bai-5').innerHTML = `Tổng 2 ký số là ${tongKyso}`;

}