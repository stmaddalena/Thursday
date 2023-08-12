document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function () {
    const imageModalTriggers = document.querySelectorAll(".imageModalTrigger");
    const modalContent = document.getElementById("modalContent");

    imageModalTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const content = this.getAttribute("data-content");
        modalContent.innerHTML = content;
        $("#exampleModalToggle").modal("show");
      });
    });
  });

