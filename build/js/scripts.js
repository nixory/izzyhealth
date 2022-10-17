// Custom Scripts
// Custom scripts
var acc = document.getElementsByClassName("moreinfo__item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// for (i = 0; i < slider.length; i++) {
//   slider[i].addEventListener("click", function() {
//     this.classList.add("experts__active");
//     var slide = this.nextElementSibling;
//     // var prevSlide = this.Element;
//     if (slide.addEventListener("click", function(){
//       console.log("2")
      
//       slider[i-1].classList.remove("experts__active")
//     })) {
//       console.log("2")
      
//     }
//   });
// }

let slider = $('button.experts__figures')
let a
// })
for (a = 0; a <= slider.length; a++) {
  slider.on('click', function(){
    $(this).toggleClass("experts__active")
    // if ($('.active').length >= 2) {
    
    $("button.experts__figures").not(this).removeClass("experts__active")
    if($('.experts__figures4').is(".experts__active")){
      $(document).ready(function() {
        $(".experts__subtitle").html('“I love FRIM, Thank you so much!!”');
        $(".experts__name").html('James. G');
        
    });
    $("#imgg").attr('src', "img/expertsimg4.jpg")
  }
  if($('.experts__figures2').is(".experts__active")){
    $(document).ready(function() {
      $(".experts__subtitle").html('“Made my design, got my board very quickly! Thanks!”');
      $(".experts__name").html('Mary. V');
  });
  $("#imgg").attr('src', "img/expertsimg2.jpg")
  }
  if($('.experts__figures3').is(".experts__active")){
    $(document).ready(function() {
      $(".experts__subtitle").html('“I recommend this service to all my friends and acquaintances. Thank you for your honesty and work.”');
      $(".experts__name").html('Gared. K');
  });
  $("#imgg").attr('src', "img/expertsimg3.jpg")
}
  if($('.experts__figures1').is(".experts__active")){
    $(document).ready(function() {
      $(".experts__subtitle").html('“The printing on the keyboard is legit good, and the durability is no cap way better than others, would recommend.”');
      $(".experts__name").html('EMILY. J');
  });
  $("#imgg").attr('src', "img/expertsimg.png")
}
  
    
  })
  
  
}

// }
// for (i = 0; i < slider.length; i++) {
//   $(slider[i]).toggleClass("active")
// }
