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
})