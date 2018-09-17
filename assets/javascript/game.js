$(document).ready(function() {
    
    var targetScore;
    var currentScore;
    var wins = 0;
    var losses = 0;

    //resets the targetScore and point values of the crystals
    function reset() {
        //target score chosen randomly from 19-120
        targetScore = Math.floor(Math.random() * 102) + 19;
        console.log(targetScore);
        currentScore = 0;

        //giving crystals random point values from 1-12 
        $(".crystal").each(function () {
            $(this).attr("value", Math.floor(Math.random() * 12) + 1);
        })

        console.log($(".ruby").attr("value"));
        console.log($(".emerald").attr("value"));
        console.log($(".tanzanite").attr("value"));
        console.log($(".diamond").attr("value"));
    }

    //click crystal event
    $(".crystal").on("click", function () {
        document.getElementById("click-sound").play();
        var points = $(this).attr("value");
        currentScore += parseInt(points);

        //user won
        if (currentScore === targetScore) {
            wins++;
            reset();
            document.getElementById("shine").play();
            $(".message").text("You won!!");
        }
        //user lost
        if (currentScore > targetScore) {
            losses++;
            reset();
            document.getElementById("crystalbreak").play();
            $(".message").text("You lost!!");
        }

        update();
    });

    //updates the stats on the screen. 
    function update() {
        // $(".message").text("");
        $(".win").text("wins: " + wins + "\xa0\xa0");
        $(".lose").text("losses: " + losses);
        $(".target-num").text(targetScore);
        $(".score").text(currentScore);
    }

    //starting the webpage for the first time
    reset();
    update();
});
