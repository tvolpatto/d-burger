$(() => {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
        };

        if(newBurger.burger_name ==="") {
            displayErrorMsg();
        } else {
            addNewBurger(newBurger);
        }
    });

    $(".btn-devour").on("click", function(event) {
        devourBurger($(this).attr("data"));
    });

});

function addNewBurger(newBurger) {
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(() => {
        location.reload();
    });
}

function devourBurger(id) {
    $.ajax("/api/devour/" + id, {
        type: "put"
    }).then(() => {
        location.reload();
    });
}

function displayErrorMsg() {
    var spanErr = $("#error-msg");
    
    spanErr.removeClass("display-none");

    var txtArea = $("#burger_name");
    txtArea.addClass("border-error");
    setTimeout(() => {
        spanErr.addClass("display-none");
        txtArea.removeClass("border-error");
      }, 2000);
    
  }