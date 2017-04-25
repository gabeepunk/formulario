function hello(){
  /* Funcionalidad */
  alert("Hello World");
}

function multiplicar(){
  a = document.getElementById('first').value;
  b = document.getElementById('second').value;

  //alert(a*b);//

  document.getElementById('result').innerHTML = a*b;
}
