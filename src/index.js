function generateQR() {
    var url = document.getElementById("urlInput").value;
    var qrcodeDiv = document.getElementById('QR_code');
    
    // Clear previous QR
    qrcodeDiv.innerHTML = "";

    // Generate new QR code
    var QR_code = new QRCode(qrcodeDiv, {
        text: url,
        width: 256,
        height: 256,
    });

    console.log(QR_code);
}
