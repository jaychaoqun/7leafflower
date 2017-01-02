
	$(function(){
		$(".nav").hover(function(){
			// $(".nav_second").slideDown();
			// $(".nav_windows").addClass("on");
		},function(){
			// $(".nav_second").slideUp();
			
			$(".nav_second_box").stop().animate({ left: "-100%", opacity: 0 },function(){
				$(".nav_second_box").css({ left: "100%", opacity: 0 })
			})
			$(".nav_ul li").removeClass("on");
			$(".nav_windows").removeClass("on");

			// 产品系列处理	
			// $(".product_tit02").eq(0).addClass("on").siblings().removeClass("on");
			// $(".xilie_ul_right li").eq(0).addClass("on").siblings().removeClass("on");
			// $(".right_li").eq(0).addClass("on").siblings().removeClass("on");
			// if ($(".product_tit02_xilie").hasClass("on")){
			// 	$(".product_tit02_xilie").removeClass("on");
			// 	$(".xilie_ul").slideUp();
			// };
		})
	})




	var nav_lion = 0;
	$(".big_nav").hover(function(){
		 var nav_lion = $(this).parent("li").index();
		 var nav_li_on = 1;	
		 if( nav_lion != 0 ){
		 		$(".nav_second_box").stop().animate({ left:0, opacity:1 })
				$(".nav_windows").addClass("on");	
			 	$(this).parent("li").addClass("on").siblings().removeClass("on");
			 	var  second_lion = nav_lion - 1;
			 	$(".nav_second_ul>li").eq(second_lion).addClass("on").siblings().removeClass("on");
		 }
	})


	$(function(){
		var product_divon = 0;
		$(".product_tit02").hover(function(){
			$(".product_tit02").removeClass("on");
			$(this).addClass("on");
			$(this).parent("div").addClass("on").siblings().removeClass("on");
			product_divon = $(".product_left>div.on").index();
			$(".right_li").eq(product_divon).addClass("on").siblings().removeClass("on");

			if( product_divon != 1 ){
					if($(".xilie_ul").hasClass("on")){
						$(".xilie_ul").slideUp();
						$(".xilie_ul").removeClass("on");
					}
			}else{
					if(!$(".xilie_ul").hasClass("on")){
						$(".xilie_ul").addClass("on")
						$(".xilie_ul").slideDown();
					}
			}
		})
	})

	$(function(){
		var xilie_lion = 0;
		$(".xilie_ul_left li").hover(function(){
			xilie_lion = $(this).index();
			$(this).addClass("on").siblings().removeClass("on");
			$(".xilie_ul_right li").eq(xilie_lion).addClass("on").siblings().removeClass("on");
		})
	})

	$(function(){	//底部二维码
		$(".span_weixin").click(function(){
			if (!$(this).hasClass("on")){
				$(this).addClass("on");
				$(".foot").stop().animate({ height: 120 });
				$(".a_ewm").find("img").stop().animate({ marginTop: 0 },function(){
					$(".a_ewm").addClass("on");
				})
				//获取滚动条的滑动距离
				var scroH = $(document).scrollTop() + 120;
				$('body,html').stop().animate({ scrollTop:scroH })
			}
			
		})
	})
	$(function(){  
		$(".foot").hover(function(){
				
		},function(){
			if ($(".span_weixin").hasClass("on")){
				$(".span_weixin").removeClass("on")
				$(".a_ewm").removeClass("on");
				$(".foot").stop().animate({ height: 90 });
			}
		})
	})


	
	$(function(){
			//滚动条事件
			$(window).scroll(function(){
			//获取滚动条的滑动距离
				var scroH = $(this).scrollTop();
				var d_hi =$(document).height();
				//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
				if(scroH > 100){
					if(!$(".go_top").hasClass("on")){
						$(".go_top").addClass("on");
					}
				}else{
					if($(".go_top").hasClass("on")){
						$(".go_top").removeClass("on");
					}
				}
			})
	 })	

	$(function(){
			$(".go_top").click(function(){
				$('body,html').animate({ scrollTop:0 })
			})
	 })	

	$(".product_add a:last").addClass("on");

	// $(".search").click(function(){
	// 	if(!$(".search_input").hasClass("on")){
	// 		$(".search_input").addClass("on");
	// 	}else{
	// 		$(".search_input").removeClass("on");
	// 	}
	// })

	function inputValue(vname){
		$(vname).focus(function(){
		var txtname=$(this).val();
		if (txtname==this.defaultValue){
			 $(this).val("")
			}
		})
		$(vname).blur(function(){
		var txtname=$(this).val();
		if (txtname==""){
			 $(this).val(this.defaultValue)
			}
		})
	}	
	
	inputValue(".search_input");	

	$(function(){
		$(".search").click(function(){
			if (!$(".search_input").hasClass("on")){
				$(".search_input").addClass("on");
				$(".search_buttom").addClass("on");
			}else{
				$(".search_input").removeClass("on");
				$(".search_buttom").removeClass("on");
			}
		})
	})
	