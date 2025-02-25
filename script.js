document.addEventListener("DOMContentLoaded", function () {
    const consentForm = document.getElementById("consentForm");

    consentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Форма успешно отправлена!");
    });
});
