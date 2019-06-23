var jiesong= document.getElementById('jiesong');
var body = document.getElementsByTagName('body')[0];
var jiesongimg1=document.getElementById('jiesong-img1');
window.onresize=function(){
    jiesong.style.width=body.style.width;
    document.getElementById('navvv').style.width=body.style.width;
    if(document.body.clientWidth<1160){
        jiesongimg1.setAttribute("width","550px");
    }
    if(document.body.clientWidth>=1160){
        jiesongimg1.setAttribute("width","930px");
    }
    if(document.body.clientWidth<751){
        document.getElementById('newnav').className='navbar-fixed-top';
    }
    if(document.body.clientWidth>=751){
        document.getElementById('newnav').className='navdiv';
    }
}