/* GIMNET SAFE OPTIMIZER */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------- FAST THEME SWITCH ---------- */

  const themeButtons = document.querySelectorAll("[data-theme]");

  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      requestAnimationFrame(() => {
        document.body.setAttribute("data-theme", btn.dataset.theme);
      });

    });
  });

  /* ---------- SETTINGS MENU SMOOTH ---------- */

  const settingsBtn = document.querySelector(".settings-button");
  const settingsMenu = document.querySelector(".settings-menu");

  if (settingsBtn && settingsMenu) {

    settingsBtn.addEventListener("click", () => {

      settingsMenu.classList.toggle("open");

    });

  }

});


/* ---------- SMOOTH ANIMATIONS ---------- */

document.documentElement.style.scrollBehavior = "smooth";