import { create } from "zustand";

interface NavProps {
  selected: string;
  onSelect: (section: string) => void;
}

interface SkillNavProps {
  selected: string;
  onSelect: (section: string) => void;
}

export const useNavStore = create<NavProps>((set) => ({
  selected: "STAT",
  onSelect: (section) => set({ selected: section }),
}));

export const useSkillNavStore = create<SkillNavProps>((set) => ({
  selected: "LINK",
  onSelect: (section) => set({ selected: section }),
}));
