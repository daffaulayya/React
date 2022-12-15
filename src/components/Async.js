import { useEffect, useState } from "react";

const Async = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/guests")
      .then((response) => response.json())
      .then((data) => setGuests(data));
  }, []);

  return (
    <>
      <ul>
        {guests.map((guest, idx) => {
          return <li key={idx}>{guest.firstName}</li>;
        })}
      </ul>
    </>
  );
};

export default Async;
