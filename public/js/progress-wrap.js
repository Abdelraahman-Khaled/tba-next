// Scroll to top progress button
(function() {
    'use strict';
    
    function initProgressWrap() {
        // Wait a bit to ensure DOM is fully loaded
        setTimeout(function() {
            const progressWrap = document.querySelector('.progress-wrap');
            const progressPath = document.querySelector('.progress-wrap path');
            
            if (!progressWrap || !progressPath) {
                console.log('Progress wrap elements not found');
                return;
            }
            
            console.log('Progress wrap initialized');
            
            const pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            
            const updateProgress = function() {
                const scroll = window.pageYOffset || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            };
            
            updateProgress();
            
            let ticking = false;
            window.addEventListener('scroll', function() {
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        updateProgress();
                        
                        // Show/hide button based on scroll position
                        if (window.pageYOffset > 150) {
                            progressWrap.classList.add('active-progress');
                        } else {
                            progressWrap.classList.remove('active-progress');
                        }
                        
                        ticking = false;
                    });
                    ticking = true;
                }
            });
            
            progressWrap.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Scroll to top clicked');
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }, 500); // Wait 500ms for DOM to be ready
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProgressWrap);
    } else {
        initProgressWrap();
    }
})();
