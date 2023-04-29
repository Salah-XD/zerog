// $(document).ready(function () {
//     $(".menu-btn").click(function () {
//         $(".navbar .menu").toggleClass(".active");
//         $(".menu-btn i").toggleClass(".active");
//     });


// })

function classToggle() {
    const navs = document.querySelectorAll('.menu')
    
    navs.forEach(nav => nav.classList.toggle('active'));
  }
  
  document.querySelector('.menu-btn')
    .addEventListener('click', classToggle);





const load = document.querySelector(".loader");
window.addEventListener("load", function () {
  load.style.display = "none";
});

const scriptURL =
    "https://script.google.com/macros/s/AKfycbz_-9vxy5uY_QIpJi0-2wLjViRDdn-4AD61nVJLGlvLgp2lsAe0qgeIi0mtmUsthqki/exec";
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message  Sent Successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });




