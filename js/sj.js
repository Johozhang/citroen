/*弹层*/
					$(function(){
						$('.btn1').click(function(){
							$('.yuanL .coverBox').fadeIn();
						})
						$('.closeBox').click(function(){
							$('.yuanL .coverBox').fadeOut();
						});
						$(".mzsm a,.mzsm span").click(function(){
							$(".coverBox").show();
						        $(".mzsm_big").show();
						    })
						$('.mzsm_close').click(function(){
							$(".coverBox").hide();
						         $(".mzsm_big").hide();
						    })
						$(".checkbtn1_n").click(function () {
						        if ($(this).attr("src").indexOf("1") == -1) {
						            $(this).attr("src", "images/checkbox2.png");
						        } else {
						            $(this).attr("src", "images/checkbox1.png");
						        }
						    })
						/*经销商逻辑*/

						var xmlURL="//www.dongfeng-citroen.com.cn/event/staticapi/";
						$(function(){
						    $.ajax({
						        url: xmlURL+'province.xml',
						        dataType : 'xml',
						        cache: true,
						        success: function(xml) {
						            $("#province1").empty();
						            $("#province1").append("<option value=\"\">请选择</option>");
						            $("#province1_n").empty();
						            $("#province1_n").append("<option value=\"\">请选择</option>");
						            $(xml).find("data").find("province").each(function(index, ele){
						                var id = $(ele).find("id").text();
						                var name = $(ele).find("name").text();
						                $("#province1").append("<option value=\""+id+"\">"+name+"</option>");
						                $("#province1_n").append("<option value=\""+id+"\">"+name+"</option>");
						            });
						        }
						    });
						    $("#province1").change(function () {
						        $("#province").val($("#province1").find("option:selected").text());
						        var prov = $("#province1").val();
						        setcity(prov);
						    });
						    $("#province1_n").change(function () {
						        $("#province_n").val($("#province1_n").find("option:selected").text());
						        var prov = $("#province1_n").val();
						        setcity_n(prov);
						    });
						    $("#city1").change(function () {

						        $("#city").val($("#city1").find("option:selected").text());
						        setdealer($("#city1").val());
						    });
						    $("#city1_n").change(function () {

						        $("#city_n").val($("#city1_n").find("option:selected").text());
						        setdealer_n($("#city1_n").val());
						    });
						    $("#dealer1").change(function () {
						        var dea=$("#dealer1").find("option:selected").text();
						        $("#dealer").val(dea);
						    });
						    $("#dealer1_n").change(function () {
						        var dea=$("#dealer1_n").find("option:selected").text();
						        $("#dealer_n").val(dea);
						    });
						})
						function setcity(provid){
						    $.ajax({
						        url:  xmlURL+'city.xml',
						        dataType : 'xml',
						        cache: true,
						        success: function(xml) {
						            $("#city1").empty();
						            $("#city1").append("<option value=\"\">请选择</option>");
						            $(xml).find("data").find("city").each(function(index, ele){
						                if(provid==$(ele).find("provinceid").text())
						                {
						                    var id = $(ele).find("id").text();
						                    var name = $(ele).find("cityname").text();
						                    $("#city1").append("<option value=\""+id+"\">"+name+"</option>");
						                }

						            });
						        }
						    });
						}

						function setdealer(city){
						    $.ajax({
						        url:  xmlURL+'dealer.xml',
						        dataType : 'xml',
						        cache: true,
						        success: function(xml) {
						            $("#dealer1").empty();
						            $("#dealer1").append("<option value=\"\">请选择</option>");
						            $(xml).find("data").find("dealer").each(function(index, ele){
						                if(city==$(ele).find("cityid").text())
						                {
						                    var id = $(ele).find("id").text();
						                    var name = $(ele).find("name").text();
						                    $("#dealer1").append("<option value=\""+id+"\">"+name+"</option>");
						                }

						            });
						        }
						    });
						}


						function setcity_n(provid){
						    $.ajax({
						        url:  xmlURL+'city.xml',
						        dataType : 'xml',
						        cache: true,
						        success: function(xml) {
						            $("#city1_n").empty();
						            $("#city1_n").append("<option value=\"\">请选择</option>");
						            $(xml).find("data").find("city").each(function(index, ele){
						                if(provid==$(ele).find("provinceid").text())
						                {
						                    var id = $(ele).find("id").text();
						                    var name = $(ele).find("cityname").text();
						                    $("#city1_n").append("<option value=\""+id+"\">"+name+"</option>");
						                }

						            });
						        }
						    });
						}

						function setdealer_n(city){
						    $.ajax({
						        url:  xmlURL+'dealer.xml',
						        dataType : 'xml',
						        cache: true,
						        success: function(xml) {
						            $("#dealer1_n").empty();
						            $("#dealer1_n").append("<option value=\"\">请选择</option>");
						            $(xml).find("data").find("dealer").each(function(index, ele){
						                if(city==$(ele).find("cityid").text())
						                {
						                    var id = $(ele).find("id").text();
						                    var name = $(ele).find("name").text();
						                    $("#dealer1_n").append("<option value=\""+id+"\">"+name+"</option>");
						                }

						            });
						        }
						    });
						}
						    function checkusername(formString) {
						    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[6780]|18[0-9]|14[57])[0-9]{8}$/.test(formString);
						}
						/*经销商逻辑结束*/
						$('#btnsbt_n').click(function(event) {
						        stm_clicki('send', 'event', '提交按钮', '点击', '预约试驾浮动');

						        if($('#realname_n').val()=="" || $('#realname_n').val()=="姓 名"){
						            alert("请填写您的姓名");
						            return false;
						        }
						        if($('#mobile_n').val()=="" || checkusername($('#mobile_n').val())==false ||$('#mobile_n').val()=="电 话"){
						            alert("手机号码不正确");
						            return false;
						        }
						        if($('#province_n').val()=="" || $('#province_n').val()=="请选择"){
						            alert("请选择省");
						            return false;
						        }
						        if($('#city_n').val()=="" || $('#city_n').val()=="请选择"){
						            alert("请选择市");
						            return false;
						        }
						        if($('#dealer_n').val()=="" || $('#dealer_n').val()=="请选择"){
						            alert("请选择经销商");
						            return false;
						        }
						        if($("#frm .checkbtn1_n").attr("src").indexOf("1")==-1){
						            alert('请同意免责声明！');return;
						        }
						        var p = $('#frm').serialize();
						        var global_base_url= "//datacenter.dongfeng-citroen.com.cn/api/add_order?jp=1";
						        $.post( global_base_url , p, function(json){
						            if(json.code!='200'){
						                alert('提交失败');
						            }else{
						                alert('提交成功');
						                //$(".yuyueshijia").fadeOut();
						                $('#frm')[0].reset();
						            }
						        }, 'jsonp');
						    });




						/*经销商逻辑*/

						var xmlURL="//www.dongfeng-citroen.com.cn/event/staticapi/";
						$(function(){
							$.ajax({
								url: xmlURL+'province.xml',
								dataType : 'xml',
								cache: true,
								success: function(xml) {
									$("#province12").empty();
									$("#province12").append("<option value=\"\">请选择</option>");
									$("#province1_n2").empty();
									$("#province1_n2").append("<option value=\"\">请选择</option>");
									$(xml).find("data").find("province").each(function(index, ele){
										var id = $(ele).find("id").text();
										var name = $(ele).find("name").text();
										$("#province12").append("<option value=\""+id+"\">"+name+"</option>");
										$("#province1_n2").append("<option value=\""+id+"\">"+name+"</option>");
									});
								}
							});
							$("#province12").change(function () {
								$("#province2").val($("#province12").find("option:selected").text());
								var prov = $("#province12").val();
								setcity2(prov);
							});
							$("#province1_n2").change(function () {
								$("#province_n2").val($("#province1_n2").find("option:selected").text());
								var prov = $("#province1_n2").val();
								setcity_n2(prov);
							});
							$("#city12").change(function () {

								$("#city2").val($("#city12").find("option:selected").text());
								setdealer2($("#city12").val());
							});
							$("#city1_n2").change(function () {

								$("#city_n2").val($("#city1_n2").find("option:selected").text());
								setdealer_n2($("#city1_n2").val());
							});
							$("#dealer12").change(function () {
								var dea=$("#dealer12").find("option:selected").text();
								$("#dealer2").val(dea);
							});
							$("#dealer1_n2").change(function () {
								var dea=$("#dealer1_n2").find("option:selected").text();
								$("#dealer_n2").val(dea);
							});
						})
						function setcity2(provid){
							$.ajax({
								 url:  xmlURL+'city.xml',
								dataType : 'xml',
								cache: true,
								success: function(xml) {
									$("#city12").empty();
									$("#city12").append("<option value=\"\">请选择</option>");
									$(xml).find("data").find("city").each(function(index, ele){
										if(provid==$(ele).find("provinceid").text())
										{
											var id = $(ele).find("id").text();
											var name = $(ele).find("cityname").text();
											$("#city12").append("<option value=\""+id+"\">"+name+"</option>");
										}

									});
								}
							});
						}

						function setdealer2(city){
							$.ajax({
								url:  xmlURL+'dealer.xml',
								dataType : 'xml',
								cache: true,
								success: function(xml) {
									$("#dealer12").empty();
									$("#dealer12").append("<option value=\"\">请选择</option>");
									$(xml).find("data").find("dealer").each(function(index, ele){
										if(city==$(ele).find("cityid").text())
										{
											var id = $(ele).find("id").text();
											var name = $(ele).find("name").text();
											$("#dealer12").append("<option value=\""+id+"\">"+name+"</option>");
										}

									});
								}
							});
						}


						function setcity_n2(provid){
							$.ajax({
								url:  xmlURL+'city.xml',
								dataType : 'xml',
								cache: true,
								success: function(xml) {
									$("#city1_n2").empty();
									$("#city1_n2").append("<option value=\"\">请选择</option>");
									$(xml).find("data").find("city").each(function(index, ele){
										if(provid==$(ele).find("provinceid").text())
										{
											var id = $(ele).find("id").text();
											var name = $(ele).find("cityname").text();
											$("#city1_n2").append("<option value=\""+id+"\">"+name+"</option>");
										}

									});
								}
							});
						}

						function setdealer_n2(city){
							$.ajax({
								url:  xmlURL+'dealer.xml',
								dataType : 'xml',
								cache: true,
								success: function(xml) {
									$("#dealer1_n2").empty();
									$("#dealer1_n2").append("<option value=\"\">请选择</option>");
									$(xml).find("data").find("dealer").each(function(index, ele){
										if(city==$(ele).find("cityid").text())
										{
											var id = $(ele).find("id").text();
											var name = $(ele).find("name").text();
											$("#dealer1_n2").append("<option value=\""+id+"\">"+name+"</option>");
										}

									});
								}
							});
						}
						function checkusername(formString) {
							return /^(0|86|17951)?(13[0-9]|15[012356789]|17[6780]|18[0-9]|14[57])[0-9]{8}$/.test(formString);
						}
						/*经销商逻辑结束*/
						$('#btnsbt_n2').click(function(event) {
							stm_clicki('send', 'event', '提交按钮', '点击', '预约试驾浮动');

							if($('#realname_n2').val()=="" || $('#realname_n2').val()=="姓 名"){
								alert("请填写您的姓名");
								return false;
							}
							if($('#mobile_n2').val()=="" || checkusername($('#mobile_n2').val())==false ||$('#mobile_n2').val()=="电 话"){
								alert("手机号码不正确");
								return false;
							}
							if($('#province_n2').val()=="" || $('#province_n2').val()=="请选择"){
								alert("请选择省");
								return false;
							}
							if($('#city_n2').val()=="" || $('#city_n2').val()=="请选择"){
								alert("请选择市");
								return false;
							}
							if($('#dealer_n2').val()=="" || $('#dealer_n2').val()=="请选择"){
								alert("请选择经销商");
								return false;
							}
							if($("#frm2 .checkbtn1_n2").attr("src").indexOf("1")==-1){
								alert('请同意免责声明！');return;
							}
							var p = $('#frm2').serialize();
							var global_base_url= "//datacenter.dongfeng-citroen.com.cn/api/add_order?jp=1";
							$.post( global_base_url , p, function(json){
								if(json.code!='200'){
									alert('提交失败');
								}else{
									alert('提交成功');
									//$(".yuyueshijia").fadeOut();
									$('#frm2')[0].reset();
								}
							}, 'jsonp');
						});
					})