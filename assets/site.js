(function () {
  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", () => links.classList.toggle("open"));
  }

  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const standards = [...form.querySelectorAll('input[name="standard"]:checked')].map(i => i.value);
      const body = [
        "SRC Audit engagement" + (data.get("org") ? " — " + data.get("org") : ""),
        "",
        "Organisation: " + (data.get("org") || ""),
        "Sites: " + (data.get("sites") || ""),
        "Standards: " + (standards.join(", ") || "Not specified"),
        "Timeline: " + (data.get("timeline") || ""),
        "",
        data.get("message") || ""
      ].join("\n");
      window.open("https://wa.me/918287630318?text=" + encodeURIComponent(body), "_blank", "noopener");
      const ok = document.querySelector(".success");
      if (ok) ok.style.display = "block";
      form.reset();
    });
  }
})();
