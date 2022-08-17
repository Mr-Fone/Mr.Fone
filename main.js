const a_tag = document.querySelector("#sms")

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;


  if (/android/i.test(userAgent)) {
    a_tag.href = "sms://#?body=#"

  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    a_tag.href = "sms://#;?&body=#"
  }

}

getMobileOperatingSystem();
console.log(a_tag.getAttribute("href"));