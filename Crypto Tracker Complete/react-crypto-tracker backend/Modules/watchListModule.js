
const WatchItem = require('../Models/watchItem');

const addItem = async (symbol) => {

    try {

        if(!symbol) {
            console.log(`symbol is not valid.`)
        }
        
        console.log (`item ${symbol} added to watch list`);
    
       // add symbol to watch list
       const item = new WatchItem({
            symbol: symbol,
            dateCreated: Date.now()
       })
      
      await item.save();

    }
    catch (err) {
        console.log(`error adding item : ${err}`)
    }  
}

const removeItem = async(symbol) => {

    try {
        if (!symbol) {
            console.log(`symbol is not valid.`)
        }
    
        console.log(`item ${symbol} removed from watch list`)
        
        await WatchItem.deleteOne({symbol: symbol});
    }
    catch (err) {
        console.log(`error removing item : ${err}`)
    }  
}

const getItems = async () => {
    
    try {
        console.log(`watch list items fetched..`)

    const items = await WatchItem.find({})
    return items;
}
    catch (err) {
        console.log(`error fetching items ${err}`)
    }
}

module.exports = {
    addItem,
    removeItem,
    getItems,
}
