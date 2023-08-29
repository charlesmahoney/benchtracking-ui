import React, { useState, useEffect } from "react";
import axios from "axios";

function Consultants() {
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoading] = useState([]);
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8080/consultants")
      .then((res) => {
        setConsultants(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Consultants List</h1>
      <table>
        {consultants.map((c) => (
          <tr>
            <td>{c.employeeNumber}</td>
            <td>
              <a className="link" href={c._id}>
                {c.firstName}
              </a>
            </td>
            <td>{c.lastName}</td>
            <td>
              {c.displayName}
              <br />
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
}

export default Consultants;
