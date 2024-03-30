const API_KEY =
    "beb4dc0cff5f34a76799009faef764e0e119cc97ff125c6708a6fa574f7862dc";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CoinInfo = ({ image, name, symbol }) => {
    const [price, setPrice] = useState(null);
    useEffect(() => {
        const getCoinPrice = async () => {
            const response = await fetch(
                `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD&api_key=` +
                API_KEY,
            );

            const json = await response.json();
            setPrice(json);
        };
        getCoinPrice().catch(console.error);
    }, [symbol]);
    return (
        <div>
            {price ? ( // rendering only if API call actually returned us data
                <li className="main-list" key={symbol}>
                    <img
                        className="icons"
                        src={`https://www.cryptocompare.com${image}`}
                        alt={`Small icon for ${name} crypto coin`}
                    />
                    <Link
                        style={{ color: "White" }}
                        to={`/coinDetails/${symbol}`}
                        key={symbol}
                    >
                        {name} <span className="tab"></span> ${price.USD} USD
                    </Link>
                </li>
            ) : null}
        </div>
    );
}
export default CoinInfo;
