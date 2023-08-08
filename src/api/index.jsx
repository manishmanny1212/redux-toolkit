import { Chance } from "chance";


const chance = Chance();

 export const fackUserdata=()=>{
    return chance.name({middle:true})
}

const apiData = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ];
  
  // Simulated fetch function
   export  const fetchData = () => {
    return Promise.resolve(apiData);
  };
// fackUserdata()