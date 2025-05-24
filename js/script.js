

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
                  <img src="logo" alt="your Logo">
                </a>
                <button class="navToggle">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul class="navMenu mx-auto mb-2 mb-lg-0">
                  <li class="nav-close">
                    <button class="btn-nav-close"><span class="close-btn">+</span></button>
                  </li>
                  <li class="navLi"><a class="navLink" href="index.html">Home</a></li>
                  <li class="navLi">
                    <a href="#" class="navLink">About 
                      <span class="toggleSub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10l6 6l6-6z"/></svg>
                      </span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi"><a href="#" class="navLink">About Us</a></li>
                      <li class="navLi"><a href="#" class="navLink">Meet Our Doctors</a></li>
                    </ul>
                  </li>
                  <li class="navLi">
                    <a href="#" class="navLink">Our Treatments 
                      <span class="toggleSub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 10l6 6l6-6z"/></svg>
                      </span>
                    </a>
                    <ul class="dropdownList">
                      <li class="navLi"><a href="#" class="navLink">LinkHere</a></li> 
                    </ul>
                  </li>
                  <li class="navLi"><a href="#" class="navLink">Patient Testimonials</a></li>
                  <li class="navLi"><a href="#" class="navLink">Gallery</a></li>
                  <li class="navLi"><a href="#" class="navLink">Contact</a></li>
                </ul>
              </div>
            </nav>
        </div>
`; // Keep your current header HTML here
  document.getElementById("footer").innerHTML = ` <div class="container">
        <div class="footWrap defaultPadding">
          <div class="row">
            <!-- Company Info -->
            <div class="col-lg-auto col-sm-6 mb-4 mb-md-0 FooterAbout">
              <a class="footer-brand" href="index.html">
                <img loading="lazy" src="image/Logo" alt="yourLogo">
              </a>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae quam at neque dolore nisi minima blanditiis fuga corporis architecto voluptatem provident dolores et vitae, vero 
              </p>
             
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks">
              <h5 class="fourthH">Quick Links</h5>
              <ul>
                <li>
                  <a class="footerLinks" href="index.html">
                    <i class="fa-solid fa-circle-chevron-right"></i>Home </a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>About Us</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>link</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>link</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>link</a>
                </li>
                <li>
                  <a class="footerLinks" href="#">
                    <i class="fa-solid fa-circle-chevron-right"></i>Contact</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-auto mb-4 mb-md-0 exploreLinks1">
              <h5 class="fourthH ">Explore Link</h5>
              <ul>   
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
                 <li><a href="#" class="footerLinks"><i class="fa-solid fa-circle-chevron-right"></i> link HERE</a></li> 
              </ul>
            </div>
            <div class="col-md-6 col-lg-auto mb-4 mb-md-0">
              <h5 class="fourthH ">Contact Us</h5>
              <ul class="contact-info">
                <li>
                  <a class="locationLink footerLinks" target="_blank" href="#">
                    <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                    <A1-TF-25>
                      <pre class="mb-0">
2nd floor, Broadway Signature,
Sevasi - Canal Rd, Sevasi,
Vadodara, Gujarat 391101</pre>
                  </a>
                </li>
                <li>
                  <a href="tel:Number" class="footerLinks">
                    <i class="fa-solid fa-phone"></i>Your Number</a>
                </li>
                <li>
                  <a class="emailAnchor footerLinks" href="mailto:youremail">
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>youremail</a>
                </li>
              </ul>
              <div class="social-icons mt-3">
                <a target="_blank" class="facebook" href="https://www.linkedin.com/">
                  <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a class="whatsapp set-url-target" rel="noopener" data-mobile-target="" data-desktop-target="_blank" target="_blank" href="https://api.whatsapp.com/send?phone=numberHere">
                  <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </a>
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
                <div class="copyright text-center"> <span class="year"></span>  All Rights Reserved by CompanyName | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
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


