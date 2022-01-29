<template>
   <div class="modal">
      <div class="modal-background has-background-grey" @click="handleCancel"></div>
      <div class="modal-card">
         <header class="modal-card-head">
            <p class="modal-card-title is-size-3">Edit Data</p>
            <button
               class="delete is-medium"
               aria-label="close"
               @click="handleCancel"
            ></button>
         </header>
         <section class="modal-card-body">
            {{ row }}
         </section>
         <footer class="modal-card-foot is-flex is-justify-content-center">
            <button class="button is-success" @click="handleSave">
               Save changes
            </button>
            <button class="button" @click="handleCancel">Cancel</button>
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
   emits: ['cancel'],
   setup(props, { emit }) {
      const handleSave = () => console.log(props.row)
      const handleCancel = () => emit('cancel', false)

      return { handleSave, handleCancel }
   }
}
</script>
