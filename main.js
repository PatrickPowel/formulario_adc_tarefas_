$(document).ready(function() {
    // Event listener para o formulário
    $("#taskForm").submit(function(event) {
      event.preventDefault(); // Impede o comportamento padrão do formulário
  
      // Obtém o nome da tarefa do input
      var taskName = $("#taskName").val();
  
      // Adiciona a tarefa à lista
      $("#taskList").append("<li>" + taskName + "</li>");
  
      // Limpa o campo do formulário
      $("#taskName").val("");
    });
  
    // Event listener para os itens da lista
    $("#taskList").on("click", "li", function() {
      // Adiciona/Remove a classe "completed"
      $(this).toggleClass("completed");
    });
  });
  
  