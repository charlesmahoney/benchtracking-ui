import React from "react";
import RegistrationForm from "./RegistrationForm";

function NewConsultantPage() {
  return (
    <section>
      <h1>Add New Consultant</h1>
      {/* <NewConsultantForm onAddConsultant={addConsultantHandler} /> */}
      <RegistrationForm />
    </section>
  );
}

export default NewConsultantPage;
