const searchToggleBtn = document.getElementById("searchToggleBtn");
const floatingSearch = document.getElementById("floatingSearch");
const profileDropdown = document.getElementById("profileDropdown");

searchToggleBtn.addEventListener("click", () => {
    // Close profile dropdown if open
    profileDropdown.classList.remove("show");

    // Toggle search visibility
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

    // Close search if open
    if (floatingSearch.classList.contains("show")) {
        floatingSearch.classList.remove("show");
        const icon = searchToggleBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-magnifying-glass");
    }

    // Toggle dropdown
    profileDropdown.classList.toggle('show');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function gotoHome() {
    window.location.href = "index.html";
}

// ✅ Close search or dropdown when clicking outside
document.addEventListener("click", function (e) {
    const isInsideDropdown = e.target.closest(".profile-menu");
    const isInsideSearch = e.target.closest("#floatingSearch");
    const isSearchBtn = e.target.closest("#searchToggleBtn");

    // Close dropdown if clicked outside
    if (!isInsideDropdown) {
        profileDropdown.classList.remove("show");
    }

    // Close search bar if clicked outside
    if (!isInsideSearch && !isSearchBtn) {
        if (floatingSearch.classList.contains("show")) {
            floatingSearch.classList.remove("show");
            const icon = searchToggleBtn.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-magnifying-glass");
        }
    }
});
