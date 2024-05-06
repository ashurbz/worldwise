import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [cityName, setCityName] = useState("");
  const [enterDate, setEnterDate] = useState("");
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  function onCityNameChange(e) {
    setCityName(e.target.value);
  }

  function onDateChange(e) {
    setEnterDate(e.target.value);
  }

  function onNotesChange(e) {
    setNotes(e.target.value);
  }
  return (
    <div
      style={{
        color: "white",
        fontWeight: "bold",
        fontSize: "larger",
        padding: "20px",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label>City Name</label>
          <input
            type="text"
            placeholder="Enter City Name"
            value={cityName}
            onChange={onCityNameChange}
          />
        </div>
        <div>
          <label>When Did You Go to</label>
          <input
            type="text"
            placeholder="Enter Date"
            value={enterDate}
            onChange={onDateChange}
          />
        </div>
        <div>
          <label>Notes About your Trip</label>
          <input
            type="text"
            placeholder="Enter Notes About Your Trip"
            value={notes}
            onChange={onNotesChange}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            style={{
              padding: "10px",
              margin: "10px",
              border: "2px solid black",
              borderRadius: "10px",
              color: "white",
              backgroundColor: "green",
              fontSize: "large",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Add
          </button>
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "10px",
              margin: "10px",
              border: "2px solid black",
              borderRadius: "10px",
              color: "white",
              backgroundColor: "green",
              fontSize: "large",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
