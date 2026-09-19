# LOGOS — Design System
Editorial · cinematográfica · histórica · contemporânea

Sistema visual da experiência. Não é a landing. É a gramática.

Paleta extraída da direção fotográfica: noite do deserto, lâmpada sobre a pedra, pó no túmulo, osso do manuscrito, bronze da tocha, cinábrio do óxido.

---

## 0. Recusas

Nunca usar: glassmorphism, blur de nav, pills, `rounded-2xl`, sombra de card SaaS, gradiente de botão, azul de link, Inter como voz, check-icons, badges, chips, 3 colunas iguais, progress bar no topo, cursor “blob” de Framer, spring elástico, scale 1.05 em botão.

---

## 1. Cores

Dois campos. Tudo o mais é acento raro.

| Token | Hex | Papel |
|---|---|---|
| `noite` | `#0A0908` | Campo principal. Preto quente, não dark mode. |
| `tinta` | `#151310` | Superfície elevada, fundo de placa. |
| `fuligem` | `#2C2823` | Estrutura, borda quase invisível. |
| `po` | `#9A8B76` | Caption, docket, secundário. |
| `areia` | `#C4B196` | Highlight de matéria, hover de placa. |
| `osso` | `#E8E0D2` | Texto sobre Noite; campo das clareiras. |
| `cal` | `#F3EEE4` | Papel mais claro, preloader. |
| `bronze` | `#B08958` | O Fio, hover, filete. Não é ouro. |
| `lampada` | `#D4B483` | Luz. Nunca preenchimento de UI. |
| `cinabri` | `#8E2F24` | Uma vez na página: o CTA final. |

**Regras**
- Cinábrio no máximo 1 gesto por viewport-filme (o botão da lista).
- Lâmpada só em `box-shadow` / luz radial, nunca em botão.
- Sem branco `#FFF`, sem preto `#000`.
- Links do corpo não ficam azuis: ficam `osso` com filete `bronze`.

Campos: `[data-field="noite"]` e `[data-field="osso"]` invertem `--logos-field` e `--logos-ink`.

---

## 2. Tipografia

| Papel | Família | Origem |
|---|---|---|
| Display / voz | **Newsreader** (opsz máximo) | Produção. Ideal licenciado: PP Editorial New, GT Super Display, Tiempos Headline |
| Sans / razão | **Geist** | UI, deck, corpo. Ideal: Neue Montreal, ABC Diatype |
| Mono / arquivo | **IBM Plex Mono** | Dockets, datas, capítulos, números de cena |

Newsreader carrega a história. Geist impede que a página vire livro de 1998. Mono é a camada da razão.

Evitar: Playfair, Cormorant, Cinzel, Inter, Poppins, Trajan.

---

## 3. Escala tipográfica

| Token | Tamanho | Leading | Tracking | Uso |
|---|---|---|---|---|
| `text-hero` | `clamp(4.25rem, 12.5vw, 11.5rem)` | 0.86 | -0.028em | 1–2 linhas, cenas 01 e 12 |
| `text-scene` | `clamp(2.75rem, 7.2vw, 7.25rem)` | 0.90 | -0.022em | Headlines de cena |
| `text-chapter` | `clamp(1.85rem, 3.4vw, 3.15rem)` | 1.05 | -0.018em | Sumário, teses médias |
| `text-deck` | `clamp(1.125rem, 1.35vw, 1.375rem)` | 1.45 | 0.01em | Subhead, 28–40ch |
| `text-body` | `1.0625rem` | 1.62 | 0.005em | Leitura, 48–62ch |
| `text-body-lg` | `1.1875rem` | 1.58 | 0.004em | Clareiras |
| `text-ui` | `0.8125rem` | 1.3 | 0.10em | Nav, botões, uppercase |
| `text-docket` | `0.6875rem` | 1.4 | 0.14em | Legenda de acervo, uppercase |
| `text-numeral` | `0.75rem` | 1.2 | 0.08em | Datas, 01–12 |

Uma headline por cena. Ghost line: 22% do ink, deslocada 0.04em.

---

## 4. Grid

12 colunas. Uso **assimétrico**. Nunca 3 cards iguais.

```
| m | 1 2 3 4 5 6 7 8 9 10 11 12 | m |
```

- Margem: `--margin-page: clamp(1.5rem, 6vw, 6rem)`
- Gutter: `--gutter: 1.5rem` (1rem no mobile)
- Composições canônicas:
  - **8 / 4** — imagem + docket/texto
  - **5 / 7** — tese + corpo
  - **12** — display cinematográfico
  - **1 + 10 + 1** — clareiras de leitura

O Fio ocupa a margem esquerda, fora das 12 colunas.

Mobile: 4 colunas efetivas, uma voz por vez.

---

## 5. Espaçamento

Não é grid de 8px de produto. É ritmo de edição.

| Token | Valor | Uso |
|---|---|---|
| `hair` | 2px | filete, gap de cursor |
| `caption` | 8px | docket → imagem |
| `verse` | 16px | entre linhas de UI |
| `stanza` | 24px | headline → deck |
| `block` | 40px | bloco interno de cena |
| `scene` | 96px | padding interno de cena |
| `act` | 144px | entre cenas sem pin |
| `silence` | 192px | clareira, fim de ato |

Vertical > horizontal. O silêncio é um token.

---

## 6. Largura máxima

| Token | Valor | Uso |
|---|---|---|
| `frame` | 1680px | palco cinematográfico |
| `editorial` | 1280px | colunas de conteúdo |
| `reading` | 42rem | parágrafo |
| `measure` | 62ch | teto de linha |
| `form` | 28rem | e-mail |
| `plate` | 38rem | relíquia única |

Imagens full-bleed ignoram o frame. Tipo nunca encosta na borda da viewport: sempre `--margin-page`.

---

## 7. Border radius

**Zero.** Pedra talhada, não interface.

- Placas, imagens, seções, botões: `0`
- Input: `0`
- Cursor: `999px` (o único círculo do sistema)
- Exceção óptica: `1px` se um motor de browser exigir anti-alias em filete

Nunca `rounded-md`, `xl`, `2xl`, `full` em botão.

---

## 8. Sombras

Não elevam componentes. Descrevem luz.

| Token | Uso |
|---|---|
| `shadow-none` | default de tudo |
| `shadow-plate` | contato da relíquia sobre a mesa |
| `shadow-contact` | 1px sob tipo pousado em Osso |
| `shadow-lamp` | halo da Cena 07 |
| `shadow-focus` | 1px osso, acessível |

Sem `shadow-lg` colorida. Sem blur de card. Vignette é textura de imagem, não sombra de UI.

---

## 9. Texturas

1. **Grain** — noise SVG, overlay 4.5%, `mix-blend: overlay`. Em cenas Noite e em placas. Não no corpo de texto das clareiras.
2. **Vignette** — radial da noite, 42% nas imagens cinematográficas.
3. **Pó** — só fotográfico (raio no túmulo). Sem partículas CSS.
4. **Papel** — o campo Osso já é o papel. Sem `paper.png` tiling.

Textura é atmosfera. Se o olho lê “filtro Instagram”, reduza.

---

## 10. Tratamento de imagens

Toda imagem é **placa de acervo**, não hero de agência.

- `object-fit: cover`, scale inicial 1.04
- saturação 0.82, contraste 0.96 — um pigmento sobrevive
- grain + vignette
- docket obrigatório (`ACERVO 0X  ·  MATÉRIA  ·  LUGAR`)
- crop de fragmento antes de monumento inteiro
- hover: crop abre para 1.085, sem brightness

**Papel das imagens de direção**

| Imagem | Uso no sistema | Proibido |
|---|---|---|
| Pedra sozinha à noite | Limiar, Cena 12 (fantasma) | card, repeating bg |
| Túmulo / pó / manuscrito | Arquivo, insight, palimpsesto | hero com texto branco no meio |
| Cabeça + mapa + rolo | Cena LOGOS / segunda camada | still-life de e-commerce |
| Pedra inscrita (Göbekli) | “Isto não é um símbolo” | ícone |
| Colunas egípcias à tocha | Escala, profundidade | postcard |
| Zigurate ao crepúsculo | Escala histórica | fundo de módulo |
| Santuário grego ao sol | Usar pouco: é o clichê mais fácil | hero |
| Panorama de civilizações | **Uma vez**, cena de escala mundial | padrão, card, looping |
| Vale + figuras humanas | Lente Humano / origem | stock de “ancestrais” |

Panorama de todos os templos juntos é um plano de **vertigem**, não a identidade. Se repetir, a marca vira medley.

---

## 11. Botões

Não há botão preenchido.

Anatomia: label uppercase Geist + filete inferior 1px + traço à direita que se alonga no hover.

| Variante | Cor | Onde |
|---|---|---|
| `logos-btn` | ink / hover bronze | nav, secundários |
| `logos-btn-cinabri` | cinábrio / hover lâmpada | **apenas** Entrar na lista |

Altura: conteúdo + 6px de filete. Sem `h-12`. Sem ícone de seta SVG gorda. Focus: outline osso 1px, offset 6px.

---

## 12. Cards

Não existem cards. Existem **placas**.

`.logos-plate`
- radius 0
- fundo `tinta`
- sombra de contato
- imagem full
- docket no interior, 12px da borda
- rotação máxima ±2.5°, só quando a direção pedir “pousado à mão”
- nunca título + parágrafo + botão dentro da placa (isso é card de curso)

Hover da placa é da imagem, não da caixa.

---

## 13. Linhas divisórias

| Tipo | Forma |
|---|---|
| `logos-rule` | 1px, cor `--logos-line` (fuligem+bronze ou osso 14%) |
| `logos-rule-thread` | 1px vertical bronze, o Fio |
| Quebra de campo | troca Noite/Osso, sem linha |

Nunca `hr` cinza. Nunca linha pontilhada. Nunca divider com ícone no meio.

---

## 14. Indicadores de progresso

O progresso **é** o Fio.

- Trilha fixa 1px na margem esquerda, bronze 18%
- Fill bronze 100%, `transform-origin: top`, altura = scroll progress
- Sem números 0–100
- Sem barra no topo
- Sem dots de carrossel
- Marca de cena: `07 / LOGOS` em mono, opcional, canto inf. direito, some em 400ms

Preloader não é progresso: é ritual (`LOGOS` a partir de um traço).

---

## 15. Cursor

Desktop, rato fino.

- Ponto 6px `osso`, `mix-blend: exclusion`
- Anel 28px, 1px, aparece só sobre placas e CTA (`is-hot`)
- Sobre cinábrio: anel cinábrio
- Lerp 0.2 no anel, 1.0 no ponto
- Off: mobile, touch, `prefers-reduced-motion`, `prefers-reduced-data`

Sem blob, sem palavra “view” girando, sem trail.

---

## 16. Navegação

Fixa, transparente, sem blur, sem fundo. Altura 72px.

Esquerda: wordmark `LOGOS`, Newsreader, 0.95rem, tracking 0.16em.  
Direita: `Lista` + `Instagram`, `text-ui`.

Não muda de cor para “gritar”. Herda `--logos-ink` do campo. Uma linha 1px pode nascer sob o nav só depois de sair do limiar (opacity 0 → 14%).

Mobile: os mesmos três elementos. Sem hamburger até existir mais rotas.

---

## 17. Hover

180ms, `ease-museum`.

| Alvo | Hover |
|---|---|
| Wordmark | ink → bronze |
| Botão | cor bronze + traço alonga 1.6× |
| Placa | crop 1.04 → 1.085, docket sobe 6px |
| Link de corpo | filete bronze desenha L→R |
| Lente do método | numeral bronze, o resto não escala |
| Input | filete 40% ink |

Proibido: `opacity: 0.8` em texto, `scale(1.05)` no botão, underline nativo grosso.

---

## 18. Active

- Botão: `translateY(1px)`, cor `osso` (em Noite) — o gesto de pressionar uma placa
- Nav: sem active “página atual” com pill
- Form submit: o label vira `Arquivando…`, depois dissolve no colofão
- Sem ripple, sem overlay escuro, sem press scale bounce

---

## 19. Animações

Três velocidades, só três.

| Nome | Tempo | Ferramenta | Uso |
|---|---|---|---|
| Tátil | 180ms | CSS | hover, focus, cursor |
| Editorial | 700ms | Framer Motion | entrada de caption, docket, form |
| Geológica | scrub + 1100ms | GSAP ScrollTrigger | pin, palimpsesto, Fio, crop |

Eases: `--ease-museum` (pouso), `--ease-enter`, `--ease-exit`. Sem `spring` de Framer no scroll. Sem bounce. Preloader: 900–1600ms, `ease-enter`.

Reduced motion: durações → 1ms; pin vira corte estático; Fio já desenhado.

---

## 20. Transições

| De → para | Gesto |
|---|---|
| Preloader → Limiar | folha Osso rasga para cima, 700ms |
| Noite → Osso | campo dissolve 500ms, tipo já na cor nova |
| Cena → cena | saída pelo topo + entrada defasada 30% (nada nasce junto) |
| Palimpsesto | máscara, não fade |
| LOGOS wordmark grande → nav | match-cut de escala, mesmo tracking |
| Form → sucesso | dissolve do campo, 700ms, texto de colofão |
| Rota futura | corte de folha 400ms. Sem fade site-wide |

Lenis `lerp: 0.075`. Peso de pedra, não gelatina.

---

## Implementação

```css
@import "./design-system/tokens.css";
@import "./design-system/utilities.css";
```

JS/GSAP: `design-system/motion.ts`

Tailwind: tokens `@theme` geram `bg-noite`, `text-osso`, `font-display`, `text-hero`, `p-scene`, `max-w-reading`, `duration-tactile`, `ease-museum`.
