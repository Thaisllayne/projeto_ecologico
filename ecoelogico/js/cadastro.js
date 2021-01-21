document.querySelector("#confsenha").addEventListener('blur', ()=>{
      let senha = document.getElementById("senha").value;
      let confsenha = document.getElementById("confsenha").value;

      if (senha==confsenha) {
         document.querySelector("#btn-cadastro").disabled=false;
      }
      else{
  
        document.querySelector("#btn-cadastro").disabled=true;
      }

});