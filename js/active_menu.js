$(document).ready(function(){
$('aside ul li a').each(function () {
if (this.href == location.href) $(this).parent().addClass('active');
});
});