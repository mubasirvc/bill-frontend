import React from "react";
import Form from "../components/Form";
import Table from "../components/Table";

const Items = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedRow, setSelectedRows] = React.useState([]);
  const [formData, setFormData] = React.useState({
    technicianName: "Mohammed",
    mobile: "9995096719",
    clientName: "",
    place: "",
  });

  return (
    <div>
      <Form
        formData={formData}
        setFormData={setFormData}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <Table
        setSelectedRows={setSelectedRows}
        selectedRow={selectedRow}
        datas={selectedRow}
        details={{ ...formData, selectedDate }}
      />
    </div>
  );
};

export default Items;
