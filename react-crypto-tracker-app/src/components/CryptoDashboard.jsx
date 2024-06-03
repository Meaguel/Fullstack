
import{useState, useEffect} from 'react';

import SearchPanel from "./SearchPanel";
import CryptoCard from "./CryptoCard";

const cryptoCoins = [{
     
     Name:"Bitcoin",
     Price: "$69,427.82",
     MarketCap:"$1,369,519,355,620",
     Volume: "$30,442,038,437",
     Change: "-0.7%",
     Icon:"https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400",
},
{
     Name:"Ethereum",
     Price: "$3,783.30",
     MarketCap:"$454,810,250",
     Volume: "$32,718,861,876",
     Change: "+2.7%",
     Icon:"https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
},
{
     Name:"Tether",
     Price: "$0.9997",
     MarketCap:"$111,332,891,964",
     Volume: "$61,422,823,295",
     Change: "-0.2%",
     Icon:"https://assets.coingecko.com/coins/images/325/standard/Tether.png?1696501661",
},
{
     Name:"BNB",
     Price: "$620.18",
     MarketCap:"$95,694,176,197",
     Volume: "$2,842,894,141",
     Change: "+3.5%",
     Icon:"https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970",
},
{
     Name:"Solana",
     Price: "$177.32",
     MarketCap:"$79,491,995,383",
     Volume: "$3,749,209,090",
     Change: "-3.9%",
     Icon:"https://assets.coingecko.com/coins/images/4128/standard/solana.png?1696504756",
},
{
     Name:"USDC",
     Price: "$0.9996",
     MarketCap:"$33,066,598,868",
     Volume: "$9,795,568,419",
     Change: "-0.1%",
     Icon:"https://assets.coingecko.com/coins/images/6319/standard/usdc.png?1696506694",
},
{
     Name:"Lido Staked Ether",
     Price: "$3,755.49",
     MarketCap:"$35,306,000,945",
     Volume: "$265,858,856",
     Change: "+2.2%",
     Icon:"https://assets.coingecko.com/coins/images/13442/standard/steth_logo.png?1696513206",
},
{
     Name:"XRP",
     Price: "$0.5316",
     MarketCap:"$29,585,813,631",
     Volume: "$1,455,217,196",
     Change: "-1.1%",
     Icon:"https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png?1696501442",
},
{
     Name:"Dogecoin",
     Price: "$0.1666",
     MarketCap:"$24,685,934,793",
     Volume: "$2,581,006,497",
     Change: "+2.8%",
     Icon:"https://assets.coingecko.com/coins/images/5/standard/dogecoin.png?1696501409",
},
{
     Name:"Toncoin",
     Price: "$6.25",
     MarketCap:"$21,890,772,005",
     Volume: "$318,537,438",
     Change: "-5.6%",
     Icon:"https://assets.coingecko.com/coins/images/17980/standard/ton_symbol.png?1696517498",
},
{
     Name:"Cardano",
     Price: "$0.4848",
     MarketCap:"$17,392,007,414",
     Volume: "$442,700,362",
     Change: "-2.5%",
     Icon:"https://assets.coingecko.com/coins/images/975/standard/cardano.png?1696502090",
},
{
     Name:"Shiba Inu",
     Price: "$0.00002567",
     MarketCap:"$15,469,845,673",
     Volume: "$952,866,169",
     Change: "+1.4%",
     Icon:"https://assets.coingecko.com/coins/images/11939/standard/shiba.png?1696511800",
},
{
     Name:"Avalanche",
     Price: "$40.78",
     MarketCap:"$15,942,094,008",
     Volume: "$626,638,723",
     Change: "+1.1%",
     Icon:"https://assets.coingecko.com/coins/images/12559/standard/Avalanche_Circle_RedWhite_Trans.png?1696512369",
},
{
     Name:"Tron",
     Price: "$0.1236",
     MarketCap:"$10,802,163,044",
     Volume: "$339,552,407",
     Change: "+0.4%",
     Icon:"https://assets.coingecko.com/coins/images/1094/standard/tron-logo.png?1696502193",
},
{
     Name:"Wrapped Bitcoin",
     Price: "$69,775.32",
     MarketCap:"$10,875,035,725",
     Volume: "$646,973,990",
     Change: "-1.8%",
     Icon:"https://assets.coingecko.com/coins/images/7598/standard/wrapped_bitcoin_wbtc.png?1696507857",
},
{
     Name:"Polkadot",
     Price: "$7.53",
     MarketCap:"$10,354,728,650",
     Volume: "$3256,826,228",
     Change: "+1.2%",
     Icon:"https://static.coingecko.com/s/polkadot-73b0c058cae10a2f076a82dcade5cbe38601fad05d5e6211188f09eb96fa4617.gif",
},
{
     Name:"Bitcoin Cash",
     Price: "$508.14",
     MarketCap:"$10,030,350,610",
     Volume: "$449,633,295",
     Change: "+0.8%",
     Icon:"https://assets.coingecko.com/coins/images/780/standard/bitcoin-cash-circle.png?1696501932",
}
];

const coinMarketCapApiKey = 'e19ddc46-563e-408a-8623-867201275537';
const coinMarketCapApiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

// 1. component mount - useEffect hook
// 2. get data - using fetch api
// 3. set the coin data from market cap api
// 4. handle loading and erros



const CryptoDashboard = () => {

    // default the data to the coin array..
    const [coinData, setCoinData] = useState (cryptoCoins);
     const [isLoading,setIsLoading] = useState(true);
     const [error, setError] =useState(null);
     const handleSearch = (searchText) => {
          if (searchText === "") {
               alert(`Enter a crypto coin to search`)
               
               // reset the full list
               setCoinData(cryptoCoins);

               return;
          }


          //TODO: filter the crypto coin list by searchText
          // use ES6 array method filter

          const filterCoins = cryptoCoins.filter(coin => coin.Name.includes(searchText));

          //set state to filter coin and re-render on update
          setCoinData(filterCoins)
     }



     // component mounted, fire once ===> empty dependency array

     useEffect (() => {
          console.log(`component mounted..`);

          fetchData();

     }, [])

     const fetchData = async() => {
          console.log(`fetch.data..`);

          try {
              const response = await fetch(coinMarketCapApiUrl, {
               headers:{
                  'X-CMC_PRO_API_KEY': coinMarketCapApiKey
               },
               params: {
                    start: 1,
                    limit: 10,
                    convert: 'USD'

               }
              

          });

              if (!response.ok) {
                   throw new Error(`There was an error loading data..`)
              }
              const data = await response.json();
              console.log(`coin market data: ${JSON.stringify(data)}`)
              setCoinData(data);

          }
          catch (error) {
               setError(error)

          }
          finally {
               setIsLoading(false);
          }
          
     }

     if (isLoading) {
          return <p style={{textAlign: 'center'}}>Loading....</p>
     }

     if (error) {
          return <p style={{textAlign: 'center'}}>{ error.message }</p>
     }
     
    return <>
      <div className="app">
           <h1>Crypto Coin Tracker</h1>
           <SearchPanel searchCallback={handleSearch} />
           <div className="crypto-container">
           
           {
               coinData.data.map((currentCoin) => {
                    return <CryptoCard {...currentCoin} />
               })
           }

        </div>
       </div>
   </>
}

export default CryptoDashboard;