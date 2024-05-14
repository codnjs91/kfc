jQuery(document).ready(function(){

  //          메인 메뉴
  $('#drop_box, .sub_menu ').hide(); //서브 메뉴 안 보이게 함 
  $('.mu_list>li').hover(
    function(){
      $('#drop_box, .sub_menu').stop().slideToggle(400); 
      // 메인메뉴에 마우스 올리면 서브메뉴 보이게
    }
  );


  //          띠배너
  $(window).scroll(function(){
  // 브라우저에 스크롤 하면 이벤트 

  let value= $(this).scrollTop(); 
  // 스크롤한 자기 자신의 위치를 밸류라고 변수 선언.  

  if(value>1100){
    // 브라우저를 1100px만큼 스르롤 했을 경우 
    $('#band .band_img').css({
      // 이미지가 나타남
      bottom: 0,
      opacity: 1    
  });
  }else{
    $('#band .band_img').css({
      // 이미지가 나타남
      bottom: 7,
      opacity: 0   
  });
  }
});
  
  //          SNS 배너 
  $('#sns_benner div a ').hide();

  $('#sns_benner .sns_benner_box1').mouseover(
    function(){
      $('#sns_benner .sns_benner_box1 .sns_tb1 ').stop().fadeIn(300);
    }
  );
  $('#sns_benner .sns_benner_box1').mouseleave(
    function(){
      $('#sns_benner div a').stop().fadeOut(300);
    }
  );

  $('#sns_benner .sns_benner_box2').mouseover(
    function(){
      $('#sns_benner .sns_benner_box2 .sns_tb2 ').stop().fadeIn(300);
    }
  );
  $('#sns_benner .sns_benner_box2').mouseleave(
    function(){
      $('#sns_benner div a').stop().fadeOut(300);
    }
  );


  //          스크롤 바 
  $('.top').hide();
  $(window).scroll(function(){
    let sct = $(this).scrollTop();

    if(sct>700){ 
      $('.down').hide();
      $('.top').show();

    }else{
      $('.top').hide();
      $('.down').show();
    }
  });

  $('.top').click(function(){  
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // 상단으로 스크롤 이동시 부드럽게 올라감
  });

  $('.down').click(function(){
    window.scrollTo({ top: 5000, left: 0, behavior: 'smooth' });
    // 하단으로 스크롤 이동시 부드럽게 내려감
  });
  

  return false; // 링크차단(a링크 수정 시 페이지 맨위로 안 올라감)

});