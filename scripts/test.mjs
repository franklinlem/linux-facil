import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {commands,categories} from '../assets/commands.js';
import {matches,readFavorites} from '../assets/state.js';
assert.equal(commands.length,new Set(commands.map(c=>c.slug)).size);
assert.equal(categories.length,9);
assert(commands.filter(c=>matches(c,{query:'MEMORIA'})).some(c=>c.name==='free'));
assert(commands.filter(c=>matches(c,{query:'arquivos',category:'rede'})).length===0);
assert.equal(commands.filter(c=>matches(c,{favoritesOnly:true,favorites:['ls']})).length,1);
assert.equal(commands.filter(c=>matches(c,{query:'inexistente-xyz'})).length,0);
assert.deepEqual(readFavorites({getItem:()=>'{broken'},['ls']),[]);
assert.deepEqual(readFavorites({getItem:()=> '{"x":1}'},['ls']),[]);
assert.deepEqual(readFavorites({getItem:()=> '["ls","ls","unknown"]'},['ls']),['ls']);
const home=await readFile('dist/index.html','utf8');
assert.equal((home.match(/data-command=/g)||[]).length,commands.length);
for(const c of commands){assert(c.description&&c.syntax&&c.example&&c.note);const html=await readFile('dist/comandos/'+c.slug+'/index.html','utf8');assert(html.includes('rel="canonical"'));assert(html.includes('property="og:url"'));assert(html.includes('<html lang="pt-BR">'));const schema=html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);JSON.parse(schema[1]);assert(html.includes(c.description));if(c.warning)assert(html.includes(c.warning));}
const sitemap=await readFile('dist/sitemap.xml','utf8');assert.equal((sitemap.match(/<url>/g)||[]).length,commands.length+1);
for(const asset of ['app.js','state.js','commands.js','theme.js','style.css','favicon.svg'])assert((await stat('dist/assets/'+asset)).size>0);
console.log('OK: pesquisa, acentos, filtros, favoritos inválidos, catálogo, 36 páginas, Schema.org e sitemap.');
