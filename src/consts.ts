const ADDRESS = {
  NODE: process.env.REACT_APP_NODE_ADDRESS as string,
};

const LOCAL_STORAGE = {
  ACCOUNT: 'account',
};

export { ADDRESS, LOCAL_STORAGE };

export const ERC20_CONTRACT_ADDRESS = (process.env.REACT_APP_CONTRACT_ERC as `0x${string}`) || '';
