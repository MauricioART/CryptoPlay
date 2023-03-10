import { Button } from '@gear-js/ui';
import { getWasmMetadata, GearApi } from '@gear-js/api';

const gear = async function connect() {
  const gearApi = await GearApi.create({
    providerAddress: 'wss://rpc-node.gear-tech.io',
  });

  const [chain, nodeName, nodeVersion] = await Promise.all([
    gearApi.chain(),
    gearApi.nodeName(),
    gearApi.nodeVersion(),
  ]);

  console.log(
    `You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`,
  );

  const unsub = await gearApi.gearEvents.subscribeToNewBlocks((header) => {
    console.log(
      `New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`,
    );
  });

  const message = {
    destination: 'idg',
    payload: 'PING',
    gasLimit: 10000000
  };
}


function Home() {


  return (<br/>);
}

export { Home };
