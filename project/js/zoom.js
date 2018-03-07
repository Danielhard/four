function Zoom() {
    var oBigPic = document.querySelector(".bigPic");
    var oSmallPic = document.querySelector('.productDetailImgB');
    var oZoom = document.querySelector('.zoom');
    var oProductDetailLeft=document.querySelector(".productDetailLeft");
    var oMark=document.querySelector(".mark");
    var bigPicWidth = 480;
    var smallPicWidth = parseFloat(fetchComputedStyle(oSmallPic, 'width'));
    var zoomWidth = parseFloat(fetchComputedStyle(oZoom, 'width'));
    var rate = (960 - bigPicWidth) / (smallPicWidth - zoomWidth);
    var flag = false;

    oSmallPic.onmouseover = function (event) {
        if (flag) {   //如果上一次动画还未结束, 那么什么也不做
            return ;
        }
        flag = true;
        var event=event||window.event;
        var currentTarget=event.currentTarget;
        // if(currentTarget.className==="productDetailImgB"){
            oZoom.style.display = 'block';
            oBigPic.style.display = 'block';
            oBigPic.style.zIndex=2;
            oMark.style.backgroundColor="rgb("+255+","+255+","+255+")";
            oMark.style.opacity = 0;
            animate(oBigPic,{"width":480,"height":480,"top":0,"left":500},500,"Cubic.easeOut",function () {
                oZoom.style.zIndex = 4
          })
          animate(oMark, {"opacity": 0.7},1500,'Cubic.easeOut',function () {})
        // }
    }
    oSmallPic.onmouseleave = function (event) {
        var event=event||window.event;
        if (event.target.classList.contains('zoom')) {
            return 
        }
         oZoom.style.display = 'none';
         oMark.style.backgroundColor = '';
         animate(oBigPic,{"width":50,"height":50,"top":240,"left":240},500,"Cubic.easeIn",function () {
            flag = false;
            oBigPic.style.display = 'none';
            oBigPic.style.zIndex=1;
            })
    }
    oSmallPic.onmousemove = function (event) {
        event = event || window.event;
        var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var x = event.clientX - (getAllLeft(oSmallPic) - scrollLeft) - oZoom.clientWidth / 2;
        var y = event.clientY - (getAllTop(oSmallPic) - scrollTop) - oZoom.clientHeight / 2;
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > oSmallPic.clientWidth - oZoom.clientWidth) {
            x = oSmallPic.clientWidth - oZoom.clientWidth;
        }
        if (y > oSmallPic.clientHeight - oZoom.clientHeight) {
            y = oSmallPic.clientHeight - oZoom.clientHeight;
        }
        oZoom.style.top = y + 'px';                // 改变zoom框中背景图的位置
        oZoom.style.left = x + 'px';
        oZoom.style.backgroundPosition = -x + 'px '+ -y + 'px';
        oBigPic.style.backgroundPosition = -x * rate + 'px ' + -y * rate + 'px';
    }
    function fetchComputedStyle(obj, property) {
        if (window.getComputedStyle) {
            property = property.replace(/[A-Z]/g, function (match) {
                return '-' + match.toLowerCase();
            });
            return window.getComputedStyle(obj)[property]; //中括号里面可以是变量
        } else {
            property = property.replace(/-([a-z])/g, function (match, $1) {
                return $1.toUpperCase();
            });
            return obj.currentStyle[property];
        }
    }

    function getAllTop(obj) {
        var allTop = obj.offsetTop;
        var currentObj = obj;
        while ((currentObj = currentObj.offsetParent)) {
            allTop += currentObj.offsetTop;
        }
        return allTop;
    }

    function getAllLeft(obj) {
        var allLeft = obj.offsetLeft;
        var currentObj = obj;
        while ((currentObj = currentObj.offsetParent)) {
            allLeft += currentObj.offsetLeft;
        }
        return allLeft;
    }
    function setAlphaOpacity(elm,value){
        elm=typeof elm=="string"?document.getElementById(elm):elm;
        if(document.all){
            elm.style.filter='alpha(opacity='+value+')';
        }else{
            elm.style.opacity=value/100;
        }
    }
}


