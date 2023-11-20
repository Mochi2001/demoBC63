function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");

    // Đối với phần tử cần ẩn hoặc hiển thị
    const specialBox = document.getElementById("special-box");
    specialBox.classList.toggle("hidden");
}
