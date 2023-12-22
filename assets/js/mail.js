function sendMail() {
  if (
    document.getElementById("name").value === "" &&
    document.getElementById("email").value === "" &&
    document.getElementById("message").value === "" &&
    document.getElementById("subject").value === ""
  ) {
    err();
    setTimeout(function () {
      err2();
    }, 5000);
  } else {
    let email = document.getElementById("email").value.trim().toLowerCase();
    let contactus = "CONTACT US";

    let params = {
      name: document.getElementById("name").value,
      email,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
      contactus: contactus,
    };

    const ser = "service_smnld0d";
    const tem = "template_u35cd5g";

    emailjs
      .send(ser, tem, params)
      .then((res) => {
        succ();
        setTimeout(function () {
          succ2();
        }, 5000);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("subject").value = "";
      })
      .catch(() => {
        errxc();
        setTimeout(function () {
          err2();
        }, 5000);
      });
  }
}

function err() {
  let element = document.getElementById("messx");
  let m = document.getElementById("butco");
  element.innerHTML = " 🤔 Please fill all required fields.";
  m.innerHTML = "try again !";
}

function errxc() {
  let element = document.getElementById("messx");
  let m = document.getElementById("butco");
  element.innerHTML = "😔 error in server please contact to admin";
  m.innerHTML = "try again !";
}

function err2() {
  let element = document.getElementById("messx");
  element.innerHTML = "";
  let m = document.getElementById("butco");
  m.innerHTML = "Send Message";
}

function succ() {
  let element = document.getElementById("messx");
  let m = document.getElementById("butco");
  element.innerHTML =
    "✅ Thank you for contacting us, We will respond to you soon.";
  m.innerHTML = "Success";
}

function succ2() {
  let element = document.getElementById("messx");
  element.innerHTML = "";
  let m = document.getElementById("butco");
  m.innerHTML = "Send Message";
}

//////////////////////////////////

function sendMail2x() {
  if (document.getElementById("emailx").value === "") {
    Serr();
    setTimeout(function () {
      Serr2();
    }, 5000);
  } else {
    let email = document.getElementById("emailx").value.trim().toLowerCase();
    let contactus = "NEWSLETTER";

    let params = {
      email,

      contactus: contactus,
    };

    const ser = "service_smnld0d";
    const tem = "template_u35cd5g";

    emailjs
      .send(ser, tem, params)
      .then((res) => {
        Ssucc();
        setTimeout(function () {
          Serr2();
        }, 5000);

        document.getElementById("emailx").value = "";
      })
      .catch(() => {
        Serrxc();
        setTimeout(function () {
          Serr2();
        }, 5000);
      });
  }
}
//////////////////////////
function Serr() {
  let element = document.getElementById("subs");

  element.innerHTML = " 🤔 Please fill the required field.";
}

function Serr2() {
  let element = document.getElementById("subs");
  element.innerHTML = "Subscribe to Our Newsletter";
}
function Serrxc() {
  let element = document.getElementById("subs");

  element.innerHTML = "error please contact to admin";
}

function Ssucc() {
  let element = document.getElementById("subs");

  element.innerHTML = "Thankyou for Subscribe to Our Newsletter";
}
