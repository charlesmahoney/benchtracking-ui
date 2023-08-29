import { useState, useEffect } from "react";
import { findAll } from "../pages/consultants/addConsultant.action";

export default function getAllConsultants() {
  const [records, setRecords] = useState(null);
  useEffect(() => {
    findAll().then((res) => {
      setRecords(res.data);
    });
  }, []);

  return { records };
}
