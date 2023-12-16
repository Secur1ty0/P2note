var items;

function get_random() {
    let str = '';
    str = Math.random().toString(36).substr(3);
    str += Date.now().toString(16).substr(4);
    //console.log(str);
    return str;
}

function getData(data) {
    var case_0, lnt, cih, cih4, cich4, add, add1, add2;
    var li0, div0, id_0, div1, id_1, h2_0, id_h2, dl_id_0, dd_0, dd_id_0;
    var h4_0, h4_id_0, br, br1, but_0, but_id_0, a_0, a_id_0, a_id_1, space_0, annotation_id_0, cich4_annotation,br2;
    items = data;

    //最外层是侧边栏导航循环
    for (var i = 0; i < items.length; i++) {
        lnt = items[i]["left-nav-title"];
        var len_i = items.length;
        //console.log("items.length: " + items.length);
        //console.log(lnt);
        dl_id_0 = lnt + "_" + get_random();
        a_id_1 = lnt + '_' + get_random()
        add = '<a onclick="anchor(this)" class="navItems" navTo="' + a_id_1 + '">' + lnt + '</a><dl id="' + dl_id_0 + '" class="layui-nav-child layui-bg-"></dl>';
        //创建添加 li 节点
        li0 = document.createElement("li");
        li0.setAttribute("class", "layui-nav-item layui-bg-gray");
        li0.innerHTML = add;
        document.getElementById('layui-nav-left-side').appendChild(li0);

        //创建添加卡片头节点,避免header多次循环
        add1 = '<h1 id="' + a_id_1 + '" class="layui-font-blue layui-weight">' + lnt + '</h1>';
        div0 = document.createElement("div");
        div0.setAttribute("class", "layui-card-header layui-bg-gray layui-border-gray");
        id_0 = get_random();
        div0.setAttribute("id", id_0);
        div0.innerHTML = add1;
        document.getElementById("layui-card-content").appendChild(div0);

        //大的板块内容循环
        for (var j = 0; j < (items[i]["card-item-content"]).length; j++) {
            var len_j = (items[i]["card-item-content"]).length;
            cih = items[i]["card-item-content"][j]["card-item-header"];

            //创建添加卡片body节点
            div1 = document.createElement("div");
            div1.setAttribute("class", "layui-card-body");
            id_1 = get_random();
            div1.setAttribute("id", id_1);
            document.getElementById("layui-card-content").appendChild(div1);


            //card body中创建添加 h2
            h2_0 = document.createElement("h2");
            id_h2 = get_random();
            h2_0.setAttribute("id", id_h2);
            h2_0.setAttribute("class", "layui-font-blue");
            h2_0.innerHTML = cih;
            document.getElementById(id_1).appendChild(h2_0);

            //侧边栏创建添加 h2
            dd_0 = document.createElement("dd");
            dd_id_0 = get_random();
            add2 = '<a onclick="anchor(this)" class="navItems" navto="' + id_h2 + '">' + cih + '</a>';
            dd_0.innerHTML = add2;
            document.getElementById(dl_id_0).appendChild(dd_0);

            //卡片头循环
            for (var m = 0; m < (items[i]["card-item-content"][j]["card-item-body"]).length; m++) {
                var len_m = (items[i]["card-item-content"][j]["card-item-body"]).length;
                cih4 = items[i]["card-item-content"][j]["card-item-body"][m]["card-item-h4"];
                //创建添加h4
                h4_id_0 = get_random();
                h4_0 = document.createElement("h4");
                h4_0.setAttribute("id", h4_id_0);
                h4_0.setAttribute("class", "layui-font-blue");
                h4_0.innerHTML = cih4;
                document.getElementById(id_1).appendChild(h4_0);
                br = document.createElement("br");
                document.getElementById(h4_id_0).before(br);
                document.getElementById(h4_id_0).before(br);
                //var test = (items[i]["card-item-content"][j]["card-item-body"][m]["card-item-content-h4"][0]["content-h4"]);
                //console.log("test------------", test);

                //注释长度跟命令记录长度不一致弹窗
                var length_annotation = items[i]["card-item-content"][j]["card-item-body"][m]["card-item-content-h4"][0]["annotation"].length;
                var length_content_h4 = items[i]["card-item-content"][j]["card-item-body"][m]["card-item-content-h4"][0]["content-h4"].length;
                if (length_annotation != length_content_h4) {
                    alert("注释长度跟命令记录长度不一致,请修改data-note.json文件！！！");
                    alert("异常位置："+ (items[i]["card-item-content"][j]["card-item-body"][m]["card-item-content-h4"][0]["content-h4"]));
                } else {
                    //卡片内容循环
                    for (var n = 0; n < length_content_h4; n++) {
                        
                        cich4 = items[i]["card-item-content"][j]["card-item-body"][m]["card-item-content-h4"][0]["content-h4"][n];
                        
                        cich4_annotation = items[i]["card-item-content"][j]["card-item-body"][m]["card-item-content-h4"][0]["annotation"][n];
                        if(cich4_annotation!==""){
                            cich4_annotation = "\xa0\xa0\xa0#\xa0" + cich4_annotation;
                        }
                        

                        //创建添加h4的内容
                        a_0 = document.createElement("a");
                        a_0.setAttribute("class", "layui-font-black");
                        a_id_0 = get_random();
                        space_0 = "\xa0\xa0\xa0";
                        a_0.setAttribute("id", a_id_0);
                        a_0.innerHTML = HtmlUtil.htmlEncode(cich4);
                        document.getElementById(id_1).appendChild(a_0);

                        document.getElementById(a_id_0).append(space_0);

                        //创建添加button按钮
                        but_0 = document.createElement("button");
                        but_id_0 = get_random();
                        but_0.setAttribute("type", "button");
                        but_0.setAttribute("class", "layui-btn layui-btn-primary layui-btn-sm layui-bg-gray");
                        but_0.setAttribute("id", but_id_0);
                        but_0.setAttribute("onclick", "copy(this)");
                        but_0.setAttribute("onmouseover", "over(this)");
                        but_0.setAttribute("onmouseout", "out(this)");
                        but_0.innerHTML = "📋";
                        document.getElementById(a_id_0).after(but_0);


                        //创建添加注释内容
                        annotation_0 = document.createElement("a");
                        annotation_id_0 = get_random();
                        annotation_0.setAttribute("class", "layui-font-gray");
                        annotation_0.setAttribute("id", annotation_id_0);
                        annotation_0.innerHTML = HtmlUtil.htmlEncode(cich4_annotation);
                        document.getElementById(but_id_0).after(annotation_0);

                        //创建添加换行元素
                        br1 = document.createElement("br");
                        document.getElementById(annotation_id_0).after(br1);
                        document.getElementById(annotation_id_0).after(br1);
                        //最后填充换行符保持格式美观
                        if((i == (len_i - 1)) && (j == (len_j - 1)) && ( m== (len_m-1) ) && ( n == (length_content_h4-1))){
                            //创建添加换行元素
                            br2 = document.createElement("div");
                            //console.log(id_1);
                            br2_id = get_random();
                            br2.setAttribute("id",br2_id);
                            br2.setAttribute("class","layui-card-body");
                            br2.innerHTML = "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>"
                            document.getElementById(id_1).after(br2);
                            
                        }


                    }
                }
            }
        }

    }
}

var sleep = function (time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) {}
};


var HtmlUtil = {
    /*1.用浏览器内部转换器实现html转码*/
    htmlEncode: function (html) {
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement("div");
        //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(火狐，google支持)
        (temp.textContent != undefined) ? (temp.textContent = html) : (temp.innerText = html);
        //3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
        var output = temp.innerHTML;
        temp = null;
        return output;
    },
    /*2.用浏览器内部转换器实现html解码*/
    htmlDecode: function (text) {
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






function trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function copy(x) {
    //alert('document.getElementById(x.id).previousSibling.previousSibling.innerHTML');
    var content_1 = trimStr(HtmlUtil.htmlDecode(document.getElementById(x.id).previousSibling.innerHTML));
    var oInput = document.createElement('input');
    oInput.value = content_1;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    document.getElementById(x.id).innerHTML = "✔";;
}

function out(x) {

    //console.log(x.id);
    document.getElementById(x.id).innerHTML = "📋";
}

function over(x) {

    //console.log(x.id);
    document.getElementById(x.id).innerHTML = "copy";

}

function anchor(x) {
    //var sss = x.getAttribute('navto');
    var navto = x.getAttribute('navto');
    //console.log(navto);
    if (navto != "#") {
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