$(function () {


    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            facingMode: ["user", "environment"]
        }
    }).then(mediaStream => {
        let vidEl = $('video');

        vidEl[0].srcObject = mediaStream;

    });//.catch( error => {})
});