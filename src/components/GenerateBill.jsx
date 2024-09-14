// import React from "react";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import { Button } from "@mui/material";

// const GenerateBill = ({ details, datas }) => {
//   const generatePDF = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text("Invoice", 14, 22);

//     const pageWidth = doc.internal.pageSize.width;
//     const rightMargin = 14;
//     const rightX = pageWidth - rightMargin;

//     doc.setFontSize(12);
//     doc.text(`Client Name: ${details.client}`, 14, 40);
//     doc.text(`Place: ${details.place}`, 14, 47);
//     doc.text(`Date: ${details.date}`, 14, 54);

//     doc.text(`Technician Name: ${details.techName}`, rightX, 40, {
//       align: "right",
//     });
//     doc.text(`Mobile: ${details.Mobile}`, rightX, 47, { align: "right" });

//     doc.autoTable({
//       startY: 80,
//       head: [["No", "Name", "Qty", "Notes"]],
//       body: datas.map((item) => [item.no, item.name, item.qty, item.notes]),
//     });

//     doc.save("invoice.pdf");
//   };

//   return (
//     <div>
//       <Button
//         disabled={datas.length == 0}
//         sx={{ mt: 4 }}
//         variant="contained"
//         onClick={generatePDF}
//       >
//         Generate PDF
//       </Button>
//     </div>
//   );
// };

// export default GenerateBill;

import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button, Modal, Box } from "@mui/material";

const GenerateBill = ({ details, datas }) => {
  console.log(details);
  
  const [pdfBlob, setPdfBlob] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Invoice", 14, 22);

    const pageWidth = doc.internal.pageSize.width;
    const rightMargin = 14;
    const rightX = pageWidth - rightMargin;

    doc.setFontSize(12);
    doc.text(`Client Name: ${details.clientName}`, 14, 40);
    doc.text(`Place: ${details.place}`, 14, 47);
    doc.text(`Date: ${details.selectedDate}`, 14, 54);

    doc.text(`Technician Name: ${details.technicianName}`, rightX, 40, {
      align: "right",
    });
    doc.text(`Mobile: ${details.mobile}`, rightX, 47, { align: "right" });

    doc.autoTable({
      startY: 80,
      head: [["No", "Name", "Qty", "Notes"]],
      body: datas.map((item) => [item.no, item.name, item.qty, item.notes]),
    });

    const pdfBlob = doc.output("blob");
    setPdfBlob(pdfBlob);
    handleOpen();
  };

  // Function to handle download
  const downloadPDF = () => {
    const link = document.createElement("a");
    const pdfBlobUrl = URL.createObjectURL(pdfBlob);
    link.href = pdfBlobUrl;
    link.download = "invoice.pdf";
    link.click();
  };

  return (
    <div>
      <Button
        disabled={datas.length === 0}
        sx={{ mt: 4 }}
        variant="contained"
        onClick={generatePDF}
      >
        Generate PDF
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflow: "auto",
          }}
        >
          {pdfBlob && (
            <iframe
              src={URL.createObjectURL(pdfBlob)}
              width="100%"
              height="100%"
              title="PDF Preview"
            ></iframe>
          )}
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Button variant="contained" color="primary" onClick={downloadPDF}>
              Download PDF
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default GenerateBill;
