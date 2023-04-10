(() => {
  //choose el button
  const button = document.querySelector("#pdfBtn");
  const resumeHtml = document.querySelector("body");
  function generatePDF() {
    html2pdf()
      .set({
        margin: 0,
        filename: "gervis_resume.pdf",
        image: {
          type: "jpeg",
          quality: 3,
        },
        html2canvas: {
          scale: 3, // A mayor escala, mejores gráficos, pero más peso
          letterRendering: true,
        },
        jsPDF: {
          unit: "in",
          format: "a3",
          orientation: "portrait", // landscape o portrait
        },
      })
      .from(resumeHtml)
      .save()
      .catch((err) => console.log(err))
      .finally()
      .then(() => {
        console.log("Saved!");
      });
  }
  button.addEventListener("click", async () => {
    button.style.display = "none";
    await generatePDF();
    button.style.display = "block";
  });
})();
