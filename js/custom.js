// document.ready : 화면 로드 완료 후 script 실행
$(function () {
  // include html files
  $(".gnb-include").load("/include/gnb.html");
  $(".main-header-include").load("/include/main-header.html");

  // Category Accordion
  $(".category-accordion .detail").eq(0).show();

  $(".category-accordion .title").click(function () {
    // 펼치기
    // $(this).next().show();
    // $(this).next().stop().slideDown();
    // $(this).next().stop().fadeIn();

    // 펼치고 접기
    // $(this).next().stop().slideToggle();

    // 하나만 펼치기
    $(this).next().stop().slideDown();
    $(this).siblings(".category-accordion .title").next().stop().slideUp();

    $(this).addClass("active");
    $(this).siblings(".category-accordion .title").removeClass("active");
  });
});
