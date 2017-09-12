(function() {
  var addressList = document.querySelector('#addressList');
  var oLiHeight = 126;
  var flag = true;           //用于控制显示文本地址的标签的内容是：显示所有地址还是隐藏所有地址
  var newAddress = document.querySelector('#newAddress');
  var modelBox = document.querySelector("#modelBox");
  var subAddress = document.querySelector("#subAddress");
  addressList.addEventListener('click',function(event) {
    event = event || window.event;
    var target = event.target || target.srcElement;

    if(!target.classList.contains('delAddress')){
      // 找到当前点击的框的最外面的LI,无论是删除还是选中都要找到这个li
      while(target.nodeName !== "LI"){
        console.log(target.nodeName);
        target = target.parentNode;
      }
      var allLi = target.parentNode.querySelectorAll('li');
      for(var i = 0; i < allLi.length; i++){
        allLi[i].classList.remove('selected');
      }
      target.classList.add('selected');         // 这里不使用样式类会出错，不知道为什么

    }else{
      // 找到当前点击的框的最外面的LI,无论是删除还是选中都要找到这个li
      while(target.nodeName !== "LI"){
        console.log(target.nodeName);
        target = target.parentNode;
      }
      // 点击删除发起Ajax请求
      delAddress(target);
    }
  },false);


  var showAllAddress = document.querySelector("#showAllAddress");
  showAllAddress.addEventListener('click',function() {

    // 这里后台会返回一个数据,里面包含所有的地址信息,这里我先写有6个地址
    var addressLen = 6;
    var addressCount = Math.ceil(addressLen / 4 );
    if(this.innerText === "显示所有地址"){
      animate(addressList,{height:oLiHeight * addressCount},300,'Quad.easeOut',function(){
        flag = !flag;
        controlTxt();
      });
    } else{
      animate(addressList,{height:oLiHeight},300,'Quad.easeOut',function(){
        flag = !flag;
        controlTxt();
      });
    }
  },false);

  newAddress.addEventListener('click',function(){
    showModelBox();
  },false);


  subAddress.addEventListener('click',function() {
    addNewAddress();
    console.log(1);
    hidden(modelBox);
  },false);

  // 添加新地址的方法,这里根据后台返回的code值来决定是否要添加
  function addNewAddress(){
    var oLi = addressList.querySelector('li');
    var name = modelBox.querySelector("#addUsername").value;
    var province = modelBox.querySelector('#province').value;
    var city = modelBox.querySelector('#city').value;
    var district = modelBox.querySelector('#district').value;
    var address = modelBox.querySelector('#address').value;
    var tel = modelBox.querySelector('#tel').value;
    var newLi = " <li>\n" +
        "        <div  class=\"addressListTitle\">\n" +
        "          <span class=\"province\">"+province+"</span><span class=\"city\">"+city+"</span>\n" +
        "          <span class=\"name\">(<i>"+name+"</i> 收)</span>\n" +
        "          <i class=\"delAddress fr\">删除</i>"+
        "        </div>\n" +
        "        <div class=\"detailAddressInfor\">\n" +
        "          <span class=\"district\">"+district+"</span>\n" +
        "          <span class=\"addressDetail\">"+address+"\n" +
        "            <i class=\"addressDTel\">tel</i>\n" +
        "          </span>\n" +
        "        </div>\n" +
        "      </li>";
    addressList.innerHTML = newLi + addressList.innerHTML;
  }


  // 删除地址
  function delAddress(target){
    addressList.removeChild(target);
  }

  // 控制文本
  function controlTxt(){
    if(flag){
      return showAllAddress.innerText = "显示所有地址";
    }
    return showAllAddress.innerText = "隐藏地址"
  }

  // 显示模态框
  function showModelBox(){
    show(modelBox);
  }
})();