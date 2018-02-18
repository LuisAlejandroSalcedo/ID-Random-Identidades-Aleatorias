function get_id(){
$.ajax({
  url: 'https://uinames.com/api/?ext',
  success: function(result){
  $('.spinner-container').hide('fast');
  $('.imgprofile').attr('src', result.photo);
  $('.name').text(result.name);
  $('.surname').text(result.surname)
  $('#region').text("Región: " + result.region);
  $('#gender').text("Sexo: " + result.gender);
  $('#age').text("Edad: " + result.age);
  $('#phone').text("Num Telefono: " + result.phone)
  $('#birthday').text("F de Nacimiento: " + result.birthday.dmy)
  $('#email').text("Email: " + result.email);

//Mostrar Dialogo
var button = document.getElementById('btn')
var dialog = document.querySelector('dialog');
button.addEventListener('click', function() {
dialog.showModal();
});

dialog.querySelector('.close').addEventListener('click', function() {
dialog.close();
});


}
});
}

window.onload = function(){
  get_id()
}

