(function () {
  const toggle = document.querySelector(".menu-toggle");
  const panel = document.querySelector(".mobile-panel");
  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      const open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll(".faq-item button").forEach(function (button) {
    button.addEventListener("click", function () {
      const item = button.parentElement;
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(function (faq) {
        faq.classList.remove("open");
      });
      if (!isOpen) item.classList.add("open");
    });
  });

  document.querySelectorAll("form.js-form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = form.querySelector("[name='email']");
      if (email && !email.value.trim()) return;
      form.classList.add("sent");
    });
  });

  const certForm = document.querySelector("#certificate-form");
  if (certForm) {
    certForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const value = (certForm.querySelector("[name='certificate']") || {}).value || "";
      const result = document.querySelector("#certificate-result");
      if (!result) return;
      result.classList.add("show", "warn");
      result.classList.remove("ok");
      result.innerHTML =
        "<strong>Verification request received.</strong><p>Pakistan HMTC issues certificates after successful course completion. Please call <a href='tel:+923128616980'>03128616980</a> or email <a href='mailto:pakistanttc1@gmail.com'>pakistanttc1@gmail.com</a> with certificate number <em>" +
        value.replace(/[<>]/g, "") +
        "</em> so our team can confirm it.</p>";
    });
  }

  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox img");
  document.querySelectorAll("[data-lightbox]").forEach(function (item) {
    item.addEventListener("click", function () {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = item.getAttribute("data-lightbox");
      lightboxImage.alt = item.getAttribute("alt") || "Training photo";
      lightbox.classList.add("open");
    });
  });
  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox || event.target.closest(".lightbox-close")) {
        lightbox.classList.remove("open");
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox) lightbox.classList.remove("open");
  });
})();
