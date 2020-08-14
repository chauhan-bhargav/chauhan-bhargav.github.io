$(window).on("load", function(){
    setTimeout(function(){
        $("#loader .loader_gif").fadeOut(500, function(){
            $("#loader").fadeOut(300,"linear");
        });
    }, 500);
    $("h1").removeClass("preload");
    $("span").removeClass("preload");
});


$(function() {

    $('#home').mousemove(function(e){
        var moveX = (e.pageX * -1/155); 
        var moveY = (e.pageY * -1/155); 
        $(this).css('background-position', moveX + 'px  ' + moveY + 'px')
    });


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
        if (scroll_position > 100) {
            header.style.backgroundColor = '#29323c';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
    
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
        console.log(readMoreCont)
        modal.querySelector("h1").innerHTML = h1;
        modal.querySelector(".modal-body").innerHTML = readMoreCont;
        popupBox();
        toggle();
        // $('body').css('overflow','hidden')
    }

    })

    modalCloseBtn.addEventListener("click", popupBox);
    modalCloseIcon.addEventListener("click", popupBox);
    modalCloseBtn.addEventListener("click", toggle);
    modalCloseIcon.addEventListener("click", toggle);

    modal.addEventListener("click", function(event){
        if(event.target == modal){
        popupBox();
        toggle();
        // $('body').css('overflow','auto')
        }
    })

    function popupBox(){
        modal.classList.toggle("open");
        // $('body').css('overflow','auto')
    }

    function toggle(){
        var blur = document.getElementsByClassName('blur');
        console.log(blur);
        for (i = 0; i < blur.length; i++) {
            blur[i].classList.toggle('active');
        }
        
    }
});


// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// const projectItems = document.querySelector(".all-projects");
// const modal = document.querySelector(".modal")
// const modalCloseBtn = modal.querySelector(".modal-close-btn");
// const modalCloseIcon = modal.querySelector(".close");

// projectItems.addEventListener("click",function(event){
// if(event.target.tagName.toLowerCase() == "button"){
//     const item =event.target.parentElement;
//     const h1 = item.querySelector("h1").innerHTML;
//     const readMoreCont = item.querySelector(".read-more-cont").innerHTML;
//     console.log(readMoreCont)
//     modal.querySelector("h1").innerHTML = h1;
//     modal.querySelector(".modal-body").innerHTML = readMoreCont;
//     popupBox();
//     toggle();
//     // $('body').css('overflow','hidden')
// }

// })

// modalCloseBtn.addEventListener("click", popupBox);
// modalCloseIcon.addEventListener("click", popupBox);
// modalCloseBtn.addEventListener("click", toggle);
// modalCloseIcon.addEventListener("click", toggle);

// modal.addEventListener("click", function(event){
//     if(event.target == modal){
//     popupBox();
//     toggle();
//     // $('body').css('overflow','auto')
//     }
// })

// function popupBox(){
//     modal.classList.toggle("open");
//     // $('body').css('overflow','auto')
// }

// function toggle(){
//     var blur = document.getElementsByClassName('blur');
//     console.log(blur);
//     for (i = 0; i < blur.length; i++) {
//         blur[i].classList.toggle('active');
//       }
    
// }