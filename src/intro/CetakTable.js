export default function CetakTable() {
  const data = ["Ayam", "Gajah", "Jerapah", "Macan"];
  const mobil2an = [
    {
      brand: "Toyota",
      name: "Rush",
    },
    {
      brand: "Toyota",
      name: "Kijang",
    },
    {
      brand: "Toyota",
      name: "Yaris",
    },
    {
      brand: "Toyota",
      name: "Avanza",
    },
  ];

  return (
    <>
      <ul>
        {data.map((binatang) => {
          return <li>{binatang}</li>;
        })}
      </ul>
      <ol>
        {mobil2an.map((mobil) => {
          return (
            <li>
              {mobil.brand}
              {mobil.name}
            </li>
          );
        })}
      </ol>
    </>
  );
}
