jQuery(function () {
	var ok = { cartaorganica: false, programadeprincipios: false};
	$("[name='documento']").bind("click", function () {
		ok[this.id] = this.checked;
		if(ok.cartaorganica && ok.programadeprincipios) {
			$("#sumarme").removeClass("opacity-50");
			document.querySelector('#mensaje').innerHTML = "";
		} else {
			$("#sumarme").addClass("opacity-50");
		}
	})

	$("#sumarme").bind("click", function () {
		if($(this).hasClass("opacity-50")) {
			document.querySelector('#mensaje').innerHTML = "Debes marcar todas las opciones de la sección compromiso";
		} else {
			var opcionesAyudar = [];
			$("[name='ayudar']:checked").map((i, v) => opcionesAyudar.push($(v).val()));
			$.ajax({
				method: "post",
				url: "https://info.partidodigital.org.uy/form/submit?ajax=true",
				headers: { 'X-Requested-With': 'XMLHttpRequest' },
				dataType: "json",
				data: $.param({
					"mauticform[primernombre]": $("[name=primernombre]").val(),
					"mauticform[apellido]": $("[name=apellido]").val(),
					"mauticform[email]": $("[name=email]").val(),
					"mauticform[celular]": $("[name=celular]").val(),
					"mauticform[ciudad]": $("[name=ciudad]").val(),
					"mauticform[domicilio]": $("[name=domicilio]").val(),
					"mauticform[cedula]": $("[name=cedula]").val(),
					"mauticform[fechanacimiento]": $("[name=fechanacimiento]").val(),
					"mauticform[ayudar][]": opcionesAyudar,
					"mauticform[tiempo]": $("[name='tiempo']:checked").val(),
					"mauticform[submit]": 1,
					"mauticform[formId]": 5,
					"mauticform[formName]": "sumate",
					"mauticform[return]": ""
				}),
				beforeSend: function () {
					document.querySelector('#mensaje').innerHTML = "";
					if ($("[name=primernombre]").val() === "" || $("[name=apellido]").val() === "" ||
						$("[name=email]").val() === "" || $("[name=celular]").val() === "" ||
						$("[name=ciudad]").val() === "" || $("[name=fechanacimiento]").val() === "" ||
						$("[name=ayudar]:checked").length === 0 || $("[name=tiempo]:checked").length === 0 ) {
							document.querySelector('#mensaje').innerHTML = "Queda algún campo por llenar.";
							return false;
					}
				},
				success: function () {
					ga("send", "event", "Formulario", "Enviado", "Sumarme");
					document.querySelector('#mensaje').innerHTML = "Datos enviados. Nos pondremos en contacto.";
					document.forms[0].reset();
					setTimeout(function () {
						document.querySelector('#mensaje').innerHTML = "";
					}, 5000);
				},
				error: function (jqXHR, textStatus, errorThrown) {
					ga("send", "event", "Formulario", "Error", "Sumarme: " + $("[name=email]").val() + " | " + $("[name=primernombre]").val() + " | " + $("[name=apellido]").val());
					document.querySelector('#mensaje').innerHTML = "Hubo un error al enviar tus datos. Prueba de nuevo.";
					$("#sumarme").attr("disabled", false)
				}
			});
		}
	});
});
