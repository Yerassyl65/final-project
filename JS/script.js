$(document).on("scroll", function () {
  if($(window).scrollTop() === 0){
    $("#header").removeClass("fixed");
    $("#header").attr("class", "nofixed");
  }
  else{
    $("#header").removeClass("nofixed");
    $("#header").attr("class", "fixed");
  }
})

function slowScroll(id) {
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
}

$("#login").on("click", function () {
  $(".loginPage").removeClass("none");
  $(".firstPage").attr("class", "none");
})

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

fadeOut();
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 3000);
}


$("#register").on("click", function () {
  $(".registerPage").removeClass("none");
  $(".firstPage").attr("class", "none");
})

var correctName = /^([a-zA-Z0-9_\-])+$/;
var correctEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
var correctPassword = /^[a-zA-Z0-9!%&@#$\^*?_~+]+$/;

$("#BtnReg").on("click", function (e) {

  var email = $("#email").val();
  var name = $("#name").val();
  var surname = $("#surname").val();
  var gender = $("[type='radio']:checked").val();
  var password = $("#password").val();
  var rePassword = $("#RePassword").val();
  var secQuestion = $("#secQuestion").val();
  var secAnswer = $("#secAnswer").val();
  var phone = $("#phone").val();
  var condition = $("#condition:checked").val();

  var validation = false;

  if(name === ''){
    $("#name").parent().addClass("error");
    $("#nameLabel").text("Write your name");
    var nameValidation = false;
  }
  else if(!correctName.test(name)){
    $("#name").parent().addClass("error");
    $("#nameLabel").text("Unacceptable symbols in name");
    var nameValidation = false;
  }
  else {
    $("#name").parent().removeClass("error");
    $("#nameLabel").text("Name:");
    var nameValidation = true;
  }

  if(surname === ''){
    $("#surname").parent().addClass("error");
    $("#surnameLabel").text("Write your surname");
    var surnameValidation = false;
  }
  else if(!correctName.test(surname)){
    $("#surname").parent().addClass("error");
    $("#surnameLabel").text("Unacceptable symbols in surname");
    var surnameValidation = false;
  }
  else {
    $("#surname").parent().removeClass("error");
    $("#surnameLabel").text("Surname:");
    var surnameValidation = true;
  }

  if(gender == undefined){
    $("#genderP").addClass("errorP");
    var genderValidation = false;
  }
  else {
    $("#genderP").removeClass("errorP");
    var genderValidation = true;
  }

  if(email === ''){
    $("#email").parent().addClass("error");
    $("#emailLabel").text("Write your e-mail");
    var emailValidation = false;
  }
  else if(!correctEmail.test(email)){
    $("#email").parent().addClass("error");
    $("#emailLabel").text("Write your e-mail correctly");
    var emailValidation = false;
  }
  else {
    $("#email").parent().removeClass("error");
    $("#emailLabel").text("E-mail:");
    var emailValidation = true;
  }

  if(password === ''){
    $("#password").parent().addClass("error");
    $("#passwordLabel").text("Write your password");
    var passwordValidation = false;
  }
  else if(password.length < 8){
    $("#password").parent().addClass("error");
    $("#passwordLabel").text("Password must be at least 8 characters");
    var passwordValidation = false;
  }
  else if(!correctPassword.test(password)){
    $("#password").parent().addClass("error");
    $("#passwordLabel").text("Unacceptable symbols in password");
    var passwordValidation = false;
  }
  else {
    $("#password").parent().removeClass("error");
    $("#passwordLabel").text("Password:");
    var passwordValidation = true;
  }

  if(rePassword === ''){
    $("#RePassword").parent().addClass("error");
    $("#RePasswordLabel").text("Rewrite password");
    var rePasswordValidation = false;
  }
  else if(rePassword != password){
    $("#RePassword").parent().addClass("error");
    $("#RePasswordLabel").text("Password mismatch");
    var rePasswordValidation = false;
  }
  else {
    $("#RePassword").parent().removeClass("error");
    $("#RePasswordLabel").text("Re-type Password:");
    var rePasswordValidation = true;
  }

  if(secQuestion === ''){
    $("#secQuestion").parent().addClass("error");
    var secQuesValidation = false;
  }
  else {
    $("#secQuestion").parent().removeClass("error");
    var secQuesValidation = true;
  }

  if(secAnswer === ''){
    $("#secAnswer").parent().addClass("error");
    var secAnsValidation = false;
  }
  else {
    $("#secAnswer").parent().removeClass("error");
    var secAnsValidation = true;
  }

  if(phone === ''){
    $("#phone").parent().addClass("error");
    $("#phoneLabel").text("Write your phone number");
    var phoneValidation = false;
  }
  else if(phone.length < 6 || phone.length > 11){
    $("#phone").parent().addClass("error");
    $("#phoneLabel").text("Phone number must have min 6 and max 11 numbers");
    var phoneValidation = false;
  }
  else {
    $("#phone").parent().removeClass("error");
    $("#phoneLabel").text("Phone Number:");
    var phoneValidation = true;
  }

  if(condition == undefined){
    $(".requiredP").removeClass("none");
    var conditionValidation = false;
  }
  else {
    $(".requiredP").addClass("none");
    var conditionValidation = true;
  }

  if(nameValidation == true && surnameValidation == true && genderValidation == true && emailValidation == true && passwordValidation == true && rePasswordValidation == true && secQuesValidation == true && secAnsValidation == true && phoneValidation == true && conditionValidation == true){
    validation = true;
  }
  else {
    e.preventDefault();
  }

  if(validation == true) {
    localStorage.setItem(email, JSON.stringify({name: name, surname: surname, email: email, gender: gender, password: password, secQuestion: secQuestion, secAnswer: secAnswer, phone: phone}));
  }
})

$(".regInput").on("focus", function () {
  $(this).parent().addClass("focus");
}).on("blur", function () {
  if($(this).val() === ''){
    $(this).parent().removeClass("focus");
  }
})

$("#condLink").on("click", function () {
  $(".backCondition").addClass("filter");
  $("#conditionListBox").removeClass("none");
})

$("#OK").on("click", function () {
  $(".backCondition").removeClass("filter");
  $("#conditionListBox").addClass("none");
})




$("#BtnLog").on("click", function (e) {
  var logEmail = $("#logEmail").val();
  var logPassword = $("#logPassword").val();
  if(localStorage.getItem(logEmail) == null) {
    $("#logEmail").parent().addClass("error");
    $("#logEmailLabel").text("This account does't exist, write correctly:");
    e.preventDefault();
  }
  else if(logPassword != JSON.parse(localStorage.getItem(logEmail)).password){
    $("#logEmail").parent().removeClass("error");
    $("#logEmailLabel").text("E-mail:");
    $("#logPassword").parent().addClass("error");
    $("#logPasswordLabel").text("Wrong password:");
    e.preventDefault();
  }
  else if(JSON.parse(localStorage.getItem(logEmail)).disable == "yes"){
    alert("Sorry, your account has been blocked");
  }
  else {
    $("#logPassword").parent().removeClass("error");
    $("#logPasswordLabel").text("Password:");
    $(".loginPage").addClass("none");
    $(".firstPage").removeClass("none");
    var name = JSON.parse(localStorage.getItem(logEmail)).name;
    var surname = JSON.parse(localStorage.getItem(logEmail)).surname;
    var email = JSON.parse(localStorage.getItem(logEmail)).email;
    var gender = JSON.parse(localStorage.getItem(logEmail)).gender;
    var password = JSON.parse(localStorage.getItem(logEmail)).password;
    var phone = JSON.parse(localStorage.getItem(logEmail)).phone;
    localStorage.setItem("logAccount", JSON.stringify({name: name, surname: surname, email: email, gender: gender, password: password, phone: phone}));
  }
})

$("#dontAccount").on("click", function () {
  $(".loginPage").addClass("none");
  $(".registerPage").removeClass("none");
})

$("#forgot").on("click", function () {
  $(".logForm").addClass("none");
  $(".forgotForm").removeClass("none");
})

var email, question, answer;

$("#okBtn").on("click", function (e) {
  e.preventDefault();
  email = $("#forgotEmail").val();
  question = JSON.parse(localStorage.getItem(email)).secQuestion;
  answer = JSON.parse(localStorage.getItem(email)).secAnswer;
  $("#question").text(question);
  $("#okBtn").addClass("none");
  $("#answerBtn").removeClass("none");
})

$("#answerBtn").on("click", function (e) {
  var userAnswer = $(".answer").val();
  if(userAnswer != answer) {
    $(".answer").addClass("notAnswer");
    e.preventDefault();
  }
  else {
    var password = JSON.parse(localStorage.getItem(email)).password;
    alert("Your password is " + password);
    $(".answer").removeClass("notAnswer");
    $(".logForm").removeClass("none");
    $(".forgotForm").addClass("none");
  }
})

if(localStorage.getItem("logAccount") != null) {
  $("#login").addClass("none");
  $("#register").addClass("none");
  $(".logAccount").removeClass("none");
  $(".accountName").text(JSON.parse(localStorage.getItem("logAccount")).name);
  $(".menuEmail").text(JSON.parse(localStorage.getItem("logAccount")).email)
  if(JSON.parse(localStorage.getItem("logAccount")).email == "admin@mail.ru"){
    $(".admin").removeClass("none");
  }
}

$(".logAccount").on("click", function () {
  $(".accountMenu").toggleClass("none");
})

$(".logOut").on("click", function () {
  localStorage.removeItem("logAccount");
})

function initMap() {
  var pos = {lat: 43.235205, lng: 76.909744};
  var opt = {
    center: pos,
    zoom: 15
  }

  var myMap = new google.maps.Map(document.getElementById('map'), opt);

  var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    title: "Our university"
  })
}

localStorage.setItem("admin@mail.ru", JSON.stringify({name: "Admin", surname: "Admin", email: "admin@mail.ru", password: "123456789"}));

var accounts = localStorage.length;

$(".adminContent").append('<div class="listRow"><b><p>email</p><p>name</p><p>surname</p><p>gender</p><p>password</p><p>phone</p></b></div>');

for(var i=0; i<accounts; i++) {
  if(localStorage.key(i) != "admin@mail.ru" && localStorage.key(i) != "logAccount" && localStorage.key(i) != "adminOpen"){
    var acc = JSON.parse(localStorage.getItem(localStorage.key(i)));
    var name = acc.name;
    var surname = acc.surname;
    var email = acc.email;
    var password = acc.password;
    var gender = acc.gender;
    var phone = acc.phone;
    if(acc.disable == "yes"){
      $(".adminContent").append('<div class="listRow disable"><p class="listEmail">' + email + '</p><p class="listName">' + name + '</p><p class="listSurname">' + surname + '</p><p class="listGender">' + gender + '</p><p class="listPassword">' + password + '</p><p class="listPhone">' + phone + '</p></div>');
    }
    else{
      $(".adminContent").append('<div class="listRow"><p class="listEmail">' + email + '</p><p class="listName">' + name + '</p><p class="listSurname">' + surname + '</p><p class="listGender">' + gender + '</p><p class="listPassword">' + password + '</p><p class="listPhone">' + phone + '</p></div>');
    }
  }
}

$(".addBtn").on("click", function () {
  var name = $("#addName").val();
  var surname = $("#addSurname").val();
  var email = $("#addEmail").val();
  var password = $("#addPassword").val();
  var phone = $("#addPhone").val();
  var gender = $("[type='radio']:checked").val();

  if(name === ''){
    $("#addName").addClass("addError");
    var addName = false;
  }
  else {
    $("#addName").removeClass("addError");
    var addName = true;
  }
  if(surname === ''){
    $("#addSurname").addClass("addError");
    var addSurname = false;
  }
  else {
    $("#addSurname").removeClass("addError");
    var addSurname = true;
  }
  if(email === ''){
    $("#addEmail").addClass("addError");
    var addEmail = false;
  }
  else {
    $("#addEmail").removeClass("addError");
    var addEmail = true;
  }
  if(password === ''){
    $("#addPassword").addClass("addError");
    var addPassword = false;
  }
  else {
    $("#addPassword").removeClass("addError");
    var addPassword = true;
  }
  if(phone === ''){
    $("#addPhone").addClass("addError");
    var addPhone = false;
  }
  else {
    $("#addPhone").removeClass("addError");
    var addPhone = true;
  }
  if(gender == undefined){
    $("#genderLabel").addClass("genderError");
    var addGender = false;
  }
  else {
    $("#genderLabel").removeClass("genderError");
    var addGender = true;
  }
  if(addName == true && addSurname == true && addEmail == true && addPassword == true && addPhone == true ){
    localStorage.setItem(email, JSON.stringify({name: name, surname: surname, email: email, password: password, phone: phone}));
    
    accounts = localStorage.length;
    
    $(".adminContent").empty();
    $(".adminContent").append('<div class="listRow"><b><p>email</p><p>name</p><p>surname</p><p>gender</p><p>password</p><p>phone</p></b></div>');
    
    for(var i=0; i<accounts; i++) {
      if(localStorage.key(i) != "admin@mail.ru" && localStorage.key(i) != "logAccount" && localStorage.key(i) != "adminOpen"){
        var acc = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var name = acc.name;
        var surname = acc.surname;
        var email = acc.email;
        var password = acc.password;
        var gender = acc.gender;
        var phone = acc.phone;
        if(acc.disable == "yes"){
          $(".adminContent").append('<div class="listRow disable"><p class="listEmail">' + email + '</p><p class="listName">' + name + '</p><p class="listSurname">' + surname + '</p><p class="listGender">' + gender + '</p><p class="listPassword">' + password + '</p><p class="listPhone">' + phone + '</p></div>');
        }
        else{
          $(".adminContent").append('<div class="listRow"><p class="listEmail">' + email + '</p><p class="listName">' + name + '</p><p class="listSurname">' + surname + '</p><p class="listGender">' + gender + '</p><p class="listPassword">' + password + '</p><p class="listPhone">' + phone + '</p></div>');
        }
        $("#addBtnLink").attr("href", "");
      }
    }
  }
})

$(".addInput").on("change", function () {
  $(this).removeClass("addError");
})

$(".listRow").on("click", function () {
  $(".chosen").removeClass("chosen");
  $(this).addClass("chosen");
})

$(".delete").on("click", function () {
  if($(".chosen .listEmail").text() != ''){
    var delAccount = $(".chosen .listEmail").text();
    localStorage.removeItem(delAccount);
    $(".adminContent").empty();

    accounts = localStorage.length;
    
    $(".adminContent").append('<div class="listRow"><b><p>email</p><p>name</p><p>surname</p><p>gender</p><p>password</p><p>phone</p></b></div>');
    
    for(var i=0; i<accounts; i++) {
      if(localStorage.key(i) != "admin@mail.ru" && localStorage.key(i) != "logAccount" && localStorage.key(i) != "adminOpen"){
        var acc = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var name = acc.name;
        var surname = acc.surname;
        var email = acc.email;
        var password = acc.password;
        var gender = acc.gender;
        var phone = acc.phone;
        if(acc.disable == "yes"){
          $(".adminContent").append('<div class="listRow disable"><p class="listEmail">' + email + '</p><p class="listName">' + name + '</p><p class="listSurname">' + surname + '</p><p class="listGender">' + gender + '</p><p class="listPassword">' + password + '</p><p class="listPhone">' + phone + '</p></div>');
        }
        else{
          $(".adminContent").append('<div class="listRow"><p class="listEmail">' + email + '</p><p class="listName">' + name + '</p><p class="listSurname">' + surname + '</p><p class="listGender">' + gender + '</p><p class="listPassword">' + password + '</p><p class="listPhone">' + phone + '</p></div>');
        }
        $("#deleteBtn").attr("href", "");
      }
    }
  }
})

$(".disable").on("click", function () {
  if($(".chosen .listEmail").text() != ''){
    var disAccountEmail = $(".chosen .listEmail").text();
    var disAccountName = $(".chosen .listName").text();
    var disAccountSurname = $(".chosen .listSurname").text();
    var disAccountPassword = $(".chosen .listPassword").text();
    var disAccountGender = $(".chosen .listGender").text();
    var disAccountPhone = $(".chosen .listPhone").text();
    localStorage.setItem(disAccountEmail, JSON.stringify({name: disAccountName, surname: disAccountSurname, email: disAccountEmail, gender: disAccountGender, password: disAccountPassword, phone: disAccountPhone, disable: "yes"}));
    $(".chosen").addClass("disable");
    $(".chosen").addClass("chosen");
  }
})

$(".enable").on("click", function () {
  if($(".chosen .listEmail").text() != ''){
    var enAccountEmail = $(".chosen .listEmail").text();
    var enAccountName = $(".chosen .listName").text();
    var enAccountSurname = $(".chosen .listSurname").text();
    var enAccountPassword = $(".chosen .listPassword").text();
    var enAccountGender = $(".chosen .listGender").text();
    var enAccountPhone = $(".chosen .listPhone").text();
    localStorage.setItem(enAccountEmail, JSON.stringify({name: enAccountName, surname: enAccountSurname, email: enAccountEmail, gender: enAccountGender, password: enAccountPassword, phone: enAccountPhone}));
    $(".chosen").removeClass("disable");
    $(".chosen").removeClass("chosen");
  }
})

$(".admin").on("click", function () {
  $(".firstPage").addClass("none");
  $(".adminPage").removeClass("none");
  localStorage.setItem("adminOpen", "yes");
})

$(".closePanel").on("click", function() {
  localStorage.setItem("adminOpen", "no");
})

if(localStorage.getItem("adminOpen") == "yes"){
  $(".firstPage").addClass("none");
  $(".adminPage").removeClass("none");
}




//LIBRARY SLiDES

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




var number = 1;
showSlider(number);

function plusSlider(v) {
  showSlider(number += v);
}


function currentSlider(v) {
  showSlider(number = v);
}

function showSlider(v) {
  var a;
  var slider = document.getElementsByClassName("mySlider");
  var doter = document.getElementsByClassName("doters");
  if (v > slider.length) {number = 1}    
  if (v < 1) {number = slider.length}
  for (a = 0; a < slider.length; a++) {
      slider[a].style.display = "none";  
  }
  for (a = 0; a < doter.length; a++) {
      doter[a].className = doter[a].className.replace(" active", "");
  }
  slider[number-1].style.display = "block";  
  doter[number-1].className += " active";
}


var sun = 1;
showSlideradventure(sun);

function plusSlideradventure(w) {
  showSlideradventure(sun += w);
}


function Slideradventure(w) {
  showSlideradventure(sun = w);
}

function showSlideradventure(w) {
  var t;
  var slideradventure = document.getElementsByClassName("mySlideradventure");
  var dotera = document.getElementsByClassName("dotersa");
  if (w > slideradventure.length) {sun = 1}    
  if (w < 1) {sun = slideradventure.length}
  for (t = 0; t < slideradventure.length; t++) {
      slideradventure[t].style.display = "none";  
  }
  for (t = 0; t < dotera.length; t++) {
      dotera[t].className = dotera[t].className.replace(" active", "");
  }
  slideradventure[sun-1].style.display = "block";  
  dotera[sun-1].className += " active";
}



var num = 1;
showSliderkids(num);

function plusSliderkids(m) {
  showSliderkids(num += m);
}


function Sliderkids(m) {
  showSliderkids(num = m);
}

function showSliderkids(m) {
  var u;
  var sliderkids = document.getElementsByClassName("mySliderkids");
  var doterk = document.getElementsByClassName("dotersk");
  if (m > sliderkids.length) {num = 1}    
  if (m < 1) {num = sliderkids.length}
  for (u = 0; u < sliderkids.length; u++) {
      sliderkids[u].style.display = "none";  
  }
  for (u = 0; u < doterk.length; u++) {
      doterk[u].className = doterk[u].className.replace(" active", "");
  }
  sliderkids[num-1].style.display = "block";  
  doterk[num-1].className += " active";
}


var index = 1;
showSliderbusiness(index);

function plusSliderbusiness(r) {
  showSliderbusiness(index += r);
}


function Sliderbusiness(r) {
  showSliderbusiness(index = r);
}

function showSliderbusiness(r) {
  var e;
  var sliderbusiness = document.getElementsByClassName("mySliderbusiness");
  var doterb = document.getElementsByClassName("dotersb");
  if (r > sliderbusiness.length) {index = 1}    
  if (r < 1) {index = sliderbusiness.length}
  for (e = 0; e < sliderbusiness.length; e++) {
      sliderbusiness[e].style.display = "none";  
  }
  for (e = 0; e < doterb.length; e++) {
      doterb[e].className = doterb[e].className.replace(" active", "");
  }
  sliderbusiness[index-1].style.display = "block";  
  doterb[index-1].className += " active";
}




