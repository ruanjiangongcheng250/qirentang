window.onload = function(){
    //返回顶部的控制
    function checkTop(){
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var top_div = $( "#goTop" );
        if( t >= 300 ) {
            top_div.show(500);
        } else {
            top_div.hide(500);
        }
    }
    setInterval(checkTop,500);

    //nav
    var arr=window.location.href.split("/");
    //匹配地址栏最后一项
    var address=arr[arr.length-1].substr(0,4);

    /*^=p匹配以 address开头的字符串*/
    if(address){
        $("#nav li a").removeClass("on");
        $("#nav li a[href^='"+address+"']").addClass("on");
    }else {
        /*默认给首页添加属性*/
        $("#nav li a[href^='index']").addClass("on")
    };
    //
    $("#tushou").click(function () {
        console.log(111)
        var len = $(".yewu").offset().top;
        $('html,body').animate({scrollTop: len}, 800);
    });

    $("#zhenggu").click(function () {
        var len = $(".yewu-list li:eq(1)").offset().top;
        $('html,body').animate({scrollTop: len}, 800);
    });
    $("#liliao").click(function () {
        var len = $(".yewu-list li:eq(2)").offset().top;
        $('html,body').animate({scrollTop: len}, 800);
    });
    $("#anmo").click(function () {
        var len = $(".yewu-list li:eq(3)").offset().top;
        $('html,body').animate({scrollTop: len}, 800);
    })


    //地图
    var map = new AMap.Map('map',{
        zoom: 10,
        center: [116.324487,39.982786]
    });

    var marker = new AMap.Marker({
        position: [116.324487,39.982786],
        map:map
    });

    var infowindow = new AMap.InfoWindow({
        content: '<h3>齐仁堂健康管理（北京）有限公司</h3><div>地址：海淀区中关村科学院南路21号新科祥园甲4号齐仁堂（搜狐媒体大厦，融科咨询中心）</div><h4>电话:(010)82523889</h4>',
        offset: new AMap.Pixel(0, -30),
        size:new AMap.Size(210,0)
    });

    infowindow.open(map,new AMap.LngLat(116.324487,39.982786));

    AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
        var toolBar = new AMap.ToolBar();
        var scale = new AMap.Scale();
        map.addControl(toolBar);
        map.addControl(scale);
    });
    
}