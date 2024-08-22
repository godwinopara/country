import { useCountries } from "../hooks/useCountries";
import CountryCard from "./CountryCard";

export default function CountryList() {
  const { countries, loading, error } = useCountries();

  if (loading) {
    return <div>Loading......</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Container with grid layout */}
      <div className="grid lg:grid-cols-4 gap-10">
        {countries.map((country) => (
          <CountryCard url={`/country/${country.name.common}`} key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}
