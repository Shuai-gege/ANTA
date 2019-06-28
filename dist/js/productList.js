$(function() {
	$.get("http://47.104.244.134:8080/goodsbytid.do", {
		tid: 13,
		page: 1,
		limit: 10
	}).done(data => {
		//console.log(data);
		var data = data.data;
		//console.log(data);

		var str = "";
		for(var i = 0; i < data.length; i++) {
			str += `
				<li>
					<a href='cart.html?id=${data[i].id}'>
						<img src='${data[i].picurl}'/>
					</a>
					<p>${data[i].info}</p>
					<p>${data[i].price}</p>
					<p>${data[i].typename}</p>
					<input type='button' data-id='${data[i].id}' value='加入购物车'/>

				</li>
			`;
			$(".list").html(str);
		}
		var Input = document.getElementsByTagName("input");
		//console.log(Input)
		//var id = input.getAttribute()
		//console.log(id);
		for(var j = 0; j < Input.length; j++) {
			Input[j].onclick = function() {
				var id = this.getAttribute("data-id");
				var token = localStorage.getItem("xinxi")
				//console.log(token)
				$.get("http://47.104.244.134:8080/cartsave.do", {
					gid: id,
					token: token
				}).done(data => {
					console.log(data)
				})
			}
		}

	})

})