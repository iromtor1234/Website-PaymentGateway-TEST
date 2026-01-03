async function gaspolBayar() {
    const status = document.getElementById('status');
    const apiKey = "120|YtiYSWe9fvevGpiHN17jE9xU3eirbAX7n8w13Evv5ba579c6"; // API KEY LU 💀
    
    const payload = {
        nominal: document.getElementById('nominal').value,
        nama_pembayar: document.getElementById('nama').value,
        metode: document.getElementById('metode').value,
        external_id: "BRIZ-" + Math.floor(Date.now() / 1000)
    };

    if (!payload.nama_pembayar || !payload.nominal) {
        alert("Isi datanya dulu, bangsat! 😭");
        return;
    }

    status.innerText = "NEMBAK API... 🚀";

    try {
        const response = await fetch('https://bayar.taskora.id/api/orders?sandbox=true', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const res = await response.json();

        if (res.status === 'success' || res.data) {
            status.innerText = "W! REDIRECTING...";
            window.location.href = res.data.checkout_url;
        } else {
            alert("Gagal: " + (res.message || "Cek console!"));
            status.innerText = "GAGAL!";
        }
    } catch (err) {
        status.innerText = "CORS ERROR! 😭";
        alert("Lu wajib pake hosting atau server lokal biar jalan, jing!");
    }
    }
