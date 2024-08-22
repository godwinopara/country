import { Link, useParams } from "react-router-dom";
import { useCountryDetails } from "../hooks/useCountryDetails";

export default function CountryDetails() {
  const { fullname } = useParams();
  const { country, error, loading } = useCountryDetails(fullname ?? "");

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!country) {
    return <div>No country data available</div>;
  }

  const { flags, name, population, region, capital, currencies, languages, timezones } = country;

  return (
    <section className="max-w-7xl mx-auto min-h-screen flex gap-x-10 items-center justify-center text-lg">
      <img src={flags.png} alt={`Flag of ${name.common}`} className="w-[40%]" />
      <div className="w-[50%]">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-bold text-4xl uppercase ">{name.common}</h2>
          <Link to="/" className="bg-black text-white text-lg py-2 px-8">
            Back Home
          </Link>
        </div>
        <p className="flex gap-x-6 items-center mb-2">
          <span className="font-semibold text-xl">Population:</span>
          {population.toLocaleString()} {/* Format population with commas */}
        </p>
        <p className="flex gap-x-6 items-center mb-2">
          <span className="font-semibold text-xl">Region:</span>
          {region}
        </p>
        <p className="flex gap-x-6 items-center mb-2">
          <span className="font-semibold text-xl">Capital:</span>
          {capital.join(", ")} {/* Join capital array into a string */}
        </p>
        <p className="flex gap-x-6 items-center mb-2">
          <span className="font-semibold text-xl">Currencies:</span>
          {Object.entries(currencies).map(([code, currency]) => (
            <span key={code}>
              {currency.name} ({currency.symbol})
            </span>
          ))}
        </p>
        <p className="flex gap-x-6 items-center mb-2">
          <span className="font-semibold text-xl">Languages:</span>
          {Object.values(languages).join(", ")} {/* Join multiple languages with commas */}
        </p>
        <p className="flex gap-x-6 items-center mb-2">
          <span className="font-semibold text-xl">Timezones:</span>
          {timezones.join(", ")} {/* Join multiple timezones with commas */}
        </p>
      </div>
    </section>
  );
}
