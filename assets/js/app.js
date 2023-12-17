$(document).ready(function () {
  console.log("I am in a new file now");

  // Your jQuery code here
  console.log("We are using jQuery");

  // Click event on all p elements
  $("p").click(function () {
    console.log("You clicked on p", this);
  });

  // Double click event on p elements
  $("p").dblclick(function () {
    console.log("You double clicked on p", this);
  });

  // Hover event on p elements
  $("p").hover(
    function () {
      console.log("You hovered on:", this);
    },
    function () {
      console.log("Thanks for coming");
    }
  );

  // Element selectors
  // $('p').click();
  // $('#second').click();
  // $('.odd').click();
  // $('*').click();
  // $('p.odd').click();
  // $('p:first').click();

  // On method for multiple events
  $("p").on({
    click: function () {
      console.log("Thanks for clicking", this);
    },
    mouseleave: function () {
      console.log("Mouse leave");
    },
  });

  // Hide and Show methods
  // $('#wiki').hide(1000, function () {
  //     console.log("Hidden");
  // });

  // $('#wiki').show(1000, function () {
  //     console.log("Shown");
  // });

  // FadeOut method on button click
  $("#but").click(function () {
    $("#wiki").fadeOut(5000);
  });

  // Slide methods
  // $('#wiki').slideUp(1000, function(){
  //     console.log('Done sliding up');
  // });

  // $('#wiki').slideDown(1000);
  // $('#wiki').slideToggle(1000);

  // Animate method
  // $('#wiki').animate({
  //     opacity: 0.3,
  //     height: '150px',
  //     width: '350px'
  // }, "fast");

  // Form manipulation
  // $('#ta').val('Setting it to Harry');
  // $('#ta').html('Setting it to Harry');
  // $('#inp').val('Setting it to Harry');
  // $('#inp').empty();
  // $('#wiki').text('You are good');

  // Class manipulation
  // $('#wiki').addClass('myclass');
  // $('#wiki').addClass('myclass2');
  // $('#wiki').removeClass('myclass2');

  // CSS manipulation
  // $('#wiki').css('background-color', 'red');
  // var bgColor = $('#wiki').css('background-color');

  // AJAX Using jQuery
  // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); });
  // $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); });

  // $.post('https://code.jquery.com/jquery-3.3.1.js',
  //     { name: 'harry', channel: 'code with harry' },
  //     function (data, status) { alert(status); });
});
