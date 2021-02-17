//+tabs
$('.col_product ul li').hover(function(e){
    $('.col_product ul li').removeClass('active')
    $('.cat_detail').removeClass('cat_detail_active')

    $(this).addClass('active')
    $( $(this).find('a').attr('href') ).addClass('cat_detail_active')
    
})



$(document).ready(function(){
    $('.a_tab').click(function(e){
        e.preventDefault()
        $('.a_tab').removeClass('a_active')
        $('.tabs_wrapper .tab_item').removeClass('tab_item-active')
        $(this).addClass('a_active')
        $($(this).attr('href') ).addClass('tab_item-active')

    })
    
})
//-tabs




















$('.brands_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
});