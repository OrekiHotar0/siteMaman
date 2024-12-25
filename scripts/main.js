// This file contains JavaScript code for interactivity and animations.
// It handles smooth transitions, video playback, and any dynamic behavior on the page.

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.video-container video');
    const offers = document.querySelectorAll('.offers li a');

    // Smooth scroll to offers section
    offers.forEach(offer => {
        offer.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector('#offers');
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Play video on hover
    const videoContainer = document.querySelector('.video-container');
    videoContainer.addEventListener('mouseenter', () => {
        video.play();
    });

    videoContainer.addEventListener('mouseleave', () => {
        video.pause();
    });

    // Add animations to offers
    const offerItems = document.querySelectorAll('.offers li');
    offerItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
});