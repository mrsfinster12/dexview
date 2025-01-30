import { create } from 'zustand';

const CORS_PROXY = "https://api.allorigins.win/raw?url=";

const useNextHalvingInfoStore = create((set) => ({
  daysUntilHalving: null,
  remainingBlocks: null,
  blockTimeInSeconds: null,
  fetchNextHalvingInfo: async () => {
    try {
      // Get current block height
      const blockCountResponse = await fetch(CORS_PROXY + encodeURIComponent("https://blockchain.info/q/getblockcount"));
      if (!blockCountResponse.ok) {
        throw new Error("Failed to fetch block count");
      }
      const currentBlockHeight = await blockCountResponse.text();

      // Calculate remaining blocks until next halving
      const nextHalvingBlock = Math.ceil(currentBlockHeight / 210000) * 210000;
      const remainingBlocks = nextHalvingBlock - currentBlockHeight;

      // Get current block time
      const blockTimeResponse = await fetch(CORS_PROXY + encodeURIComponent("https://blockchain.info/q/interval"));
      if (!blockTimeResponse.ok) {
        throw new Error("Failed to fetch block time");
      }
      const blockTimeInSeconds = await blockTimeResponse.text();

      // Calculate days until halving
      const secondsUntilHalving = remainingBlocks * blockTimeInSeconds;
      const daysUntilHalving = Math.ceil(secondsUntilHalving / (24 * 60 * 60));

      set({
        daysUntilHalving,
        remainingBlocks,
        blockTimeInSeconds,
      });
    } catch (error) {
      console.error("Error fetching next halving info:", error);
      set({
        daysUntilHalving: null,
        remainingBlocks: null,
        blockTimeInSeconds: null,
      });
    }
  },
}));

export default useNextHalvingInfoStore;