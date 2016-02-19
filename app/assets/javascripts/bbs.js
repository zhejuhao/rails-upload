/**
 * Created by liqi on 16-2-2.
 */
//window.onload = function () {
//    //image_css();
//};
//function post_info() {
//    var url = "/articles/save_info/";
//    var data = document.getElementById("content").value;
//    var photo = document.getElementById("picture").value;
//    //var name;
//    //name=photo.split('\\');
//    //var bb=name[name.length-1];
//    //console.log(bb)
//    var obj = {word:data};
//    post(url,obj);
//    //console.log(data);
//
//
//}
//function post(url, data) {
//    $.ajax({
//        type: "POST",
//        url: url,
//        data: data,
//        async: false,
//        success: function (result) {
//            alert(result)
//        }
//    });
//}
//function add_pic(){
//    document.getElementById("adv").style.display= "fixed";
//    $(".advbox").slideDown();
//}
//
//function add_photo(){
//    var path = document.getElementById("photo").value;
//    var name;
//    name=path.split('\\');
//    var file=name[name.length-1];
//    console.log(file);
//    var url = "/articles/upload/";
//    var obj = {photo:file};
//    console.log(obj);
//    post(url,obj);
//
//
//}
//
//function camera(){
//    var video = document.getElementById("video");
//    var canvas = document.getElementById("canvas"),
//        context = canvas.getContext("2d");
//    var errocb = function () {
//        console.log('sth wrong!');
//    };
//
//    if (navigator.getUserMedia) { // 标准的API
//        navigator.getUserMedia({ "video": true }, function (stream) {
//            video.src = stream;
//            video.play();
//        }, errocb);
//    } else if (navigator.webkitGetUserMedia) { // WebKit 核心的API
//        navigator.webkitGetUserMedia({ "video": true }, function (stream) {
//            video.src = window.webkitURL.createObjectURL(stream);
//            video.play();
//        }, errocb);
//    }
//
//    document.getElementById("picture").addEventListener("click", function () {
//        context.drawImage(video, 0, 0, 640, 480);
//    });
//}
//function cancle(){
//    document.getElementById("adv").style.display= "none";
//}


function open_img(picture) {
    var div_big = document.getElementById("div-big");
    div_big.style.display = "block";
    document.body.style.overflow = "hidden";//滚动条消失
}
function close_img() {
    var div_big = document.getElementById("div-big");
    div_big.style.display = "none";
    document.body.style.overflow = "auto";
}
//function show_big() {
//    var src = $(this).attr("src");
//    console.log(src);
//    //$('.background').css({'display':'block'});
//    $('.big-image').css({'display': 'table'});
//    $('.large-image').css({'display': 'block'});
//    $('.image-big').attr("src", src);
//
//    document.body.style.overflow = "hidden";//滚动条消失
//}
//$('.big-image').click(function () {
//    $('.big-image').css({'display': 'none'});
//    document.body.style.overflow = "auto";
//
//});


//$(function () {
//    $('.image-w').click(function () {
//
//        $('.big-image').fadeIn(400);
//
//    });
//    $('.big-image').click(function () {
//
//        $('.big-image').fadeOut(800);
//    });
//
//});
$(function () {
    $('.image img').load(function () {
        var url = $(this).attr("src");
        //console.log(url + "--------");
        var new_image = new Image();

        new_image.src = url;
        //console.log(new_image.width);
        if (new_image.height > new_image.width) {
            $(this).addClass("image-h");
        }
        else {
            $(this).addClass("image-w");
        }

    });

});
$(function () {
    console.log($('.image'))
    $('.image').click(function () {
        var src = $('img',this).attr("src");
        console.log(src);
        //$('.background').css({'display':'block'});
        $('.big-image').css({'display': 'table'});
        $('.large-image').css({'display': 'block'});
        $('.image-big').attr("src", src);

        document.body.style.overflow = "hidden";//滚动条消失
    });
    $('.big-image').click(function () {
        $('.big-image').css({'display': 'none'});
        document.body.style.overflow = "auto";

    });

});
$(function () {
    $('.image').click(function () {

        $('.big-image').fadeIn(400);

    });
    $('.big-image').click(function () {

        $('.big-image').fadeOut(800);
    });

});

function show_mini() {
    var mini = document.getElementById('file_file');
    if (mini.value != "") {
        var preview = document.querySelector('#mini');
        var file = document.querySelector('#file_file').files[0];
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            preview.src = reader.result;
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
        $('.mini-image').css({'display': 'block'});
        console.log(file);

    }

}

$(function () {
    var file = document.querySelector('#file_file');
    $('.cancel-image').click(function () {
        var preview = document.querySelector('#mini');
        preview.src = "";
        file.value = "";
        $('.mini-image').css({'display': 'none'});

    });
});