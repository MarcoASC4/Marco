var appID = "474d41f3";
var appKey = "3ef563caf1408be6a7afb8b5ea536630";
var mcDonaldsURL = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + appID + "&appKey=" + appKey;

$.ajax({
    url: mcDonaldsURL,
    success: function (data) {
        console.log(data);
        var foodItem = data.hits[0];
        var name = foodItem.fields.item_name;
        var cals = foodItem.fields.nf_calories;
        $("body").append("<h2>This " + name + " has " + cals + " calories!!!</h2>");
    }
});