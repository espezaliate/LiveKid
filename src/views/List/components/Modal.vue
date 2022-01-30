<template>
   <div class="modal">
      <div
         class="modal-background has-background-grey"
         @click="handleClose"
      ></div>
      <div class="modal-card ">
         <header class="modal-card-head">
            <p class="modal-card-title is-size-3">Edit Data</p>
            <button
               class="delete is-medium"
               aria-label="close"
               @click="handleClose"
            ></button>
         </header>
         <section class="modal-card-body">
            <input
               class="input is-size-5 text-align"
               :value="row ? row.name : ''"
               ref="nameInput"
               @input="storeNameChange"
            />
            <div class="select mt-5 is-size-5">
               <select
                  :value="row ? row.status : ''"
                  @change="storeStatusChange"
               >
                  <option>{{ row ? row.status : '' }}</option>
                  <option>{{
                     row
                        ? row.status === 'verified'
                           ? 'unverified'
                           : 'verified'
                        : ''
                  }}</option>
               </select>
            </div>
         </section>
         <footer class="modal-card-foot is-flex is-justify-content-center">
            <button
               class="button is-success is-size-5 mr-5"
               @click="handleSave"
            >
               Save
            </button>
            <button class="button is-size-5" @click="handleClose">
               Cancel
            </button>
         </footer>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      row: {
         type: Object,
         default: () => ({})
      }
   },
   setup(props, { emit }) {
      let name = ''
      let status = ''
      const storeNameChange = e => {
         name = e.target.value
      }
      const storeStatusChange = e => {
         status = e.target.value
      }
      const handleSave = () => emit('formSave', name, status, props.row.id)
      const handleClose = () => emit('formClose', false)
      return { handleSave, handleClose, storeNameChange, storeStatusChange }
   }
}
</script>
