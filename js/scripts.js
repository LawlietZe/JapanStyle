		$(document).ready(function(){
			// // 实现下拉列表功能
			// $(".dropdown-toggle").hover(
			// 	function () {
			// 	$(this).next().css({
			// 		display: 'block',});
			// });
			// $(".dropdown-menu").mouseleave(
			// 	function () {
			// 	$(this).css({
			// 		display: 'none',});
			// });
			$('.menu-plusminus').click(function(){
				var plusminus = $(this).children().html();
				if (plusminus=='+') {
					$(this).parent().parent().next().css({
						display: 'block',
					});
					$(this).children().html('-');
				}
				else {
					$(this).parent().parent().next().css({
						display: 'none',
					});
					$(this).children().html('+');		
				}
			});
			$('.dropdown-box').click(function(){
				$(this).children().eq(1).css({
					display: 'inline-block',
				});
			});
			// $(document).bind("click",function(e){
			// 	var target = e || window.event;
			// 	var elem = e.target || e.srcElement;
			// 	while (elem) {
			// 		if (elem.id && elem.id =='drop-content') {
			// 			return;
			// 		}
			// 		elem = elem.parentNode;
			// 	}
			// 	$("#drop-content").css('display','none');
			// });
		});