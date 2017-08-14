$.ajax({
    url: 'https://randomuser.me/api',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        var randomPerson = data.results[0];
        var firstName = randomPerson.name.first;
        var lastName = randomPerson.name.last;
        var picture = randomPerson.picture.large;
        var city = randomPerson.location.city;
        var state = randomPerson.location.state;
        var nationality = randomPerson.nat;

        $("body").append("<h3> My name is " + firstName + " " + lastName + " !!");
        $("body").append("<img src='" + picture + "'>");
        $("body").append("<h4> I live in " + city + ", " + state + "</h4>")

        $.ajax({
            url: 'https://restcountries.eu/rest/v1/alpha?codes=' + nationality,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var randomNat = data[0];
                var countryNam = randomNat.name;
                var countryCap = randomNat.capital;
                var countryPop = randomNat.population;

                $("body").append("<h4>" + countryNam + " is my city!!");
                $("body").append("<h4> The capital is " + countryCap + "!");
                $("body").append("<h4> Population: " + countryPop);

            }
        })

    }
});

