document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
    const indicators = document.querySelectorAll('.indicator');
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Arrange slides next to each other
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });
    
    // Function to move to a specific slide
    const moveToSlide = (currentIndex, targetIndex) => {
        // Calculate how far to slide
        const targetPosition = slides[targetIndex].style.left;
        
        // Move to the target slide
        track.style.transform = 'translateX(-' + targetPosition + ')';
        
        // Update active indicator
        document.querySelector('.indicator.active').classList.remove('active');
        indicators[targetIndex].classList.add('active');
    };
    
    // Handle next button click
    nextButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.carousel-slide:not([style*="translateX"])') || slides[0];
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        const nextIndex = (currentIndex + 1) % slides.length;
        
        moveToSlide(currentIndex, nextIndex);
    });
    
    // Handle previous button click
    prevButton.addEventListener('click', () => {
        const currentSlide = track.querySelector('.carousel-slide:not([style*="translateX"])') || slides[0];
        const currentIndex = slides.findIndex(slide => slide === currentSlide);
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        
        moveToSlide(currentIndex, prevIndex);
    });
    
    // Handle indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            const currentSlide = track.querySelector('.carousel-slide:not([style*="translateX"])') || slides[0];
            const currentIndex = slides.findIndex(slide => slide === currentSlide);
            
            if (currentIndex !== index) {
                moveToSlide(currentIndex, index);
            }
        });
    });
    
    // Auto-play functionality
    let autoplayInterval;
    
    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            const currentSlide = track.querySelector('.carousel-slide:not([style*="translateX"])') || slides[0];
            const currentIndex = slides.findIndex(slide => slide === currentSlide);
            const nextIndex = (currentIndex + 1) % slides.length;
            
            moveToSlide(currentIndex, nextIndex);
        }, 5000); // Change slide every 5 seconds
    };
    
    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };
    
    // Start autoplay
    startAutoplay();
    
    // Pause autoplay on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            stopAutoplay();
            nextButton.click();
            setTimeout(startAutoplay, 1000);
        } else if (e.key === 'ArrowLeft') {
            stopAutoplay();
            prevButton.click();
            setTimeout(startAutoplay, 1000);
        }
    });
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}

// Show 'home' section by default when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showSection('home');
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}


function temperatureConverter() {
    let celsius;
    do {
        celsius = prompt("Enter temperature in Celsius:");
    } while (isNaN(celsius) || celsius.trim() === "");

    let fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    alert(`${celsius}°C is ${fahrenheit.toFixed(2)}°F`);
}

function longerWord() {
    let word1 = prompt("Enter first word:").trim();
    let word2 = prompt("Enter second word:").trim();
    if (word1 && word2) {
        let longer = word1.length > word2.length ? word1 : word2;
        alert(`The longer word is: ${longer}`);
    } else {
        alert("Invalid input, please enter two words.");
    }
}

function knowMyBirthstone() {
    let month = prompt("Good Day! Please enter your birth month: ").trim().toLowerCase();
    let birthstone;

    switch (month) {
        case "january": birthstone = "Garnet"; break;
        case "february": birthstone = "Amethyst"; break;
        case "march": birthstone = "Aquamarine"; break;
        case "april": birthstone = "Diamond"; break;
        case "may": birthstone = "Emerald"; break;
        case "june": birthstone = "Alexandrite & Pearl"; break;
        case "july": birthstone = "Ruby"; break;
        case "august": birthstone = "Peridot"; break;
        case "september": birthstone = "Sapphire"; break;
        case "october": birthstone = "Opal & Tourmaline"; break;
        case "november": birthstone = "Topaz & Citrine"; break;
        case "december": birthstone = "Turquoise, Tanzanite & Zircon"; break;
        default: 
            alert("Invalid Input, Please try again.");
            return;
    }
    alert(`Your birthstone is: ${birthstone}`);
}

function basicMathOperations() {
    let b, c, d, ans;

    do {
        b = prompt("Enter first number:");
    } while (isNaN(b) || b.trim() === "");
    
    do {
        c = prompt("Enter second number:");
    } while (isNaN(c) || c.trim() === "");

    b = parseFloat(b);
    c = parseFloat(c);

    do {
        d = prompt("Enter chosen operation: \nA. Addition\nS. Subtraction\nM. Multiplication\nD. Division").trim().toLowerCase();
    } while (!["a", "s", "m", "d"].includes(d));

    switch (d) {
        case 'a': ans = b + c; break;
        case 's': ans = b - c; break;
        case 'm': ans = b * c; break;
        case 'd':
            ans = c === 0 ? "Undefined (Cannot divide by zero)" : (b / c).toFixed(2);
            break;
        default: ans = "Invalid operation.";
    }
    
    alert(`First number: ${b}\nSecond number: ${c}\nResult: ${ans}`);
}

function computeAcceleration() {
    let force, mass;
    do {
        force = prompt("Enter force in Newtons (N):");
    } while (isNaN(force) || force.trim() === "");
    
    do {
        mass = prompt("Enter mass in kg:");
    } while (isNaN(mass) || mass.trim() === "" || parseFloat(mass) === 0);

    force = parseFloat(force);
    mass = parseFloat(mass);
    let acceleration = force / mass;

    alert(`Acceleration = ${acceleration.toFixed(2)} m/s²`);
}
window.onload = function() {
    window.scrollTo(0, 0); // Scrolls to the top when page loads
};

document.addEventListener("DOMContentLoaded", function () {
    showSection("home"); // Show the home section by default
});

// Function to show only the selected section
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.style.display = "none"; // Hide all sections
    });

    document.getElementById(sectionId).style.display = "block"; // Show selected section
}

// Event listeners for navigation buttons
document.getElementById("home-btn").addEventListener("click", function () {
    showSection("home");
});

document.getElementById("portfolio-btn").addEventListener("click", function () {
    showSection("portfolio");
});

document.getElementById("favorites-btn").addEventListener("click", function () {
    showSection("favorites");
});


function toggleLike(element) {
    const img = element.querySelector('img');
    
    // Check if already liked
    if (img.src.includes('heart.png')) {
        img.src = 'C:/Users/hp/OneDrive/Desktop/Project/Image/heart1.png';
        element.classList.add('liked');
    } else {
        img.src = 'images/heart.png';
        element.classList.remove('liked');
    }
    
    // Optional: add animation
    img.classList.add('pulse');
    setTimeout(() => {
        img.classList.remove('pulse');
    }, 300);
}

// Add comment functionality
function addComment(button) {
    const commentBox = button.closest('.comment-box');
    const input = commentBox.querySelector('.comment-input');
    const commentsList = button.closest('.comments-section').querySelector('.comments-list');
    
    const commentText = input.value.trim();
    
    if (commentText) {
        // Create new comment element
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        
        // Add delete button if desired
        // const deleteBtn = document.createElement('span');
        // deleteBtn.textContent = '×';
        // deleteBtn.className = 'delete-comment';
        // deleteBtn.onclick = function() { this.parentNode.remove(); };
        // newComment.appendChild(deleteBtn);
        
        // Add to comments list
        commentsList.appendChild(newComment);
        
        // Clear input
        input.value = '';
    }
}



        // Function to add comments
        function addComment(button) {
            let commentInput = button.previousElementSibling;
            let commentText = commentInput.value.trim();
            
            if (commentText !== "") {
                let commentList = button.parentElement.parentElement.querySelector(".comments-list");
                let newComment = document.createElement("li");
                newComment.textContent = commentText;
                commentList.appendChild(newComment); // Add the comment to the list
                commentInput.value = ""; // Clear the input
            }
        }
