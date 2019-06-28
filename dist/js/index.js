$(function(){
	$(".yidongapp").mousemove(function(){
	$(".erweima").css("display","block");
		});
	$(".yidongapp").mouseout(function(){
		$(".erweima").css("display","none");
	});
	/*男鞋*/
	$(".nanxie").mousemove(function(){
		$(".nanxie").css("background","rgba(255,0,0,0.4)")
	});
	$(".nanxie").mouseout(function(){
		$(".nanxie").css("background","rgba(0,0,0,0.2)")
	});
	/*女鞋*/
	$(".nvxie").mousemove(function(){
		$(".nvxie").css("background","rgba(255,0,0,0.4)")
	});
	$(".nvxie").mouseout(function(){
		$(".nvxie").css("background","rgba(0,0,0,0.2)")
	});
	/*童鞋*/
	$(".tongxie").mousemove(function(){
		$(".tongxie").css("background","rgba(255,0,0,0.4)")
	});
	$(".tongxie").mouseout(function(){
		$(".tongxie").css("background","rgba(0,0,0,0.2)")
	});
	/*男装*/
	$(".nanzhuang").mousemove(function(){
		$(".nanzhuang").css("background","rgba(255,0,0,0.4)")
	});
	$(".nanzhuang").mouseout(function(){
		$(".nanzhuang").css("background","rgba(0,0,0,0.2)")
	});
	/*女装*/
	$(".nvzhuang").mousemove(function(){
		$(".nvzhuang").css("background","rgba(255,0,0,0.4)")
	});
	$(".nvzhuang").mouseout(function(){
		$(".nvzhuang").css("background","rgba(0,0,0,0.2)")
	});
	$(".diyi").mousemove(function(){
		$(".erjidaohang").css("display","block");
	});
	$(".diyi").mouseout(function(){
		$(".erjidaohang").css("display","none");
	});
	
	$(".erjidaohang").mousemove(function(){
		$(".erjidaohang").css("display","block");
		$(".two").css("display","block");
	});
	$(".erjidaohang").mouseout(function(){
		$(".erjidaohang").css("display","none");
		$(".two").css("display","none");
	});
	$(".two").mouseover(function(){
		$(".two").css({"display":"block"});
		$(".erjidaohang").css("display","block");
	});
	$(".two").mouseout(function(){
		$(".two").css("display","none");
		$(".erjidaohang").css("display","none");
	})
	$(".paobu1").mousemove(function(){
		$(".paobu").css("display","block");
	});
	$(".paobu1").mouseout(function(){
		$(".paobu").css("display","none");
	});
	
	$(".lanqiu1").mousemove(function(){
		$(".lanqiu").css("display","block");
	});
	$(".lanqiu1").mouseout(function(){
		$(".lanqiu").css("display","none");
	});
	
	$(".zuqiu1").mousemove(function(){
		$(".zuqiu").css("display","block");
	});
	$(".zuqiu1").mouseout(function(){
		$(".zuqiu").css("display","none");
	});
	
	$(".jianshen1").mousemove(function(){
		$(".jianshen").css("display","block");
	});
	$(".jianshen1").mouseout(function(){
		$(".jianshen").css("display","none");
	});
	
	$(".xiuxian1").mousemove(function(){
		$(".xiuxian").css("display","block");
	});
	$(".xiuxian1").mouseout(function(){
		$(".xiuxian").css("display","none");
	});
	
	$(".peijian1").mousemove(function(){
		$(".peijian").css("display","block");
	});
	$(".peijian1").mouseout(function(){
		$(".peijian").css("display","none");
	});
	
	$(".ertong1").mousemove(function(){
		$(".ertong").css("display","block");
	});
	$(".ertong1").mouseout(function(){
		$(".ertong").css("display","none");
	});
	
	$(".paobu").mousemove(function(){
		$(".paobu").css("display","block");
	});
	$(".paobu").mouseout(function(){
		$(".paobu").css("display","none");
	});
	
	$(".lanqiu").mousemove(function(){
		$(".lanqiu").css("display","block");
	});
	$(".lanqiu").mouseout(function(){
		$(".lanqiu").css("display","none");
	});
	
	$(".zuqiu").mousemove(function(){
		$(".zuqiu").css("display","block");
	});
	$(".zuqiu").mouseout(function(){
		$(".zuqiu").css("display","none");
	});
	
	$(".jianshen").mousemove(function(){
		$(".jianshen").css("display","block");
	});
	$(".jianshen").mouseout(function(){
		$(".jianshen").css("display","none");
	});
	
	$(".xiuxian").mousemove(function(){
		$(".xiuxian").css("display","block");
	});
	$(".xiuxian").mouseout(function(){
		$(".xiuxian").css("display","none");
	});
	
	$(".peijian").mousemove(function(){
		$(".peijian").css("display","block");
	});
	$(".peijian").mouseout(function(){
		$(".peijian").css("display","none");
	});
	
	$(".ertong").mousemove(function(){
		$(".ertong").css("display","block");
	});
	$(".ertong").mouseout(function(){
		$(".ertong").css("display","none");
	});
	//获取登陆用户名
	var username = window.localStorage.getItem("username");
	if(username !== null){
		$(".yonghu").html("欢迎你亲爱的:"+username+":用户");
		$(".zhu").html("");
		$(".out").html("退出");
		$(".out").click(function(){
			$(".yonghu").html("登陆");
			$(".zhu").html("注册");
			localStorage.removeItem("username");
			localStorage.removeItem("xinxi");
		})
	}
	
	/*轮播完成*/
	var num = 0;
	setInterval(function(){
		num++;
		if($(".lunbo li").eq(num).length==0){
			num = 0;
		}

		move();
	},2000);
	function move(){
		//$(".lunbo li").eq(num).css("opacity","0");
			if(num == 1){
				$(".img3").css("opacity","0");
			}
			if(num == 2){
				$(".img2").css("opacity","0");
			}
			if(num == 3){
				$(".img1").css("opacity","0")
			}
			if(num == 0){;
				$(".img3").css("opacity","1")
			}
			if(num == 1){
				$(".img3").css("opacity","0");
				$(".img2").css("opacity","1")
			}
	}
	$(".lunbo1 p").eq(0).click(function(){
		$(".img3").css("opacity","1");
	});
	
	
	$(".tang").mousemove(function(){
		$(".gai").css("display","block");
	})
	$(".tang").mouseout(function(){
		$(".gai").css("display","none");
	})
	$(".btn").mousemove(function(){
		$(".btn").css("background","white")
	})
	$(".btn").mouseout(function(){
		$(".btn").css("background","0")
	});
	
	
	$(".tang1").mousemove(function(){
		$(".gai1").css("display","block");
	})
	$(".tang1").mouseout(function(){
		$(".gai1").css("display","none");
	})
	$(".btn1").mousemove(function(){
		$(".btn1").css("background","white")
	})
	$(".btn1").mouseout(function(){
		$(".btn1").css("background","0")
	})
	
	$(".btn2").mousemove(function(){
		$(".btn2").css("background","white")
	})
	$(".btn2").mouseout(function(){
		$(".btn2").css("background","0")
	})
	$(".btn3").mousemove(function(){
		$(".btn3").css("background","white")
	})
	$(".btn3").mouseout(function(){
		$(".btn3").css("background","0")
	})
	
	/*防止眩晕*/
	$(".shangxin1").mousemove(function(){
		$(".gaizi1").css("display","block");
	})
	$(".shangxin1").mouseout(function(){
		$(".gaizi1").css("display","none");
	})
	/*防止眩晕*/
	$(".shangxin2").mousemove(function(){
		$(".gaizi2").css("display","block");
	})
	$(".shangxin2").mouseout(function(){
		$(".gaizi2").css("display","none");
	})
	/*防止眩晕*/
	$(".shangxin3").mousemove(function(){
		$(".gaizi3").css("display","block");
	})
	$(".shangxin3").mouseout(function(){
		$(".gaizi3").css("display","none");
	})
	
	
	$(".liebiao").mouseover(function(){
		$(".xiaotu").stop().slideDown()
	})
	$('.liebiao').mouseout(function(){
		$(".xiaotu").stop().slideUp()
	})
	/*分界线防眩晕*/
	$(".liebiao1").mouseover(function(){
		$(".xiaotu1").stop().slideDown()
	})
	$('.liebiao1').mouseout(function(){
		$(".xiaotu1").stop().slideUp()
	})
	/*分界线防眩晕*/
	$(".liebiao2").mouseover(function(){
		$(".xiaotu2").stop().slideDown()
	})
	$('.liebiao2').mouseout(function(){
		$(".xiaotu2").stop().slideUp()
	})
	/*分界线防眩晕*/
	$(".liebiao3").mouseover(function(){
		$(".xiaotu3").stop().slideDown()
	})
	$('.liebiao3').mouseout(function(){
		$(".xiaotu3").stop().slideUp()
	})
	/*分界线防眩晕*/
	$(".xuangou").mouseover(function(){
		$(".xuangou").css("background","#f00")
		$(".xuangou").css("color","white")
	});
	$(".xuangou").mouseout(function(){
		$(".xuangou").css("background","0")
		$(".xuangou").css("color","#ccc")
	})
	
	$("#xin").mouseover(function(){
		$(".shoucang").css("display","block")
		.stop().animate({"right":"35px"},300)
	})
	$("#xin").mouseout(function(){
		$(".shoucang").css("display","none")
		.stop().animate({"right":"45px"},300);
	})
	
	$("#dianhua").mouseover(function(){
		$(".liulan").css("display","block")
		.stop().animate({"right":"35px"},300)
	})
	$("#dianhua").mouseout(function(){
		$(".liulan").css("display","none")
		.stop().animate({"right":"45px"},300);
	})
	
	$("#kefu").mouseover(function(){
		$(".zaixian").css("display","block")
		.stop().animate({"right":"35px"},300)
	})
	$("#kefu").mouseout(function(){
		$(".zaixian").css("display","none")
		.stop().animate({"right":"45px"},300);
	})
	
	$.get("http://47.104.244.134:8080/goodstypelist.do", {
		l: 1
	}).done(date => {
	console.log(date);
	$.each(date, function(index, value) {
		$(".erjidaohang").append("<li>" + value.name + "</li>")
		console.log($(".erjidaohang"))
		$(".erjidaohang li").eq(index).mouseover(function() {
			$.get("http://47.104.244.134:8080/goodstypelist.do", {
				l: 2
			}).done(date => {
				console.log(date)
				$(".two").text("").css({
					"display": "block"
				})
				for(var i = 0; i < date.length; i++) {
					if(date[i].parentid == value.id) {
						$(".two").append("<a href='productList.html'>" + date[i].name + "</a>")

					}
				}

			})
			$(".erjidaohang li").eq(index).mouseout(function() {
				$(".two").text("").css({
					"display": "none"
				})
			})

		})
	})
});

});


/*小轮播1*/
var num = 0;
	setInterval(function(){
		num++;
		
		if($(".xiaolunbo1 img").eq(num).length==0){
			num = 0;
		}

		move();
	},2000);
	function move(){
		//$(".lunbo li").eq(num).css("opacity","0");
			if(num == 1){
				$(".tu3").css("opacity","0");
			}
			if(num == 2){
				$(".tu2").css("opacity","0");
			}
			if(num == 3){
				$(".tu1").css("opacity","0")
			}
			if(num == 0){;
				$(".tu3").css("opacity","1")
			}
			if(num == 1){
				$(".tu3").css("opacity","0");
				$(".tu2").css("opacity","1")
			}
	}
	/*小轮播1end*/
	