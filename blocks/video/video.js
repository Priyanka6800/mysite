document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.querySelector(".video"); 
    const fileId = "1LcbxPiSGiSDzxCabKj9Gssoa0R54-6CU"; 
    const videoSrc = `https://drive.google.com/file/d/${fileId}/preview`;

   
    const iframe = document.createElement("iframe");
    iframe.src = videoSrc;
    iframe.width = "600"; 
    iframe.height = "400"; 
    iframe.allow = "autoplay"; 
    iframe.frameBorder = "0"; 

    videoContainer.appendChild(iframe);
});