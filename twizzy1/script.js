document.addEventListener("DOMContentLoaded", function () {
    // Counter functionality
    let counterValue = 0;
    const counterElement = document.getElementById("counter");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");

    incrementButton.addEventListener("click", function () {
        counterValue++;
        updateCounter();
    });

    decrementButton.addEventListener("click", function () {
        counterValue--;
        updateCounter();
    });

    function updateCounter() {
        counterElement.textContent = counterValue;
    }

    // Show the "Will you be my Valentine?" section initially
    const valentineSection = document.querySelector(".valentine-question");
    valentineSection.style.display = "block";

    const yesButton = document.getElementById("yesBtn");
    const noButton = document.getElementById("noBtn");
    const yesImage = document.getElementById("yesImage");
    const noImage = document.getElementById("noImage");

    const loveButton = document.getElementById("sendLove");

    loveButton.addEventListener("click", function () {
        // Handle love effect and display "I love you" message
        showLoveEffect();

        // Hide love button and show Valentine's question
        loveButton.style.display = "none";
        valentineSection.style.display = "block";
    });

    function showLoveEffect() {
        // You can customize this function for a love effect
        alert("Love sent! 💖 ");

        // Display "I love you" message with the current counter value
        alert("I love you " + counterValue);
    }

    yesButton.addEventListener("click", function () {
        // Handle celebration theme for "Yes"
        alert("Yeeee!");

        // Display the image after clicking "Yes"
        yesImage.style.display = "block";

        // Show love confetti
        showLoveConfetti();

        // You can add more celebration effects or redirect to another page

        // Store the answer locally if needed
        storeAnswer("yes");
    });

    noButton.addEventListener("click", function () {
        // Display message for "No"
        alert("Go back and press 'Yes' goobe");

        // Display the different image after clicking "No"
        noImage.style.display = "block";

        // Store the answer locally if needed
        storeAnswer("no");
    });

    // You can use local storage to store the answers
    // For example, store 'yes' or 'no' based on the user's response
    function storeAnswer(answer) {
        localStorage.setItem("valentineAnswer", answer);
    }

    function showLoveConfetti() {
        for (let i = 0; i < 100; i++) {
            createConfetti();
        }
    }

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        document.body.appendChild(confetti);

        // Remove confetti after it falls
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
});
