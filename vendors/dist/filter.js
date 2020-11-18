$(function(){
	// 點擊按鈕，選單縮放
	$("button.btn_filter , button.btn_filter2").on("click", function(){
		$("aside").slideToggle();
	});
});