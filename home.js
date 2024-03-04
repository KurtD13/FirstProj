
let myname;
document.getElementById("mysubmit").onclick = function(){
    myname = document.getElementById("text").value;
    document.getElementById("result").textContent = myname;
}

