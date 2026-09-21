# 🎯 Tématické Střelecké Scénáře

Repozitář designů pro **zážitkovou/taktickou střelbu s příběhem**.
Nejedná se o oficiální závody LOS. Cílem je trénink pod kognitivní zátěží a atmosféra.

🌐 **[Zobrazit scénáře online](https://lnykryn.github.io/zavody/)**

## Vnitřní závody

| Scénář | Téma |
| :--- | :--- |
| **[01_sector4_cyberpunk](./01_sector4_cyberpunk/scenario.html)** | 🤖 Sci-Fi / Cyberpunk |
| **[02_el_cortez_western](./02_el_cortez_western/scenario.html)** | 🤠 Western / 1885 |
| **[03_excommunicado](./03_excommunicado/scenario.html)** | 🕴️ Akce / John Wick |
| **[04_blackout](./04_blackout/scenario.html)** | ☣️ Survival Horror (Low-Light) |
| **[05_operation_lethal_overtime](./05_operation_lethal_overtime/scenario.html)** | 💥 Akce / 80s VHS |
| **[06_dead_zone](./06_dead_zone/scenario.html)** | ☢️ Post-Apo / S.T.A.L.K.E.R. |
| **[07_zemska_hlidka](./07_zemska_hlidka/scenario.html)** | 🍺 Urban Fantasy / Kotleta |

## Venkovní závody

| Závod | Podklady |
| :--- | :--- |
| **[01: Zemská hlídka — Zkažená sobota](./outside_01_zemska_hlidka/scenario.html)** | Popice · [Stavební listy](./outside_01_zemska_hlidka/builders.html) · [Básničky a symboly](./outside_01_zemska_hlidka/targets.html) |

Tisk z propozic venkovního závodu obsahuje celý balíček: zadání, stavební listy, básničky a symboly. Podrobnosti jsou v [README závodu](./outside_01_zemska_hlidka/README.md).

## Struktura repozitáře

- `01_*` až `07_*`: původní vnitřní série; stávající názvy a odkazy zůstávají zachované.
- `outside_NN_nazev`: samostatně číslovaná venkovní série, první závod je `outside_01_zemska_hlidka`.
- `popice_zemska_hlidka/scenario.html`: přesměrování původního sdíleného odkazu na venkovní závod; zachovat kvůli zpětné kompatibilitě.
- `index.html`: společný rozcestník obou sérií.
- `CONTEXT.md`: podklady pro návrhy; omezení vnitřní střelnice se na venkovní závody nepřenášejí automaticky.
- Složka závodu obsahuje `scenario.html` a případné přílohy nebo stavební podklady.

🚨 **[Přečíst a vytisknout BEZPEČNOSTNÍ PRAVIDLA (Závazný Briefing)](./safety.html)** 🚨

## 🖨️ Formát "Smart Hybrid"
Jeden HTML soubor funguje pro web i tisk:
1.  **Web (Screen):** Barevný, tématický design (pro atmosféru).
2.  **Tisk (Print):** Po stisku `CTRL+P` se přepne do úsporného ČB režimu, odstraní dekorace a zalomí stránky po situacích.

## 🤖 AI Workflow (Jak generovat)
Pro nejlepší výsledky doporučujeme poskytnout AI jak **pravidla** (`CONTEXT.md`), tak **všechny existující scénáře** jako vzory.

**Doporučený prompt pro AI:**
> "Přečti si soubor `CONTEXT.md` (pro pravidla střelnice).
> Dále si projdi **všechny existující soubory** `*/scenario.html` v tomto repozitáři (jako referenci pro kód a různé vizuální styly).
>
> Navrhni kompletní HTML kód pro nový scénář na téma: **[VAŠE TÉMA, např. Zombie Apokalypsa]**.
>
> * Dodrž strukturu HTML a CSS třídy ze vzorů (stage-box, status-bar, svg grid).
> * U vnitřního závodu respektuj fyzická omezení z kontextu (4 dráhy, kolmá střelba). U venkovního vycházej ze zadání konkrétní střelnice.
> * Vymysli unikátní vizuální styl (barvy, fonty) pro nové téma."

---
*Více informací o pravidlech a vybavení najdete v [CONTEXT.md](./CONTEXT.md).*
