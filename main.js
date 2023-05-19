$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#nova-tarefa').val();
        const novoItem = $(`<li>${tarefa}</li>`);

        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('');
    })
    
    $('ul').on('click', 'li', function() {
        $(this).addClass('concluido');
    })
})