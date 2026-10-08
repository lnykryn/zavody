/* Progressive enhancement: the match and diagrams work without JavaScript. */
(() => {
  const maps = document.querySelectorAll('main > .stage-box .iso-map');
  if (!maps.length || typeof HTMLDialogElement === 'undefined') return;
  const viewer = document.createElement('dialog');
  viewer.className = 'map-viewer';
  viewer.setAttribute('aria-labelledby', 'map-viewer-title');
  viewer.innerHTML = `<div class="map-toolbar"><h2 id="map-viewer-title">Nákres situace</h2><div class="map-controls"><button type="button" data-action="out" aria-label="Oddálit">−</button><button type="button" data-action="in" aria-label="Přiblížit">+</button><button type="button" data-action="fit">Celý nákres</button><button type="button" data-action="close" autofocus>Zavřít</button></div></div><p class="map-help">Přibliž pomocí + a −, zvětšený nákres posouvej prstem.</p><div class="map-scroll"></div>`;
  document.body.append(viewer);
  const canvas = viewer.querySelector('.map-scroll');
  let zoom = 1;
  let opener;
  const updateZoom = () => {
    canvas.firstElementChild.style.width = `${zoom * 100}%`;
    viewer.querySelector('[data-action="out"]').disabled = zoom <= 1;
    viewer.querySelector('[data-action="in"]').disabled = zoom >= 4;
  };
  const openMap = (map, button) => {
    opener = button;
    const clone = map.cloneNode(true);
    // Isolate SVG references from the original diagram's IDs.
    const ids = new Map([...clone.querySelectorAll('[id]')].map(el => [el.id, `viewer-${el.id}`]));
    for (const el of [clone, ...clone.querySelectorAll('*')]) {
      for (const attr of [...el.attributes]) {
        let value = attr.value;
        if (attr.name === 'id') value = ids.get(value) || value;
        if (attr.name === 'aria-labelledby') value = value.split(' ').map(id => ids.get(id) || id).join(' ');
        for (const [id, replacement] of ids) value = value.replaceAll(`url(#${id})`, `url(#${replacement})`);
        el.setAttribute(attr.name, value);
      }
    }
    canvas.replaceChildren(clone);
    viewer.querySelector('h2').textContent = map.closest('.stage-box').querySelector('h2').textContent.trim();
    zoom = 1;
    updateZoom();
    document.body.classList.add('map-is-open');
    viewer.showModal();
    canvas.scrollTo(0, 0);
  };
  maps.forEach(map => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'map-expand';
    button.textContent = 'Zvětšit nákres';
    button.setAttribute('aria-haspopup', 'dialog');
    map.after(button);
    button.addEventListener('click', () => openMap(map, button));
    map.addEventListener('click', () => openMap(map, button));
  });
  viewer.addEventListener('click', event => {
    const action = event.target.closest('button')?.dataset.action;
    if (!action) return;
    if (action === 'close') return viewer.close();
    zoom = action === 'fit' ? 1 : Math.max(1, Math.min(4, zoom + (action === 'in' ? .5 : -.5)));
    updateZoom();
    if (action === 'fit') canvas.scrollTo(0, 0);
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('map-is-open');
    opener?.focus({ preventScroll:true });
  });
})();
