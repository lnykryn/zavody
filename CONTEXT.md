# AI CONTEXT & SHOOTING RANGE SPECIFICATION

Tento soubor slouží jako "systémová paměť" pro generování tématických střeleckých scénářů.
Scénáře jsou **inspirovány pravidly LOS (Lidová Obranná Střelba)**, ale jsou gamifikované pro zážitkový trénink.

---

## 1. PRAVIDLA A DESIGN SITUACÍ (LOS RULES BASIS)
Při návrhu situací (Stages) musíš respektovat tyto principy vycházející z pravidel LOS:

### A. Bezpečnost (SAFETY FIRST)
* **Bezpečný úhel:** 180° směrem k lapačům.
* **Manipulace:** Zbraň se nabíjí/vybíjí pouze na povel rozhodčího.
* **Prst mimo spoušť:** Vždy při pohybu, přebíjení nebo manipulaci (pokud nemířím na terč).
* **Krytí:** Závodník se nesmí vystavovat terčům, které neřeší.

### B. Principy krytí (COVER MECHANICS)
AI musí navrhovat situace tak, aby vynucovaly správné krytí:
1.  **"Krájení koláče" (Pieing):** Terče se řeší postupně od vnějšího okraje k vnitřnímu. Nikdy se nevystavovat více terčům najednou.
2.  **Svislý kryt:** Z krytu vykukuje pouze zbraň, ruce a nezbytná část hlavy. Nohy a tělo musí zůstat skryté ("Lean out, don't step out").
3.  **Vodorovný kryt:** Střelba nad překážkou (stůl, barel). Lokty nesmí být před hranou krytu.
4.  **Pohyb:** Střelba za pohybu je povolená forma krytí (pokud se hýbu, jsem "hůře zasažitelný").

### C. Hodnocení a Terče (SCORING)
* **Terče:** Používáme **VÝHRADNĚ PAPÍROVÉ TERČE** (LOS terče se zónami A, C, D).
* **Metodika:**
    * **Hodnocení:** Obvykle 2 nejlepší zásahy na terč (Best 2).
    * **Neterč (No-Shoot):** Penalizace +10s (bílý/přeškrtnutý papírový terč).
    * **Procedura (chyba v krytí/postupu):** Penalizace +3s.
* **Pozor:** Na střelnici NEJSOU kovové terče (poppery/gongy). Vše musí být řešitelné střelbou do papíru.

---

## 2. FYZICKÁ OMEZENÍ STŘELNICE (HARDWARE)
Scénáře jsou určeny pro specifickou vnitřní střelnici.

### A. Terčový systém (4 Pojezdové dráhy)
* **Osa X (Šířka):** FIXNÍ. K dispozici jsou **4 dráhy (Lanes)**. Rozestup mezi nimi nelze měnit.
* **Osa Z (Hloubka):** VARIABILNÍ. Každý terč lze poslat do libovolné vzdálenosti (3m až 25m).
* **Důsledek:** Můžeme vytvářet hloubkové formace (V-formace, Echelon), ale ne shluky terčů u sebe na jedné linii.

### B. Vybavení (Props)
* **2x V-TAC zástěna:** Vysoká bariéra s různými otvory pro střelbu.
* **1x Stůl:** Pro start vsedě, odkládání zbraně nebo jako nízký kryt.
* **1x Židle:** Pro start vsedě.
* **Volitelné:** Barely (jako kryt nebo překážka).

---

## 3. DESIGNOVÁ FILOSOFIE (GAMEPLAY)
Každý závod je "Mini-kampaň" se 4 situacemi (Stages).

### Struktura kampaně
1.  **Stage 1 (Intro):** Seznámení, statický start (např. vsedě, zády), střelba na blízko (3-7m).
2.  **Stage 2 (Dynamika):** Pohyb vpřed/vzad/do stran, střelba za pohybu, využití krytů.
3.  **Stage 3 (Skill Check):** Technická výzva (Slabá ruka, Přebíjení, Omezená munice, Paměť).
4.  **Stage 4 (Finále):** Komplexní situace, volba postupu, No-Shoots, příběhové vyvrcholení.

---

## 4. TECHNICKÁ SPECIFIKACE (HTML/CSS)
Používáme formát **"Smart Hybrid"**. Jeden soubor pro web i tisk.

### A. CSS Stylování
* **@media screen:**
    * Tématické barvy a fonty (Cyberpunk = Neon, Western = Sepia).
    * Tmavé pozadí, stíny, atmosféra.
* **@media print:**
    * `background: white !important; color: black !important;`
    * `font-family: sans-serif;`
    * `.stage-box { break-before: page; border: 2px solid black; }` (Každá situace na novou A4).
    * SVG nákresy musí být černobílé a vysoce kontrastní.

### B. SVG Nákresy (Maps)
* Pohled shora (Top-down).
* **Klíčové:** Zobrazuj 4 fixní dráhy terčů (čtyři linie), aby bylo jasné jejich rozmístění v prostoru.
* **Legenda:**
    * Obdélník = Papírový terč (T1-T4).
    * Kruh = Startovní pozice.
    * Tlustá čára = Kryt/Zástěna.
    * Přerušovaná šipka = Pohyb střelce.
    * Tenká čára = Linie střelby.

---

## 5. TEMPLATE PRO NOVÝ SCÉNÁŘ
Při generování použij tuto kostru:

```html
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>NÁZEV SCÉNÁŘE</title>
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
        <h1>NÁZEV SCÉNÁŘE</h1>
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
