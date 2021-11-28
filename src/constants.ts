
export interface Combo {
    name: string;
    color: string[]
}

export const colors: string[] = ['White', 'Black', 'Blue', 'Red', 'Green'];
export const combos: Combo[] = [
    { name: 'Pick a color', color: [] },
    { name: 'All the colors', color: ['White', 'Black', 'Blue', 'Red', 'Green'] },
    { name: 'Mono White', color: ['White'] },
    { name: 'Mono Blue', color: ['Blue'] },
    { name: 'Mono Red', color: ['Red'] },
    { name: 'Mono Black', color: ['Black'] },
    { name: 'Mono Green', color: ['Green'] },
    { name: 'Azorius', color: ['White', 'Blue'] },
    { name: 'Boros', color: ['Red', 'White'] },
    { name: 'Dimir', color: ['Blue', 'Black'] },
    { name: 'Golgari', color: ['Black', 'Green'] },
    { name: 'Gruul', color: ['Red', 'Green'] },
    { name: 'Izzet', color: ['Blue', 'Red'] },
    { name: 'Orzhov', color: ['White', 'Black'] },
    { name: 'Rakdos', color: ['Black', 'Red'] },
    { name: 'Selesnya', color: ['White', 'Green'] },
    { name: 'Simic', color: ['Blue', 'Green'] },
    { name: 'Abzan', color: ['White', 'Black', 'Green'] },
    { name: 'Bant', color: ['White', 'Blue', 'Green'] },
    { name: 'Esper', color: ['White', 'Blue', 'Black'] },
    { name: 'Grixis', color: ['Blue', 'Black', 'Red'] },
    { name: 'Jeskai', color: ['White', 'Blue', 'Red'] },
    { name: 'Jund', color: ['Black', 'Red', 'Green'] },
    { name: 'Mardu', color: ['White', 'Black', 'Red'] },
    { name: 'Naya', color: ['White', 'Red', 'Green'] },
    { name: 'Sultai', color: ['Blue', 'Black', 'Green'] },
    { name: 'Temur', color: ['Blue', 'Red', 'Green'] },
    { name: 'Glint', color: ['Black', 'Green', 'Blue', 'Red'] },
    { name: 'Dune', color: ['White', 'Black', 'Green', 'Red'] },
    { name: 'Ink', color: ['White', 'Green', 'Blue', 'Red'] },
    { name: 'Witch', color: ['White', 'Black', 'Green', 'Blue'] },
    { name: 'Yore', color: ['White', 'Black', 'Blue', 'Red'] }
];


