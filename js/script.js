function sendWhatsApp(category) {
    let phone = "9315266233"; 
    let message = `Hi, I would like to get the PDF for ${category}.`;
    let whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function showPopup() {
    document.getElementById('popup').classList.add('active');
}

function hidePopup() {
    document.getElementById('popup').classList.remove('active');
}

function sendTopic() {
    let topic = document.getElementById('topicInput').value;
    if (topic.trim() !== "") {
        let phone = "9315266233"; // Replace with your actual phone number
        let message = `Hi, I would like to get questions for the topic: ${topic}.`;
        let whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        hidePopup();
    } else {
        alert("Please enter a topic name");
    }
}
function openRazorpay() {
    var options = {
        "key": "rzp_live_rfgJgZcYqyHqA5", // Your Razorpay key ID
        "amount": 1100, // Amount in paise (₹11 = 1100 paise)
        "currency": "INR",
        "name": "PrepWise PDFs",
        "description": "Payment for PDF notes and MCQ sets",
        "image": "../img/logo-new.jpeg", // Your logo image
        "handler": function (response) {
            // Payment successful, handle success here
            alert("Payment successful! Payment ID: " + response.razorpay_payment_id);

            // Show WhatsApp redirect button
            document.getElementById('whatsappRedirect').style.display = 'block';
        },
        "modal": {
            "ondismiss": function() {
                // Payment canceled or failed, handle here
                alert("Payment was canceled or failed. Please try again.");
            }
        },
        "prefill": {
            "name": "Rohan Mishra", // Customer's name
            "email": "rohan@example.com", // Customer's email
            "contact": "9315266233" // Customer's contact number
        },
        "notes": {
            "purpose": "Payment for PDFs"
        },
        "theme": {
            "color": "#007bff" // Custom color for the payment form
        }
    };

    // Open Razorpay checkout
    var rzp = new Razorpay(options);
    rzp.open();
}


function redirectToWhatsApp() {
    let phone = "9315266233"; // Your WhatsApp number
    let message = "Hi, I have made a payment for the PDF notes.";
    let whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

