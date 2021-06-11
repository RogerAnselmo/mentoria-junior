
//TODO: refatorar para melhorar código
function adicionarUsuario() {

    event.preventDefault();

    var usuario = extrairDadosDoFormulario();

    var httpRequest = new XMLHttpRequest();
    httpRequest.open('post', 'http://localhost:3000/usuarios', true);
    httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    httpRequest.send(JSON.stringify(usuario));

    httpRequest.onreadystatechange = function (response) {

        var currentRequest = response.currentTarget;
    
        //verifica se o servidou retornou 200. 200 => OK. Deu certo!
        if (currentRequest.status === 201) {
    
            // 4 é o status que garante que a chamada foi bem sucedidada (https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)            
            if (currentRequest.readyState === 4) {
                var body = document.querySelector('.body-table');

                var novaTr = document.createElement('tr');
                var tdIDusuario = document.createElement('td');
            
                tdIDusuario.textContent = usuario.id
                tdIDusuario.classList.add('id-usuario');
            
                var tdNomeusuario = document.createElement('td');
                tdNomeusuario.textContent = usuario.nome;
                tdNomeusuario.classList.add('nome-usuario');
            
                var tdIdadeUsuario = document.createElement('td');
                tdIdadeUsuario.innerHTML = usuario.idade
                tdIdadeUsuario.classList.add('idade-usuario');
            
                novaTr.appendChild(tdIDusuario);
                novaTr.appendChild(tdNomeusuario);
                novaTr.appendChild(tdIdadeUsuario);
            
                body.appendChild(novaTr);
            }
        }
        else {
            alert('erro!!!')
        }
    };


    
}

function extrairDadosDoFormulario() {
    return {
        "id": document.querySelector('#id-usuario').value,
        "nome": document.querySelector('#nome-usuario').value,
        "idade": document.querySelector('#idade-usuario').value
    };
}