import { create } from "zustand";

interface OcidProps {
  ocidState: string;
  setOcid: (ocid: string) => void;
}

const useOcid = create<OcidProps>((set) => ({
  ocidState: "",
  setOcid: (ocid) => set({ ocidState: ocid }),
}));

export default useOcid