var oOrder = document.querySelector('#order');
var oh1 = document.querySelector('#oh1');
console.log(oOrder);
myajax.get('http://h6.duchengjiu.top/shop/api_order.php', {token: localStorage.token}, function(err, responseText){
  var json = JSON.parse(responseText);
  console.log(json);
  var data = json.data;
  if (data.length === 0) {
    oh1.innerHTML = "<h1>您的订单为空!</h1>";
    return;
  }
  for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    //遍历商品列表，拼装HTML
    var goodsHTML = '';
    for (var j = 0; j < obj.goods_list.length; j++) {
      var goods = obj.goods_list[j];
      goodsHTML += `
        <td>
          <img src="${goods.goods_thumb}">
        </td>
        <td colspan="4">
          ${goods.goods_name}
        </td>
        <td>${goods.goods_price}</td>
        <td>${goods.goods_number}</td>
        <td><p>申请售后</p><p>投诉商家</p></td>
        <td class="tb-mon">${goods.goods_price * goods.goods_number}</td>
        <td class="tb-teal"><p>交易成功</p><p>订单详情</p></td>
        <td class="tb-teal"><a href="">评价</a></td>
      `;
    }
    //一件商品的总价
    var now = new Date();
    oOrder.innerHTML += `
      <table>
        <thead>
          <th colspan="4">${obj.order_id}</th>
          <th colspan="4">总价:${obj.total_prices} </th>
          <th colspan="3"><span data-id="${obj.order_id}" class="cancel-order" id="order">取消订单</span></th>
          </thead>
          <tr>
            ${goodsHTML}
          </tr>
      </table>
    `;
  }
});

oOrder.onclick = function(event) {
  event = event || window.event;
  var target = event.target || event.srcElement;
  if (target.className === 'cancel-order') {
    if (!confirm('确认要删除订单吗?')) {
      return;
    }
    var order_id = target.dataset.id;
    myajax.post('http://h6.duchengjiu.top/shop/api_order.php?token='+localStorage.token+'&status=cancel', {order_id}, function(err, responseText) {
      var json = JSON.parse(responseText);
      if (json.code === 0) {
        alert('订单删除成功！');
      }
    });
  }
}