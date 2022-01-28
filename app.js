
$(() => {

    /////// Big Gets Bigger///////
    const $bunny = $('.rabbit');

    const bigBunny = () => {
        $bunny.addClass('big');
    }

    $bunny.on('click', bigBunny)


    ///////////Bio Disapear/////////

    $("#me").click(function () {
        $("#disapear").fadeOut("slow", function () {
            // Animation complete.
        });
        const $h1B = $('<h1>').text('Alakazzzaam!!!').addClass('ala');
        $('#ring').append($h1B);

    });
});