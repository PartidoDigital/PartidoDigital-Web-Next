/* global anchors */
/*anchors.options = {
  visible: 'always',
};
anchors.add('.page h1, .page h2, .page h3, .page h4, .page h5');*/
var videoModal = function (id) {
    return "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
};
fetch('https://spreadsheets.google.com/feeds/list/1ECohuUeBik_2rxvppS3sBHqm_gXpuNbOOYqRoMGans0/1/public/values?alt=json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var temp = data.feed.entry[1]["gsx$_cokwr"]["$t"].replace(/\./g, '');
    document.querySelector("#ingresos-uyu").classList.remove("loading");
    document.querySelector("#ingresos-uyu").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
    //document.querySelector("#stat-ingresos-uyu").classList.remove("hidden");
    temp = data.feed.entry[1]["gsx$_cpzh4"]["$t"].replace(/\./g, '');
    document.querySelector("#egresos-uyu").classList.remove("loading");
    //document.querySelector("#stat-egresos-uyu").classList.remove("hidden");
    document.querySelector("#egresos-uyu").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
    temp = data.feed.entry[2]["gsx$_cokwr"]["$t"].replace(/\./g, '');
    document.querySelector("#ingresos-usd").classList.remove("loading");
    //document.querySelector("#stat-ingresos-usd").classList.remove("hidden");
    document.querySelector("#ingresos-usd").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
    temp = data.feed.entry[2]["gsx$_cpzh4"]["$t"].replace(/\./g, '');
    document.querySelector("#egresos-usd").classList.remove("loading");
    //document.querySelector("#stat-egresos-usd").classList.remove("hidden");
    document.querySelector("#egresos-usd").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
})
    .catch(function (error) {
    /*document.querySelector("#ingresos-uyu").classList.remove("loading");
    document.querySelector("#ingresos-uyu").innerHTML = "Error :(";
    document.querySelector("#egresos-uyu").classList.remove("loading");
    document.querySelector("#egresos-uyu").innerHTML = "Error :(";
    document.querySelector("#ingresos-usd").classList.remove("loading");
    document.querySelector("#ingresos-usd").innerHTML = "Error :(";
    document.querySelector("#egresos-usd").classList.remove("loading");
    document.querySelector("#egresos-usd").innerHTML = "Error :(";*/
});
