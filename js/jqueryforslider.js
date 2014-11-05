$(document).ready(function () {
    $('.sp').first().addClass('current');
    $('.sp').hide();
    $('.current').show();

    $('#button-next').click(function next() {

        $('.current').removeClass('current').addClass('old');
        if ($('.old').is(':last-child')) {
            $('.sp').first().addClass('current');
        }
        else
        {
            $('.old').next().addClass('current');
        }
        $('.old').removeClass('old');
        $('.sp').fadeOut();
        $('.current').fadeIn();
    });

    $('#first').click(function () {
        $('.current').removeClass('current').addClass('old');

        $('.sp').first().addClass('current');

        $('.old').removeClass('old');

        $('.sp').fadeOut();
        $('.current').fadeIn();
    });

    $('#last').click(function () {
        $('.current').removeClass('current').addClass('old');

        $('.sp').last().addClass('current');

        $('.old').removeClass('old');

        $('.sp').fadeOut();
        $('.current').fadeIn();
    });

    $('#button-previous').click(function () {
        $('.current').removeClass('current').addClass('old');
        if ($('.old').is(':first-child')) {
            $('.sp').last().addClass('current');
        }
        else
        {
            $('.old').prev().addClass('current');
        }
        $('.old').removeClass('old');
        $('.sp').fadeOut();
        $('.current').fadeIn();
    });

    function auto() {
        tim = setInterval(function () {
            jQuery("#button-next").click();
        },
   2000
);
    }
    auto();

    $('.sp').on('mouseover', function (e) {
        var onMouEnt = e.type == 'mouseover' ? clearInterval(tim) : auto();
    });

    $('.sp').on('mouseout', function (e) {
        var onMouEnt = e.type == 'mouseout' ? auto() : clearInterval(tim);

    });

});
