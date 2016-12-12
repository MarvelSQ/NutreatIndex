/**
 * Created by sunqiang on 2016/11/16.
 */
var tops
var user_android=document.getElementById('user-aload')
var user_ios=document.getElementById('user-iload')
var nutrist_android=document.getElementById('nutrist-aload')
var nutrist_ios=document.getElementById('nutrist-iload')

window.onload=function () {
    tops=0
    if(isWeiXin()){
        user_android.addEventListener('click',function () {
            jumptoUser()
        })
        user_ios.addEventListener('click',function () {
            jumptoUser()
        })
        nutrist_android.addEventListener('click',function () {
            jumptoNutrist()
        })
        nutrist_ios.addEventListener('click',function () {
            jumptoNutrist()
        })
    }
}
window.onscroll=function(){
    // var t =document.documentElement.scrollTop||document.body.scrollTop;
    // console.log(t+":"+tops)
}
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();

    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}
function jumptoNutrist() {
    window.location.href="http://healthit.cn/nutreat/Home/index/consultant_app"
}
function jumptoUser() {
    window.location.href="http://nutreat.cn/nutreat/index.php/Home/Index/down_page"
}