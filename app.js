/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
document.addEventListener("DOMContentLoaded", function() {
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js config loaded');
    });
}); 