$(function(){
    $(".menu_toggle_btn").click(function(){
        $(".gnb").stop().slideToggle("fast");
    })

    $(".search_select_box span").hover(function(){
        // $(this).next().stop().slideDown(); 둘중하나
        $(".search_select_list").stop().slideDown();
    }, function(){
        // $(this).next().stop().slideUp(); 둘중하나
        $(".search_select_list").stop().slideUp();
    })  

})//jQuery