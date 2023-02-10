import { ref } from 'vue'
import { defineStore } from 'pinia'
// import {plan} from './plan'

export const transectionWeb = async ()=>{
    
    return 'test'
}


export const Subject = async ()=>{
    const subject_data = [
        {id : 1, name: "Subject1", code: "1111111111", description:"กกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกกก", hour: 50, lectures: 25, practice: 25, teacher:"Teacher1", plan_id: 1},
        {id : 2, name: "Subject2", code: "2222222222", description:"ขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขขข", hour: 50, lectures: 25, practice: 25, teacher:"Teacher2", plan_id: 2},
        {id : 3, name: "Subject3", code: "3333333333", description:"คคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคคค", hour: 50, lectures: 25, practice: 25, teacher:"Teacher3", plan_id: 2},
        {id : 4, name: "Subject4", code: "4444444444", description:"งงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงงง", hour: 50, lectures: 25, practice: 25, teacher:"Teacher4", plan_id: 3},
        {id : 5, name: "Subject5", code: "5555555555", description:"จจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจจ", hour: 50, lectures: 25, practice: 25, teacher:"Teacher5", plan_id: 4},
        {id : 6, name: "Subject6", code: "6666666666", description:"ฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉฉ", hour: 50, lectures: 25, practice: 25, teacher:"Teacher6", plan_id: 1},
        {id : 7, name: "Subject7", code: "7777777777", description:"ชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชชช", hour: 50, lectures: 25, practice: 25, teacher:"Teacher7", plan_id: 1},
        
    ]

   
    return subject_data
}
  

export const loadSubject = async(plan) => {
    const subject = await Subject();
    let subjectView = []
    for (let item of subject){
        if(item.plan_id == plan){
            item.show = false;
            subjectView.push(item);

        }
        
    }
    return subjectView
}

export const loadSubjectById = async(id) => {
    const subject = await Subject();
    let subjectView = []
    for (let item of subject){
        if(item.id == id){
            subjectView.push(item);
            console.log(subjectView);
        }
    }
    return subjectView
}