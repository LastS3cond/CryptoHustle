import "./App.css";
import CoinInfo from "./Components/CoinInfo";
const API_KEY =
  "beb4dc0cff5f34a76799009faef764e0e119cc97ff125c6708a6fa574f7862dc";
import { useState, useEffect } from "react";
export default function App() {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist?&api_key" +
        API_KEY,
      );
      const json = await response.json();
      setList(json);
    };

    fetchAllCoinData().catch(console.error);
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) =>
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase()),
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };

  return (
    <div>
      <div className="whole-page">
        <h1>My Crypto List</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(inputString) => searchItems(inputString.target.value)}
        />
        <ul>
          {searchInput.length > 0
            ? filteredResults.map((coin) =>
              list.Data[coin].PlatformType === "blockchain" ? (
                <CoinInfo
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
              ) : null,
            )
            : list &&
            Object.entries(list.Data).map(([coin]) =>
              list.Data[coin].PlatformType === "blockchain" ? (
                <CoinInfo
                  image={list.Data[coin].ImageUrl}
                  name={list.Data[coin].FullName}
                  symbol={list.Data[coin].Symbol}
                />
              ) : null,
            )}
        </ul>
      </div>
    </div>
  );
}
