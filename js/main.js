(() => {
  //choose el button
  const button = document.querySelector("#pdfBtn");
  const resumeHtml = document.querySelector(".container");
  function generatePDF() {
    html2pdf()
      .set({
        margin: 0,
        unit: "in",
        height: "11.69",
        filename: "gervis_resume.pdf",
        image: {
          type: "jpeg",
          quality: 3,
        },
        html2canvas: {
          scale: 3,
          letterRendering: true,
        },
        jsPDF: {
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
