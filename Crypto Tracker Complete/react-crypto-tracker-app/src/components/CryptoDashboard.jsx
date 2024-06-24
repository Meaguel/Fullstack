
import{useState, useEffect} from 'react';

import SearchPanel from "./SearchPanel";
import CryptoCard from "./CryptoCard";



const coinMarketCapApiKey = 'e19ddc46-563e-408a-8623-867201275537';
const coinMarketCapApiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

// 1. component mount - useEffect hook
// 2. get data - using fetch api
// 3. set the coin data from market cap api
// 4. handle loading and erros



const CryptoDashboard = () => {

    // default the data to the coin array..
    const [coinData, setCoinData] = useState ([]);
    // filtered data
    const [filterData, setFilterData] = useState([]);
    //sort data
    const[sortType, setSortType] = useState('');
    
     const [isLoading,setIsLoading] = useState(true);
     const [error, setError] =useState(null);
      
     //pass to search panel componet, to get selected value out..
     const handleSortType = (sortType) => {
          console.log(`sort type changed..${sortType}`)

          setSortType(sortType);
     }

     const handleSearch = (searchText) => {
          debugger
          if (searchText === "") {
               alert(`Enter a crypto coin to search`)
               
               // reset the full list
               setFilterData(coinData);

               return;
          }


          //TODO: filter the crypto coin list by searchText
          // use ES6 array method filter

          const filterCoins = coinData?.filter(coin => coin.name.toLowerCase().includes(searchText.toLowerCase()))
                .sort((a, b) => {
                    const aValue = a.quote.USD[sortType];
                    const bValue = b.quote.USD[sortType];
                    return bValue - aValue;   
               });
          debugger

          console.log(filterCoins)

          //set state to filter coin and re-render on update
          setFilterData(filterCoins)
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
              const rawData = await response.json();
              console.log(`coin market data: ${JSON.stringify(rawData)}`)
              
              //set the initial default data, once set once on load!!!
              setCoinData(rawData.data);

              // set the working filtered data
              setFilterData(rawData.data);

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
           <SearchPanel 
           searchCallback={handleSearch}
           sortTypeCallback={handleSortType} 
           />
           <div className="crypto-container">
           
           {
               filterData?.map((currentCoin) => {
                    return <CryptoCard {...currentCoin} />
               })
           }

        </div>
       </div>
   </>
}

export default CryptoDashboard;