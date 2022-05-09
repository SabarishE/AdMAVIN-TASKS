const container = document.getElementById("container");

const initialAvatarsCount = 30;

function LoadAvatars() {
  let i = 0;

  //   ----while loop for creating and appending new Avatars to fill the page----
  while (i < initialAvatarsCount) {
    let image = document.createElement("img");
    image.setAttribute("class", "Avatar");
    image.setAttribute("src", "https://i.pravatar.cc/150");
    container.appendChild(image);
    i++;
  }
}

LoadAvatars();

// ----listen to scroll event and load more Avatars to fill the page----4

// comparing the scrollY,innerHeight and scrollHeight and call LoadAvatars function accordingly----

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    LoadAvatars();
  }
});
