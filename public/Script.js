const myEventIcon = document.getElementById("my-event-icon");
const myEventSubMenu = document.getElementById("my-event-sub-menu");
myEventSubMenu.style.display = "none";
myEventIcon.addEventListener("click", () => {
  if (myEventSubMenu.style.display == "none") {
    myEventSubMenu.style.display = "block";
  } else {
    myEventSubMenu.style.display = "none";
  }
});

const myEventManagingIcon = document.getElementById("my-event-managing");
const myEventManagingSubMenu = document.getElementById(
  "my-event-managing-sub-menu"
);
myEventManagingSubMenu.style.display = "none";
myEventManagingIcon.addEventListener("click", () => {
  if (myEventManagingSubMenu.style.display == "none") {
    myEventManagingSubMenu.style.display = "block";
  } else {
    myEventManagingSubMenu.style.display = "none";
  }
});

const myFundRasingIcon = document.getElementById("my-fund-raising-icon");
const myFundRaisingSubMenu = document.getElementById(
  "my-fund-raising-sub-menu"
);
myFundRaisingSubMenu.style.display = "block";
myFundRasingIcon.addEventListener("click", () => {
  if (myFundRaisingSubMenu.style.display == "none") {
    myFundRaisingSubMenu.style.display = "block";
  } else {
    myFundRaisingSubMenu.style.display = "none";
  }
});

const dotContent = document.getElementById("three-dot");
function threeDot() {
  if (dotContent.style.display == "none") {
    dotContent.style.display = "flex";
  } else {
    dotContent.style.display = "none";
  }
}

const sideBar = document.getElementById("side-bar");
function openAndCloseSideBar() {
  if (sideBar.style.transform == "translateY(-300%)") {
    sideBar.style.transform = "translateY(0%)";
  } else {
    sideBar.style.transform = "translateY(-300%)";
  }
}
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const scrollAmount = 300; // Number of pixels to scroll

nextBtn.addEventListener("click", () => {
  carousel.scrollLeft += scrollAmount;
});

prevBtn.addEventListener("click", () => {
  carousel.scrollLeft -= scrollAmount;
});
