/* mainscript.js */
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".transition-link");
    const homeSection = document.getElementById('home');
    const homePic = document.getElementById('homepic');

    if (homeSection && homePic) {
        homeSection.style.backgroundImage = `url(${homePic.src})`;
        homePic.remove(); // Remove the img element after setting the background
    }


    // links.forEach(link => {
    //     link.addEventListener("click", (e) => {
    //         e.preventDefault();

    //         document.body.classList.add("fade-out");

    //         setTimeout(() => {
    //             window.location.href = link.href;
    //         }, 500);
    //     });
    // });

    // Function to handle background image removal on resize
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            homeSection.style.backgroundImage = 'none';
        } else if (homePic) {
            homeSection.style.backgroundImage = `url(${homePic.src})`;
        }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
});
