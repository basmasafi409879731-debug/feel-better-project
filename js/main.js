$(document).ready(function(){

  // الوضع الليلي
  $("#darkModeBtn").click(function(){
    $("body").toggleClass("dark-mode");

    if($("body").hasClass("dark-mode")){
      $(this).text("الوضع الفاتح");
    } else {
      $(this).text("الوضع الليلي");
    }
  });

  // نموذج التواصل
  $("#contactForm").submit(function(e){
    e.preventDefault();
    alert("❤️ تم إرسال رسالتك بنجاح");
  });

  // Animation: إظهار قسم الخدمات عند النزول إليه
  $(window).on("scroll", function(){
    let servicesTop = $("#services").offset().top - 300;

    if($(window).scrollTop() > servicesTop){
      $("#services").fadeIn(800);
    }
  });

  // Array + Loop لعرض النصائح داخل الجدول
  let tips = [
    {day: "الأحد", tip: "ابدأ يومك بتنفس عميق"},
    {day: "الإثنين", tip: "اكتب شيئًا إيجابيًا"},
    {day: "الثلاثاء", tip: "خذ استراحة قصيرة"},
    {day: "الأربعاء", tip: "اشرب ماء ببطء"},
    {day: "الخميس", tip: "استمع لشيء هادئ"}
  ];

  tips.forEach(function(item){
    $("#tipsTable").append(`
      <tr>
        <td>${item.day}</td>
        <td>${item.tip}</td>
      </tr>
    `);
  });

});
