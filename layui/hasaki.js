var HtmlUtil = {
    /*1.用浏览器内部转换器实现html转码*/
    htmlEncode:function (html){
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement ("div");
        //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
        (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
        //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
        var output = temp.innerHTML;
        temp = null;
        return output;
    },
    /*2.用浏览器内部转换器实现html解码*/
    htmlDecode:function (text){
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement("div");
        //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
        temp.innerHTML = text;
        //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }
};
function trimStr(str){
	return str.replace(/(^\s*)|(\s*$)/g,"");
}

function copy(x){
	  	//alert('document.getElementById(x.id).previousSibling.previousSibling.innerHTML');
		var content_1 =trimStr(HtmlUtil.htmlDecode(document.getElementById(x.id).previousSibling.previousSibling.innerHTML));
		var oInput = document.createElement('input');
		oInput.value = content_1;
		document.body.appendChild(oInput);
		oInput.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
		oInput.className = 'oInput';
		oInput.style.display='none';
		document.getElementById(x.id).innerHTML="✔";;
	  }
function out(x){
		
		//console.log(x.id);
		document.getElementById(x.id).innerHTML="📋";
	}
function over(x){
		
		//console.log(x.id);
		document.getElementById(x.id).innerHTML="copy";
		
	}
function anchor(x){
	//var sss = x.getAttribute('navto');
		var navto = x.getAttribute('navto');
		//console.log(navto);
		if(navto != "#") {
			var $div = $('#' + navto);
			var top = $div.offset().top || 0;
			$('html,body').animate({
				'scroll-top': top - 70
				}, 70);
		} else {
		    $('html,body').animate({
				'scroll-top': 0
			   }, 70);
	 
			}
}

