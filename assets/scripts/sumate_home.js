---
---

$("#sumarme").bind("click", function () {
    $.ajax({
        method: "post",
        url: "https://crm.partidodigital.org.uy/form/submit?ajax=true",
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        dataType: "json",
        data: $.param({
            "mauticform[nombre]": $("[name=nombre]").val(),
            "mauticform[apellido]": $("[name=apellido]").val(),
            "mauticform[email]": $("[name=email]").val(),
            "mauticform[ciudad]": $("[name=ciudad]").val(),
            "mauticform[submit]": 1,
            "mauticform[formId]": 10,
            "mauticform[formName]": "sumatehome",
            "mauticform[return]": ""
        }),
        beforeSend: function () {
            $("#sumarme").html("Enviar datos");
            $("#sumarme").attr("disabled", true);
            if ($("[name=nombre]").val() === "" || $("[name=apellido]").val() === "" ||
                $("[name=email]").val() === "" || $("[name=ciudad]").val() === "") {
                    $("#sumarme").html("Queda algún campo por llenar.");
                    setTimeout(function () {
                        $("#sumarme").attr("disabled", false);
                        $("#sumarme").html("Enviar datos");
                    }, 5000);
                    return false;
            } else {
                $("#sumarme").html("Enviando datos...");
            }
        },
        success: function () {
            ga("send", "event", "Formulario", "Enviado", "Sumarme");
            $("#sumarme").html("Datos enviados. Redireccionando al grupo de WhatsApp...");
            document.forms[0].reset();
            setTimeout(function () {
                document.location = "{{site.whatsapp_group}}"
            }, 3000);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            ga("send", "event", "Formulario", "Error", "Sumarme Home: " + $("[name=email]").val() + " | " + $("[name=nombre]").val() + " | " + $("[name=apellido]").val());
            $("#sumarme").html("Hubo un error al enviar tus datos. Prueba de nuevo.");
            setTimeout(function () {
                $("#sumarme").attr("disabled", false);
                $("#sumarme").html("Enviar datos");
            }, 5000);
        }
    });
});
