import axios from "axios";

export async function findAll() {
  return await axios.get(`http://localhost:8080/consultants`);
}

export async function createConsultant(consultantData) {
  await fetch(`http://localhost:8080/consultants`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(consultantData),
  }).catch((err) => {
    console.log("Exception occurred when saving consultant info " + err);
  });
}

export async function updateConsultant(consultantId, consultantData) {
  await fetch(`http://localhost:8080/consultants/${consultantId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(consultantData),
  }).catch((err) => {
    console.log("Exception occurred when updating consultant info " + err);
  });
}

export async function deleteConsultant(consultantId) {
  console.log("start-inside delete consultant...");
  await fetch(`http://localhost:8080/consultants/${consultantId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((err) => {
    console.log("Exception occurred when saving consultant info " + err);
  });
  console.log("end-inside delete consultant...");
}
