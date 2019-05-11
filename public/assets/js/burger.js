$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventdefault();

        var newburger = {
            burger_name: $("#newburger")
                .val().trim()
                devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(function () {
            console.log("Added new burger");
            location.reload();
        })
    })

    $(".eatburger").on)"click", function(event) {
        event.preventDefault();

        var id = $(this).("id"), {
            
        }
    }
})