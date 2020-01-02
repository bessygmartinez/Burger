// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $('.form').on('submit', function(event) {
    event.preventDefault();

    let valid = true;

    if ($("#burger-input").val() === "") {
      valid = false;
    }

    if (valid === true) {

    let newBurger = {
      burger_name: $('#burger-input')
        .val()
        .trim(),
      devoured: 0
    };
    // console.log(newBurger);

    $.post('/api/burgers', newBurger, function(data) {
      console.log('Burger added!');
      // Reload the page to get the updated list
      location.reload();
      });
    } else {
      $("#enter-burger").modal("toggle");
    };
  });

  $('.eat-btn').on('click', function(event) {
    let burgerId = $(this).data('id');
    let newEat = $(this).data('newdevour');

    let burgerEaten = {
      devoured: newEat
    };

    $.ajax('/api/burgers/' + burgerId, {
      type: 'PUT',
      data: burgerEaten
    }).then(function() {
      console.log('Changed devoured to: ' + newEat);
      location.reload();
    });
  });
});