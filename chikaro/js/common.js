$(function () {
    $('.menu .menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        $('.menu-list').toggleClass('active');
        $('.menu').toggleClass('active');
        return false;
    });
    var sections = [
        "main",
        "story",
        "chara",
        "video",
        "dl"
    ]
    var hash = location.hash;
    if(hash != "")
    {
        activateSection(hash.substr(1));
    }else{
        activateSection('main');
    }

    $('.menu .menu-item-main').on('click', function () {
        activateSection('main');
        return false;
    });

    $('.menu .menu-item-story').on('click', function () {
        activateSection('story');
        return false;
    });

    $('.menu .menu-item-chara').on('click', function () {
        activateSection('chara');
        return false;
    });
    $('.menu .menu-item-video').on('click', function () {
        activateSection('video');
        return false;
    });
    $('.menu .menu-item-dl').on('click', function () {
        activateSection('dl');
        return false;
    });

    function activateSection(section) {
        window.scroll(0, 0);
        $('.menu .menu-trigger').toggleClass('active');
        $('.menu-list').toggleClass('active');
        $('.menu').toggleClass('active');

        for (var i = 0; i < sections.length; i++) {
            if (sections[i] == section) {
                $('.' + sections[i]).addClass('active');
                $('.' + sections[i]).removeClass('inactive');
                $('.menu-item-' + sections[i]).addClass('menu-item-selected');
            } else {
                $('.' + sections[i]).removeClass('active');
                $('.' + sections[i]).addClass('inactive');
                $('.menu-item-' + sections[i]).removeClass('menu-item-selected');
            }
        }
        if (section == 'main') {
            $('.menu-item-main').addClass('menu-item-selected');
        } else {
            $('.menu-item-main').removeClass('menu-item-selected');
        }
    }
});

