# SimpleContract

This repository contains a smart contract written in Solidity that manages user information. The contract allows you to set user information, retrieve all users, and delete a user by their email.

## Contract Overview

### SimpleContract.sol

The `SimpleContract` contract provides the following functionalities:
- **Set User**: Add a new user with a name, email, and password.
- **Get All Users**: Retrieve an array of all users.
- **Delete User**: Delete a user by their email.

### Contract Functions

- `setUser(string memory _name, string memory _email, string memory _password)`: Adds a new user to the contract.
- `getAllUsers() public view returns (User[] memory)`: Returns an array of all users.
- `deleteUser(string memory _email)`: Deletes a user by their email.

### Data Structures

- `User`: A struct representing a user with the following properties:
  - `name`: The name of the user.
  - `email`: The email of the user.
  - `password`: The password of the user.

## Deployment

This repository includes a deployment script that uses Hardhat to deploy the contract.

### Prerequisites

- Node.js
- Hardhat
- Ethers.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/simple-contract.git
   cd simple-contract
Install the dependencies:
bash
.
npm install
Compile the Contract
To compile the contract, run the following command:

bash
.
npx hardhat compile
Deploy the Contract
To deploy the contract, use the provided deployment script. Ensure you have a network configuration set up in your Hardhat configuration file (hardhat.config.js).

Update hardhat.config.js with your network configuration.

Create a new file scripts/deploy.js and add the following script:

javascript
.
const { ethers } = require('hardhat');

async function main() {
  // Compile the contract
  const SimpleContract = await ethers.getContractFactory('SimpleContract');
  console.log('Compiling contract...');

  // Deploy the contract
  const simpleContract = await SimpleContract.deploy();
  console.log('Deploying contract...');

  // Wait for the contract to be mined and get the deployed address
  await simpleContract.deployed();
  console.log('Contract deployed to:', simpleContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
Run the deployment script:
bash
.
npx hardhat run scripts/deploy.js --network <your-network>
Replace <your-network> with the name of the network you want to deploy to (e.g., ropsten, mainnet, etc.).

Verifying Deployment
Once the contract is deployed, you can verify the deployment by checking the address printed in the console output.

Interacting with the Contract
After deployment, you can interact with the contract using scripts or a frontend application. The following example shows how to set a new user:

javascript
.
const { ethers } = require('hardhat');

async function main() {
  // Replace with your contract address
  const contractAddress = 'YOUR_CONTRACT_ADDRESS';

  // Get the contract instance
  const SimpleContract = await ethers.getContractFactory('SimpleContract');
  const simpleContract = SimpleContract.attach(contractAddress);

  // Set a new user
  const tx = await simpleContract.setUser('John Doe', 'john.doe@example.com', 'password123');
  await tx.wait();

  console.log('User added successfully');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
Replace YOUR_CONTRACT_ADDRESS with the address of your deployed contract.

License
This project is licensed under the MIT License.

sql


This `README.md` file provides an overview of the contract, detailed instructions for deployment and interaction using Hardhat, and includes example code for setting a new user in the contract.
