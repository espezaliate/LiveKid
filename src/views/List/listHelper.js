export const filterList = (item, search) => {
   const keysToFilter = ['name', 'status', 'tags']

   return Object.entries(item).some(
      ([key, value]) =>
         keysToFilter.includes(key) &&
         String(value)
            .toLowerCase()
            .includes(search)
   )
}
export const mapList = item => {
   console.log(item)
   const tags_display = item.tags.join(', ')
   const cords_display = item.cords.join(', ')
   return { ...item, tags_display, cords_display }
}
