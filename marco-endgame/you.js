var i = 3000000000000;
var b = 100;
var x = 0;
var interval;
var tree = 0;
var truck = 0;
var heli = 0;
var money = 15000;


function fireButton() {
    $(".center").append("<p id='lorerm'>After an hour of looking for a open space to set up camp you give up. You are tired and you set it in a very crowded space with many shrub and trees. You tell yourself everything will be fine and you go to sleep. An hour later you wake up and a tree is set ablaze!");

    $("#remove").remove();
    $(".treePop").append("<h3>Number of Trees on Earth: " + i + "</h3>");
    $(".money").append("<h3>Money: " + money + "</h3>");



    interval = window.setInterval(function () {

        i = i - (Math.pow(b, x));
        x += 1;
        r = Math.floor(i);

        $(".treePop h3").text("Number of Trees on Earth: " + r);

        if (r <= 0) {
            clearInterval(interval)
            $(".treePop").remove();
            $(".money").remove();
            $(".treeBuilt").remove();
            $(".truckBuilt").remove();
            $(".heliBuilt").remove();
            $("#lorerm").remove();

            $(".gameOver").text("Good Job! Your ignorance has destroyed every tree in the world.")



        }
    }, 1000);


    interval = window.setInterval(function () {

        money++;
        $(".money h3").text("Money: " + money);

    }, 1000);

    window.setTimeout(spawnButton, 3000);
}



function spawnButton() {
    $(".treeBuilt").append("<button onclick='spawnTree()'> Plant Tree</button>");

    $(".treeBuilt").append("<h3> Number of trees planted: </h3>");

    $(".truckBuilt").append("<button onclick='spawnTruck()'> Buy Fire Truck</button>");

    $(".truckBuilt").append("<h3> Fire trucks on duty: </h3>");

    $(".heliBuilt").append("<button onclick='spawnHeli()'> Buy Helicopter</button>");

    $(".heliBuilt").append("<h3> Helicopters on duty: </h3>");
}
function spawnTree() {

    tree++;
    $(".treeBuilt h3").text("Number of trees planted: " + tree);
}

function spawnTruck() {
    truck++;
    $(".truckBuilt h3").text("Fire trucks on duty: " + truck);

}

function spawnHeli() {
    heli++;
    $(".heliBuilt h3").text("Helicopters on duty: " + heli);
}

