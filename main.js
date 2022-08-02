//create button to open themodal project.
let btn = document.createElement("button");
btn.innerText = `Open Modal`;
let header = document.querySelector("h1");
header.append(btn);
btn.style.cssText =
  "padding:10px; font-size:20px; transition:0.2s linear; cursor:pointer; width:200px; margin-top:30px;border:2px solid #000; border-radius:10px;";

btn.onmouseenter = () => {
  btn.style.backgroundColor = "#000";
  btn.style.color = "#ffffff";
};
btn.onmouseleave = () => {
  btn.style.backgroundColor = "#ffffff";
  btn.style.color = "#000";
};
let container = document.querySelector(".container");
btn.addEventListener("click", (e) => {
  //create an overlay on the container.
  container.style.backgroundColor = "rgb(0,0,0,0.7)";
  //create a pop-up div contains the modal content.
  let div = document.createElement("div");
  div.innerText = `Modal content`;
  div.style.cssText =
    "display:flex; align-items:center; justify-content:center; position:absolute; top:0; left:0; z-index:4;color:#000; background-color:#ffffff; width:500px; height:200px; padding:10px; border-radius:5px;";
  header.append(div);
  //create button to close the pop-up.
  let closeBtn = document.createElement("button");
  closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  closeBtn.style.cssText =
    "font-weight:bold; font-size:30px; cursor:pointer; transition:0.2s linear; background:transparent; position:absolute; top:10px; right:10px; border:none; color:red; width:50px; height:50px";
  div.append(closeBtn);
  //add some styling to the button on hover.
  closeBtn.onmouseenter = () => {
    closeBtn.style.transform = "scale(1.5)";
    closeBtn.style.color = "rgba(244, 23, 23, 0.8)";
  };
  closeBtn.onmouseleave = () => {
    closeBtn.style.transform = "scale(1)";
    closeBtn.style.color = "red";
  };
  //add close event to the (close button).
  closeBtn.onclick = () => {
    div.remove();
    container.style.backgroundColor = "rgb(0,0,0,0)";
  };
});
