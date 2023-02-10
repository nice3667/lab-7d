<script>
   import { Plan } from '../stores/plan'
   import { ref } from 'vue'
   import { loadSubject } from '../stores/Subject'
   import {loadRegisterSubject, addRegister, register} from '../stores/Register'
   export default {
    data(){
      const plan = Plan();
      return {
        select: { state: 'Plan1', id:1},
        items: plan.getPlanArray().items,
      }
    },
    setup (){
      let data = []
      const Subject = ref([])
      const plan = Plan()
      let registerArr = ref([])
      let registered = ref(true)
     
      const loadsubjectbtplan = async (input) => {
        registered.value = false
        Subject.value = await loadSubject(input)
        // console.log(Subject.value)
      }
      const loadRegisterData = async () => {
        registered.value = true
        registerArr.value = register()
        data = await loadRegisterSubject(registerArr.value)
      }
      const addSubject = async (input) => {
        let item = await input
        console.log(item)
        data.push(input)
        
        // registered.value = true
        // let status = await addRegister(input)
        // if(status.message == 'success'){
        //   data.value = await loadRegisterSubject(status.res)
        // }
      }
      const wSubject = async(input) => {
       
        let index = data.findIndex( item => item.id == input.id);
        console.log(index);
        if(index != -1){
          data.splice(index, 1);
        }
      }
      return {data, plan, loadsubjectbtplan, loadRegisterData, registered, Subject, addSubject, wSubject}
    }
   }
</script>
<template>
  <div class="card" style="padding: 10px">
    <h3 class="card-title">ลงทะเบียนเรียน</h3>
    <div class="card-body">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-xs-6 col-sm-6">
            <div class="form-group">
              <label>เลือกแผนการเรียน</label>
              <v-select
                v-model="select"
                :hint="`${select.state}`"
                :items="items"
                item-title="state"
                item-value="id"
                label="Select"
                persistent-hint
                return-object
                single-line
              ></v-select>
            </div>
        </div>
        <div class="col-lg-8 col-md-8 col-xs-8 col-sm-8" >
          <button class="btn btn-primary" style="margin-top : 23px" @click="loadsubjectbtplan(select.id)">
            <i class="fa fa-search"></i> ค้นหารายวิชา
          </button>
          
          <button class="btn btn-success" style="margin-top : 23px; margin-left:10px" @click="loadRegisterData()">
            <i class="fa fa-search"></i> แสดงผลการลงทะเบียน
          </button>

          <!-- <button class="btn btn-warning" style="margin-top : 23px; margin-left:10px" @click="addSubject()">
            <i class="fa fa-search"></i> เพิ่มวิชาเรียน
          </button> -->
        </div>
     
      </div>
      <div class="row" v-show="!registered">
        <div class="col-lg-12">
          <div class="table-responsive">
            <label>รายวิชาที่ทั้งหมด</label>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>รหัสวิชา</th>
                  <th>ชื่อวิชา</th>
                  <th>อาจารย์ผู้สอน</th>
                  <th>เพิ่มวิชาเรียน</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item1 in Subject">
                  <td>{{ item1.code }}</td>
                  <td>{{ item1.name }}</td>
                  <td>{{ item1.teacher }}</td>
                  <td>
                    <button type="button" class="btn btn-info btn-sm" @click="addSubject(item1)"><i class="fa fa-plus"></i> เพิ่มวิชาเรียน </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row" v-show="registered && data.length > 0">
        <div class="col-lg-12">
          <div class="table-responsive">
            <label>รายวิชาที่ลงทะเบียน</label>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>รหัสวิชา</th>
                  <th>ชื่อวิชา</th>
                  <th>อาจารย์ผู้สอน</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in data">
                  <td>{{ item.code }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.teacher }}</td>
                  <td>
                    <button type="button" class="btn btn-danger btn-sm" @click="wSubject(item)"> ถอนวิชาเรียน</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>