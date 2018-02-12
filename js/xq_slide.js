var curindex=0;
var curleft=0;
var liwidth=$(".xq_imgbag li").width();
var length=$(".xq_imgbag li").length;
$(function(){
	$(".xq_content_right").append('<div class="xq_smimg-div"><ul class="xq_smimg"></ul></div><div class="xq_smimg-btnn"><span class="xq_smimg-btn0 xq_smimg-prev0"></span><span class="xq_smimg-btn0 xq_smimg-next0 on"></span></div>');
	$(".xq_imgbag").css({'width':length*liwidth+'px'});
	$(".xq_smimg").html($(".xq_imgbag").html());
	var liheight1=$(".xq_smimg li").height();
	$(".xq_smimg").css({'height':length*liheight1+'px'});
	$(".xq_smimg li").on('click',function(){
		curindex=$(".xq_smimg li").index(this);
		curleft=-(curindex*liwidth);
		$(".xq_smimg li").css({'border':'0px','width':'160px',height:'160px'});
		$(".xq_smimg li").eq(curindex).css({'border':'1px solid #f00','width':'158px',height:'158px'});
		$(".xq_imgbag").css({'left':curleft+'px'});
	});
	$(".xq_prev").on('click',function(){
		if (curleft<0 && curindex>0) {
			--curindex;
			
			if(curindex==0){
				$(".xq_prev").removeClass("on");
				$(".xq_next").addClass("on");
			}else{
				$(".xq_prev").addClass("on");
			}
			
			curleft=-(liwidth*curindex);
			$(".xq_smimg li").css({'border':'0px','width':'160px',height:'160px'});
			$(".xq_smimg li").eq(curindex).css({'border':'1px solid #f00','width':'158px',height:'158px'});
		};
		$(".xq_imgbag").css({'left':curleft+'px'});
	});
	$(".xq_slide_close").on('click',function(){
		$(".xq_slide_out").fadeOut(function(){
			curindex=0;
			curleft=0;
			$(".xq_imgbag").css({'left':'0px'});
			$(".xq_smimg li").css({'border':'0px','width':'160px',height:'160px'});
		});
	});
	$(".xq_next").on('click',function(){
		if (curleft>(length-1)*(-liwidth) && curindex<(length-1)){
			++curindex;
			
			if(curindex==length-1){
				$(".xq_next").removeClass("on");
				$(".xq_prev").addClass("on");
			}else{
				$(".xq_next").addClass("on");
			}
			
			curleft=-(liwidth*curindex);
			$(".xq_smimg li").css({'border':'0px','width':'160px',height:'160px'});
			$(".xq_smimg li").eq(curindex).css({'border':'1px solid #f00','width':'158px',height:'158px'});
		};
		$(".xq_imgbag").css({'left':curleft+'px'});
	});
	var page_jx=length/4;
	var ii=1;
	$(".xq_smimg-prev0").click(function(){
		if(ii>2 && ii<=page_jx){
			$(".xq_smimg").css({"transform":"translateY("+(2-ii)*720+"px)"});
			ii--;
		}else if(ii==2){
			$(".xq_smimg").css({"transform":"translateY("+0*720+"px)"});
			ii--;
			$(this).removeClass("on");
			$(".xq_smimg-next0").addClass("on");
		}
		
		
	})
	
	$(".xq_smimg-next0").click(function(){
		if(ii>=1 && ii<page_jx-1){
			$(".xq_smimg").css({"transform":"translateY("+(-ii*720)+"px)"});
			ii++;
		}else if(ii==page_jx-1){
			$(".xq_smimg").css({"transform":"translateY("+(-ii*720)+"px)"});
			ii++;
			$(this).removeClass("on");
			$(".xq_smimg-prev0").addClass("on");
		}
		
	})
	
});
function  xq_slide(curindexs) {
	curindex=curindexs;
	curleft=-(curindex*liwidth);
	$(".xq_slide_out").fadeIn();
	$(".xq_smimg li").eq(curindexs).css({'border':'1px solid #f00','width':'158px',height:'158px'});
	$(".xq_imgbag").css({'left':curleft+'px'});
}