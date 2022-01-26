export const PRODUCTS = [
    {
      id: 0,
      name: "TurboKit's",
      category: "Performance",
      description: "Turbokit's and more for instalation plug and play",
      descriptionLong: "Turbo kit especial para honda civic k20/k24",
      price:"$400.000",
      img: "https://sc04.alicdn.com/kf/Haf7467483fcb4fe78b2f70fc4d013463c",
    },
    {
      id: 1,
      name:"fuse box/chips and more accessories ",
      category: "Electricity",
      description: "everything you need for car wiring.",
      descriptionLong: "Ramal Cableado completo Fueltech 450",
      price:"$30.000",
      img: 'https://http2.mlstatic.com/D_NQ_NP_720569-MLA31127464514_062019-O',
    },
    {
      id: 2,
      name: "Electronic's",
      category: "Electronic",
      description: "coils, spark plugs, cables and more.",
      descriptionLong: "Bobinas de encendido individuales rojas",
      price:"$10.000",
      img: "https://wkmotorsport.com/wp-content/uploads/2020/09/Bobinas-R8-2.0T-03",
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