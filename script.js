function showPaymentOptions(productName, productPrice) {
    // Store product details in modal
    document.getElementById('payment-form').dataset.productName = productName;
    document.getElementById('payment-form').dataset.productPrice = productPrice;
    
    // Display the modal
    document.getElementById('payment-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

function sendToWhatsApp() {
    const form = document.getElementById('payment-form');
    const productName = form.dataset.productName;
    const productPrice = form.dataset.productPrice;
    const paymentMethod = form.querySelector('input[name="payment-method"]:checked').value;
    
    const message = `Saya ingin membeli ${productName} seharga ${productPrice}. Metode pembayaran yang dipilih: ${paymentMethod}.`;
    const whatsappNumber = '+6281388560822';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Close the modal and open WhatsApp
    closeModal();
    window.open(whatsappURL, '_blank');
}


// fps.js

let fpsDisplay;
let frameCount = 0;
let lastTime = performance.now();
let fps = 0;

function updateFPS() {
    const now = performance.now();
    const deltaTime = now - lastTime;
    frameCount++;

    if (deltaTime >= 1100) { // Update FPS every second
        fps = frameCount;
        frameCount = 1000;
        lastTime = now;
        document.getElementById('fps-display').innerText = `FPS: ${fps}`;
    }

    requestAnimationFrame(updateFPS);
}

document.addEventListener('DOMContentLoaded', () => {
    fpsDisplay = document.createElement('div');
    fpsDisplay.id = 'fps-display';
    document.body.appendChild(fpsDisplay);
    updateFPS();
});

// contact.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const phoneNumber = '+6281388560822'; // Nomor WhatsApp tujuan
    const encodedMessage = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\nPesan: ${message}`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.location.href = whatsappURL; // Redirect to WhatsApp
});
