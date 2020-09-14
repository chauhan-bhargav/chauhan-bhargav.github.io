$(window).on("load", function(){
    setTimeout(function(){
        $("#loader .loader_gif, #loader .greeting").fadeOut(500, function(){
            $("#loader").fadeOut(300,"linear");
        });
    }, 500);
    $("h1").removeClass("preload");
    $("span").removeClass("preload");
    
});

$(function() {

    AOS.init({
        duration: 600,
        delay: 50,
        once: true,
    });

    if($( window ).width()<1200){
        $(".skills-item").attr("data-aos-delay","0");
        $(".skills-item").attr("data-aos","zoom-in-up");
    }
  
    // $('#home').mousemove(function(e){
    //     var moveX = (e.pageX * -1/155); 
    //     var moveY = (e.pageY * -1/155); 
    //     $(this).css('background-position', moveX + 'px  ' + moveY + 'px')
    // });

    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });

    

    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        var tmode = document.getElementsByTagName("BODY")[0].className;
        if (scroll_position > 100 && tmode == "light") {
            header.style.backgroundColor = '#1a2430';
        } else if(scroll_position > 100 && tmode == "dark"){
            header.style.backgroundColor = '#0e0e0e';
        }
        else {
            header.style.backgroundColor = 'transparent';
        }
    });

    $(document).ready(function(){
        $(".theme-mode").change(function(){
            var tm = $(this).val();
            var scroll_position = window.scrollY;
            if(tm == 'light' && scroll_position > 100){
                header.style.backgroundColor = '#1a2430';
            }else if(tm == "dark" && scroll_position > 100){
                header.style.backgroundColor = '#0e0e0e';
            }else {
                header.style.backgroundColor = 'transparent';
            }
        })
    })

    menu_item.forEach((item) => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobile_menu.classList.toggle('active');
        });
    });


    var skillsTopOffset = $(".skills").offset().top;
    $(window).scroll(function(){
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 300){
    		$('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#00b1ff',
                trackColor: 'white',
                scaleColor: false,
                lineWidth: 8,
                lineCap: 'square',
                size: 100,
                animate: 2000,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
    	}
    });


    const projectItems = document.querySelector(".all-projects");
    const modal = document.querySelector(".modal")
    const modalCloseBtn = modal.querySelector(".modal-close-btn");
    const modalCloseIcon = modal.querySelector(".close");

    projectItems.addEventListener("click",function(event){
        if(event.target.tagName.toLowerCase() == "button"){
            const item =event.target.parentElement;
            const h1 = item.querySelector("h1").innerHTML;
            const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
            modal.querySelector("h1").innerHTML = h1;
            modal.querySelector(".modal-body").innerHTML = readMoreCont;
            popupBox();
            toggle();
        }
    })

    modalCloseBtn.addEventListener("click", popupBox);
    modalCloseIcon.addEventListener("click", popupBox);
    modalCloseBtn.addEventListener("click", toggle);
    modalCloseIcon.addEventListener("click", toggle);
    modalCloseBtn.addEventListener("click", scrollReset);
    modalCloseIcon.addEventListener("click", scrollReset);

    modal.addEventListener("click", function(event){
        if(event.target == modal){
        popupBox();
        toggle();
        scrollReset();
        }
    })

    function popupBox(){
        modal.classList.toggle("open");
    }

    function toggle(){
        var blur = document.getElementsByClassName('blur');
        for (i = 0; i < blur.length; i++) {
            blur[i].classList.toggle('active');
        }
    }

    function scrollReset(){
        var scrol = document.getElementById('modalBody');
        scrol.scrollTop = 0;
    }


    $(".theme-mode").change(function(){
        if($(this).val() == "light"){
            $("body").removeClass("dark")
            $("body").addClass("light")
        }
        else{
            $("body").addClass("dark")
            $("body").removeClass("light")
        }
    })

    $(".toggle-btn").click(function(){
        $(".setting").toggleClass("open");
    })

    $(".hamburger").click(function(){
        $(".setting").toggleClass("off");
    })
});