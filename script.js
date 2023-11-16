/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });
      };
  });
  /*==================== sticky navbar ====================*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};
  
/*==================== scroll reveal ====================*/
ScrollReveal({
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container , .portfolio-box, .contact form', 
 { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
  strings: ['Frontend Developer', 'Akuma', 'Yūsha'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// email js

/* const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");*/



function sendEmail() {
  /*const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br>
  Phone Number: ${phone.value}<br> Message: ${mess.value}`;*/
  
  
  
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "janemaedelacruz@gmail.com",
    Password : "081A2F5979A4687558EB7EEB97B488709E8E",
    To : 'janemaedelacruz@gmail.com',
    From : "janemaedelacruz@gmail.com",
    Subject : "This is the subject",
    Body: "And this is the body" 
}).then(
  message => {
    if (message == "OK") {
      // sweetalert
      Swal.fire({
        title: "Success!",
        text: "Imong mensahe kay na pasa na",
        icon: "success"
      });
    }
  }
);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
})
