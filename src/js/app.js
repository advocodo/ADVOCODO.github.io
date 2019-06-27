/* particlesjsConfig load */
// async function getJSONFile() {
//     let res = await fetch('/assets/js/particlesjs-config.json');
//     let particlesjsConfig = await res.json();
//     return particlesjsConfig;
// }

/* sweetScroll load */
document.addEventListener('DOMContentLoaded', function () {
    // new SweetScroll({ /* some options */});

    // getJSONFile().then(particlesjsConfig => particlesJS('particles-js', particlesjsConfig))

    particlesJS.load('particles-js', '/assets/js/particlesjs-config.json', function() {
        // console.log('callback - particles.js config loaded');
    });
}, false);
