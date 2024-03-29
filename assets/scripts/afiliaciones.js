jQuery(function () {
	var ok = { cartaorganica: false, programadeprincipios: false, leypartidospoliticos: false};
	$("[type='checkbox']").bind("click", function () {
		ok[this.id] = this.checked;
		if(ok.cartaorganica && ok.programadeprincipios && ok.leypartidospoliticos) {
			$("#afiliarme").removeClass("opacity-50");
			document.querySelector('#mensaje').innerHTML = "";
		} else {
			$("#afiliarme").addClass("opacity-50");
		}
	});

	$("#afiliarme").bind("click", function () {		
		if($(this).hasClass("opacity-50")) {
			document.querySelector('#mensaje').innerHTML = "Debes marcar todas las opciones de la sección compromiso";
		} else {
			$.ajax({
				method: "post",
				url: "https://crm.partidodigital.org.uy/form/submit?ajax=true",
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
					"mauticform[movimientos]": $("[name=movimientos]:checked").val(),
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
					window.location.href = "https://www.mercadopago.com.uy/subscriptions/checkout?preapproval_plan_id=2c9380847f756578017f760dbe3c0011";
				},
				error: function (jqXHR, textStatus, errorThrown) {
					ga("send", "event", "Formulario", "Error", "Afiliación: " + $("[name=email]").val() + " | " + $("[name=nombre]").val() + " | " + $("[name=apellido]").val());
					document.querySelector('#mensaje').innerHTML = "Hubo un error al enviar tus datos. Prueba de nuevo.";
					$("#afiliarme").attr("disabled", false)
				}
			});
		}
	});
});
