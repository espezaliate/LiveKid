<template>
   <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
         <header class="modal-card-head">
            <p class="modal-card-title is-size-3">Edit Data</p>
            <button class="delete is-medium" aria-label="close"></button>
         </header>
         <section class="modal-card-body">
            {{ row }}
         </section>
         <footer class="modal-card-foot is-flex is-justify-content-center">
            <button class="button is-success is-right">Save changes</button>
            <button class="button">Cancel</button>
         </footer>
      </div>
   </div>
</template>

<script>
export default {
   props: ['row']
}
</script>
