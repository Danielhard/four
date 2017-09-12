(function () {
    var oHomeFurnishing=document.querySelector(".homeFurnishing").querySelector(".proContain").querySelector("ul");
    var oFurniture=document.querySelector(".furniture").querySelector(".proContain").querySelector("ul");
    var oStationery=document.querySelector(".Stationery").querySelector(".proContain").querySelector("ul");
    var oDigital=document.querySelector(".Digital").querySelector(".proContain").querySelector("ul");
    var oFun=document.querySelector(".Fun").querySelector(".proContain").querySelector("ul");
    var oKitchen=document.querySelector(".Kitchen").querySelector(".proContain").querySelector("ul");
    var oFood=document.querySelector(".food").querySelector(".proContain").querySelector("ul");
    var ochildWear=document.querySelector(".girlWear").querySelector(".proContain").querySelector("ul");
    var oHot=document.querySelector(".menWear").querySelector(".proContain").querySelector("ul");
    var oFoot=document.querySelector("#foot");
    var lock=true;var lock2=true;var lock3=true;var lock4=true;var lock5=true;var lock6=true;var lock7=true;
    var lock8=true;
     //热门
     myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{
        "pagesize":8
    },function (error,responseText) {
        var json=JSON.parse(responseText);
        console.log(json);
        var data=json.data;
        for(var i=0;i<data.length;i++){
            var obj=data[i];
            oHot.innerHTML+=`
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
     window.onscroll=function () {
         var windowHeight=document.body.scrollTop||document.documentElement.scrollTop;
         console.log(getAllTop(oHomeFurnishing));
         console.log(windowHeight);
        if(windowHeight>getAllTop(oHot)) {
             // 家居
            myajax.get("http://h6.duchengjiu.top/shop/api_goods.php", {
                "cat_id": 45, "pagesize": 8
            }, function (error, responseText) {
                console.log(lock);
                if(!lock)return;
               lock=false;
                var json = JSON.parse(responseText);
                console.log(json);
                var data = json.data;
                for (var i = 0; i < data.length; i++) {
                    var obj = data[i];
                    oHomeFurnishing.innerHTML += `
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
        }
        if(windowHeight>getAllTop(oFurniture)){
            //家具
            myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{
                "cat_id":55 ,"pagesize":8
            },function (error,responseText) {
                if(!lock2)return;
                lock2=false;
                var json=JSON.parse(responseText);
                console.log(json);
                var data=json.data;
                for(var i=0;i<data.length;i++){
                    var obj=data[i];
                    oFurniture.innerHTML+=`
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
        }
        if(windowHeight>getAllTop(oFurniture)){
            //文具
            myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{
                "cat_id":62 ,"pagesize":8
            },function (error,responseText) {
                if(!lock3)return;
                lock3=false;
                var json=JSON.parse(responseText);
                console.log(json);
                var data=json.data;
                for(var i=0;i<data.length;i++){
                    var obj=data[i];
                    oStationery.innerHTML+=`
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
        }
        if(windowHeight>getAllTop(oStationery)){
            //数码
            myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{
                "cat_id":69 ,"pagesize":8
            },function (error,responseText) {
                if(!lock4)return;
                lock4=false;
                var json=JSON.parse(responseText);
                console.log(json);
                var data=json.data;
                for(var i=0;i<data.length;i++){
                    var obj=data[i];
                    oDigital.innerHTML+=`
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
        }
        if(windowHeight>getAllTop(oDigital)){
            //玩乐
            myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{
                "cat_id":77 ,"pagesize":8
            },function (error,responseText) {
                if(!lock5)return;
                lock5=false;
                var json=JSON.parse(responseText);
                console.log(json);
                var data=json.data;
                for(var i=0;i<data.length;i++){
                    var obj=data[i];
                    oFun.innerHTML+=`
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
        }
        if(windowHeight>getAllTop(oFun)){
            //厨卫
            myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{
                "cat_id":82 ,"pagesize":8
            },function (error,responseText) {
                if(!lock6)return;
                lock6=false;
                var json=JSON.parse(responseText);
                console.log(json);
                var data=json.data;
                for(var i=0;i<data.length;i++){
                    var obj=data[i];
                    oKitchen.innerHTML+=`
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
        }
        if(windowHeight>getAllTop(oKitchen)){
            //美食
            myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{
                "cat_id":92 ,"pagesize":8
            },function (error,responseText) {
                if(!lock7)return;
                lock7=false;
                var json=JSON.parse(responseText);
                console.log(json);
                var data=json.data;
                for(var i=0;i<data.length;i++){
                    var obj=data[i];
                    oFood.innerHTML+=`
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
        }
        if(windowHeight>getAllTop(oFood)){
            //童装
            myajax.get("http://h6.duchengjiu.top/shop/api_goods.php",{
                "cat_id":125 ,"pagesize":8
            },function (error,responseText) {
                if(!lock8)return;
                lock8=false;
                var json=JSON.parse(responseText);
                console.log(json);
                var data=json.data;
                for(var i=0;i<data.length;i++){
                    var obj=data[i];
                    ochildWear.innerHTML+=`
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
        }
     }
})();




