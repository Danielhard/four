(function () {
	var oDiv = document.querySelector('div[data-name=detailWrap]');
	var goods_id = matchQueryString('goods_id');
	console.log(goods_id);
	myajax.get('http://h6.duchengjiu.top/shop/api_goods.php',{
				goods_id
			},function(error,responseText){
				var json = JSON.parse(responseText);
				var obj = json.data[0];
				oDiv.innerHTML = `<div class="productDetailLeft" name="bigo">
		      <div class="productDetailImgB">
		      	<img src="${obj.goods_thumb}" alt="">
		      	</div>
		      <div class="productDetailImgS">
		        <img src="${obj.goods_thumb}" alt="">
		      </div>
		         <div class="zoom"></div>
		         <div class="bigPic"></div>
		    </div>
		    <div class="productDetailRight">
		      <h3>${obj.goods_name}</h3>
		      <p class="des">${obj.goods_desc}</p>
		      <p id="price" class="price">&yen;<i>${obj.price}</i></p>
		      <div class="buy">
		        <span class="buyNow" id="buyNow" data-name="buyNow">立即购买</span>
		        <span class="addCar" id="addCar" data-name="addCar">加入购物袋</span>
		      </div>
		    </div>`;
        var oBigPic=document.querySelector(".bigPic");
        oBigPic.style.backgroundImage="url("+obj.goods_thumb+")";
        oBigPic.style.backgroundRepeat="no-repeat";
		var oSpanAddCar = document.querySelector('span[data-name=addCar]');
		oSpanAddCar.onclick = function(){
	    	event = event || window.event;
         var target = event.target || event.srcElement;
         if (target.id === 'addCar') {
     		console.log('添加到购物车');
     		if (!localStorage.token) {
     			alert('请先登录');
     			localStorage.backurl = location.href;
 				location.href = "login.html";
 				return;
     		} else{
     			myajax.post('http://h6.duchengjiu.top/shop/api_cart.php?token='+localStorage.token,
      		{goods_id, number:1},
      		function(err, responseText) {
        			var json = JSON.parse(responseText);
        			console.log(json);
        			if (json.code === 0) {
        				showProCount();
          			alert('添加到购物车成功');
        			}
      		});
     		}
			}
		}
		Zoom();
	});
})()