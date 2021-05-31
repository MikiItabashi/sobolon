jQuery('a[href^="#"]').click(function() {
    // ヘッダーの高さを取得
    var header = jQuery('header').innerHeight();
    // 移動速度を指定（ミリ秒）
    var speed = 300;
    // hrefで指定されたidを取得
    var id = jQuery(this).attr("href");
    // position初期化
    var position = 0;
    // ページのトップを基準にターゲットの位置を取得
    if (id != '#' && id != "") {
        position = jQuery(id).offset().top - header;
    }
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate({
            scrollTop: position
        },
        speed
    );
    return false;
});

new WOW().init();

jQuery('.drawer-icon').on('click', function(e) {
    e.preventDefault();
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');

    return false;
})

jQuery('.drawer-content_item a').on('click', function(e) {
    e.preventDefault();
    jQuery('.drawer-icon').toggleClass('is-active');
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');

    return false;
})

// google form
let $form = $('#js-form')
$form.submit(function(e) {
    $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function() {
                //送信に成功したときの処理 
                $form.slideUp();
                $('#js-success').slideDown();
            },
            200: function() {
                //送信に失敗したときの処理 
                $form.slideUp();
                $('#js-error').slideDown();
            }
        }
    });
    return false;
});

// formの入力確認
let $submit = $('#js-submit');
let $radio = $('#radio1').prop('checked');
$('#js-form input, #js-form textarea').on('change', function() {
    console.log($radio);
    if (
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form input[type="checkbox"]').prop('checked') === true &&
        $('#js-form textarea').val() !== "" &&
        ($('#radio1').prop('checked') === true || $('#radio2').prop('checked') === true)

    ) {
        // すべて入力されたとき
        $submit.prop('disabled', false)
        $submit.addClass('-active')

    } else {
        // 入力されていないとき
        $submit.prop('disabled', true)
        $submit.removeClass('-active')

    }
})