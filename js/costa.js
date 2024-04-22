$(document).ready(function(){
    mainSlider();
    gnbControl();
    mainCarouselSlider();
    drinkfoodsubSlider();
    togglePassword();
    menubtn();
    accControl();
    gnbControltwo();
    panelControl();
    mobilemainbar();
});
function panelControl(){
     var currentPanel = null;
     var panels = $(".costaclubjoinContainer > div[id^='answer']");
    $(".costaclubjoinContainer > div:first-of-type input[type='button']").click(function(){
        panels.removeClass("active");
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
}
function gnbControl(){
    $("header > div:first-of-type nav ul li").click(function(){
        $(".gnbboxArea").toggleClass("active");
    });
}
function gnbControltwo(){
    $("button").click(function(){
        $(".gnbboxArea").toggleClass("active");
    });
}
function mainSlider(){
    $('.mainFirstSlider').bxSlider({
        wrapperClass: "mainFirst",
        touchEnabled: false
    });
}

function mainCarouselSlider(){
    var drinksSlider = $(".drinksSlider").bxSlider({
        maxSlides: 4,
        minSlides: 1,
        slideWidth: 320,
        slideMargin: 130,
        wrapperClass: "drinksCarousel",
        pager: false
    });
    var foodsSlider = $(".foodsSlider").bxSlider({
        maxSlides: 4,
        minSlides: 1,
        slideWidth: 320,
        slideMargin: 130,
        wrapperClass: "foodsCarousel",
        pager: false
    });

    var tabButton = $(".tabSlider input[type='button']");
    var currentTab = '';
    var tabContent = $(".tabSlider > div:not(:first-of-type)");
    var currentSlider = '';
    $(".drinksTab").addClass("active");
    
    tabButton.click(function(){
        tabContent.removeClass("active");

        currentTab = "." + $(this).val() + "Tab";
        $(currentTab).addClass("active");

        tabButton.removeClass("active");
        $(this).addClass("active");

        currentSlider = $(this).val() + "Slider";
        if(currentSlider == "drinksSlider"){
            drinksSlider.reloadSlider();
        }else if(currentSlider == "foodsSlider"){
            foodsSlider.reloadSlider();
        }
    });
}
    function drinkfoodsubSlider(){
        $('.subSlider').bxSlider({
            wrapperClass: "subCarousel",
            maxSlides: 4,
            minSlides: 1,
            slideWidth: 300,
            slideMargin: 130,
            pager: false
            
        });
}

function togglePassword(){
    var $newTarget = $('.material-icons.toggleVisible');
    var $newLabel = $('#userPW');
    var newStatus = false;

    $newTarget.click(function(){
        newStatus = !newStatus;
        if(newStatus==true){
           $newTarget.text('visibility');

            $newLabel.attr('type','text');
        }else{
            $newTarget.text('visibility_off');
            $newLabel.attr('type','password');
        }
    });
}

function menubtn(){
    var menuBar = $("header nav");
    $('.mui').click(function(){
        $(this).toggleClass('close');
         $(menuBar).toggleClass('active');
    });
    $('nav ul').click(function(e){
        e.stopPropagation();
    });
    $('header > div:first-of-type > nav > button').click(function(){
        if($('header > div:first-of-type > nav ul').hasClass('active')){
            $('header > div:first-of-type > nav').removeClass('active');
            $('header > div:first-of-type > nav ul').removeClass('active');
        }else{
            $(this).addClass('active');
            $(this).next('ul').addClass('active');
        }
    });
}

function accControl(){
    $('.accComponent>div>h3').click(function(){
        $(this).toggleClass("active");
    });
}
function mobilemainbar(){
    $('.headerlist li').click(function(){
        $(this).toggleClass("active");
    });
}