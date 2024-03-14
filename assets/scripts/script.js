const video = document.getElementById('video');
const buttonn = document.getElementById('linkButton');

if('pictureInPictureEnabled' in document){
    buttonn.classList.remove('hidden');
    buttonn.disabled = false;

    buttonn.addEventListener('click' , () => {
        if(document.pictureInPictureElement){
            document.exitPictureInPicture()
            .catch((err) => {
                console.log(err , 'err in exiting picture')
            })
        }else{
            video.requestPictureInPicture()
            .catch((err) => {
                console.log(err , 'error in requesting pic')
            });
        }
    });
}

video.addEventListener('enterpictureinpicture' , () => {
    buttonn.textContent = 'Exite picture in picture mode';

});

video.addEventListener('leavepictureinpicturemode' , () => {
    buttonn.textContent = 'Enter picture-in-Picture mode'
});