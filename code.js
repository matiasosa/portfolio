$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }  
    })
    
    // Boton nav-bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.menu a').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //Typing animation

    var typed = new Typed(".typing", {
        strings: ["Programador", "Estudiante", "Futuro ingeniero"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Theme

var r = document.querySelector(":root");
function setColor(color)
{
    if(color == "orange")
    {
        r.style.setProperty("--page-color", "rgb(210, 142, 24)");
    }
    else if(color == "purple")
    {
        r.style.setProperty("--page-color", "rgb(114, 24, 210)");
    }
    else if(color == "lightblue")
    {
        r.style.setProperty("--page-color", "rgb(20, 177, 220)");
    }
    else
    {
        r.style.setProperty("--page-color", "rgb(11, 174, 98)");
    }

}

var rStyle = getComputedStyle(r);
function themesBtnFunc(){
    if(rStyle.getPropertyValue("--drop-display") == "block"){
        r.style.setProperty("--drop-display", "none");
    }
    else{
        r.style.setProperty("--drop-display", "block");
    }    
}

function closeDrop(){
    r.style.setProperty("--drop-display", "none");
}

//const fs = require('fs')

function contact(){
    let nameInput = document.getElementById("contact-name").value
    let emailInput = document.getElementById("contact-email").value
    let subjectInput = document.getElementById("contact-subject").value
    let textInput = document.getElementById("contact-text").value

    let newObject = {
        name: nameInput,
        email: emailInput,
        subject: subjectInput,
        text: textInput,
    };

    let jsonString = JSON.stringify(newObject)
    console.log(jsonString)
}

