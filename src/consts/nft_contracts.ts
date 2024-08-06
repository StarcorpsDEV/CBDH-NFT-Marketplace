import type { Chain } from "thirdweb";
import { polygon } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0xd4bd30B0C6143f352b1a4d138e4ac231e7200BA7",
    chain: polygon,
    title: "Diamond Fluid Staking Badger",
    thumbnailUrl:
    "/DMFSB_featured_image_small.webp",
      //"https://ipfs.io/ipfs/QmajnnWi5jtvSLU4wmJY85W7P1fYi7SRFpmyDwRCnVZCJA?filename=featured_image.webp",
    type: "ERC721",
  },
  {
    address: "0x37B1c0f1648aA496b04657c8cA639e11731D737b",
    chain: polygon,
    title: "Staked Mater Fluid Staking Badger",
    thumbnailUrl:
    "/SMFSB_featured_image_small.webp",
      //"https://ipfs.io/ipfs/QmZQA59sQ2ssLLiktvSJvh6yfTAZ32x3c5ytnA2VmjwtLL?filename=featured_image.webp",
    type: "ERC721",
  },
  {
    address: "0x5dF79DD2f30269b1065f8D3497919e1E49702305",
    chain: polygon,
    title: "Refined Green Fluid Staking Badger",
    thumbnailUrl:
    "/RGFSB_featured_image_small.webp",
      //"https://ipfs.io/ipfs/QmYGqfmMvtYEDX7mMeKdGFgTgN6gVP63iR4hfnbz9s6UXf?filename=featured_image.webp",
    type: "ERC721",
  },
  {
    address: "0x303060B9ec801D809C660687D1e5BAA540b40B62",
    chain: polygon,
    title: "Refined Purple Fluid Staking Badger",
    thumbnailUrl:
    "/RPFSB_featured_image_small.webp",  
    //"https://ipfs.io/ipfs/QmaJDzSH4WkZhwx2RqpeKLw63ZBWtEnag7W6jn816VPvEg?filename=featured_image.webp",
    type: "ERC721",
  },
  {
    address: "0x8Dbfce5096567259a8839C80c6ca15e169381560",
    chain: polygon,
    title: "Refined Blue Fluid Staking Badger",
    thumbnailUrl:
    "/RBFSB_featured_image_small.webp",
    //"https://ipfs.io/ipfs/QmfEx7Hv2ecwTAxpM1LDmFQANMnvYUR3S4KsUNPdBhEZmG?filename=featured_image.webp",
    type: "ERC721",
  },
  {
    address: "0x852CEbD22E2DedC5844F594D70fd2Bd44704De48",
    chain: polygon,
    title: "Refined Red Fluid Staking Badger",
    thumbnailUrl:
    "/RRFSB_featured_image_small.webp",
      //"https://ipfs.io/ipfs/QmSEfuZvhbtDcvdKjJEE4Nsma7J4qSo5mSV1ZbGMPG8QLK?filename=featured_image.webp",
    type: "ERC721",
  },
];
