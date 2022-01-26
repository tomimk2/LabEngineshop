export const PRODUCTS = [
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
  
  export function getProductos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(PRODUCTS), 2000);
    });}
    export function getItem() {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(PRODUCTS), 5000);
      });
  }