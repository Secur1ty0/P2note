function GetIp() {
    if(document.getElementById("check1").checked){    //--------------去重代码
      var RegStr; 
      RegStr = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/igm
      var tx1 = $("#text1").val();
      //alert(tx1);
      //var tx1 = $("#Text1").val().toLowerCase();
      var strval = tx1.split("\n");
      //alert(strval)
      var str = "";
      var arr; 
      var i = 0;
      $("#text2").val("");
        while((arr = RegStr.exec(strval)) !=null){
          if (str.search(arr[i])!= -1){              //查询到则跳过
              continue;
              }
          else{
              str = str + arr[i] + "\n";
              }
      }
      $("#text2").val(str);
      }
    else{                                                              //--------------无去重代码
      var RegStr; 
      RegStr = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/igm
      var tx1 = $("#text1").val();
      var strval = tx1.split("\n");
      var str = "";
      var arr; 
      var i = 0;
      $("#text2").val("");
        while((arr = RegStr.exec(strval)) !=null){
          str = str + arr[i] + "\n";
          }
$("#text2").val(str);
}
}


function getdomain() {
    var RegStr;
    //RegStr = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/ig;
    RegStr1 = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/igm;
    RegStr2 = /-$/igm;
    RegStr3 = /.html$|.htm$|.asp$|.aspx$|.jsp$|.php$/igm;
    RegStr4 = /^www.|^pop.|^mail./igm;
    var tx2 = $("#text1").val();
    var strval = tx2.split("\n");
    var str = "";
    var result = "";
    var arr; 
    var i = 0;
    $("#text3").val("");
    //去重加端口
    if(document.getElementById("check3").checked){
      if(document.getElementById("check2").checked){     
        RegStr =  /(([a-zA-Z0-9][-a-zA-Z0-9]{0,62}((\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})|(:[0-9]{1,5}))+\.?))/ig;  //加端口
        while((arr = RegStr.exec(strval)) !=null){
                //alert(arr[0]);
                result = arr[i].replace(RegStr1,""); //去除IP
                result = result.replace(RegStr2,""); //去除末尾-字符
                //剔除index.html类似格式
                
                //alert("result="+R.test(result));
                if(RegStr3.test(result)){   
                    //alert(result)
                    continue;
                    }
                else{
                      //是否去除域名前缀保留根域名
                      if(document.getElementById("check4").checked){
                        result = result.replace(RegStr4,"");
                        //查询到则跳过
                        if (str.search(result)!= -1){ 
                              continue;
                            }
                        else{
                            if(document.getElementById("check5").checked){
                              result = "http://" + result;
                              str = str + result + "\n";
                              }
                            else{
                              str = str + result + "\n";
                                }
                            }
                        }
                      else{
                        if (str.search(result)!= -1){ 
                          continue;
                            }
                        else{
                          if(document.getElementById("check5").checked){
                            result = "http://" + result;
                            str = str + result + "\n";
                            }
                          else{
                            str = str + result + "\n";
                              }
                            }
                          }
  
                    } 
              }
          
        } 
      //不加端口去重
      else{ 
          //alert(document.getElementById("check2").checked);                                            
          Reg =  /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/ig;
          R = /[0-9]{1,5}/ig;
          var str="";
          var i = 0;
          while((arr = Reg.exec(strval)) !=null){
                  //alert(strval);
                  //alert(arr[0]);
                  result = arr[i].replace(RegStr1,""); //去除IP
                  result = result.replace(RegStr2,""); //去除末尾-字符
                  //alert(result);
                  //剔除index.html类似格式
                  if(RegStr3.test(result)){   
                      //alert(result)
                      continue;
                      }
                  else{
                      if(R.test(result)){
                      //alert(result);
                          }
                      else{
                          //查询到则跳过
                          if (str.search(result)!= -1){ 
                            //alert(result);
                            continue;
                            }
                          else{
                              //是否去除域名前缀保留根域名
                              if(document.getElementById("check4").checked){
                                result = result.replace(RegStr4,"");
                                //查询到则跳过
                                if (str.search(result)!= -1){ 
                                      continue;
                                    }
                                else{
                                    if(document.getElementById("check5").checked){
                                      result = "http://" + result;
                                      str = str + result + "\n";
                                      }
                                    else{
                                      str = str + result + "\n";
                                        }
                                    }
                                }
                              else{
                                if (str.search(result)!= -1){ 
                                  continue;
                                    }
                                else{
                                  if(document.getElementById("check5").checked){
                                    result = "http://" + result;
                                    str = str + result + "\n";
                                    }
                                  else{
                                    str = str + result + "\n";
                                      }
                                    }
                                  }
                              }
                          }
                      } 
                }
  
          }
    }
    //--------------------------------------不去重check3
    else{ 
        //alert(RegStr);
        //选择加端口不去重 
        if(document.getElementById("check2").checked){     
          RegStr =  /(([a-zA-Z0-9][-a-zA-Z0-9]{0,62}((\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})|(:[0-9]{1,5}))+\.?))/ig;  //加端口
          while((arr = RegStr.exec(strval)) !=null){
                  //alert(arr[0]);
                  result = arr[i].replace(RegStr1,""); //去除IP
                  result = result.replace(RegStr2,""); //去除末尾-字符
                  //剔除index.html类似格式
                  
                  //alert("result="+R.test(result));
                  if(RegStr3.test(result)){   
                      //alert(result)
                      continue;
                      }
                  else{
                      if (result=="") {
                        continue;
                          }
                      else{
                              //是否去除域名前缀保留根域名
                              if(document.getElementById("check4").checked){
                                result = result.replace(RegStr4,"");
                                if(document.getElementById("check5").checked){
                                  result = "http://" + result;
                                  str = str + result + "\n";
                                  }
                                else{
                                  str = str + result + "\n";
                                    }
                                    
                                }
                              else{
                                  if(document.getElementById("check5").checked){
                                    result = "http://" + result;
                                    str = str + result + "\n";
                                    }
                                  else{
                                    str = str + result + "\n";
                                      }
                                  }
                          }
                      } 
                }
            
          } //if(document)
        //不加端口不去重
        else{ 
            //alert(document.getElementById("check2").checked);                                            
            Reg =  /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/ig;
            R = /[0-9]{1,5}/ig;
            var str="";
            var i = 0;
            while((arr = Reg.exec(strval)) !=null){
                    //alert(strval);
                    //alert(arr[0]);
                    result = arr[i].replace(RegStr1,""); //去除IP
                    result = result.replace(RegStr2,""); //去除末尾-字符
                    //alert(result);
                    //剔除index.html类似格式
                    if(RegStr3.test(result)){   
                        //alert(result)
                        continue;
                        }
                    else{
                        if (R.test(result)) {
                        //alert(result);
                        continue;
                        }
                        else{
                              //是否去除域名前缀保留根域名
                              if(document.getElementById("check4").checked){
                                result = result.replace(RegStr4,"");
                                if(document.getElementById("check5").checked){
                                  result = "http://" + result;
                                  str = str + result + "\n";
                                  }
                                else{
                                  str = str + result + "\n";
                                    }
                                    
                                }
                              else{
                                  if(document.getElementById("check5").checked){
                                    result = "http://" + result;
                                    str = str + result + "\n";
                                    }
                                  else{
                                    str = str + result + "\n";
                                      }
                                  }
                        }
                        } 
                  }
    
          }
    }
    $("#text3").val(str);
    
}