console.log("Welcome");
// Show Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

//Menu Show
// Validate if constant Exist
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show_menu');
    })
}

//Menu Hide
// Validate if constant Exist
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show_menu');
    })
}

//Remove Menu Mobile
const navLink = document.querySelectorAll('.nav_link');
navLink.forEach(element => {
    element.addEventListener('click',()=>{
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show_menu')
    })
});

// SWIPER JS SOCIETY
var swiper = new Swiper(".societies_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

//   Video
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

videoButton.addEventListener('click',()=>{
    if(videoFile.paused){
        //Play Video
        videoFile.play();
        // Icon Change
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')

    }else{
        videoFile.pause();
        videoIcon.classList.add('ri-play-line')
        videoIcon.classList.remove('ri-pause-line')
    }
});

videoFile.addEventListener('ended',()=>{
    videoIcon.classList.add('ri-play-line')
    videoIcon.classList.remove('ri-pause-line')
})


// Show Scroll UP
window.addEventListener('scroll',()=>{
    const scrollUp = document.getElementById('scroll-up');
    //When the scroll is higher then 200 viewport height,add the show scroller class
    if(this.scrollY>=200){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');

    }
})

// Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll',()=>{
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight  = current.offsetHeight;
        const sectionTop = current.offsetTop-50;;
        sectionId = current.getAttribute('id');

        if(scrollY>sectionTop && scrollY<=sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active_link');
        }else{
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active_link');

        }
    });
})

// Dark Light Theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

//Previously Selected (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We obtain the current theme that the interface has by validating the dark-theme Class
const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light';  
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?'ri-moon-line':'ri-sun-line';  

//Validate if the user previously chose a topic
if(selectedTheme){
    // if the validaton is fullfilled,
    document.body.classList[selectedTheme==='dark'?'add':'remove'](darkTheme);
    themeButton.classList[selectedIcon==='ri-moon-line'?'add':'remove'](iconTheme);
}
// Activate Deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    //Add or remove the dark icon Theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the Current icon in Local Storage
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())


})
// Scroll Reveal Animaton
 const sr = ScrollReveal({
     distance:'60px',
     duration:2800,
     reset:true,

 })

 sr.reveal(`.home_data,.home_social-link,.home_info,.societies_container,.accreditation_data,accreditation_overlay,.place_card
 .footer_data,.footer_rights`,{
     origin:'top',
     interval:100,

 })
 sr.reveal(`.about_data,.video_description,.subscribe_description`,{
     origin:'left',
     
 })
 sr.reveal(`.about_img-overlay,.video_content,.subscribe_form`,{
     origin:'right',
     interval:100,

 })