$(document).ready(function() {
    $('#agendamento-form').submit(function(e) {
        e.preventDefault();
        var nome = $('#nome').val();
        var email = $('#email').val();
        var veiculo = $('#veiculo').val();
        var data = $('#data').val();
        var servico = $('#servico').val();

        // Modificar o formato da data para dia/mês/ano
        var dataFormatada = new Date(data).toLocaleDateString('pt-BR');

        // Envie os dados para o WhatsApp aqui
        var mensagem = encodeURIComponent(
            '*AGENDAMENTO DE SERVIÇO*\n' +   // Adiciona asteriscos para colocar o texto em negrito
            'Nome: ' + nome + '\n' +
            'Email: ' + email + '\n' +
            'Veículo: ' + veiculo + '\n' +
            'Data: ' + dataFormatada + '\n' +
            'Serviço: ' + servico
        );
        var url = 'https://wa.me/5531998449047/?text=' + mensagem;
        window.open(url);
    });
});
