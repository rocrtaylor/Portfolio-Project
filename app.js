
$(() => {

    /////// Big Gets Bigger///////
    const $bunny = $('.rabbit');

    const bigBunny = () => {
        $bunny.addClass('big');
    }

    $bunny.on('click', bigBunny)







});