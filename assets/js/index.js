
function more() {
    document.getElementById('projectsummary').value = "I Want to know more";
    document.getElementById('projectsummary').readOnly = true;
}
function moreReset() {
    document.getElementById('projectsummary').readOnly = false;
    document.getElementById('fullname').value = "";
    document.getElementById('emailaddress').value = "";
    document.getElementById('projectsummary').value = "";
}

/* Form Dump - Modal Hiding - No page reload - Credits in README.md */

function onFormSubmit() {
    const data = new FormData(form);
    const action = "https://script.google.com/macros/s/AKfycbwfKpP_gmWphwrvGc6R0Q7Rib9ZjQcOjReAITy0YKAHmsoxOMoKeF9b6AcrHVp31QXScQ/exec";
    fetch(action, {
        method: "POST",
        body: data,
                })
                .then(() => {
                    document.getElementById('projectsummary').readOnly = false;
                    document.getElementById("form-output").style.visibility = "visible";
                    $("#contactModal").modal('hide');
                    });
              
         
    return false;
}

/* WhatsApp Share Desktop or larger device Credits in README.md */
function onShareWhatsApp(){
    if (window.innerWidth >= 992){
    window.open(`https://web.whatsapp.com:/send?text=https://antoniobruchidev.github.io/my-personal-resume`);
    } else {
        window.open(`whatsapp://send?text=https://antoniobruchidev.github.io/my-personal-website`);
        }
}