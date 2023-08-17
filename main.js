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
        let tabID = $(this).attr("class").replace("item #", "");
        let x = $(this).attr("id").replace("item-", "");
        let selector = ".more-" + tabID +" .hightbox-content-" + x;
        $(".hightbox-content").hide();
        $(selector).show();
        $(".delete").click(function(){
            $(selector).hide();
        });
    });
});
function ShowTimeNow(){
    const curDate = new Date(); //Ngày hiện tại
    var curHour = curDate.getHours(); // Giờ hiện tại
    var curMin = curDate.getMinutes(); // Phút hiện tại
    var curSec = curDate.getSeconds(); // Giây hiện tại
    // Định dạng giờ theo kiểu HH:MM:SS
    var timeStr = (curHour < 10 ? "0" + curHour : curHour) + ":" +
                    (curMin < 10 ? "0" + curMin : curMin) + ":" +
                    (curSec < 10 ? "0" + curSec : curSec);    
    // Gán vào thẻ HTML có id là "time"
    document.getElementById("time").innerHTML = "Giờ địa phương: " + timeStr;
  }
  //Gọi hàm khi tải xong trang web
window.onload = function(){
   ShowTimeNow();
}
setInterval(ShowTimeNow, 1000);    //Gọi lại hàm sau mỗi 60 giây
