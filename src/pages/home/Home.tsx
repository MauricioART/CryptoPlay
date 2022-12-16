import { Button } from '@gear-js/ui';
import { getWasmMetadata, GearApi, Hex, Metadata} from '@gear-js/api';
import { ERC20_CONTRACT_ADDRESS } from 'consts';
import { useSendMessage } from '@gear-js/react-hooks';
import { u128 } from '@polkadot/types';
import { AnyJson } from '@polkadot/types/types';


const programId = process.env.REACTREACT_APP_CONTRACT_ERC as Hex;
const metaTypes = process.env.REACT_APP_META_TYPES as Hex;


const metadata = {
  types: metaTypes,
  init_input: 'InitConfig',
  init_output: '',
  async_init_input: '',
  async_init_output: '',
  handle_input: 'FTAction',
  handle_output: 'FTEvent',
  async_handle_input: '',
  async_handle_output: '',
  title: 'FungibleToken',
  meta_state_input: '',
  meta_state_output: '',
} as Metadata;

const message = {
  destination: ERC20_CONTRACT_ADDRESS,
  payload: {
    mint: '10000',
  },
  gasLimit: '300000000',
  value: '0',
};

const mint: any = 1000;

async function connectG() {
  const gearApi = await GearApi.create({
    providerAddress: 'wss://rpc-node.gear-tech.io',
  });

  const [chain, nodeName, nodeVersion] = await Promise.all([
    gearApi.chain(),
    gearApi.nodeName(),
    gearApi.nodeVersion(),
  ]);

  const codeId = '0x759ce673d699f2d6c959c58f927327badcd779900453390a350a90b456310f77';
  const gas = await gearApi.program.calculateGas.initCreate(
    '0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d',
    codeId,
    '0x00',
    0,
    true,
  );

  }


function Home() {
  const conn = connectG();
  const sendMessage = useSendMessage(programId, metadata);
  const sendMint = (numToken: AnyJson) => sendMessage({Mint: numToken});

  sendMint(message);
  return (
      <Button text="connect"/>
  );
}

export { Home };
