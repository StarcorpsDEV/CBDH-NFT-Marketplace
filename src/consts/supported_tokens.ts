import type { Chain } from "thirdweb";
import { polygon } from "./chains";

export type Token = {
  tokenAddress: string;
  symbol: string;
  icon: string;
};

export type SupportedTokens = {
  chain: Chain;
  tokens: Token[];
};

/**
 * By default you create listings with the payment currency in the native token of the network (eth, avax, matic etc.)
 *
 * If you want to allow users to transact using different ERC20 tokens, you can add them to the config below
 * Keep in mind this is for front-end usage. Make sure your marketplace v3 contracts accept the ERC20s
 * check that in https://thirdweb.com/<chain-id>/<marketplace-v3-address>/permissions -> Asset
 * By default the Marketplace V3 contract supports any asset (token)
 */
export const SUPPORTED_TOKENS: SupportedTokens[] = [
  {
    chain: polygon,
    tokens: [


      {
        tokenAddress: "0xd5bd4BeEf25b5952a1462e92C73CF8dc5870D683",
        symbol: "DMF",
        icon: "/erc20-icons/dmf.png",
      },
      {
        tokenAddress: "0x1fD0E55C66B42be30793Eae30DbCdB8A8184DF42",
        symbol: "SMF",
        icon: "/erc20-icons/smf.png",
      },
      {
        tokenAddress: "0x6238F788a7291f5D1b4786F7CE0835468cd84fBa",
        symbol: "RPF",
        icon: "/erc20-icons/rpf.png",
      },
      {
        tokenAddress: "0x645Cb7A052b178cbB4eDCF9bc4A28F9Fcc67b5A7",
        symbol: "RGF",
        icon: "/erc20-icons/rgf.png",
      },
      {
        tokenAddress: "0x512037B66BacD1b020AA439e159934095Df8A2C8",
        symbol: "RBF",
        icon: "/erc20-icons/rbf.png",
      },
      {
        tokenAddress: "0x7F8A9B97d252E76919eb70fe48cE78835af7a6D9 ",
        symbol: "RRF",
        icon: "/erc20-icons/rrf.png",
      },
      {
        tokenAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
        symbol: "USDC",
        icon: "/erc20-icons/usdc.png",
      },
      {
        tokenAddress: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        symbol: "USDT",
        icon: "/erc20-icons/usdt.png",
      },
    ],
  },
]

export const NATIVE_TOKEN_ICON_MAP: { [key in Chain["id"]]: string } = {
  [polygon.id]: "/native-token-icons/matic.png",
};
