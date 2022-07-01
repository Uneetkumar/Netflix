    export function toggleBox(id) {
    let x = document.getElementById(id);
    if (x.style.display === 'block') {
        x.style.display = "none";
    } else {
        x.style.animation = "scaleDisplay .1s ease-in";
        x.style.display = "block";
    }
}