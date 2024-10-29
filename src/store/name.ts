import { create } from "zustand";

interface NameProps {
  characterName: string;
  setCharacterName: (name: string) => void;
}

const useCharacterName = create<NameProps>((set) => ({
  characterName: "",
  setCharacterName: (name) => set({ characterName: name }),
}));

export default useCharacterName