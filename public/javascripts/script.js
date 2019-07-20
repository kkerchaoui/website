
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-144091314-1');


    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTop").style.display = "block";
      } else {
        document.getElementById("btnTop").style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(topFunction);
        window.scrollTo(0, c - c / 8);
      }
    }

    document.getElementById("linkFrontend").onclick = function () {
      document.getElementById("linkFrontend").classList.remove("is-dark");
      document.getElementById("checkFrontend").classList.add("is-dark");

      document.getElementById("checkBackend").classList.remove("is-primary");
      document.getElementById("linkBackend").classList.add("is-primary");

      document.getElementById("checkTools").classList.remove("is-link");
      document.getElementById("linkTools").classList.add("is-link");

      document.getElementById("divFrontend").style.display = 'block';
      document.getElementById("divBackend").style.display = 'none';
      document.getElementById("divTools").style.display = 'none';
      document.getElementById("divNone").style.display = 'none';
    }
    document.getElementById("linkBackend").onclick = function () {
      document.getElementById("linkBackend").classList.remove("is-primary");
      document.getElementById("checkBackend").classList.add("is-primary");

      document.getElementById("checkFrontend").classList.remove("is-dark");
      document.getElementById("linkFrontend").classList.add("is-dark");

      document.getElementById("checkTools").classList.remove("is-link");
      document.getElementById("linkTools").classList.add("is-link");

      document.getElementById("divBackend").style.display = 'block';
      document.getElementById("divFrontend").style.display = 'none';
      document.getElementById("divTools").style.display = 'none';
      document.getElementById("divNone").style.display = 'none';
    }
    document.getElementById("linkTools").onclick = function () {
      document.getElementById("linkTools").classList.remove("is-link");
      document.getElementById("checkTools").classList.add("is-link");


      document.getElementById("checkFrontend").classList.remove("is-dark");
      document.getElementById("linkFrontend").classList.add("is-dark");

      document.getElementById("checkBackend").classList.remove("is-primary");
      document.getElementById("linkBackend").classList.add("is-primary");


      document.getElementById("divTools").style.display = 'block';
      document.getElementById("divBackend").style.display = 'none';
      document.getElementById("divFrontend").style.display = 'none';
      document.getElementById("divNone").style.display = 'none';
    }


    function handleSubmit() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const tel = document.getElementById('tel').value;
      const captcha = grecaptcha.getResponse();

      axios.post('/contact', {
          name: name,
          email: email,
          content: message,
          tel: tel,
          captcha: captcha
        })
        .then(function (response) {
          if (response.data.responseError) {
            Toastify({
              text: response.data.responseError,
              duration: 5000,
              gravity: "top", // `top` or `bottom`
              position: 'center', // `left`, `center` or `right`
              backgroundColor: "linear-gradient(to right, #e73827, #f85032)",
            }).showToast();
          } else if (response.data.responseSuccess) {
            Toastify({
              text: response.data.responseSuccess,
              duration: 9000,
              gravity: "top", // `top` or `bottom`
              position: 'center', // `left`, `center` or `right`
              backgroundColor: "linear-gradient(to top, #1d976c, #93f9b9)",
            }).showToast();

            resetForm();
            grecaptcha.reset();
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      return false;
    }





    function resetForm() {
      document.getElementById('contact-form').reset();
    }



    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }
    });

    new TypeIt('#introSpeech', {
      strings: ["A FULL STACK DEVELOPER."],
      speed: 200,
      breakLines: true,
      waitUntilVisible: true,
      loop: true
    }).go();

    new TypeIt('#helloWorld', {
      speed: 200,
      breakLines: false,
      waitUntilVisible: true,
      loop: false
    }).go();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        var div = document.getElementById('navbarBurger');
        div.classList.remove('is-active');

        var div2 = document.getElementById('navbarItems');
        div2.classList.remove('is-active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    document.getElementById('mail_svg').addEventListener('click', function (e) {
      document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
      });
    });
