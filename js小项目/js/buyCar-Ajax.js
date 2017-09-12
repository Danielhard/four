(function(){
    var oBcProListCon=document.querySelector("#bcProListCon");
    var delAll=document.querySelector(".delAll");
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
          ${obj.goods_id}
        </div>
        <div class="unitPrice fl">&yen;<span class="unitPriceSpan">${obj.goods_price}</span></div>
        <div class="count fl">
          <span>
            <i class="countLeft isCount">-</i><input class="countCon" value="${obj.goods_number}"/><i class="countRight isCount">+</i>
          </span>
        </div>
        <div class="singleSum fl gold">&yen;<span class="singleSumSpan">${obj.goods_price}</span></div>
        <div class="operation fl">
          <a class="operationDel" data-id="${obj.goods_id}" name="delete" href="javascript:(0)">删除</a>
        </div>
      </div>
            `;
        }
     });
    oBcProListCon.addEventListener("click",function (event) {
        event=event||window.event;
        var target=event.target||event.srcElement;
        if(target.name==="delete"){
           if(!confirm("确认删除？")){
               return;
           }
         var goods_id=target.dataset.id;
         var number=0;
           myajax.post("http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
               {goods_id,number},function (error,responseText) {
                var json=JSON.parse(responseText);
                console.log(json);
                if(json.code===0){
                  var delDiv=target.parentNode.parentNode;
                  delDiv.parentNode.removeChild(delDiv);
                }
           })
        }
   });
    delAll.addEventListener("click",function () {
       if(!confirm("确定清空整个购物车吗？")){
           return;
       }
        var oGoodsDiv=document.querySelectorAll(".colorAndStyle");
       for (var i=0;i<oGoodsDiv.length;i++){
           var branch=oGoodsDiv[i];
           var goods_id=parseInt(branch.innerText);
           var number=0;
           (function (branch) {
               myajax.post("http://h6.duchengjiu.top/shop/api_cart.php?token="+localStorage.token,
                   {goods_id,number},function (error,responseText) {
                       var json=JSON.parse(responseText);
                       console.log(json);
                       if(json.code===0){
                           var father=branch.parentNode;
                           father.parentNode.removeChild(father);
                       }
                   })
           })(branch)
       }
    })
})()

