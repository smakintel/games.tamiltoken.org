$(".btnNavigation").click(function () {
  var pageName = $(this).attr("data-pagename");
  console.log(pageName);

  $.ajax({
    url: "ajax/" + pageName + ".html",
    type: "POST",
    cache: false,
    processData: false,
    contentType: false,
    traditional: true,
    data: "Animal",

    success: function (data) {
      console.log(data);
      $("#divContent").html(data);
    },
  });
});
