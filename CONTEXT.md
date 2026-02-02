# AI CONTEXT & GENERATION GUIDELINES

Tento soubor slouží jako "systémová paměť" pro generování nových střeleckých závodů pomocí LLM (Gemini).

## 1. Fyzická omezení střelnice (HARD CONSTRAINTS)
Při návrhu situací (Stage) **MUSÍŠ** respektovat technické limity pojezdové dráhy:
* **Prostor:** Tunelová střelnice.
* **Terčový systém:** * K dispozici jsou **4 pojezdové dráhy** (Lanes).
    * **Boční rozestup (X-osa):** FIXNÍ (dáno kolejnicemi). Terče nelze posouvat k sobě ani od sebe do stran.
    * **Hloubka (Z-osa):** VARIABILNÍ pro každý terč nezávisle (3m až 25m).
    * *Důsledek:* Můžeme vytvářet hloubkové formace (V-formace, Echelon), ale ne hluky terčů u sebe.
* **Bezpečnost:** Střelba je povolena **POUZE KOLMO** do lapačů (směr 0°). Žádné velké úhly do stran.
* **Vybavení (Props):**
    * 2x V-TAC zástěna (vysoká bariéra s otvory).
    * 1x Stůl.
    * 1x Židle.
    * Barely (volitelné).
    * *Poznámka:* Variabilitu tvoříme pohybem střelce a umisťováním krytů, nikoliv posouváním terčů do stran.

## 2. Designová filosofie (STYLE GUIDE)
Každý závod je "Mini-kampaň" se 4 situacemi (Stages).
* **Narativ:** Silný příběh propojující situace (Intro -> Akce -> Zvrat -> Finále).
* **Mechaniky:** Upřednostňujeme kognitivní zátěž a procedury před čistou rychlostí:
    * Střelba slabou rukou / silnou rukou.
    * Identifikace cílů (barvy, symboly, karty).
    * Management munice (např. start s 6 náboji).
    * Fyzický kontakt (nošení břemene, start vsedě, zády).
    * Změna fokusu (střídání terčů na 5m a 25m).
* **Bezpečnostní pravidla:**
    * 180° úhel bezpečnosti.
    * Prst mimo spoušť při pohybu.
    * Přebíjení pouze v krytu nebo za pohybu.
    * Využití krytu (Pieing/Krájení koláče) - "Lean out, don't step out".

## 3. Technická specifikace (HTML/CSS)
Používáme "Smart Hybrid" formát.
* **Single File:** Celý závod je v jednom HTML souboru.
* **CSS Themes:**
    * `@media screen`: Tmavý režim, neonové barvy (Cyberpunk), sépie (Western), tématické fonty.
    * `@media print`: **Kritické!** Musí se tisknout černobíle, na A4, bez zbytečných barev, šetřit toner. Každá `stage-box` musí mít `break-before: page`.
* **SVG Nákresy:**
    * Součástí každé situace je SVG mapa (Pohled shora).
    * **Zobrazení drah:** Vždy kresli terče v pevných drahách (paralelní linie), měň jen jejich polohu "nahoru/dolů" (hloubka).
    * Start pozice = Kruh.
    * Pohyb = Přerušovaná čára se šipkou.
    * Střelba = Tenká čára k terči.

## 4. Struktura HTML (Template)
Při generování nového závodu dodrž tuto strukturu:

```html
<!DOCTYPE html>
<html lang="cs">
<head>
    <style>
        /* ZDE DEFINOVAT SCREEN I PRINT STYLY */
        /* Pro tisk vždy definovat: */
        @media print {
            body { background: white; color: black; }
            .stage-box { break-before: page; border: 2px solid black; box-shadow: none; }
            /* Skrýt dekorace, zápatí atd. */
        }
    </style>
</head>
<body>
    <header>
        <h1>NÁZEV ZÁVODU</h1>
        <div class="mission-brief">Příběhové pozadí...</div>
        <div class="meta-info">Datum, Lokace, Pravidla</div>
    </header>

    <div class="rules-box">
        <h3>BEZPEČNOST A PRAVIDLA</h3>
        </div>

    <div class="stage-box">
        <h2>01: NÁZEV SITUACE</h2>
        <div class="status-bar">VZDÁLENOST || TERČE || TYP</div>
        <div class="legend">Příběhový popis situace ("Flavor text")...</div>
        <ul>
            <li><strong>START:</strong> Kde střelec stojí.</li>
            <li><strong>PROCEDURA:</strong> Krok za krokem co dělat.</li>
        </ul>
        <svg>
            </svg>
    </div>
</body>
</html>
