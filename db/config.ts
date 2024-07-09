import { defineDb, defineTable, column, NOW } from 'astro:db';

// https://astro.build/db/config
 const Todos = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    title: column.text(),
    description: column.text({optional: true}),
    status: column.text(),
    created: column.date({default: NOW})
  }
 })

export default defineDb({
  tables: {
    Todos
  },
});
