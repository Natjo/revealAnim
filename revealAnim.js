/**
 * @param {HTMLCollection/NodeList} items list of items to be animated
 * @param {function} params.onreveal fire when item in on viewport
 * @param {number} [params.offset=1] between 0 and 1
 * @param {number} params.delay delay in ms between items showing
 * @param {number} params.duration duration of animation
 * @param {string} params.animation name of the keyframe animation
 */

 const revealAnim = (items, params) => {
    const offset = params.offset || 0;
    const config = {
        threshold: offset,
    };
    const animation = params.animation || 'frombottom';
    const duration = params.duration || 300;
    const delay = params.delay || 0;
    let inc = 0;

    items.forEach(item => {
        item.style.animation = `${animation} ${duration}ms ease both`;
        item.style.animationPlayState = 'paused';
    });
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > offset) {
                entry.target.style.animationDelay = `${inc * delay / 100}s`;
                entry.target.style.animationPlayState = 'running';
                inc++;
                setTimeout(() => inc--, duration);
                if(typeof onreveal === 'function') onreveal(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, config);
    items.forEach(item => observer.observe(item));
};

export default revealAnim;