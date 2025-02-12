document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.querySelector(".video");
    const fileId = "1LcbxPiSGiSDzxCabKj9Gssoa0R54-6CU"; // Your actual File ID
    const videoSrc = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    videoElement.src = videoSrc;
});