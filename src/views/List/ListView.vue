<template>
   <div class="p-2">
      <div class="field">
         <div class="control">
            <input
               @input="onInput"
               placeholder="Type here..."
               type="text"
               class="input"
            />
         </div>
      </div>
      <Table
         :content="tableContent"
         :config="tableConfig"
         @select="handleRowClick"
      />
      <Modal
         :class="{ 'is-active': showModal }"
         :row="row"
         @formClose="handleFormClose"
         @formSave="handleFormSave"
      />
   </div>
</template>
<script>
import Table from '@/components/Table.vue'
import { computed, onMounted, reactive, toRefs } from 'vue'
import { filterList, mapList } from './listHelper'
import dummy from '@/assets/dummy.json'
import timeout from 'q'
import Modal from './components/Modal'
export default {
   components: { Table, Modal },
   setup() {
      const tableConfig = {
         columns: [
            { key: 'id', header: 'ID' },
            { key: 'name', header: 'Name' },
            { key: 'cords_display', header: 'Cords' },
            { key: 'tags_display', header: 'Tags' },
            { key: 'status', header: 'Status' }
         ]
      }
      const state = reactive({
         items: [],
         initLoading: true,
         search: '',
         timeout,
         showModal: false,
         row: null
      })
      const tableContent = computed(() =>
         state.items.filter(item => filterList(item, state.search)).map(mapList)
      )
      const onInput = ({ target: { value } }) => {
         clearTimeout(timeout)
         state.timeout = setTimeout(() => (state.search = value), 500)
      }
      const mockRequest = () => {
         return new Promise(resolve => {
            setTimeout(() => {
               state.items = dummy
               resolve()
            }, 500)
         })
      }
      onMounted(async () => {
         await mockRequest()
         state.initLoading = false
      })

      const handleRowClick = row => {
         state.row = row
         state.showModal = true
      }

      const handleFormClose = close => {
         state.showModal = close
      }

      const handleFormSave = (name, status, id) => {
         state.items.forEach(e => {
            console.log(e.id, id)
            if (e.id === id) {
               if (name) {
                  e.name = name
                  console.log(state.items)
               }
               if (status) {
                  e.status = status
                  console.log(state.row.status)
               }
            }
         })
}

      return {
         ...toRefs(state),
         tableContent,
         tableConfig,
         onInput,
         handleRowClick,
         handleFormClose,
         handleFormSave
      }
   }
}
</script>
