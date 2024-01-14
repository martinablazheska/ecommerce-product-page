// menu

const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu-contents");
const close = document.querySelector(".close");

menuIcon.addEventListener("click", function () {
  menu.classList.remove("hidden");
});

close.addEventListener("click", function () {
  menu.classList.add("hidden");
});

//product photos

const products = [
  'url("images/image-product-1.jpg")',
  'url("images/image-product-2.jpg")',
  'url("images/image-product-3.jpg")',
  'url("images/image-product-4.jpg")',
];
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#previous");

let currentIndex = 0;
let currentImage =
  document.querySelector(".product-preview").style.backgroundImage;

nextButton.addEventListener("click", function () {
  if (currentIndex !== products.length - 1) {
    currentIndex += 1;
  } else {
    currentIndex = 0;
  }
  document.querySelector(".product-preview").style.backgroundImage =
    products[currentIndex];
});

prevButton.addEventListener("click", function () {
  if (currentIndex !== 0) {
    currentIndex = currentIndex - 1;
  } else {
    currentIndex = products.length - 1;
  }
  document.querySelector(".product-preview").style.backgroundImage =
    products[currentIndex];
});

//quantity

let selectedQty = Number(document.querySelector(".selected-qty").innerText);
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");

minusButton.addEventListener("click", function () {
  if (selectedQty !== 0) {
    selectedQty = selectedQty - 1;
    document.querySelector(".selected-qty").innerText = selectedQty;
  }
});

plusButton.addEventListener("click", function () {
  selectedQty = selectedQty + 1;
  document.querySelector(".selected-qty").innerText = selectedQty;
});

//cart button

const cartButton = document.querySelector(".cart");
const cartContainer = document.querySelector(".cart-container");

cartButton.addEventListener("click", function () {
  cartContainer.classList.toggle("hidden");
});

//cart content

const addButton = document.querySelector(".add-container");
const finalPrice = Number(document.getElementById("final-price").innerText);

addButton.addEventListener("click", function () {
  let addedQty = Number(document.querySelector(".cart-count").innerText);
  let toAddQty = Number(document.querySelector(".selected-qty").innerText);
  let newQty = addedQty + toAddQty;

  if (toAddQty !== 0) {
    document.querySelector(".cart-count").innerText = `${newQty}`;
    document.querySelector(".cart-count").classList.remove("hidden");
    document.querySelector(".cart-content-empty").classList.add("hidden");
    document.querySelector(".cart-content-full").classList.remove("hidden");
    document.querySelector("#qty").innerText = `${newQty}`;
    document.querySelector("#total").innerText = `$${finalPrice * newQty}.00`;
    cartContainer.classList.remove("hidden");
  }

  document.querySelector(".selected-qty").innerText = 0;
  selectedQty = 0;
});

//delete && checkout
const deleteButton = document.getElementById("delete");
const checkoutButton = document.getElementById("checkout");

function emptyCart() {
  document.querySelector(".cart-content-empty").classList.remove("hidden");
  document.querySelector(".cart-content-full").classList.add("hidden");
  document.querySelector(".cart-count").classList.add("hidden");
  document.querySelector(".cart-count").innerText = "0";
  document.querySelector("#qty").innerText = "0";
}

deleteButton.addEventListener("click", emptyCart);
checkoutButton.addEventListener("click", emptyCart);

//desktop photos

const activePhoto = document.querySelector(".active-photo");
let selectedPhoto = document.querySelector(".selected");

// document
//   .querySelector(".photo:nth-of-type(1)")
//   .addEventListener("click", function () {
//     selectedPhoto.classList.remove("selected");
//     document.querySelector(".photo:nth-of-type(1)").classList.add("selected");
//     selectedPhoto = document.querySelector(".photo:nth-of-type(1)");
//     activePhoto.style.backgroundImage = products[0];
//   });

// document
//   .querySelector(".photo:nth-of-type(2)")
//   .addEventListener("click", function () {
//     selectedPhoto.classList.remove("selected");
//     document.querySelector(".photo:nth-of-type(2)").classList.add("selected");
//     selectedPhoto = document.querySelector(".photo:nth-of-type(2)");
//     activePhoto.style.backgroundImage = products[1];
//   });

// document
//   .querySelector(".photo:nth-of-type(3)")
//   .addEventListener("click", function () {
//     selectedPhoto.classList.remove("selected");
//     document.querySelector(".photo:nth-of-type(3)").classList.add("selected");
//     selectedPhoto = document.querySelector(".photo:nth-of-type(3)");
//     activePhoto.style.backgroundImage = products[2];
//   });

// document
//   .querySelector(".photo:nth-of-type(4)")
//   .addEventListener("click", function () {
//     selectedPhoto.classList.remove("selected");
//     document.querySelector(".photo:nth-of-type(4)").classList.add("selected");
//     selectedPhoto = document.querySelector(".photo:nth-of-type(4)");
//     activePhoto.style.backgroundImage = products[3];
//   });

const selectPhoto = (index) => {
  const photo = document.querySelector(`.photo:nth-of-type(${index})`);
  photo.addEventListener("click", () => {
    selectedPhoto.classList.remove("selected");
    document
      .querySelector(`.photo:nth-of-type(${index})`)
      .classList.add("selected");
    selectedPhoto = document.querySelector(`.photo:nth-of-type(${index})`);
    activePhoto.style.backgroundImage = products[index - 1];
  });
};

const numberOfPhotos = [1, 2, 3, 4];

numberOfPhotos.forEach((item) => {
  return selectPhoto(item);
});
