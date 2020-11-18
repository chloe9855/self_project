$(function(){
    
    // hamburger icon 的切換
    $("button.hamburger").on("click", function(){
      $(this).toggleClass("is-active");
    });

  });



  $(function(){
  
  // 點擊按鈕，選單縮放
  $("button.hamburger").on("click", function(){
    $("nav.right").slideToggle();
  });
  
});



$(function(){
      //here
      $("button.itsu , button.closebtn").on("click" , function(){
        // alert("aa");
        $("div.car").toggleClass("-on");
      });
    });