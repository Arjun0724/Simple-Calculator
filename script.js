function add()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a+b;
}

function sub()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a-b;
}

function multi()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a*b;
}

function divi()
{
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent = a/b;
}
