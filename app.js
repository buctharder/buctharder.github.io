'use strict';
const content = window.CV_CONTENT;
const publications = window.CV_PUBLICATIONS;
const state = {lang: 'zh', area: 'network', filter: 'all', publicationFilter: 'all', teaching: 'chl', year: '2026', modal: null};
const $ = id => document.getElementById(id);
const all = selector => [...document.querySelectorAll(selector)];
const data = () => content[state.lang];
const t = key => data().ui[key];
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const markName = value => esc(value).replace(/\bJIANG Z(?: Y)?\b|\bZhiying Jiang\b|江志英/g, name => '<strong>' + name + '</strong>');
const workById = id => data().works.find(work => work.id === id);
const citationLanguage = text => /[\u4e00-\u9fff]/.test(text) ? 'zh-CN' : 'en';

function selectArea(id) {
  state.area = id;
  const area = data().researchAreas[id];
  all('[data-area]').forEach(el => {
    const active = el.dataset.area === id;
    el.classList.toggle(el.matches('button') ? 'active' : 'selected', active);
    el.setAttribute('aria-pressed', String(active));
    if (el.classList.contains('map-node')) el.setAttribute('aria-label', data().researchAreas[el.dataset.area].title);
  });
  const related = area.works.map(workById).filter(Boolean);
  $('research-detail').innerHTML = `<span class="detail-no">RESEARCH ${area.number}</span><h3>${esc(area.title)}</h3><p>${esc(area.body)}</p><h4>${t('researchMethods')}</h4><div class="research-tags">${area.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div><h4>${t('relatedResearch')}</h4><div class="research-links">${related.length ? related.map(work => `<button data-work="${work.id}">${esc(work.name)}</button>`).join('') : `<button data-go-teaching>${t('teachingLink')}</button>`}</div>`;
}

function workCard(work) {
  return `<button class="work ${work.id === 'patent' ? 'patent-work' : ''}" data-work="${work.id}" aria-label="${esc(t('viewWork') + work.name)}"><div class="work-image">${work.image ? `<img src="${work.image}" alt="${esc(work.caption)}" loading="lazy">` : `<span class="patent-symbol">${t('patentLabel')}</span><span class="patent-code">CN120337984B</span>`}</div><div class="work-body"><div class="work-meta"><span>${esc(work.year)}</span><span class="status ${work.statusClass}">${esc(work.status)}</span></div><h3>${esc(work.name)} <span>· ${esc(work.subtitle)}</span></h3><p>${esc(work.intro)}</p></div><div class="work-footer"><span>${esc(work.venue)}</span><span>${esc(work.role)}</span></div></button>`;
}

function publicationItem(paper, compact = false) {
  const heading = compact && state.lang === 'en' && paper.titleEn ? `<p class="publication-title-en">${esc(paper.titleEn)}</p>` : '';
  const category = paper.category === 'education' ? t('publicationsEducation') : t('publicationsResearch');
  return `<li data-publication-id="${esc(paper.id)}">${heading}<p class="publication-citation" lang="${citationLanguage(paper.citation)}">${markName(paper.citation)}</p><div class="publication-meta"><span class="publication-year">${paper.year}</span><span class="status ${paper.status === 'accepted' ? 'accepted' : ''}">${esc(t(paper.status))}</span>${compact ? '' : `<span class="publication-category">${esc(category)}</span>`}${paper.doi ? `<a href="https://doi.org/${esc(paper.doi)}" target="_blank" rel="noopener">DOI: ${esc(paper.doi)}</a>` : ''}</div></li>`;
}

function renderPublications(filter) {
  state.publicationFilter = filter;
  const visible = publications.filter(paper => filter === 'all' || paper.category === filter);
  $('publications-list').innerHTML = visible.map(paper => publicationItem(paper)).join('');
  $('publications-count').textContent = visible.length + t('publicationCount');
  all('[data-publication-filter]').forEach(button => {
    const active = button.dataset.publicationFilter === filter;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function renderEducationPublications() {
  $('education-papers').innerHTML = `<ol class="education-publication-list">${publications.filter(paper => paper.category === 'education').map(paper => publicationItem(paper, true)).join('')}</ol>`;
}

function renderProjects(filter) {
  state.filter = filter;
  const projects = data().projects;
  const visible = projects.filter(project => filter === 'all' || project.type === filter);
  $('project-list').innerHTML = visible.map(project => `<article class="project"><span class="project-index">${String(projects.indexOf(project) + 1).padStart(2, '0')}</span><div><h3>${esc(project.name)}</h3><p class="project-info">${esc(project.source)} · ${t('principalInvestigator')}${project.done ? ' · ' + t('completed') : ''}</p></div><p class="project-period">${esc(project.period)}</p><p class="project-amount">${project.amount}<small>${t('fundUnit')}</small></p></article>`).join('');
  $('project-count').textContent = visible.length + t('projectCount');
  $('project-total').textContent = visible.reduce((sum, project) => sum + project.amount, 0).toFixed(2);
  all('.filter').forEach(button => {const active = button.dataset.filter === filter;button.classList.toggle('active', active);button.setAttribute('aria-pressed', String(active));});
}

function selectTeaching(key) {
  state.teaching = key;
  const view = data().teachingViews[key];
  all('[data-teaching]').forEach(button => {const active = button.dataset.teaching === key;button.setAttribute('aria-selected', String(active));button.tabIndex = active ? 0 : -1;});
  $('teaching-panel').setAttribute('aria-labelledby', 'tab-' + key);
  $('teaching-panel').innerHTML = `<button class="image-button teaching-image" data-image="${view.image}" data-caption="${esc(view.caption)}" data-teaching-image="${key}" aria-label="${esc(t('enlarge') + view.title)}"><img src="${view.image}" alt="${esc(view.caption)}" loading="lazy"></button><div class="teaching-copy"><p class="eyebrow">${esc(view.label)}</p><h3>${esc(view.title)}</h3><p>${esc(view.body)}</p><p class="teaching-caption">${esc(view.caption)}</p></div>`;
}

function selectYear(year) {
  state.year = year;
  const milestone = data().milestones[year];
  all('[data-year]').forEach(button => {const active = button.dataset.year === year;button.classList.toggle('active', active);button.setAttribute('aria-pressed', String(active));});
  $('timeline-detail').innerHTML = `<span class="time-large">${year}</span><div><h3>${esc(milestone.title)}</h3><p>${esc(milestone.body)}</p><p class="year-span">${esc(milestone.period)}</p></div>`;
}

const dialog = $('detail-dialog');
let priorFocus = null;
function showDialog(html) {
  if (!dialog.open) priorFocus = document.activeElement;
  $('dialog-content').innerHTML = html;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus();
}
function openWork(id) {
  const work = workById(id);
  if (!work) return;
  state.modal = {type: 'work', id};
  showDialog(`<div class="dialog-meta"><span class="status ${work.statusClass}">${esc(work.status)}</span><span>${esc(work.role)}</span><span>${esc(work.venue)} · ${esc(work.year)}</span></div><h2 id="dialog-title">${esc(work.name)} · ${esc(work.subtitle)}</h2><p class="paper-title">${esc(work.title)}</p>${work.image ? `<figure><img src="${work.image}" alt="${esc(work.caption)}"><figcaption>${esc(work.caption)}</figcaption></figure>` : ''}<div class="detail-sections"><div><h3>${t('problem')}</h3><p>${esc(work.problem)}</p></div><div><h3>${t('method')}</h3><p>${esc(work.method)}</p></div><div><h3>${t('evidence')}</h3><p>${esc(work.evidence)}</p></div></div><div class="citation-area"><p class="citation" lang="${citationLanguage(work.citation)}">${markName(work.citation)}</p><div class="citation-actions"><button data-copy="${work.id}">${t('copy')}</button>${work.doi ? `<a href="https://doi.org/${work.doi}" target="_blank" rel="noopener">${t('viewDoi')}</a>` : ''}</div></div>`);
}
function openImage(image) {
  state.modal = image;
  const caption = image.captionKey ? t(image.captionKey) : image.teachingKey ? data().teachingViews[image.teachingKey].caption : image.caption;
  showDialog(`<div class="image-dialog"><h2 id="dialog-title">${esc(caption)}</h2><img src="${image.src}" alt="${esc(caption)}"></div>`);
}
function toast(message) {
  const el = $('toast');el.textContent = message;el.classList.add('show');
  clearTimeout(toast.timer);toast.timer = setTimeout(() => el.classList.remove('show'), 2600);
}
async function copyCitation(id) {
  const work = workById(id);
  const citation = work.citation + (work.doi && !work.citation.includes(work.doi) ? ' DOI: ' + work.doi : '');
  try {await navigator.clipboard.writeText(citation);toast(t('copied'));} catch {toast(t('copyFallback'));}
}
function closeDialog() {dialog.close();}
dialog.addEventListener('close', () => {state.modal = null;if (priorFocus?.isConnected) priorFocus.focus();});
dialog.addEventListener('click', event => {
  if (event.target === dialog) {const r = dialog.getBoundingClientRect();if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeDialog();}
});

function setLanguage(lang, remember = true) {
  if (!content[lang]) return;
  state.lang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = t('title');
  document.querySelector('meta[name="description"]').content = t('description');
  all('[data-i18n]').forEach(el => {el.innerHTML = t(el.dataset.i18n);});
  all('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
  all('[data-i18n-alt]').forEach(el => el.setAttribute('alt', t(el.dataset.i18nAlt)));
  all('[data-i18n-href]').forEach(el => el.setAttribute('href', t(el.dataset.i18nHref)));
  all('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  all('[data-caption-key]').forEach(el => {el.dataset.caption = t(el.dataset.captionKey);});
  $('works-grid').innerHTML = data().featuredWorkIds.map(workById).filter(Boolean).map(workCard).join('');
  renderPublications(state.publicationFilter);
  renderEducationPublications();
  selectArea(state.area);renderProjects(state.filter);selectTeaching(state.teaching);selectYear(state.year);
  if (dialog.open && state.modal) {const modal = state.modal;modal.type === 'work' ? openWork(modal.id) : openImage(modal);}
  if (remember) {
    try {localStorage.setItem('jiang-cv-language', lang);} catch {}
    const url = new URL(window.location.href);url.searchParams.set('lang', lang);history.replaceState(null, '', url);
  }
  updateScroll();
}

document.addEventListener('click', event => {
  const lang = event.target.closest('[data-lang]');if (lang) {setLanguage(lang.dataset.lang);return;}
  const area = event.target.closest('[data-area]');if (area) {selectArea(area.dataset.area);return;}
  const work = event.target.closest('[data-work]');if (work) {openWork(work.dataset.work);return;}
  const project = event.target.closest('[data-filter]');if (project) {renderProjects(project.dataset.filter);return;}
  const publication = event.target.closest('[data-publication-filter]');if (publication) {renderPublications(publication.dataset.publicationFilter);return;}
  const teaching = event.target.closest('[data-teaching]');if (teaching) {selectTeaching(teaching.dataset.teaching);return;}
  const year = event.target.closest('[data-year]');if (year) {selectYear(year.dataset.year);return;}
  const copy = event.target.closest('[data-copy]');if (copy) {copyCitation(copy.dataset.copy);return;}
  const image = event.target.closest('[data-image]');if (image) {openImage({type: 'image', src: image.dataset.image, caption: image.dataset.caption, captionKey: image.dataset.captionKey, teachingKey: image.dataset.teachingImage});return;}
  if (event.target.closest('.dialog-close')) closeDialog();
  if (event.target.closest('[data-go-teaching]')) $('teaching').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'});
});
all('.map-node').forEach(node => node.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {event.preventDefault();selectArea(node.dataset.area);}
}));
all('[data-teaching]').forEach(button => button.addEventListener('keydown', event => {
  const tabs = all('[data-teaching]');let i = tabs.indexOf(button);
  if (event.key === 'ArrowRight') i = (i + 1) % tabs.length;
  else if (event.key === 'ArrowLeft') i = (i + tabs.length - 1) % tabs.length;
  else if (event.key === 'Home') i = 0;
  else if (event.key === 'End') i = tabs.length - 1;
  else return;
  event.preventDefault();selectTeaching(tabs[i].dataset.teaching);tabs[i].focus();
}));
const menu = document.querySelector('.menu-toggle'), nav = $('navigation');
menu.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true';menu.setAttribute('aria-expanded', String(open));nav.classList.toggle('open', open);});
nav.addEventListener('click', event => {if (event.target.closest('a')) {nav.classList.remove('open');menu.setAttribute('aria-expanded', 'false');}});
const sections = all('main>section[id]'), navLinks = [...nav.querySelectorAll('a[href^="#"]')];
function updateScroll() {
  const span = document.documentElement.scrollHeight - window.innerHeight;
  document.querySelector('.scroll-progress').style.width = (span > 0 ? window.scrollY / span * 100 : 0) + '%';
  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 6;
  const active = atBottom ? sections.at(-1) : sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1);
  navLinks.forEach(link => {
    const current = link.getAttribute('href') === '#' + active?.id;
    link.classList.toggle('current', current);
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
let ticking = false;
window.addEventListener('scroll', () => {if (!ticking) {requestAnimationFrame(() => {updateScroll();ticking = false;});ticking = true;}}, {passive: true});
window.addEventListener('resize', updateScroll);
let preferred = 'zh';
try {preferred = localStorage.getItem('jiang-cv-language') || 'zh';} catch {}
const queryLanguage = new URL(window.location.href).searchParams.get('lang');
setLanguage(content[queryLanguage] ? queryLanguage : content[preferred] ? preferred : 'zh', false);
