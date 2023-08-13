    var n;
    $(".arrow").click(function () {
        n=$(this).attr("alt");
        $(".hd"+n).toggleClass("dark");
        $(".p"+n).toggleClass("hidden");
        $(this).toggleClass("changeArrow");
    });
    
