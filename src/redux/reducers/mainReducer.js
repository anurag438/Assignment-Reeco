import { ActionTypes } from "../action-types";

const initalState = [
    {
      id: 1,
      productName: "Chicken",
      brand: "Hormel Black",
      price: "60.67",
      quantity: "1",
      total: 0,
      status: "",
    },
    {
      id: 2,
      productName: "Mutton",
      brand: "Hormel Black",
      price: "70.67",
      quantity: "2",
      total: 0,
      status: "",
    },
    {
      id: 3,
      productName: "Fish",
      brand: "Hormel Black",
      price: "80.67",
      quantity: "3",
      total: 0,
      status: "",
    },
    {
      id: 4,
      productName: "Prawns",
      brand: "Hormel Black",
      price: "90.67",
      quantity: "4",
      total: 0,
      status: "",
    },
    {
      id: 5,
      productName: "Crabs",
      brand: "Hormel Black",
      price: "60.67",
      quantity: "5",
      total: 0,
      status: "",
    },
    {
      id: 6,
      productName: "Squids",
      brand: "Hormel Black",
      price: "80.67",
      quantity: "6",
      total: 0,
      status: "",
    },
    {
      id: 7,
      productName: "Chicken",
      brand: "Hormel Black",
      price: "60.67",
      quantity: "1",
      total: 0,
      status: "",
    },
    {
      id: 8,
      productName: "Mutton",
      brand: "Hormel Black",
      price: "70.67",
      quantity: "2",
      total: 0,
      status: "",
    },
    {
      id: 9,
      productName: "Fish",
      brand: "Hormel Black",
      price: "80.67",
      quantity: "3",
      total: 0,
      status: "",
    },
    {
      id: 10,
      productName: "Prawns",
      brand: "Hormel Black",
      price: "90.67",
      quantity: "4",
      total: 0,
      status: "",
    },
  ]

  export const ctaReducer = (state = initalState,{type,payload})=>{
    switch(type){
        case ActionTypes.AVAILABLE:
            return state.map((item)=>{
              if(item.id===payload){
                return {...item,status:"Approved"}
              }else{
                return item
              }
               
            });
        case ActionTypes.MISSING:
          return state.map((item)=>{
            if(item.id===payload){
              return {...item,status:"Missing"}
            }else{
              return item
            }
             
          });
        case ActionTypes.MISSING_URGENT:
          return state.map((item)=>{
            if(item.id===payload){
              return {...item,status:"Missing-Urgent"}
            }else{
              return item
            }
             
          });
          case ActionTypes.EDIT_DATA:
            return state.map((item)=>{
              if(item.id === payload.id){
                return {...item,...payload}
              }else{
                return item
              }
            });
        default :
        return state;
    }
  }
