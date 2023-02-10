import { ref } from 'vue'
import { defineStore } from 'pinia'

export const Plan = defineStore('plan', () => {
    const plan = [
        {name : "Plan1", id:1},
        {name : "Plan2", id:2},
        {name : "Plan3", id:3},
        {name : "Plan4", id:4},
    ]
       
    const getPlanArray = () =>{

        let dataPlan = {
            select : "",
            items : [{state : ""}]
        }

        dataPlan.select= { state: 'Plan1'};
        for (let item of plan){
            let set = { state: item.name, id : item.id}
            dataPlan.items.push(set);

        }
        // console.log(dataPlan);
        return dataPlan;
    }

 
    
    return { plan, getPlanArray}
  })