$(function() {
	$(".yidongapp").mousemove(function() {
		$(".erweima").css("display", "block");
	});
	$(".yidongapp").mouseout(function() {
		$(".erweima").css("display", "none");
	});
	/*男鞋*/
	$(".nanxie").mousemove(function() {
		$(".nanxie").css("background", "rgba(255,0,0,0.4)")
	});
	$(".nanxie").mouseout(function() {
		$(".nanxie").css("background", "rgba(0,0,0,0.2)")
	});
	/*女鞋*/
	$(".nvxie").mousemove(function() {
		$(".nvxie").css("background", "rgba(255,0,0,0.4)")
	});
	$(".nvxie").mouseout(function() {
		$(".nvxie").css("background", "rgba(0,0,0,0.2)")
	});
	/*童鞋*/
	$(".tongxie").mousemove(function() {
		$(".tongxie").css("background", "rgba(255,0,0,0.4)")
	});
	$(".tongxie").mouseout(function() {
		$(".tongxie").css("background", "rgba(0,0,0,0.2)")
	});
	/*男装*/
	$(".nanzhuang").mousemove(function() {
		$(".nanzhuang").css("background", "rgba(255,0,0,0.4)")
	});
	$(".nanzhuang").mouseout(function() {
		$(".nanzhuang").css("background", "rgba(0,0,0,0.2)")
	});
	/*女装*/
	$(".nvzhuang").mousemove(function() {
		$(".nvzhuang").css("background", "rgba(255,0,0,0.4)")
	});
	$(".nvzhuang").mouseout(function() {
		$(".nvzhuang").css("background", "rgba(0,0,0,0.2)")
	});
	$(".diyi").mousemove(function() {
		$(".fenlei").css("display", "block");
	});
	$(".diyi").mouseout(function() {
		$(".fenlei").css("display", "none");
	});

	$(".fenlei").mousemove(function() {
		$(".fenlei").css("display", "block");
	});
	$(".fenlei").mouseout(function() {
		$(".fenlei").css("display", "none");
	});
	$(".paobu1").mousemove(function() {
		$(".paobu").css("display", "block");
	});
	$(".paobu1").mouseout(function() {
		$(".paobu").css("display", "none");
	});

	$(".lanqiu1").mousemove(function() {
		$(".lanqiu").css("display", "block");
	});
	$(".lanqiu1").mouseout(function() {
		$(".lanqiu").css("display", "none");
	});

	$(".zuqiu1").mousemove(function() {
		$(".zuqiu").css("display", "block");
	});
	$(".zuqiu1").mouseout(function() {
		$(".zuqiu").css("display", "none");
	});

	$(".jianshen1").mousemove(function() {
		$(".jianshen").css("display", "block");
	});
	$(".jianshen1").mouseout(function() {
		$(".jianshen").css("display", "none");
	});

	$(".xiuxian1").mousemove(function() {
		$(".xiuxian").css("display", "block");
	});
	$(".xiuxian1").mouseout(function() {
		$(".xiuxian").css("display", "none");
	});

	$(".peijian1").mousemove(function() {
		$(".peijian").css("display", "block");
	});
	$(".peijian1").mouseout(function() {
		$(".peijian").css("display", "none");
	});

	$(".ertong1").mousemove(function() {
		$(".ertong").css("display", "block");
	});
	$(".ertong1").mouseout(function() {
		$(".ertong").css("display", "none");
	});
	$(".paobu").mousemove(function() {
		$(".paobu").css("display", "block");
	});
	$(".paobu").mouseout(function() {
		$(".paobu").css("display", "none");
	});

	$(".lanqiu").mousemove(function() {
		$(".lanqiu").css("display", "block");
	});
	$(".lanqiu").mouseout(function() {
		$(".lanqiu").css("display", "none");
	});

	$(".zuqiu").mousemove(function() {
		$(".zuqiu").css("display", "block");
	});
	$(".zuqiu").mouseout(function() {
		$(".zuqiu").css("display", "none");
	});

	$(".jianshen").mousemove(function() {
		$(".jianshen").css("display", "block");
	});
	$(".jianshen").mouseout(function() {
		$(".jianshen").css("display", "none");
	});

	$(".xiuxian").mousemove(function() {
		$(".xiuxian").css("display", "block");
	});
	$(".xiuxian").mouseout(function() {
		$(".xiuxian").css("display", "none");
	});

	$(".peijian").mousemove(function() {
		$(".peijian").css("display", "block");
	});
	$(".peijian").mouseout(function() {
		$(".peijian").css("display", "none");
	});

	$(".ertong").mousemove(function() {
		$(".ertong").css("display", "block");
	});
	$(".ertong").mouseout(function() {
		$(".ertong").css("display", "none");
	});
	$(".xuangou").mouseover(function() {
		$(".xuangou").css("background", "#f00")
		$(".xuangou").css("color", "white")
	});
	$(".xuangou").mouseout(function() {
		$(".xuangou").css("background", "0")
		$(".xuangou").css("color", "#ccc")
	})

	$("#xin").mouseover(function() {
		$(".shoucang").css("display", "block")
			.stop().animate({
				"right": "35px"
			}, 300)
	})
	$("#xin").mouseout(function() {
		$(".shoucang").css("display", "none")
			.stop().animate({
				"right": "45px"
			}, 300);
	})

	$("#dianhua").mouseover(function() {
		$(".liulan").css("display", "block")
			.stop().animate({
				"right": "35px"
			}, 300)
	})
	$("#dianhua").mouseout(function() {
		$(".liulan").css("display", "none")
			.stop().animate({
				"right": "45px"
			}, 300);
	})

	$("#kefu").mouseover(function() {
		$(".zaixian").css("display", "block")
			.stop().animate({
				"right": "35px"
			}, 300)
	})
	$("#kefu").mouseout(function() {
		$(".zaixian").css("display", "none")
			.stop().animate({
				"right": "45px"
			}, 300);
	});

	var id = location.search.split("=")[1];
	//console.log(id)
	$.get("http://47.104.244.134:8080/goodsbyid.do", {
		id: id
	}).done(data => {
		//console.log(data);
		//var data = data.id;
		var banxin = document.getElementsByClassName("banxin")[0]
		banxin.innerHTML = `
				<div class="minnav">
					<span>首页</span>>
					<span>散打</span>>
					<span>发</span>>
					<span>法师单刷的</span>>
				</div>
				<ul>
					<a href=""><li><img src="${data.picurl}"/></li></a>
					<a href=""><li><img src="${data.picurl}"/></li></a>
					<a href=""><li><img src="${data.picurl}"/></li></a>
					<a href=""><li><img src="${data.picurl}"/></li></a>
					<a href=""><li><img src="${data.picurl}"/></li></a>
					<a href=""><li><img src="${data.picurl}"/></li></a>
				</ul>
				<div class='fangdajing'>
					<div class="zhongtu">
						<img src="${data.picurl}"/>
						<p class='fangkuai'></p>
					</div>
					<div class='datu'>
						<img src='${data.picurl}' class='datu1'/>
					</div>
				</div>
				<div class="xinxi">
					<h4>${data.name}</h4>
					<p style="color: #FF6600;font-size: 10px;">★★★★★（4.9）</p>
					<span class="kuanhao">款号：11841101</span>
					<img src="img/youhui.png"/>
					<p style="font-size:30px;color: #f00;width:450px;" >¥${data.price}</p>
					<p class="zhekou">
						<span>吊牌价：${data.price}</span>
						<span>折扣：100%（折让：¥0）</span>
					</p>
					<p class="cuxiao">要疯活动满259减20/359减30/469减50/799减100>> 
					
	鞋服全场包邮>> </p>
				</div>
				<div class="tianjia">
					<div class="shuliang">
						<span class='jian'>-</span>
						<input type="text" class="shu" value="1" />
						<span class='jia'>+</span>
					</div>
					<input type="button" class="anniu" value="加入购物车" />
				</div>
			`;
		var Input = document.getElementById("anniu");
		//console.log(Input)
		//var id = input.getAttribute()
		//console.log(id);
		/*Input.onclick = function(){
			var id = this.getAttribute("data-id");
			var token = localStorage.getItem("xinxi")
			//console.log(token)
			$.get("http://47.104.244.134:8080/cartsave.do",{
				gid:id,
				token:token
			}).done(data=>{
				console.log(data)
			})
		}*/
		$(".zhongtu").mouseover(function() {
			$(".fangkuai").css("display", "block");
			$(".datu").css("display", "block")
		})
		$(".zhongtu").mouseout(function() {
			$(".fangkuai").css("display", "none");
			$(".datu").css("display", "none")
		})
		//var num = parseInt($("#shu").val());不能写在点击事件外面
		//console.log(num)
		$(".jian").click(function() {
			var num = parseInt($(".shu").val());
			if(num < 1) {
				num = 1
			} else {
				$(".shu").val(num - 1)
			}
		});
		$(".jia").click(function() {
			var num = parseInt($(".shu").val());
			$(".shu").val(num + 1)
		});
		//var Input = document.getElementById("anniu");
		//console.log(Input)
		//var id = input.getAttribute()
		//console.log(id);
		$(".anniu").click(function() {
			//var id = this.getAttribute("data-id");
				var token = localStorage.getItem("xinxi");
				//购物车列表里有gid
				if(localStorage.getItem("xinxi")==null){
						alert("请先登录");
						window.location.href="login.html";
					}else{
						for(var i=0;i<parseInt($(".shu").val());i++){
							addCart();
						}
						
					}
					function addCart(){
					var token = localStorage.getItem("xinxi");
					$.get("http://47.104.244.134:8080/cartsave.do",{
						gid:id,
						token:token}).done(data=>{
							
						})
			}
		})

		$(".zhongtu").mousemove(function(event) {
			var x = event.pageX - $(".fangkuai").width() / 2 - 134;
			var y = event.pageY - $(".fangkuai").height() / 2 - 103;
			//console.log(x,y)
			var maxwid = $(".zhongtu").width() - $(".fangkuai").width();
			var maxhei = $(".zhongtu").height() - $(".fangkuai").height();
			//console.log(maxwid,maxhei)
			x = x < 0 ? 0 : x > maxwid ? maxwid : x;
			y = y < 0 ? 0 : y > maxhei ? maxhei : y;
			$(".fangkuai").css({
				left: x + 'px',
				top: y + "px"
			})

			$(".datu1").css({
				"left": -x / $(".zhongtu").width() * $(".datu1").width() + "px"
			})
			$(".datu1").css({
				"top": -y / $(".zhongtu").height() * $(".datu1").height() + "px"
			})
			//$(".fangkuai").css({"left":nx,"top":ny})
			/*var maxwid = $(".zhongtu").width() - $(".fangkuai").width();
			var maxhei = $(".zhongtu").height() - $(".fangkuai").height();*/
			//console.log(maxwid,maxhei)
		})
	});
})
