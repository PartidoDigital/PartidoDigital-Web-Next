jQuery(function () {
  fetch('https://sheets.googleapis.com/v4/spreadsheets/1ECohuUeBik_2rxvppS3sBHqm_gXpuNbOOYqRoMGans0/values/Detalle%20Ingresos-Egresos!A3:D4/?alt=json&key=AIzaSyBMj9mwRhgGHSnhIBfkxjnlu8xCGMgVxhI')
    .then(response => response.json())
    .then(data => {
      var temp = data.values[0][1];
      document.querySelector("#ingresos-uyu").classList.remove("animate-pulse");
      document.querySelector("#ingresos-uyu").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
      //document.querySelector("#stat-ingresos-uyu").classList.remove("hidden");
      temp = data.values[0][2];
      document.querySelector("#egresos-uyu").classList.remove("animate-pulse");
      //document.querySelector("#stat-egresos-uyu").classList.remove("hidden");
      document.querySelector("#egresos-uyu").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
      temp = data.values[1][1];
      document.querySelector("#ingresos-usd").classList.remove("animate-pulse");
      //document.querySelector("#stat-ingresos-usd").classList.remove("hidden");
      document.querySelector("#ingresos-usd").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
      temp = data.values[1][2];
      document.querySelector("#egresos-usd").classList.remove("animate-pulse");
      //document.querySelector("#stat-egresos-usd").classList.remove("hidden");
      document.querySelector("#egresos-usd").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
    })
    .catch(error => {
      document.querySelector("#ingresos-uyu").classList.remove("animate-pulse");
      document.querySelector("#ingresos-uyu").innerHTML = "Error :(";
      document.querySelector("#egresos-uyu").classList.remove("animate-pulse");
      document.querySelector("#egresos-uyu").innerHTML = "Error :(";
      document.querySelector("#ingresos-usd").classList.remove("animate-pulse");
      document.querySelector("#ingresos-usd").innerHTML = "Error :(";
      document.querySelector("#egresos-usd").classList.remove("animate-pulse");
      document.querySelector("#egresos-usd").innerHTML = "Error :(";
    });
});