function embedGoogleDriveVideo(link) {
    const embedLink = link;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', embedLink);
    const videoDiv = document.querySelector('.video');
    videoDiv.innerHTML = '';
    videoDiv.appendChild(iframe);
}
const driveLink = 'https://drive.google.com/file/d/1LcbxPiSGiSDzxCabKj9Gssoa0R54-6CU/preview';
embedGoogleDriveVideo(driveLink);