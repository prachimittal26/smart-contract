# Degen Token Contract

This repository contains the Degen token smart contract, which implements an ERC20 token with additional functionalities for minting, burning, and redeeming items. The contract is built using Solidity and the OpenZeppelin library, and it can be deployed and managed using the Hardhat framework.

## Contract Overview

### Degen.sol

The `Degen` contract is an ERC20 token with the following features:
- **Minting**: The contract owner can mint new tokens.
- **Burning**: Token holders can burn their tokens.
- **Transfer**: Tokens can be transferred between addresses.
- **Redeemable Items**: Token holders can redeem their tokens for various in-game items.

### Token Functions

- `mint(address to, uint256 amount)`: Allows the contract owner to mint new tokens.
- `burn(uint256 amount)`: Allows token holders to burn their tokens.
- `transfer(address recipient, uint256 amount)`: Transfers tokens to another address.
- `redeemAsset(uint256 item, uint256 quantity)`: Redeems tokens for specific in-game items.
- `showRedeemableItems()`: Displays the list of redeemable items.
- `showRedeemedItems(address account)`: Shows the redeemed items for a specific account.

## Deployment

This repository includes a deployment script that uses Hardhat to deploy the contract.

### Prerequisites

- Node.js
- Hardhat
- Ethers.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/degen-token.git
   cd degen-token
Install the dependencies:
bash
Copy code
npm install
Compile the Contract
To compile the contract, run the following command:

bash
Copy code
npx hardhat compile
Deploy the Contract
To deploy the contract, use the provided deployment script. Ensure you have a network configuration set up in your Hardhat configuration file (hardhat.config.js).

Update hardhat.config.js with your network configuration.

Run the deployment script:

bash
Copy code
npx hardhat run scripts/deploy.js --network <your-network>
Replace <your-network> with the name of the network you want to deploy to (e.g., ropsten, mainnet, etc.).

Example Deployment Script
The following script (scripts/deploy.js) deploys the Degen contract:

javascript
Copy code
const { ethers } = require('hardhat');

async function main() {
  // Compile the contract
  const Degen = await ethers.getContractFactory('Degen');
  console.log('Compiling contract...');

  // Deploy the contract
  const degen = await Degen.deploy();
  console.log('Deploying contract...');

  // Wait for the contract to be mined and get the deployed address
  await degen.deployed();
  console.log('Contract deployed to:', degen.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
Verifying Deployment
Once the contract is deployed, you can verify the deployment by checking the address printed in the console output.

Interacting with the Contract
After deployment, you can interact with the contract using scripts or a frontend application. The following example shows how to call the mint function:

javascript
Copy code
const { ethers } = require('hardhat');

async function main() {
  // Replace with your contract address
  const contractAddress = 'YOUR_CONTRACT_ADDRESS';

  // Get the contract instance
  const Degen = await ethers.getContractFactory('Degen');
  const degen = Degen.attach(contractAddress);

  // Mint new tokens
  const tx = await degen.mint('RECIPIENT_ADDRESS', ethers.utils.parseUnits('100', 18));
  await tx.wait();

  console.log('Tokens minted successfully');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
Replace YOUR_CONTRACT_ADDRESS with the address of your deployed contract and RECIPIENT_ADDRESS with the address to receive the minted tokens.

License
This project is licensed under the MIT License.

csharp
This `README.md` file provides a comprehensive overview of the contract, its functionalities, and deta
