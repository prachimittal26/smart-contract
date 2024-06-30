# smart-contract
Simple Storage DApp
This is a simple Decentralized Application (DApp) that interacts with a smart contract to store and retrieve a value on the Ethereum blockchain. The frontend is built with HTML and JavaScript, using Web3.js to communicate with the smart contract.

Prerequisites
Node.js
npm (Node Package Manager)
MetaMask (browser extension for Ethereum)
Installation
Clone the repository:

sh
Copy code
git clone <repository-url>
cd <repository-directory>
Install dependencies:

sh
Copy code
npm install
Compile and deploy the smart contract (assuming you have Truffle and Ganache set up):

sh
Copy code
truffle compile
truffle migrate
Usage
Open index.html in your preferred web browser.

Make sure MetaMask is installed and configured to connect to your local blockchain (Ganache).

Use the DApp to interact with the smart contract:

Set Value: Enter a value in the input field and click "Set" to store the value on the blockchain.
Get Value: Click "Get Value" to retrieve the stored value from the blockchain and display it on the page.
Code Explanation
index.html
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Storage</title>
</head>
<body>
    <h1>Simple Storage DApp</h1>
    <div>
        <label for="valueInput">Set Value:</label>
        <input type="number" id="valueInput">
        <button onclick="setValue()">Set</button>
    </div>
    <div>
        <button onclick="getValue()">Get Value</button>
        <p id="valueDisplay"></p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/web3@1.6.0/dist/web3.min.js"></script>
    <script src="app.js"></script>
</body>
</html>
app.js
javascript
Copy code
let web3;
let contractInstance;

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [
    // Add your contract's ABI here
];

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        console.log('No Ethereum provider detected. Install MetaMask.');
        return;
    }

    contractInstance = new web3.eth.Contract(contractABI, contractAddress);
});

async function setValue() {
    const value = document.getElementById('valueInput').value;
    const accounts = await web3.eth.getAccounts();
    await contractInstance.methods.set(value).send({ from: accounts[0] });
}

async function getValue() {
    const value = await contractInstance.methods.get().call();
    document.getElementById('valueDisplay').innerText = value;
}
Summary
This DApp provides a simple interface to interact with a blockchain-based simple storage contract. Users can set and get a value using the provided input field and buttons, with Web3.js handling the interaction with the blockchain. Make sure to update the contractAddress and contractABI in app.js with your contract's actual address and ABI.
