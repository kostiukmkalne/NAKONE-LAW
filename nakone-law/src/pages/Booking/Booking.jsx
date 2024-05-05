import React, { useState, useEffect } from "react";
import "./Booking.css";
import Form from "../../components/Form/Form";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Booking = () => {
  const [requests, setRequestsList] = useState([]);

  const requestsCollectionRef = collection(db, "requests");

  useEffect(() => {
    const getRequestsList = async () => {
      try {
        const data = await getDocs(requestsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setRequestsList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getRequestsList();
  }, []);

  return (
    <div className="container-booking">
      <h1 className="main-title-booking">BOOK A CONSULTATION</h1>

      <div className="case-booking">
        <div className="text-case-booking">
          <h2 className="title-booking">
            MAKE AN APPOINTMENT
            <br />
            FOR A CONSULTATION
          </h2>

          <h3 className="text-booking">
            after receiving your application, we will
            <br />
            review it as soon as possible and contact you
          </h3>
        </div>

        <div className="form-booking">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Booking;
