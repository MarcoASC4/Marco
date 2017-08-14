$.ajax({
    url: 'https://randomuser.me/api/?nat=US',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        var randomPerson = data.results[0];
        var firstName = randomPerson.name.first;
        var lastName = randomPerson.name.last;
        $("body").append("<h3> Your new name is " + firstName + " " + lastName + " !!");
    }
});