import { create } from "zustand";

interface NavProps {
  selected: string;
  onSelect: (section: string) => void;
}

const useNavStore = create<NavProps>((set) => ({
  selected: "STAT",
  onSelect: (section) => set({ selected: section }),
}));

export default useNavStore