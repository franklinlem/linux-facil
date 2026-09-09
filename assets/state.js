export const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
export function matches(command,{query='',category='all',favoritesOnly=false,favorites=[]}={}) {
 return (category==='all'||command.category===category)&&(!favoritesOnly||favorites.includes(command.slug))&&normalize(query).split(/\s+/).every(word=>normalize([command.name,command.category,command.description,command.syntax,command.note].join(' ')).includes(word));
}
export function readFavorites(storage,validSlugs) {
 try {const value=JSON.parse(storage.getItem('linux-facil-favorites')||'[]');return Array.isArray(value)?[...new Set(value.filter(x=>validSlugs.includes(x)))]:[];}catch{return [];}
}
