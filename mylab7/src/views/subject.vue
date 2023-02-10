<script>
  import {Plan} from '../stores/plan'
  import {Subject , transectionWeb, loadSubject} from '../stores/Subject'
  import { ref } from 'vue';
  export default {
    data () {
      const plan = Plan();
      return {
        select: { state: 'Plan1', id:1},
        items: plan.getPlanArray().items,
      }
    },
    setup(){
      const data = ref([])
      const plan = Plan()
      const items_arr = plan.getPlanArray();
      const subject = Subject()
      const plan_search = ""
      // console.log(subject)
      const click = async (input) => {
        data.value = await loadSubject(input)
      }
    
      return {items_arr,plan_search, subject , click , data}
    }
  }
</script>
<template>
  <div class="card" style="padding: 10px">
    <h3 class="card-title">รายละเอียดวิชาเรียน</h3>
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
        <div class="col-lg-4 col-md-4 col-xs-6 col-sm-6" >
          <button class="btn btn-primary" style="margin-top : 23px" @click="click(select.id)">
            <i class="fa fa-search"></i> ค้นหารายวิชา
          </button>
        </div>
      </div>
    </div>
    <div v-if="(data.length > 0)">
      <v-card class="mx-auto" max-width="600" v-for="item in data">
        <v-card-title>
            รหัสวิชา : {{ item.code }} ชื่อวิชา : {{ item.name }}
        </v-card-title>
        <v-card-subtitle>
              ครูผู้สอน : {{ item.teacher}}
        </v-card-subtitle>
        <v-card-actions>
              <v-btn
                :icon="item.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="item.show = !item.show"
              ></v-btn> รายละเอียดเพิ่มเติม
        </v-card-actions>
            <v-expand-transition>
              <div v-show="item.show">
                <v-card-text>
                 <div>
                    คำอธิบายรายวิชา <br/>
                    {{ item.description }}
                 </div>
                 <div>
                    ชั้วโมงเรียน {{ item.hour }} ชั่วโมง แบ่งเป็น บรรยาย {{ item.lectures }} ชั่วโมง ปฏิบัติ {{ item.practice }} ขั่วโมง
                 </div>
                </v-card-text>
              </div>
            </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<style>
</style>