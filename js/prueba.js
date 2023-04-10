document.addEventListener("DOMContentLoaded"),
  () => {
    // hear button click
    const buttonPdf = document.querySelector("#pdfBtn");

    function generatePDF() {
      const documentPdf = document.getElementById(".container");
      html2pdf()
        .set({
          margin: 1,
          filename: "resume.pdf",
          image: {
            type: "jpeg",
            quality: 0.98,
          },
          html2canvas: {
            scale: 3,
            letterRendering: true,
          },
          jsPDF: {
            unit: "in",
            format: "a3",
            orientation: "portrait",
          },
        })
        .from(documentPdf)
        .save()
        .catch((err) => console.log(err))
        .finally()
        .then(() => {
          console.log("Saved!");
        });
    }
  };

buttonPdf.addEventListener("click", generatePDF());
