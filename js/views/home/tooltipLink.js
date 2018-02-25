/*链接文字提示*/
$(function () {
    var x=10;
    var y=20;
    /*e:Event对象代表事件的状态，
    比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态。
    事件通常与函数结合使用，函数不会在事件发生前被执行！*/
    $("a.tooltip").mouseover(function (e) {
        debugger;
        this.myTitle=this.title;//原来的title赋值给myTitle
        this.title="";//清掉title不显示
        //创建div元素
        var tooltip="<div id='tooltip'>"+this.myTitle+"</div>";
        //将它追加到文档中
        $("body").append(tooltip);
        //对它进行定位
        $("#tooltip").css({//定位置，另外在css文件面设置它的样式
            "top":(e.pageY+y)+"px",//取设置y坐标
            "left":(e.pageX+x)+"px"//设置x坐标
        }).show("fast");
    }).mouseout(function () {
        this.title=this.myTitle;//将title赋值回来
        $("#tooltip").remove();//移除
    }).mousemove(function (e) {//效果随着鼠标移动
        $("#tooltip").css({
            "top":(e.pageY+y)+"px",
            "left":(e.pageX+x)+"px"
        });
    });
});