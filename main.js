const btn = document.getElementById("fetchBtn"); 
const showFact = document.getElementById("fact");

const originalBtnText = btn.textContent;

btn.addEventListener('click', fetchFact);

function fetchFact() {
    btn.textContent = "Buscando consejito...";
    btn.disabled = true; 

    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => {
        showFact.textContent = data.text;
        
        btn.textContent = originalBtnText;
        btn.disabled = false;
    })
    .catch(error => {
        showFact.textContent = "Lo sentimos, ha ocurrido un error.";
        console.error('Error:', error);
        
        btn.textContent = originalBtnText;
        btn.disabled = false;
    })
}