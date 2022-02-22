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
      img: "https://www.shopdap.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/0/6/06e-905-115-f-bos-.jpg",
    
    },
    
  ];
  
  export function getCategorias() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(CATEGORYS), 1000);
    });}
    
