jQuery(document).ready(function ($) {

    var $sections = $('.gfield'),
        $animContainer = $('html, body'),
        $document = $(document),
        numSections = $sections.length,
        currSection = 0,
        isAnimating = false;

    var gotoSection = function (index) {
        if ($sections.eq(index) && $sections.eq(index).offset()) {
            isAnimating = true;
            $animContainer.animate({
                scrollTop: $sections.eq(index).offset().top
            }, 750, function () {
                isAnimating = false;
            });
        }
    };
    var handleNextClick = function (obj) {
        currSection = $(this).parent().parent().parent().parent().index();
        handleNext();
    };

    var handleNext = function () {
        if (!isAnimating && currSection < numSections) {
            var isPro = false;
            for (var j = currSection; j < numSections; j++) {
                if ($sections.eq(currSection))
                    currSection++;
                if ($sections.eq(currSection).css("display") != "none") {
                    isPro = true;
                    break;
                }
            }
            if (isPro)
                gotoSection(currSection);
        }
    };

    var goToTop = function () {
        if (!isAnimating) {
            currSection = 0;
            gotoSection(currSection);
        }
    };

    var handlePrev = function () {
        if (!isAnimating && currSection > 0) {
            var isPro = false;
            for (var j = currSection; j > 0; j--) {
                currSection--;
                if ($sections.eq(currSection) && $sections.eq(currSection).css("display") != "none") {
                    isPro = true;
                    break;
                }
            }
            if (isPro)
                gotoSection(currSection);
        }
    };

    $("#next").on('click', handleNext);
    $("#prev").on('click', handlePrev);
    $("#top").on('click', goToTop);

    $document.keyup(function (e) {
        if (e.keyCode === 38) { handlePrev(); }
        if (e.keyCode === 13) {
            handleNext();
        }
        if (e.keyCode === 40) { handleNext(); }
    });

});
