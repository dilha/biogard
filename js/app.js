$(function () {

    $('.use__slider').slick({
        prevArrow: ' <button class="click__arrow prev"><img src="images/icons/prev.png" alt="prev"></button>',
        nextArrow: '<button class="click__arrow next"><img src="images/icons/next.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false
                }
        }
      ],
        dots: true
    });

    $('#countdown-1').timeTo({
        seconds: 2400,
        displayCaptions: false,
        lang: 'ru',
        displayHours: true
    });

    $('#countdown-2').timeTo({
        seconds: 2400,
        displayCaptions: false,
        lang: 'ru',
        displayHours: true
    });

    $(function () {
        $('select[name=country]').change(function () {

            if ($(this).val() === 'RU') {
                $('.country1').html("всей России");
                $('.country2').html("российских");
                $('.country3').html("российской");
                $('.info__promotion-oldprice span').html("3900р");
                $('.info__promotion-newprice span').html("99руб*");
                $('.info__pack-text span').html("99руб*");

            } else if ($(this).val() === 'BY') {
                $('.country1').html("всей Беларуси");
                $('.country2').html("беларусских");
                $('.country3').html("беларусской");
                $('.info__promotion-oldprice span').html("140р");
                $('.info__promotion-newprice span').html("3р*");
                $('.info__pack-text span').html("3р*");

            } else if ($(this).val() === 'KZ') {
                $('.country1').html("всего Казахстана");
                $('.country2').html("казахских");
                $('.country3').html("казахской");
                $('.info__promotion-oldprice span').html("9580тнг");
                $('.info__promotion-newprice span').html("99тнг*");
                $('.info__pack-text span').html("99тнг*");

            } else if ($(this).val() === 'UA') {
                $('.country1').html("всей Украины");
                $('.country2').html("украинских");
                $('.country3').html("украинской");
                $('.info__promotion-oldprice span').html("830грн");
                $('.info__promotion-newprice span').html("9грн*");
                $('.info__pack-text span').html("9грн*");

            } else if ($(this).val() === 'KG') {
                $('.country1').html("всего Кыргызстана");
                $('.country2').html("кыргызских");
                $('.country3').html("кыргызской");
                $('.info__promotion-oldprice span').html("2758сом");
                $('.info__promotion-newprice span').html("110сом*");
                $('.info__pack-text span').html("110сом*");

            } else if ($(this).val() === 'AM') {
                $('.country1').html("всей Арменских");
                $('.country2').html("арменских");
                $('.country3').html("арменской");
                $('.info__promotion-oldprice span').html("25000др");
                $('.info__promotion-newprice span').html("650др*");
                $('.info__pack-text span').html("650др*");

            } else if ($(this).val() === 'UZ') {
                $('.country1').html("всего Узбекистана");
                $('.country2').html("узбекиских");
                $('.country3').html("узбекиской");
                $('.info__promotion-oldprice span').html("99000сум");
                $('.info__promotion-newprice span').html("20000сум*");
                $('.info__pack-text span').html("20000сум*");

            }
        });
    });



});
