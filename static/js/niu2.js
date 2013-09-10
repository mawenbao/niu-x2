/*
 * Depends on jquery 1.10
 */

// toggle the google cse input box
function showCSE() {
    if (!$("#niu2-cse-search-input").is(":visible")) {
        $("#niu2-cse-search-input").val("");
        $("#niu2-cse-search-input").show(300, function() {
            $("#niu2-cse-search-input").focus();
        });
        $("#niu2-cse-search-image").hide(300);
    }
}

function hideCSE() {
    if ($("#niu2-cse-search-input").is(":visible")) {
        $("#niu2-cse-search-input").hide(300);
        $("#niu2-cse-search-image").show(300);
    }
}

function toggleTopIcon() {
    $(this).children(":first").toggleClass("niu2-top-icon-hidden");
}

function initGoogleCSEAnimation() {
    $("#niu2-cse-ctrl-box").click(showCSE);
    $("#niu2-cse-ctrl-box").focus(showCSE);
    $("#niu2-cse-search-input").hide();
    $("#niu2-cse-search-input").focusout(hideCSE);
    $(document).keyup(function(e) {
        e = e || window.event;
        if (e.keyCode == 27) {
            hideCSE();
        }
    });
}

function initTocScrollAnimation() {
    $(".dropdown-toc .dropdown-menu li a").each(function(index) {
        href = $(this).attr("href");
        $(this).bind("click", {id: href}, function(event) {
            $("html, body").animate({scrollTop: $(event.data.id).offset().top}, 400);
        });
    });
}

function InitIndexArticleIconAnimation() {
    $(".niu2-index-article").each(function() {
        aidArr = $(this).attr("id").split("-");
        did = "#niu2-index-date-id-" + aidArr[aidArr.length - 1];
        iconObj = $(did).children("i");
        aa = $(this).find(">span>a");
        aa.bind("mouseenter", {target: iconObj}, function(event) { event.data.target.attr("class", "icon-calendar"); });
        aa.bind("mouseleave", {target: iconObj}, function(event) { event.data.target.attr("class", "icon-calendar-empty"); });
    });
}
