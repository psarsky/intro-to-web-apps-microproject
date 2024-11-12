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
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

/* Form */
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Formularz został pomyślnie wysłany!');
});