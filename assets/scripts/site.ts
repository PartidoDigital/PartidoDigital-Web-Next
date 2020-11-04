/* global anchors */

/*anchors.options = {
  visible: 'always',
};
anchors.add('.page h1, .page h2, .page h3, .page h4, .page h5');*/

const videoModal = (id) => {
  return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

fetch('https://spreadsheets.google.com/feeds/list/1ECohuUeBik_2rxvppS3sBHqm_gXpuNbOOYqRoMGans0/1/public/values?alt=json')
  .then(response => response.json())
  .then(data => {
    var temp = data.feed.entry[1]["gsx$_cokwr"]["$t"].replace(/\./g, '');
    document.querySelector("#ingresos-uyu").classList.remove("loading");
    document.querySelector("#ingresos-uyu").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
    //document.querySelector("#stat-ingresos-uyu").classList.remove("hidden");
    temp = data.feed.entry[1]["gsx$_cpzh4"]["$t"].replace(/\./g, '');
    document.querySelector("#egresos-uyu").classList.remove("loading");
    //document.querySelector("#stat-egresos-uyu").classList.remove("hidden");
    document.querySelector("#egresos-uyu").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
    temp = data.feed.entry[2]["gsx$_cokwr"]["$t"].replace(/\./g, '');
    document.querySelector("#ingresos-usd").classList.remove("loading");
    //document.querySelector("#stat-ingresos-usd").classList.remove("hidden");
    document.querySelector("#ingresos-usd").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
    temp = data.feed.entry[2]["gsx$_cpzh4"]["$t"].replace(/\./g, '');
    document.querySelector("#egresos-usd").classList.remove("loading");
    //document.querySelector("#stat-egresos-usd").classList.remove("hidden");
    document.querySelector("#egresos-usd").innerHTML = "$" + temp.substring(0, temp.indexOf(","));
  })
  .catch(error => {
    /*document.querySelector("#ingresos-uyu").classList.remove("loading");
    document.querySelector("#ingresos-uyu").innerHTML = "Error :(";
    document.querySelector("#egresos-uyu").classList.remove("loading");
    document.querySelector("#egresos-uyu").innerHTML = "Error :(";
    document.querySelector("#ingresos-usd").classList.remove("loading");
    document.querySelector("#ingresos-usd").innerHTML = "Error :(";
    document.querySelector("#egresos-usd").classList.remove("loading");
    document.querySelector("#egresos-usd").innerHTML = "Error :(";*/
  });

const { to, fromTo, set } = gsap;

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

document.querySelectorAll('.newsletter-form').forEach(form => {

  let input = form.querySelector('input'),
    button = form.querySelector('button'),
    getVar = variable => getComputedStyle(button).getPropertyValue(variable)

  input.addEventListener('input', e => {
    form.classList.toggle('valid', validateEmail(input.value))
  })

  form.addEventListener('submit', e => {

    e.preventDefault()

    if (!validateEmail(input.value)) {
      input.focus()
      return
    }

    if (!button.classList.contains('active')) {

      button.classList.add('active')

      to(button, {
        keyframes: [{
          '--left-wing-first-x': '50%',
          '--left-wing-first-y': '100%',
          '--right-wing-second-x': '50%',
          '--right-wing-second-y': '100%',
          duration: .2,
          onComplete() {
            set(button, {
              '--left-wing-first-y': '0%',
              '--left-wing-second-x': '40%',
              '--left-wing-second-y': '100%',
              '--left-wing-third-x': '0%',
              '--left-wing-third-y': '100%',
              '--left-body-third-x': '40%',
              '--right-wing-first-x': '50%',
              '--right-wing-first-y': '0%',
              '--right-wing-second-x': '60%',
              '--right-wing-second-y': '100%',
              '--right-wing-third-x': '100%',
              '--right-wing-third-y': '100%',
              '--right-body-third-x': '60%'
            })
          }
        }, {
          '--left-wing-third-x': '20%',
          '--left-wing-third-y': '90%',
          '--left-wing-second-y': '90%',
          '--left-body-third-y': '90%',
          '--right-wing-third-x': '80%',
          '--right-wing-third-y': '90%',
          '--right-body-third-y': '90%',
          '--right-wing-second-y': '90%',
          duration: .2
        }, {
          '--rotate': '50deg',
          '--left-wing-third-y': '95%',
          '--left-wing-third-x': '27%',
          '--right-body-third-x': '45%',
          '--right-wing-second-x': '45%',
          '--right-wing-third-x': '60%',
          '--right-wing-third-y': '83%',
          duration: .25
        }, {
          '--rotate': '60deg',
          '--plane-x': '-8px',
          '--plane-y': '40px',
          duration: .2
        }, {
          '--rotate': '40deg',
          '--plane-x': '45px',
          '--plane-y': '-300px',
          '--plane-opacity': 0,
          duration: .375,
          onComplete() {
            setTimeout(() => {
              button.removeAttribute('style')
              fromTo(button, {
                opacity: 0,
                y: -8
              }, {
                opacity: 1,
                y: 0,
                clearProps: true,
                duration: .3,
                onComplete() {
                  button.classList.remove('active')
                }
              });
              input.value = ""
              form.classList.remove("valid")
              input.blur()
            }, 2500)
          }
        }]
      })

      to(button, {
        keyframes: [{
          '--text-opacity': 0,
          '--border-radius': '0px',
          '--left-wing-background': getVar('--primary-dark'),
          '--right-wing-background': getVar('--primary-dark'),
          duration: .1
        }, {
          '--left-wing-background': getVar('--primary'),
          '--right-wing-background': getVar('--primary'),
          duration: .15
        }, {
          '--left-body-background': getVar('--primary-dark'),
          '--right-body-background': getVar('--primary-darkest'),
          duration: .25,
          delay: .1
        }, {
          '--trails-stroke': '171px',
          duration: .22,
          delay: .22
        }, {
          '--success-opacity': 1,
          '--success-x': '0px',
          duration: .2,
          delay: .15
        }, {
          '--success-stroke': '0px',
          duration: .15
        }]
      })

    }

  })

})