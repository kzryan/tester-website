const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Save the user's preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load the saved theme from local storage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.add('light-mode');
}