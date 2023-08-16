$(document).ready(() => {
    $(".tabs-nav > ul > li:first-child").addClass("active");
    $(".tabs-nav > ul > li").addClass("default");
    $("#tab-content-1").show();
    for(var i = 2; i <= 4; i++){
        $("#tab-content-"+ i).hide();
    }
    $(".tabs-nav > ul > li").click(function(){
        $(".tabs-nav > ul > li").addClass("default");
        $(".tabs-nav li").removeClass("active");
        $(this).removeClass("default");
        $(this).addClass("active");
        // Show / Hide 
        let tabID = $(this).attr("id").replace("tab-link-", "");
        $("div.tab-content").hide();
        $("#tab-content-" + tabID).show();
    });
    $(".hightbox-content").hide();
    $(".item").click(function(){
        let x = $(this).attr("id").replace("item-", "");
        $(".hightbox-content").hide();
        $(".hightbox-content-" + x).show();
        $(".delete").click(function(){
            $(".hightbox-content-" + x).hide();
        });
    });

});