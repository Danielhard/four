(function(){
    var oBcProListCon=document.querySelector("#bcProListCon");
    var oCountCon=document.querySelector(".countCon");

    var token=matchQueryString("token");
     myajax.get("http://h6.duchengjiu.top/shop/api_cart.php",{token: localStorage.token,},function(error,responseText){

        var json=JSON.parse(responseText);
        console.log(json);
        var data=json.data;
        for(var i=0;i<data.length;i++){
            var obj=data[i];
             oBcProListCon.innerHTML+=`
     <div class="bcProListItem">
        <div class="bcProListItemPic fl">
          <img src="${obj.goods_thumb}" alt="">
        </div>
        <div class="bcProListItemName fl"><a href="#">${obj.goods_name}</a></div>
        <div class="colorAndStyle fl">
          颜色分类：B款天鹅项链（银色）
        </div>
        <div class="unitPrice fl">&yen;<span class="unitPriceSpan">${obj.goods_price}</span></div>
        <div class="count fl">
          <span>
            <i class="countLeft isCount">-</i><input class="countCon" value="${obj.goods_number}"/><i class="countRight isCount">+</i>
          </span>
        </div>
        <div class="singleSum fl gold">&yen;<span class="singleSumSpan">${obj.goods_price}</span></div>
        <div class="operation fl">
          <a class="operationDel" href="javascript:(0)">删除</a>
        </div>
      </div>
            `;
        }
     });





})()