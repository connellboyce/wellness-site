var accordion = document.getElementsByClassName("accordion");
var i;

/**
 * 
 * @param {*} thisDiv divider to hide
 */
function toggle(thisDiv){
    var panel = document.getElementById(thisDiv);
    if(panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}