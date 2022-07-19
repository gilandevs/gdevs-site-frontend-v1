var imageGrid = document.querySelector(".img-grid");
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



