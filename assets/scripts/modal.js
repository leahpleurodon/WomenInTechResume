$('a[name=modal]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    console.log(id);
    $(id).css('left',  '10vw')
    $(id).css('top', '30vh');
    $(id).fadeIn(500);
});
$('.modalwindow .close').click(function (e) {
    e.preventDefault();
    $('.modalwindow').fadeOut(500);
});
