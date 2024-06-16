// document.addEventListener("DOMContentLoaded", function() {
//     // Функция для загрузки аватара
//     window.loadAvatar = function(event) {
//         const avatar = document.querySelector('.avatar');
//         const reader = new FileReader();

//         reader.onload = function() {
//             if (reader.readyState === 2) {
//                 console.log("Image loaded successfully, setting background image");
//                 avatar.style.backgroundImage = url(${reader.result});
//             } else {
//                 console.log("Image not loaded yet");
//             }
//         };

//         if (event.target.files && event.target.files[0]) {
//             console.log("File selected:", event.target.files[0]);
//             reader.readAsDataURL(event.target.files[0]);
//         } else {
//             console.log("No file selected or file reading failed");
//         }
//     };
// });
// function readURL(input)
// {
//     if(input.files && input.files[0]){
//         var reader= new FileReader();
//         reader.onload=function(e)
//         {
//             var fileurl=e.target.result;
//             $('.profile-pic').attr('src',filereurl);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }
// $(".file-upload").on('change',function(){
// readURL
// });
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('.profile-pic').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function() {
    $(".file-upload").on('change', function() {
        readURL(this);
    });

    $(".upload-button").on('click', function() {
        $(".file-upload").click();
    });
});