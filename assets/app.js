(function () {
  const supportedLanguages = ["en", "sr", "de", "fr", "es", "ar", "ru", "zh"];
  const languagePreferenceKey = "gatevio-language";

  const languageSelect = document.querySelector("[data-language-select]");
  if (languageSelect) {
    languageSelect.addEventListener("change", () => {
      const value = languageSelect.value;
      if (value) {
        const match = value.match(/\/(en|sr|de|fr|es|ar|ru|zh)\//);
        if (match && supportedLanguages.includes(match[1])) {
          try {
            window.localStorage.setItem(languagePreferenceKey, match[1]);
          } catch (error) {
            // Language persistence is optional; navigation should still work.
          }
        }
        window.location.href = value;
      }
    });
  }

  const menuButton = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");

  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("open", !expanded);
      document.body.classList.toggle("menu-open", !expanded);
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        menuButton.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("open");
        document.body.classList.remove("menu-open");
      }
    });
  }

  const form = document.querySelector("[data-inquiry-form]");
  const status = document.querySelector("[data-form-status]");

  if (!form || !status) {
    return;
  }

  const labels = {
    missing: form.getAttribute("data-missing") || "Please complete all required fields and confirm consent.",
    ready: form.getAttribute("data-ready") || "Your email app is opening with the inquiry prepared.",
    subject: form.getAttribute("data-subject") || "GateVio inquiry"
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = labels.missing;
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const lines = Array.from(data.entries())
      .filter(([key]) => key !== "consent")
      .map(([key, value]) => `${key}: ${value}`);

    const subject = `${labels.subject} - ${data.get("solution") || "Project"}`;
    const body = lines.join("\n");
    const mailto = `mailto:sales@gatevio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.textContent = labels.ready;
    window.location.href = mailto;
  });
}());
