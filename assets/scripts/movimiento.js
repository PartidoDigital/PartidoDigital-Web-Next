$("textarea").keyup(function () {
  var characterCount = $(this).val().length,
    current = $("#actual");
  
  current.text(characterCount);

  if (characterCount >= 500) {
    current.addClass("text-green-600");
  }
});
