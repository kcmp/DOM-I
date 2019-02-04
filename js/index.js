const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


///nav

let navigation = document.querySelectorAll('nav a');
navigation.forEach((link, index) => {
   link.textContent = siteContent.nav[`nav-item-${index + 1}`];
   link.style.color = 'green';
});

let homeNav = document.createElement('a');
homeNav.href = '#';
homeNav.textContent = 'Home';
homeNav.style.color = 'green';

let blog = document.createElement('a');
blog.href = '#';
blog.textContent = 'Blog';
blog.style.color = 'green';

const nav = document.querySelector ('nav');
nav.prepend(homeNav);

const navBlog = document.querySelector ('nav');
navBlog.appendChild(blog);

///cta

let ctaImag = document.getElementById("cta-img");
ctaImag.setAttribute('src', siteContent.cta["img-src"]);

let hOne = document.querySelector('h1');
hOne.textContent = siteContent.cta.h1;

let button = document.querySelector("button");
button.textContent = 'Get Started';
// cta.innerHTML = siteContent['cta']['h1'].replace(/\s/g,"</br>");

//main-content
//headers h4
let header = document.querySelectorAll('h4');
// header.style.color = 'blue';

const headerColor = document.querySelectorAll('.main-content h4');
for (let i = 0; i < headerColor.length; i++){
const headerColors= headerColor[i];
headerColors.style.color = "blue";
headerColors.style.background = "yellow";
headerColors.style.width="20%"
}

header[0].textContent = siteContent["main-content"]['features-h4'];
header[1].textContent = siteContent["main-content"]['about-h4'];
header[2].textContent = siteContent["main-content"]['services-h4'];
header[3].textContent = siteContent["main-content"]['product-h4'];
header[4].textContent = siteContent["main-content"]['vision-h4'];

//content p
let content = document.querySelectorAll('p');
content[0].textContent = siteContent["main-content"]['features-content'];
content[1].textContent = siteContent["main-content"]['about-content'];
content[2].textContent = siteContent["main-content"]['services-content'];
content[3].textContent = siteContent["main-content"]['product-content'];
content[4].textContent = siteContent["main-content"]['vision-content'];

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//contact
//headers h4

header[5].textContent = siteContent.contact['contact-h4'];

//content p

content[5].textContent = siteContent.contact.address;
content[6].textContent = siteContent.contact.phone;
content[7].textContent = siteContent.contact.email;

let addressOne = document.querySelector('.contact p')
addressOne.style.width="25%"

//footer

content[8].textContent = siteContent.footer.copyright; 