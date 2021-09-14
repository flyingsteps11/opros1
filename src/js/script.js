$(document).ready(function () {
    $('.slider1').on('input', function (e) {
        var min = e.target.min,
            max = e.target.max,
            val = e.target.value;
        $(e.target).css({
            'background': `linear-gradient(to left,#FBFBFB ${(1 - ((val - min) / (max - min))) * 100}%, #FA0000 0%)`
        });
    });
    $('.input1').on('input', (e) => {
        values.input1 = $('.input1').val();
        $('.input1').removeClass('warning');
    });
    $('.input2').on('input', (e) => {
        values.input2 = $('.input2').val();
        $('.input2').removeClass('warning');
    });
    $('.input3').on('input', (e) => {
        values.input3 = $('.input3').val();
        $('.input3').removeClass('warning');
    });
    $('.input4').on('input', (e) => {
        values.input4 = $('.input4').val();
        $('.input4').removeClass('warning');
    });
    $('.input5').on('input', (e) => {
        values.input5 = $('.input5').val();
        $('.input5').removeClass('warning');
    });
    $('.input6').on('input', (e) => {
        values.input6 = $('.input6').val();
        $('.input6').removeClass('warning');
    });
    $('.input7').on('input', (e) => {
        values.input7 = $('.input7').val();
        $('.input7').removeClass('warning');
    });
    $('.input8').on('input', (e) => {
        values.input8 = $('.input8').val();
        $('.input8').removeClass('warning');
    });
    $('.input9').on('input', (e) => {
        values.input9 = $('.input9').val();
        $('.input9').removeClass('warning');
    });
    $('.input10').on('input', (e) => {
        values.input10 = $('.input10').val();
        $('.input10').removeClass('warning');
    });
    $('.input11').on('input', (e) => {
        values.input11 = $('.input11').val();
        $('.input11').removeClass('warning');
    });


    $(".next1").on('click', function () {
        const isCalc = values.input1 && values.input2 && values.input3 && values.input4;
        if (isCalc) {
            $('.form-step1').css('display', 'none');
            $('.custom-preloader').removeClass('remove-loader');
            setTimeout(() => {
                $('.custom-preloader').addClass('remove-loader');

                $('.form-step2').addClass('form-display');
                $('.slider1').css({
                    'background': `linear-gradient(to left, #FBFBFB ${50}%, #FA0000 0%)`
                })
            }, 1000);

        } else {
            if (!values.input1) {
                $('.input1').addClass('warning');
            } else {
                $('.input1').removeClass('warning');
            }
            if (!values.input2) {
                $('.input2').addClass('warning');
            } else {
                $('.input2').removeClass('warning');
            }
            if (!values.input3) {
                $('.input3').addClass('warning');
            } else {
                $('.input3').removeClass('warning');
            }
            if (!values.input4) {
                $('.input4').addClass('warning');
            } else {
                $('.input4').removeClass('warning');
            }
        }
    });
    $(".next2").on('click', function () {
        const isCalc = values.input5 && values.input6 && values.input7;
        if (isCalc) {
            $('.form-step2').removeClass("form-display");
            $('.custom-preloader').removeClass('remove-loader');
            setTimeout(() => {
                $('.custom-preloader').addClass('remove-loader');
                $('.form-step3').addClass('form-display');
                $('.slider1').css({
                    'background': `linear-gradient(to left, #FBFBFB ${0}%, #FA0000 0%)`
                })
            }, 1000);
        } else {
            if (!values.input5) {
                $('.input5').addClass('warning');
            } else {
                $('.input5').removeClass('warning');
            }
            if (!values.input6) {
                $('.input6').addClass('warning');
            } else {
                $('.input6').removeClass('warning');
            }
            if (!values.input7) {
                $('.input7').addClass('warning');
            } else {
                $('.input7').removeClass('warning');
            }
        }
    });
    $(".next3").on('click', function () {
        const isCalc = values.input8 && values.input9 && values.input10 && values.input11;
        if (isCalc) {
            $('.form-step3').removeClass("form-display");
            $('.custom-preloader').removeClass('remove-loader');
            setTimeout(() => {
                $('.custom-preloader').addClass('remove-loader');
                $('.form-step4').addClass('form-display');
            }, 1000);
        } else {
            if (!values.input8) {
                $('.input8').addClass('warning');
            } else {
                $('.input8').removeClass('warning');
            }
            if (!values.input9) {
                $('.input9').addClass('warning');
            } else {
                $('.input9').removeClass('warning');
            }
            if (!values.input10) {
                $('.input10').addClass('warning');
            } else {
                $('.input10').removeClass('warning');
            }
            if (!values.input11) {
                $('.input11').addClass('warning');
            } else {
                $('.input11').removeClass('warning');
            }
        }
    });

    const values = {
        input1: null,
        input2: null,
        input3: null,
        input4: null,
        input5: null,
        input6: null,
        input7: null,
        input8: null,
        input9: null,
        input10: null,
        input11: null,
    }

});