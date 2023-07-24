const CountryList = ({ countries }) => {
  return (
    <div>
      {countries.map(country => (
        <div key={country.cca3}>
          <h2>{country.name.common}</h2>
          <p>Population: {country.population}</p>
          <p>Area: {country.area} km²</p>
        </div>
      ))}
    </div>
  );
}

export default CountryList;
