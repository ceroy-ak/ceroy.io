function calc() {
    var c = parseInt(document.getElementById("c").value)
    var a = parseInt(document.getElementById("a").value)
    if (((c - a) / c) * 100 < 75) {
        document.getElementById("result").innerHTML = "You Require: " + (4 * a - c) + " hours";
    } else {
        document.getElementById("result").innerHTML = "You can leave: " + ((c - 4 * a) / 3) + " hours";
    }

}