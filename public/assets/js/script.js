$(() => {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
        };

        addNewBurger(newBurger);
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