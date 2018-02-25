
function loadPage() {
  $('#text-area').keyup(validateText);
  $('#text-area').keyup(counterCharacter);
  $('#buttonTwitt').click(tweet);
  // $('#text-area').keydown(resizeTextArea);
}

function validateText() {
  var $buttonOff = $('#buttonTwitt');

  if ($(this).val().trim().length > 0) {
    $buttonOff.removeAttr("disabled");
  } else {
    $buttonOff.attr("disabled", true);
  }
}

function counterCharacter() {
  var counter = document.getElementById('counter');
  var $count = 0;
  $count = $('#text-area').val().length;
  counter.value = 140 - $count;

  if ($count > 140) {
    counter.style.color = "red";
    $('#buttonTwitt').attr("disabled", true);
  } else if ($count >= 120) {
    counter.style.color = "orange";
  } else if ($count >= 100) {
    counter.style.color = "#90C071";
  } else {
    counter.style.color = "#6E7F8D";
  }
}

// function resizeTextArea() {
//   var textArea = document.getElementById('text-area');
//   textArea.style.height = textArea.scrollHeight + 10 + "px";
// }

function tweet() {
  // Time tweet
  var time = new Date();
  var hour = time.getHours();
  var ampm = "";
  var minute = time.getMinutes();

  if (hour >= 12) {
    hour = hour - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  };

  if (hour === 0) {
    hour = 12;
  };

  if (minute < 10) {
    minute = "0" + minute;
  };

  // Create elements
  var $mainContainer = $('<div />', {
    'class': "col-md-12 pb-pt"
  });

  var $userPhotoTweet = $('<div />', {
    'class': "col-md-1 photo-user pl-0 pr-0"
  });

  var $imgUser = $('<img />', {
    'class': "img-responsive"
  });

  var $contentContainer = $('<div />', {
    'class': "col-md-10 pr-0"
  });

  var $nameUser = $('<p />', {
    'class': "fw-b ancoreTweet inline-block"
  });

  var $linkUser = $('<span />', {
    'class': "fw-n fs-1 light-gray"
  });

  var $top = $('<span />', {
    'class': "light-gray fw-n"
  });

  var $timeTweet = $('<span />', {
    'class': "fs-1 light-gray ancoreTweet"
  });

  var $textUser = $('<p />');

  var template = '<div class="col-md-12 pl-0 pr-0 light-gray fs-1">' +
                    '<div class="col-md-2 pl-0">' +
                      '<span class="glyphicon glyphicon-comment blue-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 pl-0">' +
                      '<span class="glyphicon glyphicon-retweet green-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 pl-0">' +
                      '<span class="glyphicon glyphicon-heart-empty pink-icon" aria-hidden="true"></span>' +
                    '</div>' +
                    '<div class="col-md-2 pl-0">' +
                      '<span class="glyphicon glyphicon-envelope pink-icon" aria-hidden="true"></span>' +
                    '</div>' +
                  '</div>';

  // Add attributes
  $imgUser.attr('src', "assets/images/user-logo.png");
  $nameUser.text("Sɑмɑнɑяɑ サマアラ ~");
  $linkUser.text(" @SamaharaOficial");
  $top.text(" · ");
  $timeTweet.text(hour + " : " + minute + " " + ampm);
  $textUser.text($('#text-area').val());

  // Dom -> HTML
  $userPhotoTweet.append($imgUser);
  $contentContainer.append($nameUser);
  $contentContainer.append($linkUser);
  $contentContainer.append($top);
  $contentContainer.append($timeTweet);
  $contentContainer.append($textUser);
  $contentContainer.append(template);
  $mainContainer.append($userPhotoTweet);
  $mainContainer.append($contentContainer);

  $('#twitts-container').prepend($mainContainer);

  $('#text-area').val("");
}

$(document).ready(loadPage);
