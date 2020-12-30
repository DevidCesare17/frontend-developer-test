$(document).ready(function(){

    $('.shop_cart_tog').hide();
    $('.shopc_ic').click(function() {
        $('.shop_cart_tog').toggle('fast');
    });

    $('.hero_desc > small').hide();
    $('.hero_desc > input').focus(function(){
        $('.hero_desc > small').show('500', 'linear');
    });

    carouselImg();
    incDecPrc();
    scrollView();

});

function carouselImg() {
    $('.prev_img').click(function() {
        var viewImg = $('.img_crs_cont img.active');
        var pointImg = $('.point_dir img.active');
        viewImg.removeClass('active');
        pointImg.removeClass('active');

        if (viewImg.hasClass('first') && pointImg.hasClass('first')) {
            $('.img_crs_cont img.last').addClass('active');
            $('.point_dir img.last').addClass('active');
        } else {
            viewImg.prev().addClass('active');
            pointImg.prev().addClass('active');
        }
    });

    $('.next_img').click(function() {
        var viewImg = $('.img_crs_cont img.active');
        var pointImg = $('.point_dir img.active');
        viewImg.removeClass('active');
        pointImg.removeClass('active');

        if (viewImg.hasClass('last') && pointImg.hasClass('last')) {
            $('.img_crs_cont img.first').addClass('active');
            $('.point_dir img.first').addClass('active');
        } else {
            viewImg.next().addClass('active');
            pointImg.next().addClass('active');
        }
    });

    $('.point_dir img').click(function() {
        var index = $(this).index() + 1;

        var viewImg = $('.img_crs_cont img.active');
        var pointImg = $('.point_dir img.active');

        viewImg.removeClass('active');
        pointImg.removeClass('active');

        var imageIndex = index + 1;

        $('.img_crs_cont img:nth-child('+imageIndex+')').addClass('active');
        $(this).addClass('active');
    });
}

function incDecPrc() {
    var increment = $('.incrmnt_nmb');
    var decrement = $('.decrmnt_nmb');

    increment.click(function() {
        var inputNumb = $(this).parent('.input_nmb').parent('.select_qnt').parent('.purchase_item').find('input');
        inputNumb.val(parseInt(inputNumb.val())+1 );
    });

    decrement.click(function() {
        var inputNumb = $(this).parent('.input_nmb').parent('.select_qnt').parent('.purchase_item').find('input');
        var newValue = parseInt(inputNumb.val());
        if (newValue > 0) {
            inputNumb.val(newValue - 1);
        }
    });
}

function scrollView() {
    $('.back_to_top').hide();
    if ($(window).width() >= 992) {
        $(window).on('scroll', function() {
            scrollPosition = $(this).scrollTop();
            if (scrollPosition >= 2000) {
                $('.back_to_top').show();
            } else {
                $('.back_to_top').hide();
            }
        });
    } else if ($(window).width() < 992) {
        $(window).on('scroll', function() {
            scrollPosition = $(this).scrollTop();
            if (scrollPosition >= 3000) {
                $('.back_to_top').show();
            } else {
                $('.back_to_top').hide();
            }
        });
    }
}