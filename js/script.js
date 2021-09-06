function myFunc()  {
    var now = new Date();
    var time = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
    document.getElementById('idDate').innerHTML = "Date: " + time;
}
setInterval(myFunc);