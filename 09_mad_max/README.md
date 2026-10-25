# Mad Max: Poslední kanystr

Vnitřní pistolový závod se třemi situacemi. [Propozice a nákresy](scenario.html) obsahují společná pravidla, tři situace a stavební list se seznamem vybavení. [PDF k tisku](mad-max-posledni-kanystr.pdf) má 5 ověřených stran A4, každou situaci společně s nákresem na vlastní stránce.

## Pravidla a situace

- Tři situace, nespolehlivé střelivo simulované přesně dvěma inertními školními náboji v každém zásobníku; zásobníky připravuje jiný střelec pod dohledem rozhodčího.
- Každý zásobník se připravuje na 15 kusů celkem: 13 ostrých nábojů a 2 sušilky. Platí i pro náhradní zásobníky. Náboj v komoře v jedničce a trojce pochází z přídělu prvního zásobníku; po nabití komory se zásobník nedoplňuje. Na 12 požadovaných zásahů zbývá jedna ostrá rána navíc.
- Šest terčů rozdělených do skupin A1–A3 a B1–B3; stejné označení po celý závod.
- 1: lehká zástěna, A1–A2 zleva a B1–B2 zprava, A3 a B3 za chůze vpřed směrem ke kanystru. Kanystr je jen rekvizita; není povinné k němu dojít ani ho zvednout.
- 2: tři terče vsedě bokem jako v autě, dva zpoza stolu/kapoty, jeden za ústupu s kanystrem.
- 3: stůl jako horizontální kryt a lehká zástěna jako vertikální kryt. A1 → B1 → A2 → B2 → A3 → B3, šest zastavení a pět přeběhů s kanystrem.
- V jedničce je kanystr pouze rekvizita. Ve dvojce od vystoupení a ve trojce při každém přesunu cestuje se střelcem. Při střelbě či manipulaci jej lze odložit; při střelbě za ústupu ve dvojce je ve slabé ruce.
- Dva nejlepší zásahy na terč, minimum 12 ostrých ran v každé situaci; školní náboje se do tohoto minima nepočítají. Bez losování.

- Start jedničky a trojky: pistole v pouzdře, připravený zásobník zasunutý, náboj v komoře. U auta pistole na stole, připravený zásobník zasunutý, komora prázdná.
- Celkové hodnocení podle našeho LOS: každá situace se přepočte na procenta (100 × nejlepší výsledný čas / vlastní výsledný čas), vítězí nejvyšší součet ze tří situací.
- Kanystr dodá pořadatel ze svého vybavení; před závodem se určí jednotná hmotnost.

## Stavba a soubory

Terče se mezi situacemi nepřesouvají, pokud ověření výhledů tuto variantu umožní. Před dvojkou se odstraní středová zástěna a přidá stůl se židlí. Před trojkou stůl i terče zůstanou, židle se odsune a zástěna se přidá vpravo. Podrobný seznam a body kontroly jsou na poslední straně propozic; další stavební kopie se neudržuje. Při stavbě ověřit zejména směry na A3 a B3 za chůze v jedničce, orientaci židle a výstup ve dvojce, výhledy ze všech krytů a dráhu ústupu. Vzdálenosti nejsou předepsané, schémata jsou orientační a bez měřítka.

- `scenario.html`: text a vložené SVG.
- `style.css`: web, mobilní zobrazení a černobílý tisk na A4.
- `maps.js`: zvětšování a posouvání nákresů podle venkovní Zemské hlídky; text a nákresy fungují i bez JavaScriptu.
- `mad-max-posledni-kanystr.pdf`: tisková verze vysázená ze stejného HTML textu a vložených SVG; po změně zdroje aktualizovat i PDF.

Pro přímý tisk z `scenario.html` jsou připravené styly A4; vypnout záhlaví a zápatí prohlížeče. V tomto prostředí nebylo možné spustit Chrome ani otevřít lokální HTML v prohlížečovém náhledu, takže přímý tisk HTML a mobilní interakce nejsou vizuálně ověřené. Přiložené PDF vzniklo samostatnou sazbou ze stejných podkladů a bylo zkontrolováno po všech pěti stránkách.
