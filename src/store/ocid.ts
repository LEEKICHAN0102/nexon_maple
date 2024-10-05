import { create } from "zustand";

interface StoreProps {
  ocidState: string;
  setOcid: (ocid: string) => void;
}

const useOcid = create<StoreProps>((set) => ({
  ocidState: "",
  setOcid: (ocid) => set({ ocidState: ocid }),
}));

export default useOcid