import { useEffect, useState } from "react";
import { fetchAllCountries } from "../api/countriesApi";
import { Country } from "../types/country";

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const data = await fetchAllCountries();
        setCountries(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCountriesData();
  }, []);

  return { countries, loading, error };
};
