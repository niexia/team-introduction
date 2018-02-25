/* 首页大屏广告效果 */
$(function(){
    //小图
    var $imgrollsS = $("#scrollSmallPic div a");
    $imgrollsS.css("opacity","0.7");
    var lenS  = $imgrollsS.length;
    var indexS = 0;
    var adTimerS = null;
    $imgrollsS.mouseover(function(){//获取index
        debugger;
        indexS = $imgrollsS.index(this);
        //index = $(this).index();
        showImgSmall(indexS);
    }).eq(0).mouseover();//意思就是 页面加载时 默认 触发第一个。
    //滑入停止动画，滑出开始动画.
    $('#scrollSmallPic').hover(function(){
        if(adTimerS){
            clearInterval(adTimerS);
        }
    },function(){
        adTimerS = setInterval(function(){
            showImgSmall(indexS);
            indexS++;
            if(indexS === lenS){indexS = 0;}
        } , 5000);
    }).trigger("mouseleave");//第一次自动触发mouseleave，自动滚动

    //大图
    var $imgrolls = $("#scrollBigPic div a");
    $imgrolls.css("opacity","0.7");
    var len  = $imgrolls.length;
    var index = 0;
    var adTimer = null;
    $imgrolls.mouseover(function(){//获取index
        debugger;
        index = $imgrolls.index(this);
        //index = $(this).index();
        showImg(index);
    }).eq(0).mouseover();//意思就是 页面加载时 默认 触发第一个。
    //滑入停止动画，滑出开始动画.
    $('#scrollBigPic').hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(function(){
            showImg(index);
            index++;
            if(index === len){index = 0;}
        } , 5000);
    }).trigger("mouseleave");//第一次自动触发mouseleave，自动滚动
})
//小图
function showImgSmall(index){
    var $rollobj = $("#scrollSmallPic");
    var $rolllist = $rollobj.find("div a");
    var newhref = $rolllist.eq(index).attr("href"); //下面a的href
    $("#JS_imgWrapSmall").attr("href",newhref) //图片上a的href
        .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity","0.7")
        .eq(index).addClass("chos").css("opacity","1");
}
//大图
function showImg(index){
    var $rollobj = $("#scrollBigPic");
    var $rolllist = $rollobj.find("div a");
    var newhref = $rolllist.eq(index).attr("href"); //下面a的href
    $("#JS_imgWrap").attr("href",newhref) //图片上a的href
        .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity","0.7")
        .eq(index).addClass("chos").css("opacity","1");
}