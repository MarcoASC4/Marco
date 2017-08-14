var partnerNames = ["pikachu", "Justin Beiber", "a bag of sunchips", "Lucas Dos Santos"];
// var partner = partnerNames[Math.floor(Math.random() * 4)];
function clickYes() {
    var partner = partnerNames[Math.floor(Math.random() * 4)];
    $(".firstbs").append("<h3> You are marrying " + partner + "!! Jikes!!");
    $(".firstbs").append("<img src='" + partner + "'>");

    // $(".firstbs").append("<img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Shrek_%28character%29.png/170px-Shrek_%28character%29.png'>");

}

clickYes();

function clickNo() {
    var partner = partnerNames[Math.floor(Math.random() * 4)];
    $(".firstbs").append("<h3> I was going to tell you anyway!");
    $(".firstbs").append("<h3> You are marrying " + partner + "!! Jikes!!");


}


var partnerLinks = ["https://s-media-cache-ak0.pinimg.com/736x/f5/1d/08/f51d08be05919290355ac004cdd5c2d6--pikachu-tattoo-pikachu-drawing.jpg", "http://static.dnaindia.com/sites/default/files/2017/04/13/565351-2-15justinbieberherolead111115.hero-1.jpg", "http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2011/02/Compostable-Chip-Bag-1.jpg", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAj6AAAAJDNkZDU5N2EwLTRiMjUtNDkyZi1hYmRiLTNhODczNDE5Mzc2ZQ.jpg"];

