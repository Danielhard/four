  var oHomeFurnishing=document.querySelector(".homeFurnishing").querySelector(".proContain").querySelector("ul");
      myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{
          "cat_id":45 ,"pagesize":8
      },function (error,responseText) {
          var json=JSON.parse(responseText);
          console.log(json);
          var data=json.data;
          for(var i=0;i<data.length;i++){
                var obj=data[i];
              oHomeFurnishing.innerHTML+=`
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
      })



// <li class="mainProListItem">
//     <a href="#">
//     <div class="ProListImg">
//     <img src="image/pic1.jpg"/>
//     <div class="mark"></div>
//     </div>
//     <div class="ProListInfor">
//     <h3 class="ProName" title="仅重600g便携蓝牙音箱 丹麦设计 专业级音质 防滑防水 长续航">仅重600g便携蓝牙音箱 丹麦设计 专业级音质 防滑防水 长续航</h3>
// <p class="des">真正的便捷式蓝牙扬声器，既可畅想音乐又可接听来电，重量只有600g</p>
// <span class="price"><i>&yen;</i>1898.00</span>
// </div>
// </a>
// </li>