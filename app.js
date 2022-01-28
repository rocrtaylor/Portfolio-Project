
$(() => {

    /////// Big Gets Bigger///////

    $('#run').click(function () {
        $('.rabbit').addClass('big')
    })

    ///////////Bio Disapear/////////

    $("#me").click(function () {
        $("#disapear").fadeOut("fast", function () {
            // Animation complete.

            const $h1B = $('<h1>').text('Alakazzzaaaaam!!!').addClass('ala');
            $('#ring').delay(10000).append($h1B);
        });
    });
});