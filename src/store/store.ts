import { create } from "zustand";

interface StoreProps {
  ocidState: string;
  setOcid: (ocid: string) => void;
}

const useStore = create<StoreProps>((set) => ({
  ocidState: "",
  setOcid: (ocid) => set({ ocidState: ocid }),
}));

export default useStore