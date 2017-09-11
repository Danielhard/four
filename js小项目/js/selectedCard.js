(function () {
    var oLi=document.querySelector(".storesame_link").querySelectorAll("li");
    var oMainscroll=document.querySelector("#storesame_box");
    var width=1200;
    var time=500;
    for(var i=0;i<oLi.length;i++){
        oLi[i].index=i;
        oLi[i].onmouseenter=function () {
            for (var j = 0; j < oLi.length; j++) {
                oLi[j].className = "";
            }
            this.className = " select_current";
            animate(oMainscroll,{left:-width*this.index},time,"Linear");
        }
      }
})();


