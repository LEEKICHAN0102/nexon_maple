import { create } from "zustand";

interface NavProps {
  selected: string;
  onSelect: (section: string) => void;
}

interface SymProps extends NavProps {}

interface SkillNavProps extends NavProps {}

export const useNavStore = create<NavProps>((set) => ({
  selected: "STAT",
  onSelect: (section) => set({ selected: section }),
}));

export const useSymbolStore = create<SymProps>((set) => ({
  selected: "ARCANE",
  onSelect: (section) => set({ selected: section }),
}));

export const useSkillNavStore = create<SkillNavProps>((set) => ({
  selected: "LINK",
  onSelect: (section) => set({ selected: section }),
}));
