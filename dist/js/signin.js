$(function(){
	$(".shouji").click(function(){
		$(".shouji").css("background","#d71921");
		$(".sanjiao2").css("display","none");
		$(".sanjiao1").css("display","block");
		$(".youxiang").css("background","#ccc");
	});
	$(".youxiang").click(function(){
		$(".youxiang").css("background","#d71921");
		$(".sanjiao1").css("display","none");
		$(".sanjiao2").css("display","block");
		$(".shouji").css("background","#ccc");
	});
	/*tap切换完成*/
	$(".youxiang").click(function(){
		$(".shoujizhuce").css("display","none");
		$(".youxiangzhuce").css("display","block");
	})
	$(".shouji").click(function(){
		$(".youxiangzhuce").css("display","none");
		$(".shoujizhuce").css("display","block");
	});
	/*点击隐藏完成*/
	$(".kefu2").mouseover(function(){
		$(".yincang").css("display","block");
	});
	$(".kefu2").mouseout(function(){
		$(".yincang").css("display","none");
	});
	$(window).scroll(function(){
		var scrollY = $(document).scrollTop();
		if(scrollY > 100){
			$(".top").animate({height:"73px"},1);
		}
		if(scrollY < 100){
			$(".top").animate({height:"0"},1)
		}
	});
	/*滚动监听完成*/
	
	$(".email").blur(function(){
		var email = $(".email").val();
		var yanzheng = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(email);
		if(yanzheng == false){
			$(".youxianggeshi").css("display","block");
			$(".email").val("");
		}else{
			$(".youxianggeshi").css("display","none");
		}
	});
	
	$(".email").blur(function(){
		var email = $(".email").val();
		var yanzheng = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(email);
		if(yanzheng == false){
			$(".geshi").css("display","block");
			$(".email").val("");
		}else{
			$(".geshi").css("display","none");
		}
	});
	
	$(".mima").blur(function(){
		var mima = $(".mima").val();
		var yanzheng = /^[0-9a-zA-Z_]{6,15}$/.test(mima);
		if(yanzheng == false){
			$(".mimageshi").css("display","block");
			$(".mima").val("");
		}else{
			$(".mimageshi").css("display","none");
			
		}
	})
	
	
	/*邮箱验证完成*/
	$(".shoujihao").blur(function(){
		var shoujihao = $(".shoujihao").val();
		var shouji = /^1[34578]\d{9}$/.test(shoujihao);
		if(shouji == false){
			$(".shoujigeshi").css("display","block");
			$(".shoujihao").val("");
		}else{
			$(".shoujigeshi").css("display","none");
			
		}
	})
	$(".Btn").click(function(){
		var zhanghao = $(".shoujihao").val();
		var mima = $(".shoujimima").val();
		var youxiang = $(".email").val();
		var sex = $('input:radio[name="driverSex"]:checked').val();
			//console.log(zhanghao);
			//console.log(mima);
			//console.log(youxiang);
			//console.log(sex);
			$.post("http://47.104.244.134:8080/usersave.do",{
				username:zhanghao,
				password:mima,
				email:youxiang,
				sex:sex
			}).done(data=>{
				//console.log(data);
				alert("注册成功请登录");
			})
	})
})