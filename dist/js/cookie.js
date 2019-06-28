function setCookie(id, ming, time) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + time);
	document.cookie = id + "=" + ming + ";expires=" + oDate;
};

function getCookie(id) {
	var str = document.cookie;
	var arr = str.split("; ");
	for(var i = 0; i < arr.length; i++) {
		var newArr = arr[i].split("=");
		if(newArr[0] == id) {
			return newArr[1];
		}
	}
};

function removeCookie(id) {
	setCookie(id, 1, -1);
}