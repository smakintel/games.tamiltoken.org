$(".btnNavigation").click(function () {
  var pageName = $(this).attr("data-pagename");
  console.log(pageName);

  $.ajax({
    url: "ajax/" + pageName + ".html",
    type: "GET",
    cache: false,
    processData: false,
    contentType: false,
    traditional: true,
    data: "data",

    success: function (data) {
      console.log(data);
      $("#divContent").html(data);
    },
  });
});



//btn-light 