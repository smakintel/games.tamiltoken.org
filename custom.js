$(".btnNavigation").click(function () {
  var pageName = $(this).attr("data-pagename");
  console.log(pageName);

  $.ajax({
    url: pageName + ".html",
    type: "POST",
    cache: false,
    processData: false,
    contentType: false,
    data: "Animal",

    success: function (data) {
      console.log(data);
      $("#divContent").html(data);
    },
  });
});
