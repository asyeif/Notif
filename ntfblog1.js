function startSlides(start, end, delay) {
        setTimeout(slideshow(start,start,end, delay), delay);
    }
    function slideshow(frame, start, end, delay) {
        return (function() {
        $(&#39;#slideshow&#39; + frame).fadeOut();
        if (frame == end) { frame = start; } else { frame += 1; }
        setTimeout(function(){$(&#39;#slideshow&#39; + frame ).fadeIn();}, 850);
        setTimeout(slideshow(frame, start, end, delay), delay + 850);
    })
    }
    // usage: startSlides(first frame, end frame, delay time);
    startSlides(1, 4, 5000);
