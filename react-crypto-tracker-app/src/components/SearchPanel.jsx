
import { useState } from 'react';

const SearchPanel =(props) => {

    const [searchText, setSearchText] = useState('');

    const handleClick = () => {
        props.searchCallback(searchText)
    }

    const handleSelectChange = () => {
        alert (`select change`)
    }

    const handleKeyDown = (e) => {
        // handle ENTER key ==> keyCode = 13
        if (e.keyCode === 13) {
        //TODO: trigger a search or filter the crypto list in parent component
        props.searchCallback(searchText)
        }
    }

    const handleOnChange = (e) => {
        // update search text state
        setSearchText(e.target.value);
    }
  return <>
      <input 
       onKeyDown={handleKeyDown}
       onChange={handleOnChange}
       type="text" 
       placeholder="Search Crytocurrency" 
       value={searchText}
       />
    <select onChange={handleSelectChange}>
        <option value="market_cap">Market Cap</option>
        <option value="current_price">Price</option>
        <option value="total_volume">24h Volume</option>
        <option value="price_change_percentage_24h">24h Change</option>
       </select> 
       <button onClick={handleClick}>Search</button>
  </>
}

export default SearchPanel;