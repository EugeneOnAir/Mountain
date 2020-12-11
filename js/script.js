let progressLine = document.querySelector('.progress-line');
window.addEventListener('scroll', progressBar);
       
function progressBar(e) {
   var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
   var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
   var statusProgressLine = windowScroll / windowHeight * 100;
   progressLine.style.height = statusProgressLine + '%';
}
