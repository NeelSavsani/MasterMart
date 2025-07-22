function toggleDropdown(event) {
    event.stopPropagation();
    document.getElementById('profileDropdown').classList.toggle('show');
}

function toggleSearch() {
    const bar = document.getElementById('searchBar');
    const toggleBtn = document.getElementById('searchToggleBtn');
    const icon = toggleBtn.querySelector('i');

    const isVisible = bar.style.display === 'flex';

    if (isVisible) {
        bar.style.display = 'none';
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-magnifying-glass');
    } else {
        bar.style.display = 'flex';
        icon.classList.remove('fa-magnifying-glass');
        icon.classList.add('fa-xmark');
    }
}


function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Close dropdown when clicked outside
document.addEventListener('click', function (e) {
    const profileDropdown = document.getElementById('profileDropdown');
    if (!e.target.closest('.profile-menu')) {
        profileDropdown.classList.remove('show');
    }
});

// Handle screen resize to reset search bar visibility
window.addEventListener('resize', () => {
    const bar = document.getElementById('searchBar');
    if (window.innerWidth > 768) {
        bar.removeAttribute('style'); // Resets to CSS layout
    } else {
        bar.style.display = 'none'; // Reset to hidden on mobile
    }
});
