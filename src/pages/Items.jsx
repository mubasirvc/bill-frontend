import React from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import Modal from '../components/Modal'

const Items = () => {
  return (
    <div>
      <Modal name='Add Item' />
      <Form />
      <Table />
    </div>
  );
};

export default Items;
