$(() => {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
        };

        addNewBurger(newBurger);
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