$(document).ready(function() {
    $('.drawer').drawer();
    $(".shuffle").each(function(index, element) {
        randomshuffle(element);
    });
});

function randomshuffle(target) {
    var text = new ShuffleText(target, dummy);
    text.start();
    setTimeout(() => {
        randomshuffle(target);
    }, 3000 + 3000 * Math.random());
}

function dummy() {}


Delighters.config({
    start: 1.2,
    end: 1.2
})