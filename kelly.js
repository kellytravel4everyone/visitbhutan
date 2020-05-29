function validateTextBox ()
{
    let box1 = document.getElementById("name");
    let box2 = document.getElementById("address");

    if (box1.value.length < 5||box2.value.length < 5) 
    {
        alert ( "Please at least fill five characters");
        box1.focus();
        box1.style.border = "Solid 3px red";
        box2.focus();
        box2.style.border = "Solid 3px red";
        return false;
    }
}