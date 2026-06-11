
function enviarProposta(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const ideia = document.getElementById('ideia').value;
    const mural = document.getElementById('mural-propostas');

    // Cria um novo elemento para exibir a proposta
    const novaProposta = document.createElement('div');
    novaProposta.className = 'proposta-item';
    novaProposta.innerHTML = `<strong>${nome}</strong> propôs:<br>"${ideia}"`;

    // Adiciona a proposta no topo do mural
    mural.insertBefore(novaProposta, mural.firstChild);

    // Limpa o formulário para o próximo uso
    document.getElementById('form-proposta').reset();
}