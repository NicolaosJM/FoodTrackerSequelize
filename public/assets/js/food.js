$(function() {
    $(".change-devoured-state").on("click",function(event){
        event.preventDefault();
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");
        console.log(id,devoured);

        var newDevouredState = {
            devoured: devoured
        };

        console.log(id)

        // SEND THE PUT REQUEST
        $.ajax(`/api/update/${id}`, {
            type: 'PUT',
            data: newDevouredState
        }).then(
            function(){
                console.log(`CHANGED DEVOURED TO: ${newDevouredState}`);
                // RELOAD THE PAGE TO GET THE UPDATED LIST FROM DB
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newMeal = {
            meal_name: $("#meal").val().trim(),
            calorie_count: $("#calories").val().trim()
        };
        // Send the POST request.
        console.log("new meal", newMeal)
        $.ajax("/api/create", {
            type: "POST",
            data: newMeal 
        }).then(
            function() {
                console.log("Created new meal");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});