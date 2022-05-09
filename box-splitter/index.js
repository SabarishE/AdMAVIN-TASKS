const Parent = document.getElementById("parent");

Parent.onclick = function () {
  this.onclick = null;
  return Splitter(Parent);
};

function Splitter(immediateParent) {
  console.log("height or width of parent >>>", immediateParent.clientWidth);

  //   ------base case for recursion
  if (immediateParent.clientWidth == 0) {
    return immediateParent;
  } else {
    for (let i = 0; i <= 3; i++) {
      let childDiv = document.createElement("div");
      childDiv.setAttribute("class", "child");

      console.log(
        "height or width of child >>>",
        immediateParent.clientWidth / 2
      );
      childDiv.style.width = `${Math.trunc(immediateParent.clientWidth / 2)}px`;
      childDiv.style.height = `${Math.trunc(
        immediateParent.clientHeight / 2
      )}px`;
      childDiv.style.border = "0.005px solid black";

      immediateParent.appendChild(childDiv);
      childDiv.onclick = function () {
        this.onclick = null;

        // -----recursion call ------

        Splitter(childDiv);
      };
    }
  }
}
