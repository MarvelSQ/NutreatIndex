/**
 * Created by sunqiang on 2016/11/16.
 */
var tops
window.onload=function () {
    tops=0
}
window.onscroll=function(){
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    console.log(t+":"+tops)


}