function changeColor() {
  const letters = "0123456789ABCDEF";
  let color = " # ";


  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  document.getElementById("colorBox").style.backgroundColor = color;
  document.getElementById("colorCode").textContent = color;
}
