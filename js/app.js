$(document).ready(function(){
    $(".menu-toggle").click(function(e){
        e.stopPropagation(); // Ngăn chặn sự kiện click lan ra các phần tử khác
        $(".menu").toggleClass("is-active");
    });

    $(document).on("click", function(e) {
        if (!$(".menu").is(e.target) && $(".menu").has(e.target).length === 0) {
            $(".menu").removeClass("is-active");
        }
    });
});



