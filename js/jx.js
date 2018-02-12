$(function(){
	$(".commit_p").click(function(){
		$(this).toggleClass("box0");
	})
//登录、注册页同意协议复选框

    $(".wai").mouseover(function(){
    	var ref=$(this);
    	ref.css({"background":"#c2a880"}).siblings().css({"background":"#c12736"});
    	ref.find("i").hide().parent("li").prev().find("i").hide();
    	ref.prev().find("i").hide();
    }).mouseout(function(){
    	var ref=$(this);
    	ref.css({"background":"#c12736"});
    	ref.find("i").show().parent("li").prev().find("i").show();
    	ref.prev().find("i").show();
    })
//首页导航条鼠标滑过背景切换
	$(".title").hover(function(){
		var ref=$(this);
		ref.addClass("onn").siblings().removeClass("onn");
		var index=ref.index();
		var name=ref.attr("name");
		if($(this).hasClass("title2")){
			$(this).addClass("on").siblings(".title2").removeClass("on");
		}
		
		$(this).find("i").show().parent("span").siblings("span").find("i").hide();
		$(".item1[forname="+name+"]").show().siblings(".item1").hide();
	})	
//首页在线展厅、最新资讯、活动交流切换
	$(".sub").click(function(){
		$(".bg-cover-safe").show();
		$(".safe-box").show();
	})
//安全中心页面弹窗显示

	$(".clk-box").click(function(){
		$(".bg-cover-index").show();
		$(".index-box").show();
	})
	
	$(".index-close").click(function(){
		$(".bg-cover-index").hide();
		$(".index-box").hide();
	})
//首页弹窗显示和隐藏
	
	var i=0;
	var aucinfo_len1=$(".aucinfo-lunbo li").length;
	var aucinfo_len2=$(".aucinfo-imgs li").length;
	$(".aucinfo-lunbo ul").width(aucinfo_len1*540);
	$(".aucinfo-imgs ul").height(aucinfo_len2*140);
	
	function aucinfo_move(index){
		if(index>aucinfo_len1-1){
			i=index=0;
		}
		$(".aucinfo-lunbo ul").css({"transform":"translateX("+(-index*540)+"px)"});
		$(".aucinfo-imgs ul").css({"transform":"translateY("+(-index*140)+"px)"});
		++index;
						
	}
	
	$(".aucinfo-click0").click(function(){
		var ref=$(this);
		var i=ref.index();
		$(".aucinfo-bg").show();
		$(".aucinfo-box").show();
		aucinfo_move(i);
	})
	
	$(".aucinfo-left").click(function(){
		--i;
		if(i<0){
			i=aucinfo_len1-1;
		}
		
		aucinfo_move(i);
	})
	
	$(".aucinfo-right").click(function(){
		++i;
		if(i>aucinfo_len1-1){
			i=0;
		}
		aucinfo_move(i);
	})
	
	$(".aucinfo-close").click(function(){
		$(".aucinfo-bg").hide();
		$(".aucinfo-box").hide();
	})
//拍卖商品详情页 商品详情轮播

	$(".barinfo-change").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
//拍卖商品详情页   "常规竞价"和“委托竞价”切换
//易物商品详情页  “我要换” 和 “私信”按钮切换


	var barinfo_len1=$(".barinfo-lunbo li").length;
	$(".barinfo-lunbo ul").width(barinfo_len1*241);
	var page0=barinfo_len1/5;
	var i0=0;
	function barinfo_move1(){
		if(i0>page0-1){
			i0=0;
			barinfo_move20(i0);
		}else{
			barinfo_move21(i0);
		}
		i0++;
	}
	var j0=setInterval(barinfo_move1,3000);
//	var j0=setInterval(barinfo_move.bind(null,i0),3000);
	
	function barinfo_move20(index){
		$(".barinfo-lunbo ul").css({"transition":"all 0s","transform":"translateX("+(-index*1205)+"px)"});
	}
	function barinfo_move21(index){
		$(".barinfo-lunbo ul").css({"transition":"transform 0.6s ease-out",
			"transform":"translateX("+(-i0*1205)+"px)"});
	}
	
	$(".barinfo-suggest0 .prev").click(function(){
		clearInterval(j0);
		i0--;
		if(i0<0){
			i0=page0-1;
			barinfo_move20(i0);
		}else{
			barinfo_move21(i0);
		}		
		j0=setInterval(barinfo_move1,3000);
	})
	
	$(".barinfo-suggest0 .next").click(function(){
		clearInterval(j0);
		i0++;
		if(i0>page0-1){
			i0=0;
			barinfo_move20(i0);
		}else{
			barinfo_move21(i0);
		}	
		j0=setInterval(barinfo_move1,3000);
	})
//易物商品详情页 轮播图

	$(".atiinfo-clk").click(function(){
		$(this).toggleClass("on");
	})
	
	
	$(".sort-clk").click(function(){
		var ref=$(this);
		var target=ref.find(".sort-open");
		if(target.hasClass("hid0")){
			target.removeClass("hid0").siblings().addClass("hid0");
			ref.siblings().find(".sort-open").addClass("hid0").siblings(".sort-close").removeClass("hid0");
		}else{
			target.addClass("hid0").siblings().removeClass("hid0");
			ref.siblings().find(".sort-open").removeClass("hid0").siblings(".sort-close").addClass("hid0");
		}
	})
	
	$(".waitup-filter select").change(function(){
		var ref=$(this);
		var value=ref.val();
		console.log(value);
		var txt=ref.find("[value="+value+"]").text();
		$(".waitup-filter span").text(txt);
		
//		方法二(结合js实现)
//		var self=document.getElementById("ee");
//		var txt=self.options[self.selectedIndex].text;
//		$(".waitup-filter span").text(txt);
	})
//商品管理-待上传商品页  艺术品类别筛选

	$(".pri-mes1-list-item").click(function(){
		var ref=$(this);
		var name=ref.attr("name");
		$(".pri-mes1-cont-note[forname="+name+"]").show().siblings().hide();
	})
//私信1页面 查看私信消息
	$(".emo-jx").click(function(e){
		var ref=$(this);
		target=ref.find(".emo-img-jx");
		target.show();
		$(document).one("click", function(){
	        target.hide();
	    });
	    e.stopPropagation();
	})
	
	$(".emo-img-jx img").click(function(e){
		e.stopPropagation();
		$(this).parent().parent().hide();
	})
	$(".emo-img-jx").click(function(e){
		e.stopPropagation();
	})
//私信1页面选择选择表情
	$(".auccollect-select select").change(function(){
		var ref=$(this);
		var value=ref.val();
		ref.siblings("span").text(value);
	})
//收藏夹-拍品  select
})
