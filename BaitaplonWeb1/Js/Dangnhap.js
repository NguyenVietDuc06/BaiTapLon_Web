var admin_name='admin';
var admin_pass='123456';
function Dangnhap(){
    let ad_name=document.getElementById('nametxt').value;
    let ad_pass=document.getElementById('passtxt').value;
    let error_txt=document.getElementById('Dangnhaploi');
    if(ad_name==admin_name && ad_pass==admin_pass){
        location.href='../HTML/Thongke.html';
    }
    else{
        error_txt.textContent="Vui lòng thử lại."
    }
}