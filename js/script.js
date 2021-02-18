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

$('.nav_page_li').click(function(){
    $('.nav_page_li').removeClass('li-active')
    $(this).addClass('li-active')
})



$(".item_filter .title").click(function(){
    if( !$(this).hasClass('active')){
        $(this).addClass('active')
        $(this).next().slideDown()
        $(this).find('.icon').css({
            'transform':'rotate(180deg)',
            'transition':'.3s'
        })
        
    }else{
        $(this).removeClass('active')
        $(this).next().slideUp()
        $(this).find('.icon').css({
            'transform':'rotate(0deg)',
            'transition':'.3s'
        })
        
    }
})


$('.label .txt').click(function(){
    if( !$(this).hasClass('label-active') ){
        $(this).addClass('label-active')
        
    }else{
        $(this).removeClass('label-active')
        

    }

    
})



$('.btn_moreBrands').click(function(e){
    e.preventDefault()
    if( !$('.btn_moreBrands').hasClass('active') ){
        $('.btn_moreBrands').addClass('active')
        $('.more_brands').slideDown()
        $('.btn_moreBrands').html('Скрыть')
    }else{
        $('.btn_moreBrands').removeClass('active')
        $('.more_brands').slideUp()
        $('.btn_moreBrands').html('Показать еще')
    }
    
})








$('.brands_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
});