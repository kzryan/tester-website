document.addEventListener('DOMContentLoaded', function() {

    function setActiveWithStorage() {
        const currentPage = window.location.pathname.split('/').pop();
        localStorage.setItem('activePage', currentPage);

        const navLinks = document.querySelectorAll('.nav-link');
        const storedPage = localStorage.getItem('activePage');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === storedPage) {
                link.classList.add('active');
            }
        });
    }

    setActiveWithStorage();

    // Add click handlers for navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(l => 
                l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');
        });
    });
});
