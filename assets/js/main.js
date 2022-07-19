(function () {
  var imageGrid = document.querySelector(".img-grid");
  if (!imageGrid) {
    return;
  }
  var members = [
    {
      avatar: "assets/img/avatars/avatar-jumbo-1.jpg",
      name: "mohammad kamalipour",
    },
    {
      avatar: "assets/img/avatars/avatar-7.jpg",
      name: "arad",
    },
    {
      avatar: "assets/img/avatars/avatar-8.jpg",
      name: "sina",
    },
    {
      avatar: "assets/img/avatars/avatar-10.jpg",
      name: "Arash Milani",
    },
    {
      avatar: "assets/img/avatars/avatar-6.jpg",
      name: "Hassan",
    },
    {
      avatar: "assets/img/avatars/avatar-4.jpg",
      name: "Aryan",
    },
    {
      avatar: "assets/img/avatars/avatar-3.jpg",
      name: "Samira",
    },
    {
      avatar: "assets/img/avatars/avatar-1.jpeg",
      name: "ali",
    },
    {
      avatar: "assets/img/avatars/avatar-9.jpg",
      name: "hossein",
    },
  ];
  var parallax = ["-30", "-85", "-45", "-50", "-20", "-15", "-10"];

  var shuffleArray = (arr) =>
    arr.sort(function () {
      return 0.5 - Math.random();
    });

  var shuffleMembers = shuffleArray(members);
  var maxImage = 7;
  counter = 1;

  while (counter <= maxImage) {
    const imgWrapper = document.createElement("div");
    const avatar = document.createElement("img");
    imgWrapper.className = "img-grid-item";

    avatar.src = shuffleMembers[counter].avatar;
    avatar.alt = shuffleMembers[counter].alt;
    avatar.dataset.jarallaxElement = parallax[counter];
    if (counter === 1) {
      avatar.className =
        "img-fluid rounded-top-start-3 rounded-bottom-end-3 shadow-lg";
    } else {
      avatar.className =
        "img-fluid rounded-top-start rounded-bottom-end shadow-lg";
    }

    imgWrapper.appendChild(avatar);
    imageGrid.appendChild(imgWrapper);
    counter++;
  }
})();

const formEl = document.getElementById("my_form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submitform");
const formSubmitHandler = (e) => {
  e.preventDefault();
  submitBtn.classList.add("loading");

  const name = formEl.elements["name"].value;
  const email = formEl.elements["email"].value;
  const message = formEl.elements["message"].value;
  var formdata = new FormData();
  formdata.append("name", name);
  formdata.append("email", email);
  formdata.append("message", message);

  var ajax = new XMLHttpRequest();
  ajax.open("POST", "../../mailer.php");
  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      if (ajax.responseText == "success") {
        submitBtn.classList.remove("loading");
        Toastify({
          text: "پیام شما با موفقیت ارسال شد.",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: false,
          gravity: "top", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      } else if (ajax.responseText == "error") {
        submitBtn.classList.remove("loading");
        Toastify({
          text: "نشد که بشه! ‌:(",
          duration: 3000,
          close: false,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background:
              "linear-gradient(to right, rgb(176 0 69), rgb(201 115 61))",
          },
        }).showToast();
      }
    }
  };
  if (nameInput.value === "") {
    submitBtn.classList.remove("loading");

    Toastify({
      text: "اسمتو وارد نکردیا!",
      duration: 3000,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, rgb(176 0 69), rgb(201 115 61))",
      },
    }).showToast();
    return null;
  }
  if (emailInput.value === "") {
    submitBtn.classList.remove("loading");
    Toastify({
      text: "ایمیلتو وارد نکردیا!",
      duration: 3000,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, rgb(176 0 69), rgb(201 115 61))",
      },
    }).showToast();
    return null;
  }
  if (messageInput.value === "") {
    submitBtn.classList.remove("loading");

    Toastify({
      text: "پیامتو وارد نکردیا!",
      duration: 3000,
      close: false,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, rgb(176 0 69), rgb(201 115 61))",
      },
    }).showToast();
    return null;
  }
  ajax.send(formdata);
};

formEl.addEventListener("submit", formSubmitHandler);
