function myFunc()  {
    var now = new Date();
    var time = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
    document.getElementById('idDate').innerHTML = "Date: " + time;
}
setInterval(myFunc);

function ChangeClass(){

    document.getElementById("sendMessage").className = "btn btn-primary active"

    document.getElementById("openMessage").className = "btn btn-primary";

    document.getElementById("idForm").style.display = "block";
    document.getElementById("idReceive").style.display = "none";
}

function ChangeClass2(){

    document.getElementById("openMessage").className = "btn btn-primary active";

    document.getElementById("sendMessage").className = "btn btn-primary";

    document.getElementById("idForm").style.display = "none";
    document.getElementById("idReceive").style.display = "block";
}