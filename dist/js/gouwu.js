var token = localStorage.getItem("xinxi");
$(function() {
	$.get("http://47.104.244.134:8080/cartlist.do", {
		token: token
	}).done(data => {
		console.log(data);
		var str = "";
		for(var i = 0; i < data.length; i++) {
			str += `
			
				<li data-id='${data[i].id}' data-gid='${data[i].gid}' data-goods='${data[i].goods}' data-count='${data[i].count}'>
				<input type="checkbox" name="" class="zong" value="" />
					<img src='${data[i].goods.picurl}'/>
					<p class='ming'>${data[i].goods.name}</p>
					<p class='qian'>${data[i].goods.price}</p>
					<div class='shuliang'>
						<span class='muens'>-</span>
						<input href='text' class='nums' value='${data[i].count}'/>
						<span class='plus'>+</span>
						<span class='zj'>${data[i].count*data[i].goods.price}</span>
					</div>
					<span class='del'>删除</span>
				</li>
			`;
			$(".che").html(str);
		}
		var amuens = $(".muens");
		var aplus = $(".plus");
		var Del = $(".del");
		for(let k = 0; k < amuens.length; k++) {
			//var gid = $("li").attr("data-gid")
			amuens[k].onclick = function() {
				var gid = $("li").eq(k).attr("data-gid");
				var id = $("li").eq(k).attr("data-id");
				console.log(k)
				var nums = parseInt($(".nums").eq(k).val());
				//点击的时候减少
				if(nums <= 1) {
					$.get("http://47.104.244.134:8080/cartupdate.do",{
					token:token,
					id:id,
					gid:gid,
					num:0
				}).done(data=>{
					console.log(data);
					window.location.reload();
				})
				} else {
					parseInt($(".nums").eq(k).val(nums - 1));
				}
				$.get("http://47.104.244.134:8080/cartupdate.do",{
					token:token,
					id:id,
					gid:gid,
					num:-1
				}).done(data=>{
					console.log(data)
				})
			}
			//点击的时候添加
			aplus[k].onclick = function(){
				var gid = $("li").eq(k).attr("data-gid");
				var id = $("li").eq(k).attr("data-id");
				var nums = parseInt($(".nums").eq(k).val());
				parseInt($(".nums").eq(k).val(nums+1));
				$.get("http://47.104.244.134:8080/cartupdate.do",{
					token:token,
					id:id,
					gid:gid,
					num:+1
				}).done(data=>{
					console.log(data)
				})
			}
			Del[k].onclick = function(){
				var gid = $("li").eq(k).attr("data-gid");
				var id = $("li").eq(k).attr("data-id");
				$.get("http://47.104.244.134:8080/cartupdate.do",{
					token:token,
					id:id,
					gid:gid,
					num:0
				}).done(data=>{
					console.log(data);
					window.location.reload();
				})
			}
			//var zong = $(".zong").eq(k);
			$(".zong").eq(k).click(function(){
				console.log($(".zj").text())
				if(this.checked){
					console.log("aa")
					$("#zongjia").html(parseInt($(".zj").eq(k).text()))
				}
			})
		}
		//$(".che").html(str);

		/*for(let j = 0;j<data.length;j++){
			jian[j].onclick = function(){
				console.log(j)
				console.log(data[j].gid,data[j].count,data[j].id,token)
				$.get("http://47.104.244.134:8080/cartupdate.do",{
					token:token,
					gid:data[j].gid,
					num:data[j].count,
					id:data[j].id
				}).done(data=>{
					console.log(data)
				})
				
				
			}
		}*/
	})
})