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
    
    export const PRODUCTS =[
      {
        "id": 1,
        "name": "turbokit",
        "price": "$400.000",
        "stock": 100,
      
      },
      {
        "id": 2,
        "name": "bobinas de encendido",
        "price": "$10.000",
        "stock": 102,
      }
    ]
    export function getproductos() {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(PRODUCTS), 2000);
      });}