document.getElementById( "btn" ).onclick = function () {
    var typed = document.getElementById( "mytext" ).value;

    var answer = typed;
    if ( answer != null ) {
        if ( answer == 20 ) {
            document.getElementById( "score" ).innerHTML = "You Win Congrats.";
        }
        else {
            document.getElementById( "score" ).innerHTML = "Try Later";
        }
    }

}
