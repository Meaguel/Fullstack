document.addEventListener("DOMContentLoaded", function () {
    const coinList = document.getElementById("coinList");
    const searchInput = document.getElementById("searchInput");
    const filterDropdown = document.getElementById("filterDropdown");

    // Sample data for coins (you can replace this with actual data)
    const coinsData = [
        { CurrentPrice: "59789.00", name: "Bitcoin", icon: "image/bitcoin-icon.png", price: "$40,000" },
        { CurrentPrice: "2981.53", name: "Ethereum", icon: "image/ethereum-icon.png", price: "$2,500" },
        { CurrentPrice: "1.00", name: "BNB", icon: "image/bnb-icon.png", price: "$400" },
        { CurrentPrice: "568.22", name: "Solana", icon: "image/solana-icon.png", price: "$150" },
        { CurrentPrice: "125.16", name: "USDC", icon: "image/usdc-icon.png", price: "$1" },
        { CurrentPrice: "1.00", name: "Tether", icon: "image/usdt-icon.png", price: "$1" },
    ];

    // Function to generate coin items
    function generateCoinItems(coins) {
        coinList.innerHTML = "";
        coins.forEach((coin) => {
            const coinItem = document.createElement("div");
            coinItem.classList.add("coin-item");
            coinItem.innerHTML = `
                <img src="${coin.icon}" alt="${coin.name}" class="coin-icon">
                <div>
                    <h4>${coin.name}</h4>
                    <p>Current Price: ${coin.CurrentPrice}</p>
                    <p>Market Cap: ${coin.price}</p>
                    <p>24h Volume: ${coin.Volume}</p>
                    <p>24h Change: ${coin.Change}</P>
                </div>
            `;
            coinList.appendChild(coinItem);
        });
    }

    // Initial generation of coin items
    generateCoinItems(coinsData);

    // Event listeners for search and filter
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredCoins = coinsData.filter((coin) =>
            coin.name.toLowerCase().includes(searchTerm) || coin.symbol.toLowerCase().includes(searchTerm)
        );
        generateCoinItems(filteredCoins);
    });

    filterDropdown.addEventListener("change", function () {
        const selectedValue = filterDropdown.value;
        let filteredCoins = coinsData;
        if (selectedValue !== "all") {
            filteredCoins = coinsData.filter((coin) => coin.symbol.toLowerCase() === selectedValue);
        }
        generateCoinItems(filteredCoins);
    });
});