import { useEffect, useState } from "react";
import { Country } from "../types/country";
import { fetchCountry } from "../api/countriesApi";

export const useCountryDetails = (fullname: string) => {
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const data = await fetchCountry(fullname);
        setCountry(data);
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

    fetchCountryData();
  }, []);

  return { country, loading, error };
};
