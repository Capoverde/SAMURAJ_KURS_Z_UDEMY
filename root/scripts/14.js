$(function () {
    $('#larger').click(function () {
        $('h2').toggleClass('big');
    });
    $('#smaller').click(function () {
        $('h2').toggleClass('small');
    });
    $('#border').click(function () {
        $('h2').toggleClass('bdr');
    });
});