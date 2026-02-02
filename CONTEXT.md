# AI CONTEXT & SHOOTING RANGE SPECIFICATION

Tento soubor definuje pravidla, fyzická omezení a designový jazyk pro generování střeleckých závodů (LOS/Tactical) v tomto repozitáři.

---

## 1. FYZICKÁ OMEZENÍ (HARDWARE)
Střelnice je tunelová, vnitřní. Návrh situací musí respektovat tuto geometrii:

### A. Terčový systém (4 Pojezdové dráhy)
Dispozice terčů je definována čtyřmi fixními kolejnicemi (Lanes 1-4).
* **Osa X (Šířka):** FIXNÍ. Nemůžeme měnit boční rozestup mezi drahami. Terče jsou vždy v osách těchto drah.
* **Osa Z (Hloubka):** VARIABILNÍ. Každý terč lze poslat do libovolné vzdálenosti (3m až 25m).
* **Důsledek pro design:**
    * *Lze:* Vytvářet hloubkové formace (V-formace, Echelon, Cik-cak).
    * *Nelze:* Dát dva terče těsně vedle sebe (dotýkající se rameny), pokud nejsou na sousedních drahách.

### B. Vybavení (Props)
* **2x V-TAC zástěna:** Vysoká bariéra s různými otvory pro střelbu.
* **1x Stůl:** Pro start vsedě, odkládání zbraně nebo jako nízký kryt.
* **1x Židle:** Pro start vsedě.
* **Volitelné:** Barely, pásky na zemi (startovní čáry).

### C. Bezpečnost
* **Směr střelby:** Pouze KOLMO do lapačů (0° ± 15°). Žádná střelba do bočních stěn.
* **Úhly:** Dodržovat bezpečnostní úhel 180°.

---

## 2. DESIGNOVÁ FILOSOFIE (GAMEPLAY)
Každý závod je "Mini-kampaň" se 4 situacemi (Stages). Cílem není jen rychlost, ale "Cognitive Load" (zatížení hlavy).

### A. Struktura kampaně
1.  **Stage 1 (Intro):** Seznámení s prostředím, omezený prostor (např. Vlak, Výtah, Skener).
2.  **Stage 2 (Pohyb):** Dynamická situace, běh vpřed/vzad, střelba za pohybu.
3.  **Stage 3 (Mechanika):** Specifický "Twist" nebo handicap (Slabá ruka, Omezená munice, Paměťový test).
4.  **Stage 4 (Finále):** Komplexní situace, volba postupu, No-Shoot terče, příběhové vyvrcholení.

### B. Knihovna osvědčených mechanik (Re-use these!)
* **"Identity Check" (Poker/Symboly):** Střelec musí identifikovat cíl podle vylosované karty/symbolu (např. střílet jen na "Srdce").
* **"The Hacker" (Handicap):** Jedna ruka je vyřazena (zranění/hack), střelba pouze silnou/slabou rukou.
* **"Hard Target" (Armor):** Boss vyžaduje více zásahů (např. 4 rány) nebo specifickou zónu (hlava).
* **"Start Positions":** Zády k terčům, vsedě na židli, zbraň na stole, ruce nad hlavou ("Vzdávám se").
* **"Management munice":** Start s omezeným počtem nábojů (vynucené přebití).

---

## 3. TECHNICKÁ SPECIFIKACE (HTML/CSS)
Používáme formát **"Smart Hybrid"**. Jeden soubor musí fungovat perfektně na monitoru i na papíře.

### A. CSS Stylování
* **@media screen:**
    * Použij tématické barvy a fonty (Cyberpunk = Neon/Monospace, Western = Sepia/Serif, Horror = Červená/Grunge).
    * Tmavé pozadí, stíny, atmosféra.
* **@media print:**
    * `background: white !important; color: black !important;`
    * Skrýt dekorace (`display: none` pro patičky, záhlaví).
    * `font-family: sans-serif;` (pro čitelnost).
    * **Kritické:** `.stage-box { break-before: page; border: 2px solid black; }` (Každá situace na novou A4).
    * SVG nákresy musí být černobílé a s vysokým kontrastem.

### B. SVG Nákresy (Maps)
* Pohled shora (Top-down).
* Zobrazuj dráhy terčů (čtyři linie), aby bylo jasné jejich rozmístění.
* **Legenda:**
    * Obdélník = Terč.
    * Kruh = Startovní pozice.
    * Tlustá čára = Kryt/Zástěna.
    * Přerušovaná šipka = Pohyb střelce.
    * Tenká/Tečkovaná čára = Linie střelby.

---

## 4. TEMPLATE PRO NOVÝ ZÁVOD
Při generování použij tuto kostru:

```html
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>NÁZEV ZÁVODU</title>
    <style>
        /* THEME STYLES (Screen) */
        body { ... }
        
        /* PRINT STYLES (Paper) */
        @media print {
            body { background: white; color: black; }
            .stage-box { break-before: page; border: 2px solid black; box-shadow: none; }
            svg { border: 1px solid #ccc; }
        }
    </style>
</head>
<body>
    <header>
        <h1>NÁZEV ZÁVODU</h1>
        <div class="mission-brief">Příběhové intro...</div>
        <div class="meta-info">Datum, Lokace, Pravidla</div>
    </header>

    <div class="rules-box">
        <h3>BEZPEČNOSTNÍ PROTOKOLY</h3>
        <ul>...</ul>
    </div>

    <div class="stage-box">
        <h2>01: NÁZEV SITUACE</h2>
        <div class="status-bar">VZDÁLENOST || TERČE || TYP</div>
        <div class="legend">Flavor text (příběh)...</div>
        <ul>
            <li><strong>START:</strong> ...</li>
            <li><strong>PROCEDURA:</strong> ...</li>
        </ul>
        <svg>
            </svg>
    </div>
    
    </body>
</html>
