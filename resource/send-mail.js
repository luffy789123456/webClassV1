document.addEventListener("DOMContentLoaded", () => {
  // Ganti semua ikon Feather setelah halaman dimuat
  if (typeof feather !== "undefined") {
    feather.replace();
  }

  // ✅ Modul ModernAlert: menampilkan notifikasi modern dengan ikon dan progress bar
  const ModernAlert = (() => {
    const icons = {
      success: "check-circle",
      error: "alert-circle",
      warning: "alert-triangle",
      info: "info",
    };

    let alertCounter = 0; // Untuk membuat ID unik setiap notifikasi

    // 🔧 Buat container alert jika belum ada
    function initContainer() {
      let container = document.getElementById("alertContainer");
      if (!container) {
        container = document.createElement("div");
        container.className = "modern-alert-container";
        container.id = "alertContainer";
        document.body.appendChild(container);
      }
      return container;
    }

    // 🚀 Tampilkan alert ke layar
    function show({
      type = "info",
      title = "Alert",
      message = "",
      duration = 5000,
    }) {
      const container = initContainer();
      const alertId = `alert-${alertCounter++}`;

      // Buat elemen alert baru
      const alert = document.createElement("div");
      alert.className = `modern-alert modern-alert-${type}`;
      alert.id = alertId;

      // Isi konten alert dengan ikon, judul, pesan, tombol tutup, dan progress bar
      alert.innerHTML = `
        <div class="modern-alert-icon">
            <i data-feather="${icons[type] || "info"}"></i>
        </div>
        <div class="modern-alert-content">
            <div class="modern-alert-title">${title}</div>
            <div class="modern-alert-message">${message}</div>
        </div>
        <button class="modern-alert-close" onclick="ModernAlert.close('${alertId}')">
            <i data-feather="x"></i>
        </button>
        <div class="modern-alert-progress"></div>
      `;

      container.appendChild(alert);

      // Render ulang ikon feather
      if (typeof feather !== "undefined") {
        feather.replace();
      }

      // Tampilkan alert dan animasikan progress bar
      setTimeout(() => {
        alert.classList.add("show");
        const progress = alert.querySelector(".modern-alert-progress");
        progress.style.transition = `transform ${duration / 1000}s linear`;
        progress.style.transform = "scaleX(1)";
        setTimeout(() => close(alertId), duration); // Auto close
      }, 10);
    }

    // ❌ Tutup alert
    function close(alertId) {
      const alert = document.getElementById(alertId);
      if (alert) {
        alert.classList.remove("show");
        setTimeout(() => alert.remove(), 500); // Hapus elemen dari DOM
      }
    }

    // Ekspor fungsi show dan close
    return { show, close };
  })();

  // 📩 Handle submit form email
  document
    .getElementById("subscribe-form")
    .addEventListener("submit", function (e) {
      e.preventDefault(); // Mencegah reload form

      const email = document.getElementById("email").value;

      // Kirim data email ke Formspree
      fetch("https://formspree.io/f/xanereap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((response) => {
          if (response.ok) {
            // ✅ Tampilkan notifikasi sukses
            ModernAlert.show({
              type: "success",
              title: "Berhasil",
              message: "✅ Email berhasil dikirim!",
              duration: 4000,
            });
            document.getElementById("subscribe-form").reset(); // Reset form
          } else {
            // ❌ Tampilkan notifikasi gagal
            ModernAlert.show({
              type: "error",
              title: "Gagal",
              message: "❌ Terjadi kesalahan saat mengirim email.",
              duration: 4000,
            });
          }
        })
        .catch((error) => {
          // ⚠️ Tampilkan notifikasi jika error jaringan/dll
          ModernAlert.show({
            type: "warning",
            title: "Error",
            message: "⚠️ " + error.message,
            duration: 4000,
          });
        });
    });
});
