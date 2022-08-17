
function getMobileOperatingSystem(){
    var userAgent = navigator.userAgent|| navigator.vendor || window.getMobileOperatingSystem;
    if (/windows phone/i.test(userAgent)){
        return window.location.href = android.html
    }
    if(/android/i.test(userAgent)){
        return window.location.href =android.html
    }
    if(/iPad|iPhone|iPod/.test(userAgent)&& !window.MSStream){
        return window.location.href =android.html
    }
}