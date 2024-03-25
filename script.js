function buscarCEP(){
    const busca = document.getElementById('busca--input').value.trim();
    const url = 'https://api.postmon.com.br/v1/cep/' + busca;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const res = JSON.parse(xhr.responseText);
                mostrarInfo(res);
            }else{
                mostrarErro();
            }
        }
    }
    xhr.send();
}

function mostrarInfo(cep){
    const bairro = document.getElementById('desc--bairro');
    const cidade = document.getElementById('desc--cidade');
    const logradouro = document.getElementById('desc--logradouro');
    const descCep = document.getElementById('desc--cep');
    const estado = document.getElementById('desc--estado');

    bairro.textContent = cep.bairro;
    cidade.textContent = cep.cidade;
    logradouro.textContent = cep.logradouro;
    descCep.textContent = cep.cep;
    estado.textContent = cep.estado;
}

function mostrarErro(){
    const mensagem = document.getElementById('busca--error-message');
    mensagem.textContent = 'Esse CEP não existe! Tente novamente.';
}