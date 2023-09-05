let btn;

window.onload = ()=>{
  localStorage.setItem("usuario","admin");
  localStorage.setItem("clave","123456");
  btn = document.getElementById("btn_enviar");
  btn.addEventListener("click",login);
}

function login(event){
  let frm_user = document.getElementById("user");
  let frm_password = document.getElementById("password");
  let usr = localStorage.getItem("usuario");
  let psw = localStorage.getItem("clave");
  //localStorage.setItem("clave",clave);
  
  //console.log(frm_user,frm_password,usr,psw);return;
  event.preventDefault();
  
  if(frm_user.value==usr && frm_password.value==psw){
    location.href = "https://www.tcc.com.co";
  }
  else{
    alert("Verifica los datos")
  }
}