
$(() => {

    /////// Big Gets Bigger///////
    const $bunny = $('.rabbit');

    const bigBunny = () => {
        $bunny.addClass('big');
    }

    $bunny.on('click', bigBunny)


    ///////////Bio Disapear/////////

    $("#me").click(function () {
        $("#disapear").fadeOut("fast", function () {
            // Animation complete.

            const $h1B = $('<h1>').text('Alakazzzaaaaam!!!').addClass('ala');
            $('#ring').delay(10000).append($h1B);
        });
    });
});