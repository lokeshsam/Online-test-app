import create from "zustand";

const useStore = create((set) => ({
  credentials: "",
  section1: "",
  section2: "",
  section3: "",
  updateCredentials: (prop) => {
    set((state) => ({ credentials: prop }));
  },
  updateSection1: (prop) => {
    console.log(prop);
    set((state) => ({ section1: prop }));
  },
  updateSection2: (prop) => {
    console.log(prop);
    set((state) => ({ section2: prop }));
  },
  updateSection3: (prop) => {
    console.log(prop);
    set((state) => ({ section3: prop }));
  },
}));

export { useStore };
