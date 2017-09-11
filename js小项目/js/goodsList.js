(function (){
    var oProList=document.querySelector("#proList");
    var oMainProList=document.querySelector(".mainProList");

    myajax.get("http://h6.duchengjiu.top/shop/api_cat.php",{},function (error,responseText) {
        var json=JSON.parse(responseText);
        console.log(json);
        var data=json.data;
        for(var i=0;i<data.length;i++){
            var obj=data[i];
            oProList.innerHTML+=` <li class="proListItem" data-index="0">
       <a href="goodsList.html?cat_id=${obj.cat_id}">${obj.cat_name}</a></li>`;
        }
        var navLi = document.querySelector('#proList').querySelectorAll('li');
        changeClass(navLi,localStorage.currentNav,'current');
    });

    var  cat_id= matchQueryString("cat_id");
    myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",
        {cat_id ,"pagesize":12},function (error,responseText) {
        var json=JSON.parse(responseText);
        console.log(json);
        var data=json.data;
        for(var i=0;i<data.length;i++){
            var obj=data[i];
            oMainProList.innerHTML+=`
            <li class="mainProListItem">
            <a href="goodsDetail.html?goods_id=${obj.goods_id}">
              <div class="ProListImg">
                <img src="${obj.goods_thumb}"/>
                <div class="mark"></div>
              </div>
              <div class="ProListInfor">
                <h3 class="ProName" title="仅重600g便携蓝牙音箱 丹麦设计 专业级音质 防滑防水 长续航">${obj.goods_name}</h3>
                <p class="des">${obj.goods_desc}</p>
                <span class="price"><i>&yen;</i>${obj.price}</span>
              </div>
            </a>
          </li>
           `;
        }
    });
})();
