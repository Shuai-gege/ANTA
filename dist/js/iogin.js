$(function(){
	$(".weixin").mouseover(function(){
		$(".weixin1").attr("src","img/3.png");
	});
	$(".weixin").mouseout(function(){
		$(".weixin1").attr("src","img/4.png");
	});

	$(".qq").mouseover(function(){
		$(".qq1").attr("src","img/2.png");
	});
	$(".qq").mouseout(function(){
		$(".qq1").attr("src","img/1.png");
	});
	/*其他登陆换路径完成*/
	$(".kefu2").mouseover(function(){
		$(".yincang").css("display","block");
	});
	$(".kefu2").mouseout(function(){
		$(".yincang").css("display","none");
	});
	/*微信隐藏显示完成*/
	$(window).scroll(function(){
		var scrollY = $(document).scrollTop();
		if(scrollY > 100){
			$(".top").animate({height:"73px"},1);
		}
		if(scrollY < 100){
			$(".top").animate({height:"0"},1)
		}
	})
	$("#Btn").click(function(){
		var val1 = $("#zhanghao").val();
		var val2 = $("#mima").val();
		//掉接口
		$.post("http://47.104.244.134:8080/userlogin.do",	{
			name:val1,
			password:val2
		}).done(data=>{
			/*if(val1 && val2 == null){
				alert("账号密码不能为空")
			}*/
			
			console.log(data);
			var token = (data.data.token);
			//console.log(data.data.token);
			//console.log(data)
			if(data.code == 0){//登陆成功
				window.location.href="index.html"
				window.localStorage.setItem("xinxi",token);
				window.localStorage.setItem("username",val1);
			}
			if(val1 == "" || val2 == ""){
				window.location.href=""
				alert("有东西没写哦");
			}
			/*if(data.code==1){//登录失败
					$(".txt-err").css({"display":"block"});
					$("#cell").get(0).value="";
					$(".pwd").get(0).value="";
				}else{
					$(".txt-err").css({"display":"none"});
					if($("#argument").get(0).checked){
			//console.log("aa")
					//var val1 = $("#cell").val();
					//var val2 = $(".pwd").val();
					setCookie("username",val1,30);
					setCookie("password",val2,30);
				}else{
					removeCookie("username");
					removeCookie("password");
				}
				}*/
		})
	})
});