$(function () {
    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    let leadprofitName = $('.leadprofit-name');
    let leadprofitPhone = $('.leadprofit-phone');
    let inputName = $('.input-name');
    let inputPhone = $('.input-phone');

    modalCall.on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            modalId = $this.data('modal');

        $(modalId).addClass('show');
        $('body').addClass('no-scroll');
    });

    modalClose.on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            modalParent = $this.parents('.modal');

        modalParent.removeClass('show');
        $('body').removeClass('no-scroll');
    });

    $('.modal').on('click', function (event) {
        $(this).removeClass('show');
        $('body').removeClass('no-scroll');
    });

    $('.modal__content').on('click', function (event) {
        event.stopPropagation();
    });

    $('.modal__content').on('input', '.input-words', function () {
        this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
    });


    $('.button-disabled').on('click', function (e) {
        e.preventDefault();
        if (document.querySelector('.input-name').value.length > 1 && document.querySelector('.input-name').value.length > 1) {
            window.location.href = 'confirm.html';

            function passvalues() {
                localStorage.setItem("name", inputName.value);
                localStorage.setItem("phone", inputPhone.value);
                return false;
            }

        } else {
            alert('Заполните форму');
        }
    });



});
