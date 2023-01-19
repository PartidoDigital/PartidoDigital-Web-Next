jQuery(function () {
	$("#enviar").bind("click", function () {
		$.ajax({
			method: "post",
			url: "https://crm.partidodigital.org.uy/form/submit?ajax=true",
			headers: { 'X-Requested-With': 'XMLHttpRequest' },
			dataType: "json",
			data: $.param({
				"mauticform[nombre]": $("[name=nombre]").val(),
				"mauticform[apelldo]": $("[name=apellido]").val(),
				"mauticform[email]": $("[name=email]").val(),
				"mauticform[que_estamos_haciendo_bien]": $("[name=que_estamos_haciendo_bien]").val(),
				"mauticform[que_estamos_haciendo_mal]": $("[name=que_estamos_haciendo_mal]").val(),
				"mauticform[que_no_estamos_haciendo_y]": $("[name=que_no_estamos_haciendo_y]").val(),
				"mauticform[algun_comentario_que_quie]": $("[name=algun_comentario_que_quie]").val(),
				"mauticform[submit]": 1,
				"mauticform[formId]": 6,
				"mauticform[formName]": "encuestasatisfaccion",
				"mauticform[return]": ""
			}),
			beforeSend: function () {
				document.querySelector('#mensaje').innerHTML = "";
				if ($("[name=nombre]").val() === "" || $("[name=apellido]").val() === "" ||
					$("[name=email]").val() === "") {
						document.querySelector('#mensaje').innerHTML = "Queda algún campo obligatorio por llenar.";
						return false;
				}
			},
			success: function () {
				ga("send", "event", "Formulario", "Enviado", "Encuesta");
				document.querySelector('#mensaje').innerHTML = "¡Muchas gracias por tomarte el tiempo para llenar el formulario! Lo tendremos en cuenta para mejorar.";
				$("input[type=text], input[type=email], textarea").val("");
			},
			error: function (jqXHR, textStatus, errorThrown) {
				ga("send", "event", "Formulario", "Error", "Encuesta: " + $("[name=email]").val() + " | " + $("[name=nombre]").val() + " | " + $("[name=apellido]").val());
				document.querySelector('#mensaje').innerHTML = "Hubo un error al enviar tus datos. Prueba de nuevo.";
				$("#enviar").attr("disabled", false)
			}
		});
	});
});
