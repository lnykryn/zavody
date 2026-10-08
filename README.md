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

**Rozpracováno:** [08: Zase pondělí](./08_zase_pondeli/scenario.html) — paralelní vesmíry, tři situace pro čtyři střelce, pouze pistole; minimum 12 + 12 + 10 ran. Pracovní návrh k doladění stavby.

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
- `AGENTS.md`: pokyny pro spolupráci, vybavení a omezení vnitřní střelnice; venkovní závody mají vlastní zadání.
- Složka závodu obsahuje `scenario.html` a případné přílohy nebo stavební podklady.

🚨 **[Přečíst a vytisknout BEZPEČNOSTNÍ PRAVIDLA (Závazný Briefing)](./safety.html)** 🚨

## 🖨️ Formát "Smart Hybrid"
Jeden HTML soubor funguje pro web i tisk:
1.  **Web (Screen):** Barevný, tématický design (pro atmosféru).
2.  **Tisk (Print):** Po stisku `CTRL+P` se přepne do úsporného ČB režimu, odstraní dekorace a zalomí stránky po situacích.

## Spolupráce na novém závodu

Pokyny pro další práci jsou v `AGENTS.md`. Nejprve společně zvolíme téma a hlavní mechaniku závodu, potom jednotlivé situace. HTML a nákresy vznikají podle odsouhlaseného návrhu.

**Doporučené zadání pro nový chat:**
> Přečti si `AGENTS.md` a existující vnitřní závody jako referenci. Chceme společně navrhnout nový závod pro vnitřní střelnici. Pro zpracování nákresů, mobilní zobrazení a tisk použij jako vzor `outside_01_zemska_hlidka/scenario.html`, ale nepřebírej venkovní geometrii ani vybavení. Nejprve probereme téma a hlavní mechaniku; zatím nic neupravuj.

---
*Více informací o pravidlech a vybavení najdete v [AGENTS.md](./AGENTS.md).*
