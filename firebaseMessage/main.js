var database = firebase.database().ref();



function updateDB() {
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + ":" + message);



    var value = {
        NAME: name,
        MESSAGE: message
    }
    datebase.push(value);
}

database.on("child_added", function (rowData) {
    var row = rowData.val();
    var name = row.NAME;
    var message = row.MESSAGE;
    var fulltext = "<p>" + name + ":" + message + "</p>";
    $(".allMessages").append(fullText);
})