import CountryList from "../components/CountryList";

export default function Home() {
  return (
    <main>
      <div className="mb-10 text-center py-8">
        <h2 className="text-3xl lg:text-5xl font-bold">Country Explorer</h2>
      </div>
      <CountryList />
    </main>
  );
}
