jQuery(function () {
  let searchParams = new URLSearchParams(window.location.search);
  if(searchParams.has('ok') && searchParams.get('ok') === "true") {
    $("#mensaje_ok").removeClass("hidden");
  }  

  $("textarea").keyup(function () {
    var characterCount = $(this).val().length,
      current = $("#actual");
    
    current.text(characterCount);
  
    if (characterCount >= 500) {
      current.removeClass("text-red-700").addClass("text-green-600");
    } else {
      current.removeClass("text-green-600").addClass("text-red-700");
    }
  });
  
  $("#logo").change(function () {
    if(this.value !== "") {
      $("#logo_button").removeClass("bg-orange-500").addClass("bg-green-600");
      $("#logo_text").text(this.value.replace(/C:\\fakepath\\/i, ''));
    } else {
      $("#logo_button").removeClass("bg-green-600").addClass("bg-orange-500");
      $("#logo_text").text("Subir imágen");
    }    
  });

  $("#firmas").change(function () {
    if(this.value !== "") {
      $("#firmas_button").removeClass("bg-orange-500").addClass("bg-green-600");
      $("#firmas_text").text(this.value.replace(/C:\\fakepath\\/i, ''));
    } else {
      $("#firmas_button").removeClass("bg-green-600").addClass("bg-orange-500");
      $("#firmas_text").text("Subir imágen");
    }    
  });
  
  $("#registro_movimiento").bind("click", function () {
    if($("#mauticform_movimientospoliticos")[0].checkValidity && $("#mauticform_movimientospoliticos")[0].checkValidity()) {
      if($("textarea").val().length >= 500) {
        $('#mensaje').text("");
        $("#registro_movimiento").text("Enviando...");
        $("#registro_movimiento").attr("disabled", true);
        $("#mauticform_movimientospoliticos").submit();
      } else {
        $('#mensaje').text("Debes al menos ingresar una idea con 500 caracteres.");
        return false;
      }
    } else {
      $('#mensaje').text("Alguno de los campos obligatorios está vacío.");
    }
  });
});

