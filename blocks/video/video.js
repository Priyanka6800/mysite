function embedGoogleDriveVideo(link) {
    const videoDiv = document.querySelector('.video');

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', link);
    iframe.setAttribute('width', '600');
    iframe.setAttribute('height', '400');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('frameborder', '0');

    videoDiv.innerHTML = ''; 
    videoDiv.appendChild(iframe);
}

const driveLink = 'https://drive.google.com/file/d/1LcbxPiSGiSDzxCabKj9Gssoa0R54-6CU/preview';
embedGoogleDriveVideo(driveLink);