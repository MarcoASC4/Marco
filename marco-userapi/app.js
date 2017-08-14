$.ajax({
    url: 'https://randomuser.me/api/?nat=US',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        var randomPerson = data.results[0];
        var firstName = randomPerson.name.first;
        var lastName = randomPerson.name.last;
        var picture = randomPerson.picture.large;
        var city = randomPerson.location.city;
        var state = randomPerson.location.state;

        $("body").append("<h3> My name is " + firstName + " " + lastName + " !!");
        $("body").append("<img src='" + picture + "'>");
        $("body").append("<h4> I live in " + city + ", " + state + "</h4>")
    }
});