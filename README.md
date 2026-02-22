# 🎯 Tématické Střelecké Scénáře

Repozitář designů pro **zážitkovou/taktickou střelbu s příběhem**.
Nejedná se o oficiální závody LOS. Cílem je trénink pod kognitivní zátěží a atmosféra.

🌐 **[Zobrazit scénáře online](https://lnykryn.github.io/zavody/)**

## 📂 Dostupné scénáře

| Scénář | Téma |
| :--- | :--- |
| **[01_sector4_cyberpunk](./01_sector4_cyberpunk/scenario.html)** | 🤖 Sci-Fi / Cyberpunk |
| **[02_el_cortez_western](./02_el_cortez_western/scenario.html)** | 🤠 Western / 1885 |
| **[03_excommunicado](./03_excommunicado/scenario.html)** | 🕴️ Akce / John Wick |
| **[04_blackout](./04_blackout/scenario.html)** | ☣️ Survival Horror (Low-Light) 🚧 *[WIP]* |

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
> * Respektuj fyzická omezení z kontextu (4 dráhy, kolmá střelba).
> * Vymysli unikátní vizuální styl (barvy, fonty) pro nové téma."

---
*Více informací o pravidlech a vybavení najdete v [CONTEXT.md](./CONTEXT.md).*
