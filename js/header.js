const searchToggleBtn = document.getElementById("searchToggleBtn");
const floatingSearch = document.getElementById("floatingSearch");

searchToggleBtn.addEventListener("click", () => {
    floatingSearch.classList.toggle("show");

    const icon = searchToggleBtn.querySelector("i");

    if (floatingSearch.classList.contains("show")) {
        icon.classList.remove("fa-magnifying-glass");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-magnifying-glass");
    }
});

function toggleDropdown(event) {
    event.stopPropagation();
    document.getElementById('profileDropdown').classList.toggle('show');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Close dropdown if clicking outside
document.addEventListener("click", function (e) {
    const profileDropdown = document.getElementById("profileDropdown");
    if (!e.target.closest(".profile-menu")) {
        profileDropdown.classList.remove("show");
    }
});
