const navItem = document.getElementById("navItem");
const menuIcon = document.getElementById("menuIcon");
const openIcon = document.getElementById("openIcon");
menuIcon.addEventListener("click", () => {
    navItem.classList.toggle("show");
})
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
    alert("Login Sucessful");
})

