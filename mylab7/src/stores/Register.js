import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Subject, loadSubjectById, loadSubject} from './Subject'

export const register = async () => {
    const data = [
        // {subject_id : 1},
        // {subject_id : 7},
        // {subject_id : 3}
    ]
    return data
}
  

export const loadRegisterSubject = async(arrReg) => {
    
    let subject_reg = [{}];
    let subject_all = [{}];

    subject_reg = await arrReg
    subject_all = await Subject();
    let data = []
    for (let item of subject_reg){
        for(let value of subject_all){
            if(item.subject_id == value.id){
                data.push(value);
            }
        }
    }
    // console.log(data);
    return data
}

export const addRegister = async (item) => {
    let  subject_all = await Subject();
    console.log(item.subject_id);
    for(let value of subject_all){
        if(value.id == item.subject_id){
            return value
        }
    }

    // console.log(data);
    // let reg = await register();
    // console.log(reg);
    // reg.push({subject_id : item.id})
   
}