/* Theme */
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
};

/* Clock */
setInterval(showTime, 1000);

function showTime() {
    let now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}

showTime();

/* FAQ */
var q = document.getElementsByClassName("question");
var i;

for (i = 0; i < q.length; i++) {
    q[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/* Form */
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Formularz został pomyślnie wysłany!');
});