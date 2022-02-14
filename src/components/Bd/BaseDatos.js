export const CATEGORYS = [
    {
      id: 0,
      name: "TurboKit's",
      category: "Performance",
      description: "Turbokit's and more for instalation plug and play",
    },
    {
      id: 1,
      name:"fuse box/chips and more accessories ",
      category: "Electricity",
      description: "everything you need for car wiring.",
    
    },
    {
      id: 2,
      name: "Electronic's",
      category: "Electronic",
      description: "coils, spark plugs, cables and more.",
    
    },
    
  ];
  
  export function getCategorias() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(CATEGORYS), 1000);
    });}
    
