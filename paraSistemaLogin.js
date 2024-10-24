for (let i = 1; i < 4; i++) {
    console.log("Você tem " + i + " de 3 tentativas");
    let usuario = prompt("Informe o usuário: ");
    let senha = prompt("Informe a senha: ");

    if(usuario === "user" && senha=== "123"){
        console.log("Login realizado com sucesso!");
        break;
    }else{
        if(i===3){
            console.log("Conta bloqueada!");
        }
    }
}


