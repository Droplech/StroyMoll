//+tabs
$('.col_product ul li').hover(function(e){
    e.preventDefault()
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

$('.shop_tab').click(function(e){
    e.preventDefault()
    $('.shop_tab').removeClass('a_active')
    $(this).addClass('a_active')
})

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


$('.mob_burg').click(function(){
    $('.mob_burg').addClass('active')
    $('.mob_menu_content').fadeIn()
    
})
$('.closed').click(function(){
    
    $('.mob_menu_content').fadeOut()
    
})

if ( $(window).width() < 1050 ){
    $('.col_product ul li a').click(function(e){
        e.preventDefault()
    })
}

if ( $(window).width() < 500 ){

    $('.col_product ul li').removeClass('active')



    $('.col_product ul li a').click(function(e){
        e.preventDefault()
        $('.col_detail_block').css({
            'right':'0',
            'transition':'.3s'
        })
    })

    $('.close_detail').click(function(){
        $('.col_detail_block').css({
            'right':'-388px',
            'transition':'.3s'
        })
    })


    
}




$('.open_filter').click(function(e){
    e.preventDefault()
   if( !$('.open_filter').hasClass('active') ){
        $('.open_filter').addClass('active')
        $('.open_filter').html('Закрыть фильтр')
        $('.filter').fadeIn()
   }else{
    $('.open_filter').removeClass('active')
    $('.open_filter').html('Фильтр')
    $('.filter').fadeOut()
   }
})


$('.slider-nav .item').click(function(){
    $('.slider-nav .item').removeClass('item_border-active')
    $(this).addClass('item_border-active')
})





const counter = (selector, action) => {
    let price = selector.parents('.basket_product').find($('.count_info'));
  
    switch (action) {
      case 'increment': 
        price.val(parseInt(price.val()) + 1); break;
      case 'decrement': 
        if (price.val() < 1) { price.val(0) } else { price.val(parseInt(price.val()) - 1);} break;  
    }
  } 
  $('.count_plus').click(function() {
    counter($(this), 'increment')
  })
  
  $('.count_minus').click(function() {
    counter($(this), 'decrement')
  })








$('.choice_item').click(function(){
    $('.choice_item').removeClass('choice_item-active ')
    $(this).addClass('choice_item-active ')
})




$('.basket_left_input input').click(function(){
    $('.basket_left_input .label').removeClass('input-label-active')
    $(this).prev().addClass('input-label-active')
})




$('.data_white_block').click(function(){
    $('.basket_left_input .label').removeClass('input-label-active')
})


$('.tabs_del a').click(function(e){
    e.preventDefault()
    $('.tabs_del a').removeClass('tabs_del-a-active')
    $(this).addClass('tabs_del-a-active')
})













$('.slider_shop').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
})
$('.left-shop_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
})
$('.brand-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive:[
        {
            breakpoint: 1450,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1370,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
})



$('.choice_prod_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive:[
        {
            breakpoint: 1370,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1290,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
})




$('.brands_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive:[
        {
            breakpoint: 1690,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
$('.slider-nav').slick({
slidesToShow: 6,
slidesToScroll: 1,
asNavFor: '.slider-for',
dots: false,
arrows:false,
focusOnSelect: true,
responsive:[
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    }
]
});














