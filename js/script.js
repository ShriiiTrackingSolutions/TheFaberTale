

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter(() => {
    highlightActiveLink();
    initHeaderBehavior();
    initMobileNavToggle();
    document.querySelector(".year").textContent = new Date().getFullYear();
  });
});

// Load Header and Footer
function loadHeaderFooter(callback) {
  document.getElementById("header").innerHTML = `
        <div id="main-header">
            <nav class="mynavbar bg-light">
              <div class="container header">
                <a class="brandLogo" href="index.html">
                  <img src="image/TheFaberTale-Logo.webp" alt="The FaberTale Logo">
                </a>
                <button class="navToggle">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul class="navMenu mx-auto mb-2 mb-lg-0">
                  <li class="nav-close">
                    <button class="btn-nav-close"><span class="close-btn">+</span></button>
                  </li>
                  <li class="navLi"><a class="navLink" href="index.html">Home</a></li>
                  <li class="navLi"><a class="navLink" href="about.html">About Us</a></li>
                 
                  <li class="navLi">
                    <a href="#" class="navLink">Products
                      <span class="toggleSub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10l6 6l6-6z"/></svg>
                      </span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi"><a href="#" class="navLink">LinkHere</a></li> 
                    </ul>
                  </li>
                  <li class="navLi"><a href="#" class="navLink">Gallery</a></li>
                  <li class="navLi"><a href="contactUs.html" class="navLink">Contact</a></li>
                </ul>
                <div class="headSocial d-none d-lg-flex">
                  <a href="https://www.facebook.com/people/The-Faber-Tale/61554707031271/"><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/thefabertale/"><i class="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </nav>
          </div>
`; // Keep your current header HTML here
  document.getElementById("footer").innerHTML = `  <div class="container">
     <div class="footWrap defaultPadding">
       <div class="row">
         <!-- Company Info -->
         <div class="col-lg-auto col-sm-6 mb-4 mb-md-0 FooterAbout">
           <a class="footer-brand" href="index.html">
             <img loading="lazy" src="image/TheFaberTale-Logo.webp" alt="TheFaberTale Logo">
           </a>
           <p class="mt-2"> TheFaberTale crafts timeless wooden creations with passion, precision, and purpose—blending artistry and quality to bring your spaces to life beautifully. </p>
           <div class="footerSocial">
             <a target="_blank" href="https://www.facebook.com/people/The-Faber-Tale/61554707031271/">
               <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                 <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 10v4h3v7h4v-7h3l1-4h-4V8c0-.545.455-1 1-1h3V3h-3c-2.723 0-5 2.277-5 5v2z" />
               </svg>
             </a>
             <a target="_blank" href="https://www.instagram.com/thefabertale/">
               <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                 <g fill="none" stroke="currentColor" stroke-width="1.5">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" />
                   <path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
                   <path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011" />
                 </g>
               </svg>
             </a>
             <a target="_blank" href="https://x.com/">
               <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                 <g fill="none" fill-rule="evenodd">
                   <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                   <path fill="currentColor" d="M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16ZM16.5 19L6 5h1.5L18 19z" />
                 </g>
               </svg>
             </a>
             <a class="set-url-target" target="_blank" href="https://api.whatsapp.com/send?phone=number">
               <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                 <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                   <path d="M8.635 7.514c-1.04 1.04-1.29 2.213-1.052 3.384c.244 1.199 1.01 2.418 2.044 3.449c1.053 1.05 2.263 1.824 3.454 2.07c1.158.239 2.33-.012 3.405-1.081c.002-.004.049-.087-.036-.34c-.09-.269-.296-.606-.617-.925c-.32-.32-.659-.526-.928-.616c-.26-.086-.343-.036-.345-.036c-.47.47-.733.89-.77 1.262a.5.5 0 0 1-.244.38c-.321.19-.766.264-1.328.076c-.541-.182-1.189-.605-1.98-1.394c-.792-.79-1.217-1.435-1.4-1.975c-.189-.561-.114-1.006.076-1.327a.5.5 0 0 1 .38-.243c.374-.037.798-.3 1.268-.767c0-.005.048-.087-.037-.34c-.09-.269-.296-.606-.617-.925c-.32-.32-.659-.526-.928-.616c-.26-.086-.343-.036-.345-.036m.66-.913c.446.148.913.45 1.32.856c.406.406.71.871.859 1.316c.138.413.187.974-.201 1.36c-.433.433-.953.838-1.544.998a.9.9 0 0 0 .057.317c.113.334.42.851 1.158 1.586c.737.736 1.256 1.042 1.592 1.155c.139.046.243.06.321.057c.161-.59.568-1.108 1.001-1.54c.388-.386.948-.337 1.362-.2c.445.148.912.451 1.319.857s.71.87.86 1.315c.137.413.187.974-.202 1.361c-1.321 1.317-2.839 1.663-4.318 1.357c-1.449-.299-2.825-1.211-3.958-2.34c-1.123-1.12-2.022-2.507-2.318-3.959c-.301-1.48.033-3.003 1.33-4.296c.388-.386.949-.337 1.362-.2" />
                   <path d="M12 4.178a7.822 7.822 0 0 0-6.387 12.339a.5.5 0 0 1 .051.487l-1.284 2.97l3.657-1.061a.5.5 0 0 1 .37.036A7.822 7.822 0 1 0 12 4.178M3.178 12a8.822 8.822 0 1 1 4.949 7.928L3.639 21.23a.5.5 0 0 1-.598-.678l1.596-3.692A8.8 8.8 0 0 1 3.178 12" />
                 </g>
               </svg>
             </a>
           </div>
         </div>
         <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
           <h5 class="fourthH">Useful links</h5>
           <ul class="FooterLinksList">
             <li>
               <a class="footerLinks" href="index.html"> Home </a>
             </li>
             <li>
               <a class="footerLinks" href="about.html"> About Us</a>
             </li>
             <li>
               <a class="footerLinks" href="#"> Gallery</a>
             </li>
             <li>
               <a class="footerLinks" href="#"> Contact</a>
             </li>
           </ul>
         </div>
         <div class="col-sm-6 col-lg-auto mb-4 mb-md-0">
           <h5 class="fourthH">Contact Us</h5>
           <ul class="addressFooter">
            <li>
              <a target="_blank" href=""><i class="fa-solid fa-location-dot"></i> Vadodara</a>              
            </li>
            <li>
              <a href="mailto:info@thefabertale.com"><i class="fa-solid fa-envelope"></i> info@thefabertale.com</a>
            </li>
            <li>
              <a href="tel:+917016738803"><i class="fa-solid fa-phone"></i> +91 70167 38803</a>
            </li>
           </ul>
           
         </div>
         <div class="col-sm-6 col-lg-3 mb-4 mb-md-0  galleryPart">
           <h5 class="fourthH">Follow @Instagram</h5>
           <div class="row g-2">
             <div class="col-4">
               <a target="_blank" class="instaImg" href="https://www.instagram.com/p/DC9wR5LIB4f/?igsh=d3JwZXp6bjUwMTJp">
                 <img src="image/Insta1.webp" alt="Product Image">
               </a>
             </div>
             <div class="col-4">
               <a target="_blank" class="instaImg" href="https://www.instagram.com/p/DC2BEMCo7Kl/?igsh=MW94ZzcwZWwyYjl2aA==">
                 <img src="image/Insta2.webp" alt="Product Image">
               </a>
             </div>
             <div class="col-4">
               <a target="_blank" class="instaImg" href="https://www.instagram.com/p/DCmYSOMyUXd/?img_index=2&igsh=MTN0cHJwNzR5MXBlMQ==">
                 <img src="image/Insta3.webp" alt="Product Image">
               </a>
             </div>
             <div class="col-4">
               <a target="_blank" class="instaImg" href="https://www.instagram.com/p/DCj5pxxSweu/?img_index=1&igsh=azJ6bm56NnhiaXk=">
                 <img src="image/Insta4.webp" alt="Product Image">
               </a>
             </div>
             <div class="col-4">
               <a target="_blank" class="instaImg" href="https://www.instagram.com/p/DBrVzYCz1vq/?img_index=1&igsh=emFyNjllOGFtZmNk">
                 <img src="image/Insta5.webp" alt="Product Image">
               </a>
             </div>
             <div class="col-4">
               <a target="_blank" class="instaImg" href="https://www.instagram.com/p/DA80MbVoRol/?igsh=YWpoNnpmenR4ZWV0">
                 <img src="image/Insta6.webp" alt="Product Image">
               </a>
             </div>
           </div>
         </div>
         <!-- Contact Info -->
       </div>
     </div>
   </div>
   <div class="f-bottom effect">
     <div class="container">
       <div class="row ">
         <div class="col-12">
           <div class="inner">
             <div class="copyright text-center">
               <span class="year"></span> All Rights Reserved by CompanyName | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
                 <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div> `; // Keep your current footer HTML here
  callback?.();
}

// Highlight current page in navbar
function highlightActiveLink() {
  const current = (window.location.pathname.split("/").pop() || "index.html").split("?")[0];
  document.querySelectorAll(".navLink").forEach(link => {
    const href = link.getAttribute("href")?.split("?")[0];
    if (!href || href === "#") return;
    if (href === current) {
      link.classList.add("active");
      link.closest(".dropdownList")?.closest(".navLi")?.querySelector(".navLink")?.classList.add("active");
    }
  });
}

// Sticky Header on Scroll
function initHeaderBehavior() {
  const header = document.getElementById("main-header");
  const belowContent = document.getElementById("headBelowContent");

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const stickyStart = header.offsetTop + header.offsetHeight + 5;
    const resetPoint = belowContent.offsetTop + belowContent.offsetHeight + 4;

    if (scrollTop > stickyStart) {
      header.classList.add("sticky-header", "visible");
      header.classList.remove("headerAnimate");
    } else if (scrollTop < resetPoint) {
      header.classList.remove("sticky-header", "visible");
      header.classList.add("headerAnimate");
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
}

// Mobile Nav Toggle and Submenu
function initMobileNavToggle() {
  const toggleBtn = document.querySelector(".navToggle");
  const navMenu = document.querySelector(".navMenu");
  const closeBtn = document.querySelector(".btn-nav-close");

  toggleBtn?.addEventListener("click", () => navMenu.classList.toggle("active"));
  closeBtn?.addEventListener("click", () => navMenu.classList.remove("active"));

  document.querySelectorAll(".toggleSub").forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      const submenu = toggle.closest(".navLi").querySelector(".dropdownList");

      // Close all others
      document.querySelectorAll(".dropdownList.open").forEach(menu => {
        if (menu !== submenu) menu.classList.remove("open");
      });

      submenu?.classList.toggle("open");
    });
  });
}


// WhatsApp URL Adjuster (Device-based Detection)
(function () {
  const mobileLink = "https://api.whatsapp.com/send?phone=numberHere";
  const desktopLink = "https://web.whatsapp.com/send?phone=numberHere";

  function isMobileDevice() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function updateWhatsAppLink() {
    const isMobile = isMobileDevice();
    const targetLink = isMobile ? mobileLink : desktopLink;

    document.querySelectorAll(".set-url-target").forEach(el => {
      el.setAttribute("href", targetLink);
    });
  }

  window.addEventListener("resize", updateWhatsAppLink);
  window.addEventListener("load", updateWhatsAppLink);
})();


