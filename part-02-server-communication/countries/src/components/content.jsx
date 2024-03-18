/* eslint-disable react/prop-types */
import Country from "./country";

export default function Content({ countries, setCountries }) {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  if (countries.length === 0) {
    return;
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  return (
    <div>
      {countries.map((country, inx) => (
        <div key={inx}>
          <li>{country.name.common}</li>{" "}
          <button onClick={() => setCountries([country])}>show</button>
        </div>
      ))}
    </div>
  );
}
