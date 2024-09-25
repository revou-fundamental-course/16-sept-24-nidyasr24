function validateForm() {
    let name = document.getElementById('name').value;
    if (name === "") {
        alert("Name must be filled in!");
        return false;
    }

    let dob = document.getElementById('dob').value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value || 'Belum dipilih';
    let message = document.getElementById('message').value;
    document.getElementById('result-name').textContent = name;
    document.getElementById('result-dob').textContent = dob;
    document.getElementById('result-gender').textContent = gender;
    document.getElementById('result-message').textContent = message;
    document.getElementById('user-name').textContent = name;
    return false;
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides(index) {
    if (index >= totalSlides) {
        slideIndex = 0; 
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(direction) {
    showSlides(slideIndex + direction);
}

showSlides(slideIndex);
setInterval(() => changeSlide(1), 5000);
