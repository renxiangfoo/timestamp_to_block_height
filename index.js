// https://github.com/monosux/ethereum-block-by-date
const EthDater = require("ethereum-block-by-date");
const Web3 = require("web3");
const PROVIDER_URL = "";
const web3 = new Web3(new Web3.providers.WebsocketProvider(PROVIDER_URL));

const dater = new EthDater(
  web3 // Web3 object, required.
);

// Getting block by date:
const get_block_from_date = async (date) => {
  console.log(`Searching for date ${date}`);
  const block = await dater.getDate(
    date, // Date, required. Any valid moment.js value: string, milliseconds, Date() object, moment() object.
    false, // Block after, optional. Search for the nearest block before or after the given date. By default true.
    false // Refresh boundaries, optional. Recheck the latest block before request. By default false.
  );
  console.log(block);
};

get_block_from_date("2022-02-01T00:00:00Z");
// get_block_from_date("2020-08-14T00:00:00Z");
