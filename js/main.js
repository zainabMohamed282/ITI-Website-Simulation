function mainBranch(){
    document.getElementById("main").innerHTML="<h3 class='main_branch wow bounceInLeft'> ITI Smart Village </h3> <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6905.643202010877!2d31.023238125170007!3d30.070647759939295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88f29d027c44f959!2z2YXYudmH2K8g2KrZg9mG2YjZhNmI2KzZitinINin2YTZhdi52YTZiNmF2KfYqg!5e0!3m2!1sar!2seg!4v1660315352049!5m2!1sar!2seg' width='480' height='550' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade' class='wow bounceInUp'></iframe >"
}







  function branches(){
    // let branches = ["ITI Alexandria" , "ITI Assuit" , "ITI Aswan" , "ITI Ismailia" , "ITI Mansoura" , "ITI Menofia" , "ITI Minya" , "ITI Qena" , "ITI Sohag" , "ITI New Capital"];

    // for(let i=0 ; i<branches.length ; i++){
    // //   console.log(b);
    // }


    document.getElementById("allBranches").innerHTML =" <h3 class='wow bounceInRight'> ITI Alexandria </h3><h3 class='wow bounceInLeft'> ITI Assuit</h3> <h3 class='wow bounceInRight'> ITI Aswan </h3> <h3 class='wow bounceInLeft'> ITI Ismailia</h3> <h3 class='wow bounceInRight'> ITI Mansoura </h3><h3 class='wow bounceInLeft'> ITI Menofia</h3> <h3 class='wow bounceInRight'> ITI Minya</h3> <h3 class='wow bounceInLeft'> ITI Qena</h3> <h3 class='wow bounceInRight'> ITI Sohag</h3> <h3 class='wow bounceInLeft'> ITI New Capital </h3> ";

}

var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
    // console.log(prevScrollpos);
    // console.log(currentScrollPos);
    document.getElementById("all_navs").style.top = "0";
  } else {
    // console.log(prevScrollpos);
    // console.log(currentScrollPos);
    document.getElementById("all_navs").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}