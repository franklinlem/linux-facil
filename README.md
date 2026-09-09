# Linux Fácil

Site estático em HTML5, CSS3 e JavaScript puro. 36 comandos, nove categorias, pesquisa instantânea com normalização de acentos, favoritos locais, tema claro/escuro e páginas HTML individuais. Nenhum comando Linux do catálogo é executado. Não há login, formulário de credenciais, analytics ou requisições a servidores SSH.

## Desenvolvimento

Requer Node.js 20+ para gerar as páginas e Python 3 para a prévia. Sem dependências npm.

- `npm run build`: gera `dist/`.
- `npm run dev`: serve `dist/` em http://localhost:4173.
- `npm test`: valida dados, pesquisa, armazenamento e HTML gerado.

O catálogo fica em `assets/commands.js`; a interface, em `assets/app.js`; filtros e leitura de favoritos, em `assets/state.js`; o gerador, em `scripts/build.mjs`.

## Publicação e SEO

Publique o conteúdo de `dist/` em hospedagem estática com suporte a diretórios index.html e página 404.html. Para trocar de domínio, gere com `SITE_URL=https://seu-dominio.example npm run build`. O gerador usa essa origem em canonical, Open Graph, Schema.org e sitemap. Configure HTTPS e cache no host (HTML com revalidação, assets com cache curto enquanto não houver nomes com hash). A hospedagem privada de prévia não permite indexação pública; para indexar, publique em domínio acessível aos mecanismos de busca.

Cada comando possui HTML completo sem depender de JavaScript. Sem JavaScript, os links e o conteúdo continuam disponíveis; filtros e favoritos exigem JavaScript. Nenhuma imagem social foi criada. Open Graph usa título, descrição, URL, tipo e idioma.

## Publicidade

Os espaços `.ad-slot` são apenas reservas estáveis, sem scripts nem rastreamento. Para ativar AdSense, obtenha aprovação da conta e do site, substitua as reservas por unidades responsivas usando seus próprios IDs, configure ads.txt conforme o painel e implemente as exigências de consentimento e privacidade aplicáveis. Não há receita ou anúncios ativos por padrão.

## Evolução para PWA

A arquitetura já separa conteúdo, interface, estado e geração estática. Para ativar PWA futuramente: adicione manifest.webmanifest com ícones 192/512 e maskable, registre service worker por HTTPS, versione caches de assets, use network-first para HTML e uma página offline. Defina expiração e limpeza de versões antigas. O projeto atual não registra service worker nem promete funcionamento offline ou instalação.

## Validação

Testes automatizados cobrem pesquisa, filtros, favoritos e integridade das páginas/SEO. Revisão visual automatizada de navegador e auditoria Lighthouse não foram executadas. A integração opcional WebMCP é detectada em tempo de execução; não havia contexto de validação compatível disponível. Google Fonts tem fallback de fontes de sistema e display=swap.
