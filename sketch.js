var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

var btn = document.getElementById('switchBtn');
btn.onclick = function () {

    if ($("#photo--color").hasClass('hide')) {
        // Show Color
        $("#photo--color").toggleClass('hide');
        $(".switchColor").toggleClass('color--alt');
    } else if (!$("#photo--color").hasClass('hide')) {
        // Show BnW
        $("#photo--color").toggleClass('hide');
        $(".switchColor").toggleClass('color--alt');
    }

};