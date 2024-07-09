import { db, Todos } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Todos).values([
		{ id: 1, title: 'Seed 1', description: 'Seed 1 description', status: 'ACTIVE' },
		{ id: 2, title: 'Seed 2', description: 'Seed 2 description', status: 'COMPLETED' }
	])
}
