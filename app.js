
$(() => {

    /////// Index Rabbit///////

    $('#run').click(function () {
        $('.rabbit').addClass('big')
        console.log('rabbit running');
    })

    ///////////Bio Disapear/////////

    $("#me").click(function () {
        $("#disapear").fadeOut("fast", function () {
            // Animation complete.

            const $h1B = $('<h1>').text('Alakazzzaaaaam!!!').addClass('ala');
            $('#ring').delay(10000).append($h1B);
            console.log('alakazaam');
        });
    });

    ///////////Resume Dark/////

    $('#darkClick').click(function () {
        $('#dark').addClass('secDark');
        console.log('darkclick');
    })

    $('#hotClick').click(function () {
        $('#dark').addClass('hot')
    })



    //////////Project Gray Scale/////////


    $('.projectFrame').hover(function () {
        // $(this).css('filter', 'grayscale(0)')
        $(this).css('filter', 'grayscale(100)');
        // $(this).fadeOut(100);
        // $(this).fadeIn(800);
    });




    $('.projectFrame').click(function () {
        $(this).attr('style', 'grayscale()')
    })


});





