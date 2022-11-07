var correctCards = 0;
$(init);

function init() {
  $("#successMessage").hide();

  correctCards = 0;
  $("#cardPile").html("");
  $("#cardSlots").html("");

  var correctLettersArray = ["pu.png", "lii.png"];
  var lettersArray = ["pu.png", "lii.png", "si.png", "y.png", "ra.png"];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 5; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo("#cardPile")
      .draggable({
        containment: "#content",
        stack: "#cardPile div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo("#cardSlots")
      .droppable({
        accept: "#cardPile div",
        hoverClass: "hovered",
        drop: handleCardDrop,
      });
  }
}

function handleCardDrop(event, ui) {
  //Grab the slot number and card number
  var slotNumber = $(this).data("number");
  var cardNumber = ui.draggable.data("number");

  //on top of the slot and prevent it being dragged again
  if (slotNumber === cardNumber) {
    ui.draggable.addClass("correct");
    ui.draggable.draggable("disable");
    $(this).droppable("disable");
    ui.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top",
    });
    ui.draggable.draggable("option", "revert", false);
    correctCards++;
  }

  if (correctCards === 2) {
    $("#successMessage").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/lion.wav");
    audio.play();
  }
}
