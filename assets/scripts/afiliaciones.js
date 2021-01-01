jQuery(function () {
	var ok = { cartaorganica: false, programadeprincipios: false};
	$("[type='checkbox']").bind("click", function () {
		ok[this.id] = this.checked;
		if(ok.cartaorganica && ok.programadeprincipios) {
			$("#afiliarme").removeClass("opacity-50");
			document.querySelector('#mensaje').innerHTML = "";
		} else {
			$("#afiliarme").addClass("opacity-50");
		}
	})

	$("#afiliarme").bind("click", function () {
		if($(this).hasClass("opacity-50")) {
			document.querySelector('#mensaje').innerHTML = "Debes marcar todas las opciones de la sección compromiso";
		} else {
			$.ajax({
				method: "post",
				url: "https://info.partidodigital.org.uy/form/submit?ajax=true",
				headers: { 'X-Requested-With': 'XMLHttpRequest' },
				dataType: "json",
				data: $.param({
					"mauticform[nombre]": $("[name=nombre]").val(),
					"mauticform[apellido]": $("[name=apellido]").val(),
					"mauticform[email]": $("[name=email]").val(),
					"mauticform[celular]": $("[name=celular]").val(),
					"mauticform[ciudad]": $("[name=ciudad]").val(),
					"mauticform[barrio]": $("[name=barrio]").val(),
					"mauticform[domicilio]": $("[name=domicilio]").val(),
					"mauticform[cedula]": $("[name=cedula]").val(),
					"mauticform[fechanacimiento]": $("[name=fechanacimiento]").val(),
					"mauticform[submit]": 1,
					"mauticform[formId]": 3,
					"mauticform[formName]": "afiliacion",
					"mauticform[return]": ""
				}),
				beforeSend: function () {
					document.querySelector('#mensaje').innerHTML = "";
					if ($("[name=nombre]").val() === "" || $("[name=apellido]").val() === "" ||
						$("[name=email]").val() === "" || $("[name=celular]").val() === "" ||
						$("[name=ciudad]").val() === "" || $("[name=barrio]").val() === "" ||
						$("[name=domicilio]").val() === "" || $("[name=cedula]").val() === "" ||
						$("[name=fechanacimiento]").val() === "") {
							document.querySelector('#mensaje').innerHTML = "Queda algún campo por llenar.";
							return false;
					}
				},
				success: function () {
					ga("send", "event", "Formulario", "Enviado", "Afiliación");
					window.location.href = "https://www.mercadopago.com/mlu/checkout/start?pref_id=441941744-71c6a808-24e4-43e6-94b5-44bdcfcca8a5";
				},
				error: function (jqXHR, textStatus, errorThrown) {
					ga("send", "event", "Formulario", "Error", "Afiliación: " + $("[name=email]").val() + " | " + $("[name=nombre]").val() + " | " + $("[name=apellido]").val());
					document.querySelector('#mensaje').innerHTML = "Hubo un error al enviar tus datos. Prueba de nuevo.";
					$("#afiliarme").attr("disabled", false)
				}
			});
		}
		return false;
	});
});
