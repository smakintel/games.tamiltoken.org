var correctCards = 0;
$(init);

function init() {
  $(".successMessage").hide();
  correctCards = 0;
  $(".cardPile").html("");
  $(".cardSlots").html("");

  var correctLettersArray = ["pu.png", "li.png"];
  var lettersArray = ["pu.png", "li.png", "si.png", "y.png", "ra.png", "g.png"];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 6; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo(".cardPile")
      .draggable({
        containment: "#content",
        stack: ".cardPile div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo(".cardSlots")
      .droppable({
        accept: ".cardPile div",
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
    $(".successMessage").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/lion.wav");
    audio.play();
  }
}

//singam
var animal1 = 0;
$(singam);

function singam() {
  $(".success").hide();

  animal1 = 0;
  $(".cardPile1").html("");
  $(".cardSlots1").html("");

  var correctLettersArray = ["si.png", "g.png", "ka.png", "m.png"];
  var lettersArray = ["si.png", "g.png", "ka.png", "m.png", "ra.png", "ma.png"];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 6; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo(".cardPile1")
      .draggable({
        containment: "#content",
        stack: ".cardPile1 div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo(".cardSlots1")
      .droppable({
        accept: ".cardPile1 div",
        hoverClass: "hovered",
        drop: handleCardDropsingam,
      });
  }
}

function handleCardDropsingam(event, li) {
  //Grab the slot number and card number
  var slotNumber = $(this).data("number");
  var cardNumber = li.draggable.data("number");

  //on top of the slot and prevent it being dragged again
  if (slotNumber === cardNumber) {
    li.draggable.addClass("correct");
    li.draggable.draggable("disable");
    $(this).droppable("disable");
    li.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top",
    });
    li.draggable.draggable("option", "revert", false);
    animal1++;
  }

  if (animal1 === 4) {
    $(".success").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/lion.wav");
    audio.play();
  }
}

//dog
var animal2 = 0;
$(dog);

function dog() {
  $(".success2").hide();

  animal2 = 0;
  $(".cardPile2").html("");
  $(".cardSlots2").html("");

  var correctLettersArray = ["naa.png", "y.png"];
  var lettersArray = [
    "naa.png",
    "y.png",
    "ka.png",
    "m.png",
    "ra.png",
    "ma.png",
  ];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 6; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo(".cardPile2")
      .draggable({
        containment: "#content",
        stack: ".cardPile2 div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo(".cardSlots2")
      .droppable({
        accept: ".cardPile2 div",
        hoverClass: "hovered",
        drop: handleCardDropDog,
      });
  }
}

function handleCardDropDog(event, li) {
  //Grab the slot number and card number
  var slotNumber = $(this).data("number");
  var cardNumber = li.draggable.data("number");

  //on top of the slot and prevent it being dragged again
  if (slotNumber === cardNumber) {
    li.draggable.addClass("correct");
    li.draggable.draggable("disable");
    $(this).droppable("disable");
    li.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top",
    });
    li.draggable.draggable("option", "revert", false);
    animal2++;
  }

  if (animal2 === 2) {
    $(".success2").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/dog.wav");
    audio.play();
  }
}

//cow
var animal3 = 0;
$(cow);

function cow() {
  $(".success3").hide();

  animal1 = 0;
  $(".cardPile3").html("");
  $(".cardSlots3").html("");

  var correctLettersArray = ["ma.png", "du.png"];
  var lettersArray = [
    "ma.png",
    "du.png",
    "ka.png",
    "m.png",
    "ra.png",
    "ku.png",
  ];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 6; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo(".cardPile3")
      .draggable({
        containment: "#content",
        stack: ".cardPile3 div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo(".cardSlots3")
      .droppable({
        accept: ".cardPile3 div",
        hoverClass: "hovered",
        drop: handleCardDropCow,
      });
  }
}

function handleCardDropCow(event, li) {
  //Grab the slot number and card number
  var slotNumber = $(this).data("number");
  var cardNumber = li.draggable.data("number");

  //on top of the slot and prevent it being dragged again
  if (slotNumber === cardNumber) {
    li.draggable.addClass("correct");
    li.draggable.draggable("disable");
    $(this).droppable("disable");
    li.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top",
    });
    li.draggable.draggable("option", "revert", false);
    animal3++;
  }

  if (animal3 === 2) {
    $(".success3").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/cow.wav");
    audio.play();
  }
}
//

//cat
var animal4 = 0;
$(cat);

function cat() {
  $(".success4").hide();

  animal4 = 0;
  $(".cardPile4").html("");
  $(".cardSlots4").html("");

  var correctLettersArray = ["poo.png", "nai.png"];
  var lettersArray = [
    "poo.png",
    "nai.png",
    "ka.png",
    "m.png",
    "ra.png",
    "ma.png",
  ];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 6; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo(".cardPile4")
      .draggable({
        containment: "#content",
        stack: ".cardPile4 div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo(".cardSlots4")
      .droppable({
        accept: ".cardPile4 div",
        hoverClass: "hovered",
        drop: handleCardDropCat,
      });
  }
}

function handleCardDropCat(event, li) {
  //Grab the slot number and card number
  var slotNumber = $(this).data("number");
  var cardNumber = li.draggable.data("number");

  //on top of the slot and prevent it being dragged again
  if (slotNumber === cardNumber) {
    li.draggable.addClass("correct");
    li.draggable.draggable("disable");
    $(this).droppable("disable");
    li.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top",
    });
    li.draggable.draggable("option", "revert", false);
    animal4++;
  }

  if (animal4 === 2) {
    $(".success4").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/cat.wav");
    audio.play();
  }
}
//

//horse
var animal5 = 0;
$(horse);

function horse() {
  $(".success5").hide();

  animal5 = 0;
  $(".cardPile5").html("");
  $(".cardSlots5").html("");

  var correctLettersArray = ["ku.png", "thi.png", "rai.png"];
  var lettersArray = [
    "ku.png",
    "thi.png",
    "rai.png",
    "m.png",
    "ra.png",
    "ma.png",
  ];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 6; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo(".cardPile5")
      .draggable({
        containment: "#content",
        stack: ".cardPile5 div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo(".cardSlots5")
      .droppable({
        accept: ".cardPile5 div",
        hoverClass: "hovered",
        drop: handleCardDropHorse,
      });
  }
}

function handleCardDropHorse(event, li) {
  //Grab the slot number and card number
  var slotNumber = $(this).data("number");
  var cardNumber = li.draggable.data("number");

  //on top of the slot and prevent it being dragged again
  if (slotNumber === cardNumber) {
    li.draggable.addClass("correct");
    li.draggable.draggable("disable");
    $(this).droppable("disable");
    li.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top",
    });
    li.draggable.draggable("option", "revert", false);
    animal5++;
  }

  if (animal5 === 3) {
    $(".success5").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/horse.wav");
    audio.play();
  }
}

//Bear
var animal6 = 0;
$(Bear);

function Bear() {
  $(".success6").hide();

  animal6 = 0;
  $(".cardPile6").html("");
  $(".cardSlots6").html("");

  var correctLettersArray = ["ka.png", "ra.png", "di.png"];
  var lettersArray = ["ka.png", "ra.png", "di.png", "m.png", "g.png", "ma.png"];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 6; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo(".cardPile6")
      .draggable({
        containment: "#content",
        stack: ".cardPile6 div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo(".cardSlots6")
      .droppable({
        accept: ".cardPile6 div",
        hoverClass: "hovered",
        drop: handleCardDropBear,
      });
  }
}

function handleCardDropBear(event, li) {
  //Grab the slot number and card number
  var slotNumber = $(this).data("number");
  var cardNumber = li.draggable.data("number");

  //on top of the slot and prevent it being dragged again
  if (slotNumber === cardNumber) {
    li.draggable.addClass("correct");
    li.draggable.draggable("disable");
    $(this).droppable("disable");
    li.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top",
    });
    li.draggable.draggable("option", "revert", false);
    animal6++;
  }

  if (animal6 === 3) {
    $(".success6").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/lion.wav");
    audio.play();
  }
}

//Deer
var animal7 = 0;
$(Deer);

function Deer() {
  $(".success7").hide();

  animal7 = 0;
  $(".cardPile7").html("");
  $(".cardSlots7").html("");

  var correctLettersArray = ["ma.png", "n.png"];
  var lettersArray = [
    "ma.png",
    "n.png",
    "rai.png",
    "m.png",
    "ra.png",
    "ya.png",
  ];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 6; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo(".cardPile7")
      .draggable({
        containment: "#content",
        stack: ".cardPile7 div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo(".cardSlots7")
      .droppable({
        accept: ".cardPile7 div",
        hoverClass: "hovered",
        drop: handleCardDropDeer,
      });
  }
}

function handleCardDropDeer(event, li) {
  //Grab the slot number and card number
  var slotNumber = $(this).data("number");
  var cardNumber = li.draggable.data("number");

  //on top of the slot and prevent it being dragged again
  if (slotNumber === cardNumber) {
    li.draggable.addClass("correct");
    li.draggable.draggable("disable");
    $(this).droppable("disable");
    li.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top",
    });
    li.draggable.draggable("option", "revert", false);
    animal7++;
  }

  if (animal7 === 2) {
    $(".success7").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/horse.wav");
    audio.play();
  }
}

//Rabbit
var animal8 = 0;
$(Rabbit);

function Rabbit() {
  $(".success8").hide();

  animal8 = 0;
  $(".cardPile8").html("");
  $(".cardSlots8").html("");

  var correctLettersArray = ["mu.png", "ya.png", "l.png"];
  var lettersArray = ["mu.png", "y.png", "l.png", "m.png", "ra.png", "ya.png"];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 6; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo(".cardPile8")
      .draggable({
        containment: "#content",
        stack: ".cardPile8 div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo(".cardSlots8")
      .droppable({
        accept: ".cardPile8 div",
        hoverClass: "hovered",
        drop: handleCardDropRabbit,
      });
  }
}

function handleCardDropRabbit(event, li) {
  //Grab the slot number and card number
  var slotNumber = $(this).data("number");
  var cardNumber = li.draggable.data("number");

  //on top of the slot and prevent it being dragged again
  if (slotNumber === cardNumber) {
    li.draggable.addClass("correct");
    li.draggable.draggable("disable");
    $(this).droppable("disable");
    li.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top",
    });
    li.draggable.draggable("option", "revert", false);
    animal8++;
  }

  if (animal8 === 3) {
    $(".success8").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/horse.wav");
    audio.play();
  }
}

//Fox
var animal9 = 0;
$(Fox);

function Fox() {
  $(".success9").hide();

  animal7 = 0;
  $(".cardPile9").html("");
  $(".cardSlots9").html("");

  var correctLettersArray = ["na.png", "ri.png"];
  var lettersArray = [
    "na.png",
    "ri.png",
    "rai.png",
    "m.png",
    "ra.png",
    "ya.png",
  ];

  lettersArray.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 6; i++) {
    $("<div><img src='letters/" + lettersArray[i] + "'></div>")
      .data("number", lettersArray[i])
      .attr("id", "card" + lettersArray[i])
      .appendTo(".cardPile9")
      .draggable({
        containment: "#content",
        stack: ".cardPile9 div",
        cursor: "move",
        revert: true,
      });
  }

  // Create the card slots
  let crCount = correctLettersArray.length;
  for (var i = 0; i < crCount; i++) {
    $("<div>text</div>")
      .data("number", correctLettersArray[i])
      .appendTo(".cardSlots9")
      .droppable({
        accept: ".cardPile9 div",
        hoverClass: "hovered",
        drop: handleCardDropFox,
      });
  }
}

function handleCardDropFox(event, li) {
  //Grab the slot number and card number
  var slotNumber = $(this).data("number");
  var cardNumber = li.draggable.data("number");

  //on top of the slot and prevent it being dragged again
  if (slotNumber === cardNumber) {
    li.draggable.addClass("correct");
    li.draggable.draggable("disable");
    $(this).droppable("disable");
    li.draggable.position({
      of: $(this),
      my: "left top",
      at: "left top",
    });
    li.draggable.draggable("option", "revert", false);
    animal9++;
  }

  if (animal9 === 2) {
    $(".success9").fadeIn("fast").delay(3000).fadeOut("slow");
    var audio = new Audio("./sounds/horse.wav");
    audio.play();
  }
}
