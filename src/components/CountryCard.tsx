import { Link } from "react-router-dom";
import { Country } from "../types/country";

interface CountryCardProps {
  url: string;
  country: Country;
}
export default function CountryCard({ url, country }: CountryCardProps) {
  return (
    <div>
      <div
        className="h-[150px] w-full relative border border-yellow-500 bg-center"
        style={{ backgroundImage: `url(${country.flags.svg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      ></div>
      <div className=" block p-4 border rounded shadow hover:shadow-lg transition">
        <h2 className="text-lg font-bold mb-3">{country.name.common}</h2>
        <p className="flex gap-x-2">
          <span className="font-semibold mb-1 block">Population:</span>
          {country.population}
        </p>
        <p className="flex gap-x-2">
          <span className="font-semibold mb-1 block">Region:</span>
          {country.region}
        </p>
        <p className="flex gap-x-2">
          <span className="font-semibold mb-1 block">Capital:</span>
          {country.capital}
        </p>
        <Link to={url} className="mt-5 block text-center bg-gray-200 w-full text-gray-900 py-2 px-6">
          Learn More
        </Link>
      </div>
    </div>
  );
}
