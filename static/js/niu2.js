/*
 * Depends on jquery 1.10
 */

$(document).ready(function() {
    $(window).scroll(function() {
        toggleSidebarTocStatic();
        getHeaderInViewport();
    });
})

function toggleSidebarTocStatic() {
    var sidebarToc = $('#niu2-sidebar-toc');
    var sidebarMeta = $('#niu2-sidebar-meta');
    var vtop = $(window).scrollTop();
    var vpos = sidebarMeta.offset().top + sidebarMeta.height() - 55;
    if (vtop > vpos && 'niu2-sidebar' == sidebarToc.attr('class')) {
        sidebarToc.attr('class', 'niu2-sidebar niu2-sidebar-toc-fixed');
    } else if (vtop <= vpos && 'niu2-sidebar' != sidebarToc.attr('class')) {
        sidebarToc.attr('class', 'niu2-sidebar');
    }
}

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

function getHeaderInViewport() {
    $(':header').each(function(i, elem) {
        if (elem.getBoundingClientRect().top > 0) {
            alert(elem.id);
            return false;
        }
    });
}

