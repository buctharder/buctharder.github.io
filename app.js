'use strict';

const content = window.CV_CONTENT;
const publications = window.CV_PUBLICATIONS;
const educationPublicationCount = publications.filter(paper => paper.category === 'education').length;
const state = {lang:'zh', area:'network', work:'rtgcn', filter:'all', project:0, teaching:'chl', teachingProjectGroup:'all', teachingProject:'erasmus-git', resource:'papers', year:'2012', publicationFilter:'all', publicationYear:'all', publicationStatus:'all', bioExpanded:false, search:'', expanded:new Set(), modal:null};
const $ = id => document.getElementById(id);
const all = (selector, root = document) => [...root.querySelectorAll(selector)];
const data = () => content[state.lang];
const t = key => data().ui[key].replaceAll('{publications}', String(publications.length)).replaceAll('{education}', String(educationPublicationCount));
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const markName = value => esc(value).replace(/\bJIANG Z(?: Y)?\b|\bZhiying Jiang\b|江志英/g, name => '<strong>' + name + '</strong>');
const workById = id => data().works.find(work => work.id === id);
const citationLanguage = value => /[\u4e00-\u9fff]/.test(value) ? 'zh-CN' : 'en';
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function revealTab(rail,button) {
  if (rail && button && rail.scrollWidth>rail.clientWidth && typeof rail.scrollTo==='function') {
    const left=button.offsetLeft-rail.offsetLeft-(rail.clientWidth-button.offsetWidth)/2;
    rail.scrollTo({left:Math.max(0,left),behavior:reducedMotion()?'auto':'smooth'});
  }
}

function syncBio() {
  $('intro-text').classList.toggle('is-expanded',state.bioExpanded);
  const button=document.querySelector('[data-toggle-bio]');
  button.setAttribute('aria-expanded',String(state.bioExpanded));
  button.dataset.i18n=state.bioExpanded?'readLess':'readMore';
  button.textContent=t(button.dataset.i18n);
}

function imageViewport(src, caption, loading='lazy') {
  return `<span class="figure-media"><img src="${esc(src)}" alt="${esc(caption)}" loading="${loading}"></span>`;
}

function resolvePublication(paper) {
  if (!paper.workId) return paper;
  const work = workById(paper.workId);
  return {...paper, name:work.name, citation:work.citation, doi:work.doi, status:work.statusClass==='accepted'?'accepted':'published', yearLabel:work.year};
}

function selectArea(id) {
  if (!data().researchAreas[id]) return;
  state.area = id;
  const area = data().researchAreas[id];
  all('[data-area]').forEach(el => {
    const active = el.dataset.area === id;
    el.classList.toggle(el.classList.contains('map-node') ? 'selected' : 'active', active);
    el.setAttribute('aria-pressed', String(active));
    if (el.classList.contains('map-node')) el.setAttribute('aria-label', data().researchAreas[el.dataset.area].title);
  });
  all('[data-map-path]').forEach(path => path.classList.toggle('active', path.dataset.mapPath === id));
  const related = area.works.map(workById).filter(Boolean);
  const caption = area.featured ? workById(area.featured).caption : data().teachingViews.fund.caption;
  $('research-detail').innerHTML = `<div class="research-detail-heading"><span>RESEARCH ${esc(area.number)} / ${esc(area.imageLabel)}</span><span>${esc(area.title)}</span></div><h3>${esc(area.question)}</h3><button type="button" class="research-figure image-button" data-image="${esc(area.image)}" data-area-image="${esc(id)}" aria-label="${esc(t('enlarge') + caption)}">${imageViewport(area.image,caption)}<span class="figure-enlarge" aria-hidden="true">↗</span></button><p>${esc(area.body)}</p><div class="research-tags">${area.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div><div class="research-links">${related.length ? related.map(work => `<button type="button" data-work="${esc(work.id)}">${esc(work.name)} ↗</button>`).join('') : `<button type="button" data-go-teaching>${esc(t('teachingLink'))} ↓</button>`}</div>`;
}

function patentSchematic() {
  const layers = [
    {y:50, color:'#adc9cf', label:t('patentLayer1')},
    {y:110, color:'#629ca6', label:t('patentLayer2')},
    {y:170, color:'#176e78', label:t('patentLayer3')},
  ];
  return `<svg viewBox="0 0 460 250" class="patent-schematic" role="img" aria-label="${esc(t('patentFigure'))}"><g fill="none" stroke="#b9ced5" stroke-dasharray="3 5"><path d="M82 50L82 170M160 65L160 185M240 40L240 160M313 68L313 188"/></g>${layers.map(({y,color,label})=>`<g><path d="M40 ${y-19}L282 ${y-40}L346 ${y+17}L103 ${y+39}Z" fill="${color}" fill-opacity=".16" stroke="${color}"/><path d="M82 ${y}L160 ${y+15}L240 ${y-10}L313 ${y+18}M82 ${y}L240 ${y-10}M160 ${y+15}L313 ${y+18}" stroke="${color}" fill="none"/>${[[82,y],[160,y+15],[240,y-10],[313,y+18]].map(([x,cy])=>`<circle cx="${x}" cy="${cy}" r="6" fill="${color}" stroke="white" stroke-width="2"/>`).join('')}<text class="small-label" x="355" y="${y+13}">${esc(label)}</text></g>`).join('')}<text x="45" y="235">CN120337984B</text></svg>`;
}

function renderWorkSelectors() {
  $('works-grid').innerHTML = data().featuredWorkIds.map((id, i) => {
    const work = workById(id);
    const active = id === state.work;
    return `<button type="button" id="work-tab-${id}" class="work-selector" role="tab" data-showcase="${id}" aria-controls="work-stage" aria-selected="${active}" tabindex="${active ? 0 : -1}"><span>${String(i+1).padStart(2,'0')}</span><strong>${esc(work.name)}</strong><small>${esc(work.subtitle)}</small></button>`;
  }).join('');
  selectWork(state.work);
}

function selectWork(id) {
  if (!data().featuredWorkIds.includes(id)) return;
  state.work = id;
  const work = workById(id);
  all('[data-showcase]').forEach(button => {const active = button.dataset.showcase === id;button.setAttribute('aria-selected',String(active));button.tabIndex = active ? 0 : -1;});
  const figure = work.image
    ? `<button type="button" class="work-figure image-button" data-image="${esc(work.image)}" data-image-work="${id}" aria-label="${esc(t('enlarge') + work.caption)}">${imageViewport(work.image,work.caption)}<span class="figure-enlarge" aria-hidden="true">↗</span><span class="work-figure-caption">${esc(work.caption)}</span></button>`
    : `<div class="work-figure"><span class="figure-media">${patentSchematic()}</span><p class="work-figure-caption">${esc(t('patentFigure'))}</p></div>`;
  $('work-stage').setAttribute('aria-labelledby','work-tab-' + id);
  $('work-stage').innerHTML = `${figure}<div class="work-copy"><div class="work-meta"><span>${esc(work.year)}</span><span class="status ${esc(work.statusClass)}">${esc(work.status)}</span></div><h3>${esc(work.name)}</h3><p class="work-subtitle">${esc(work.subtitle)}</p><p class="work-intro">${esc(work.intro)}</p><p class="work-venue">${esc(work.venue)}</p><p class="work-role">${esc(work.role)}</p><button type="button" class="button" data-work="${id}"><span>${esc(t('workDetails'))}</span><span aria-hidden="true">↗</span></button></div>`;
  $('gallery-count').textContent = `${String(data().featuredWorkIds.indexOf(id)+1).padStart(2,'0')} / 05`;
  revealTab($('works-grid'),$('work-tab-'+id));
}

function stepWork(step) {
  const ids = data().featuredWorkIds;
  selectWork(ids[(ids.indexOf(state.work) + step + ids.length) % ids.length]);
}

function periodLayout(period, firstYear=2022, totalMonths=96) {
  const dates = [...period.matchAll(/(\d{4})\.(\d{2})/g)].map(match => ({year:Number(match[1]),month:Number(match[2])}));
  if (dates.length !== 2) return {start:0,duration:0};
  const startMonth = (dates[0].year-firstYear)*12 + dates[0].month-1;
  const endMonth = (dates[1].year-firstYear)*12 + dates[1].month;
  return {start:startMonth/totalMonths*100,duration:(endMonth-startMonth)/totalMonths*100};
}

function selectProject(index) {
  const project = data().projects[index];
  if (!project) return;
  state.project = index;
  all('[data-project]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.project)===index)));
  $('project-detail').innerHTML = `<span class="detail-no">PROJECT ${String(index+1).padStart(2,'0')} / 07</span><h3>${esc(project.name)}</h3><dl><div><dt>${esc(t('projectSource'))}</dt><dd>${esc(project.source)}</dd></div><div><dt>${esc(t('projectPeriod'))}</dt><dd>${esc(project.period)}</dd></div><div><dt>${esc(t('projectFunding'))}</dt><dd class="project-funding">${project.amount.toFixed(2)}<small>${esc(t('fundUnit'))}</small></dd></div></dl><div class="project-role"><span>${esc(t('principalInvestigator'))}</span>${project.done?`<span>${esc(t('completed'))}</span>`:''}</div>`;
}

function renderProjects(filter) {
  state.filter = filter;
  const visible = data().projects.map((project,index)=>({...project,index})).filter(project => filter==='all' || project.type===filter);
  $('project-list').innerHTML = visible.map(project => {
    const {start,duration} = periodLayout(project.period);
    return `<button type="button" class="project-row ${esc(project.type)}" data-project="${project.index}" aria-pressed="${project.index===state.project}" aria-controls="project-detail" aria-label="${esc(project.name + ' · ' + project.period + ' · ' + project.amount + ' ' + t('fundUnit'))}" title="${esc(project.name + ' · ' + project.period)}"><span class="project-short">${esc(project.shortName)}</span><span class="project-track" aria-hidden="true"><span class="project-bar" style="--start:${start.toFixed(4)}%;--duration:${duration.toFixed(4)}%"><span class="project-bar-end"></span></span></span><span class="project-row-amount">${project.amount.toFixed(2)}</span></button>`;
  }).join('');
  $('project-count').textContent = visible.length + t('projectCount');
  $('project-total').textContent = visible.reduce((sum,project)=>sum+project.amount,0).toFixed(2);
  all('[data-filter]').forEach(button=>{const active=button.dataset.filter===filter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  selectProject(visible.some(project=>project.index===state.project) ? state.project : visible[0].index);
}

function selectTeaching(key) {
  if (!data().teachingViews[key]) return;
  state.teaching = key;
  const view = data().teachingViews[key];
  all('[data-teaching]').forEach(button=>{const active=button.dataset.teaching===key;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  $('teaching-panel').setAttribute('aria-labelledby','tab-'+key);
  $('teaching-panel').innerHTML = `<button type="button" class="image-button teaching-image" data-image="${esc(view.image)}" data-teaching-image="${key}" aria-label="${esc(t('enlarge')+view.title)}">${imageViewport(view.image,view.caption)}<span class="figure-enlarge" aria-hidden="true">↗</span></button><div class="teaching-copy"><p class="eyebrow">${esc(view.label)}</p><h3>${esc(view.title)}</h3><p>${esc(view.body)}</p><p class="teaching-caption">${esc(view.caption)}</p></div>`;
}

function selectResource(key) {
  state.resource = key;
  all('[data-resource]').forEach(button=>{
    const active=button.dataset.resource===key;
    button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;
    $('resource-'+button.dataset.resource).hidden=!active;
  });
}

function resolveTeachingProject(item) {
  if (!Number.isInteger(item.researchProjectIndex)) return item;
  const project=data().projects[item.researchProjectIndex];
  return {...item,title:project.name,source:project.source+' · '+item.discipline,period:project.period,totalFunding:project.amount,personalFunding:project.amount};
}

function selectTeachingProject(id) {
  const project=data().teachingProjects.find(item=>item.id===id);
  if (!project) return;
  const item=resolveTeachingProject(project);
  state.teachingProject=id;
  all('[data-teaching-project-id]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.teachingProjectId===id)));
  $('education-project-detail').innerHTML=`<span class="detail-no">${esc(t(item.group==='reform'?'educationProjectsReform':'educationProjectsResearch'))}</span><h4>${esc(item.title)}</h4><dl><div><dt>${esc(t('projectSource'))}</dt><dd>${esc(item.source)}</dd></div><div><dt>${esc(t('projectPeriod'))}</dt><dd>${esc(item.period)}</dd></div><div><dt>${esc(t('educationProjectRole'))}</dt><dd>${esc(item.role)}</dd></div></dl><div class="education-project-money"><div><span>${esc(t('educationProjectTotal'))}</span><strong data-education-total>${item.totalFunding.toFixed(2)}</strong><small>${esc(t('fundUnit'))}</small></div><div><span>${esc(t('educationProjectPersonal'))}</span><strong data-education-personal>${item.personalFunding.toFixed(2)}</strong><small>${esc(t('fundUnit'))}</small></div></div>${Number.isInteger(item.researchProjectIndex)?`<button type="button" class="grant-link" data-teaching-framework>${esc(t('educationProjectFramework'))} ↗</button>`:''}`;
}

function renderTeachingProjects(group=state.teachingProjectGroup) {
  if (!['all','reform','research'].includes(group)) return;
  state.teachingProjectGroup=group;
  const projects=data().teachingProjects.map(resolveTeachingProject);
  all('[data-education-project-group]').forEach(button=>{
    const active=button.dataset.educationProjectGroup===group;
    button.setAttribute('aria-pressed',String(active));button.classList.toggle('active',active);
  });
  all('[data-education-project-count]').forEach(counter=>{counter.textContent=projects.filter(item=>counter.dataset.educationProjectCount==='all'||item.group===counter.dataset.educationProjectCount).length;});
  const visible=projects.filter(item=>group==='all'||item.group===group);
  $('education-project-list').innerHTML=visible.map(item=>{
    const {start,duration}=periodLayout(item.period,2018,144);
    const label=[item.title,item.period,item.role,t('educationProjectTotal')+' '+item.totalFunding,t('educationProjectPersonal')+' '+item.personalFunding,t('fundUnit')].join(' · ');
    return `<button type="button" class="project-row education-project-row ${esc(item.group)}" data-teaching-project-id="${esc(item.id)}" aria-controls="education-project-detail" aria-pressed="${item.id===state.teachingProject}" aria-label="${esc(label)}" title="${esc(label)}"><span class="project-short">${esc(item.shortName)}</span><span class="project-track" aria-hidden="true"><span class="project-bar" style="--start:${start.toFixed(4)}%;--duration:${duration.toFixed(4)}%"><span class="project-bar-end"></span></span></span><span class="project-row-amount">${item.personalFunding.toFixed(2)}</span></button>`;
  }).join('');
  $('education-project-count').textContent=visible.length+t('projectCount');
  $('education-project-total').textContent=visible.reduce((sum,item)=>sum+item.totalFunding,0).toFixed(2);
  $('education-project-personal').textContent=visible.reduce((sum,item)=>sum+item.personalFunding,0).toFixed(2);
  selectTeachingProject(visible.some(item=>item.id===state.teachingProject)?state.teachingProject:visible[0].id);
}

function renderCourseProjects() {
  const projects=data().courseProjects;
  $('course-project-list').innerHTML=projects.map(item=>`<article class="course-project-card" data-course-project-id="${esc(item.id)}"><div><h4>${esc(item.title)}</h4><div class="course-project-meta"><span>${esc(item.source)}</span><span>${esc(item.period)}</span><span class="course-role">${esc(item.role)}</span></div></div><div class="course-project-money"><div><span>${esc(t('educationProjectTotal'))}</span><strong data-course-total>${item.totalFunding.toFixed(2)}<small>${esc(t('fundUnit'))}</small></strong></div><div><span>${esc(t('educationProjectPersonal'))}</span><strong data-course-personal>${item.personalFunding.toFixed(2)}<small>${esc(t('fundUnit'))}</small></strong></div></div></article>`).join('');
  $('course-project-count').textContent=projects.length+t('projectCount');
  $('course-project-total').textContent=projects.reduce((sum,item)=>sum+item.totalFunding,0).toFixed(2);
  $('course-project-personal').textContent=projects.reduce((sum,item)=>sum+item.personalFunding,0).toFixed(2);
}

function publicationMeta(paper, compact=false) {
  const category = t(paper.category==='education'?'publicationsEducation':'publicationsResearch');
  return `<div class="publication-meta"><span>${esc(paper.yearLabel||paper.year)}</span><span class="status ${paper.status==='accepted'?'accepted':''}">${esc(t(paper.status))}</span>${compact?'':`<span>${esc(category)}</span>`}${paper.doi?`<a href="https://doi.org/${esc(paper.doi)}" target="_blank" rel="noopener">DOI: ${esc(paper.doi)}</a>`:''}${paper.workId&&!compact?`<button type="button" data-work="${esc(paper.workId)}">${esc(t('viewResearch'))} ↗</button>`:''}</div>`;
}

function publicationItem(paper) {
  const heading = state.lang==='en' && paper.titleEn ? `<p class="publication-title-en">${esc(paper.titleEn)}</p>` : '';
  return `<li data-publication-id="${esc(paper.id)}">${heading}<p class="publication-citation" lang="${citationLanguage(paper.citation)}">${markName(paper.citation)}</p>${publicationMeta(paper)}</li>`;
}

function renderPublications() {
  const query = state.search.trim().toLocaleLowerCase();
  const terms = query.split(/\s+/).filter(Boolean);
  const visible = publications.map(resolvePublication).filter(paper=>{
    const text=[paper.name,paper.citation,paper.titleEn,paper.doi].filter(Boolean).join(' ').toLocaleLowerCase();
    return (state.publicationFilter==='all'||paper.category===state.publicationFilter) && (state.publicationYear==='all'||String(paper.year)===state.publicationYear) && (state.publicationStatus==='all'||paper.status===state.publicationStatus) && terms.every(term=>text.includes(term));
  });
  $('publications-list').innerHTML=visible.map(publicationItem).join('');
  $('publications-count').textContent=visible.length+t('publicationCount');
  $('publication-empty').hidden=visible.length>0;
  const resolved=publications.map(resolvePublication);
  all('[data-library-published]').forEach(el=>el.textContent=resolved.filter(paper=>paper.status==='published').length);
  all('[data-library-accepted]').forEach(el=>el.textContent=resolved.filter(paper=>paper.status==='accepted').length);
  all('[data-publication-filter]').forEach(button=>{const active=button.dataset.publicationFilter===state.publicationFilter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
}

function renderEducationPublications() {
  $('education-papers').innerHTML='<ol class="education-list">'+publications.filter(paper=>paper.category==='education').map(paper=>{
    const match=paper.citation.match(/^.*?\. ([\s\S]*?)\[J\]\. ([\s\S]*)$/);
    const title=state.lang==='en'&&paper.titleEn?paper.titleEn:match?match[1]:paper.citation;
    const venue=match?match[2].split(/,|，|（|\(/)[0].replace(/\.$/,''):'';
    const expanded=state.expanded.has(paper.id);
    return `<li class="education-row" data-education-id="${paper.id}"><button type="button" data-citation="${paper.id}" aria-expanded="${expanded}" aria-controls="citation-${paper.id}" aria-label="${esc(title+' · '+t('viewCitation'))}"><span class="education-year">${paper.year}</span><span class="education-title">${esc(title)}<small>${esc(venue)}</small></span><span class="education-state">${paper.status==='accepted'?`<span class="status accepted">${esc(t('accepted'))}</span>`:esc(t('published'))}</span><span class="education-plus" aria-hidden="true">${expanded?'−':'+'}</span></button><div class="education-citation" id="citation-${paper.id}" ${expanded?'':'hidden'}><p class="publication-citation" lang="${citationLanguage(paper.citation)}">${markName(paper.citation)}</p>${publicationMeta(paper,true)}</div></li>`;
  }).join('')+'</ol>';
}

function toggleCitation(id) {
  if (state.expanded.has(id)) state.expanded.delete(id);else state.expanded.add(id);
  const expanded=state.expanded.has(id),button=document.querySelector(`[data-citation="${id}"]`);
  button.setAttribute('aria-expanded',String(expanded));
  button.querySelector('.education-plus').textContent=expanded?'−':'+';
  $('citation-'+id).hidden=!expanded;
}

function renderCareerYears() {
  $('career-years').style.setProperty('--milestone-count',String(Object.keys(data().milestones).length));
  $('career-years').innerHTML=Object.keys(data().milestones).map(year=>`<button type="button" id="career-tab-${year}" role="tab" data-year="${year}" aria-selected="${year===state.year}" aria-controls="timeline-detail" tabindex="${year===state.year?0:-1}">${year}</button>`).join('');
  selectYear(state.year);
}

function selectYear(year) {
  const milestone=data().milestones[year];
  if (!milestone) return;
  state.year=year;
  all('[data-year]').forEach(button=>{const active=button.dataset.year===year;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  $('timeline-detail').setAttribute('aria-labelledby','career-tab-'+year);
  $('timeline-detail').innerHTML=`<div class="career-year">${year}<small>${esc(t(milestone.label))}</small></div><div><h3>${esc(milestone.title)}</h3><p>${esc(milestone.body)}</p><p class="year-span">${esc(milestone.period)}</p></div>`;
  const index=Object.keys(data().milestones).indexOf(year);
  $('career-count').textContent=`${String(index+1).padStart(2,'0')} / ${String(Object.keys(data().milestones).length).padStart(2,'0')}`;
  document.querySelector('[data-career-step="-1"]').disabled=index===0;
  document.querySelector('[data-career-step="1"]').disabled=index===Object.keys(data().milestones).length-1;
  revealTab($('career-years'),$('career-tab-'+year));
}

function stepCareer(step) {
  const years=Object.keys(data().milestones),index=years.indexOf(state.year);
  selectYear(years[Math.max(0,Math.min(years.length-1,index+step))]);
}

const detailDialog=$('detail-dialog'),libraryDialog=$('publication-dialog');
let detailFocus=null,libraryFocus=null;

function showDetail(html) {
  if (!detailDialog.open) detailFocus=document.activeElement;
  $('dialog-content').innerHTML=html;
  if (!detailDialog.open) detailDialog.showModal();
  detailDialog.scrollTop=0;
  detailDialog.querySelector('.dialog-close').focus();
}

function openWork(id) {
  const work=workById(id);
  if (!work) return;
  state.modal={type:'work',id};
  showDetail(`<div class="dialog-meta"><span class="status ${esc(work.statusClass)}">${esc(work.status)}</span><span>${esc(work.role)}</span><span>${esc(work.venue)} · ${esc(work.year)}</span></div><h2 id="dialog-title">${esc(work.name)} · ${esc(work.subtitle)}</h2><p class="paper-title">${esc(work.title)}</p>${work.image?`<figure>${imageViewport(work.image,work.caption,'eager')}<figcaption>${esc(work.caption)}</figcaption></figure>`:''}<div class="detail-sections"><div><h3>${esc(t('problem'))}</h3><p>${esc(work.problem)}</p></div><div><h3>${esc(t('method'))}</h3><p>${esc(work.method)}</p></div><div><h3>${esc(t('evidence'))}</h3><p>${esc(work.evidence)}</p></div></div><div class="citation-area"><p class="citation" lang="${citationLanguage(work.citation)}">${markName(work.citation)}</p><div class="citation-actions"><button type="button" data-copy="${esc(work.id)}">${esc(t('copy'))}</button>${work.doi?`<a href="https://doi.org/${esc(work.doi)}" target="_blank" rel="noopener">${esc(t('viewDoi'))}</a>`:''}</div></div>`);
}

function imageCaption(image) {
  if (image.workId) return workById(image.workId).caption;
  if (image.teachingKey) return data().teachingViews[image.teachingKey].caption;
  if (image.captionKey) return t(image.captionKey);
  if (image.areaKey) {const area=data().researchAreas[image.areaKey];return area.featured?workById(area.featured).caption:data().teachingViews.fund.caption;}
  return image.caption||t('originalFigure');
}

function openImage(image) {
  state.modal=image;
  const caption=imageCaption(image);
  showDetail(`<div class="image-dialog"><h2 id="dialog-title">${esc(caption)}</h2>${imageViewport(image.src,caption,'eager')}</div>`);
}

function openPublications() {
  renderPublications();
  if (!libraryDialog.open) {libraryFocus=document.activeElement;libraryDialog.showModal();}
  $('publication-search').focus();
}

function toast(message) {
  $('toast').textContent=message;$('toast').classList.add('show');
  clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),2600);
}

async function copyText(text,success,fallback) {
  try {await navigator.clipboard.writeText(text);toast(t(success));}catch{toast(t(fallback));}
}

async function copyCitation(id) {
  const work=workById(id);
  const citation=work.citation+(work.doi&&!work.citation.includes(work.doi)?' DOI: '+work.doi:'');
  await copyText(citation,'copied','copyFallback');
}

detailDialog.addEventListener('close',()=>{state.modal=null;if(detailFocus?.isConnected)detailFocus.focus({preventScroll:true});});
libraryDialog.addEventListener('close',()=>{if(libraryFocus?.isConnected)libraryFocus.focus({preventScroll:true});});
for (const dialog of [detailDialog,libraryDialog]) dialog.addEventListener('click',event=>{
  if(event.target!==dialog)return;
  const rect=dialog.getBoundingClientRect();
  if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();
});

function setLanguage(lang,remember=true) {
  if(!content[lang])return;
  state.lang=lang;
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.title=t('title');document.querySelector('meta[name="description"]').content=t('description');
  all('[data-i18n]').forEach(el=>{el.innerHTML=t(el.dataset.i18n);});
  all('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',t(el.dataset.i18nAria)));
  all('[data-i18n-alt]').forEach(el=>el.setAttribute('alt',t(el.dataset.i18nAlt)));
  all('[data-i18n-href]').forEach(el=>el.setAttribute('href',t(el.dataset.i18nHref)));
  all('[data-i18n-placeholder]').forEach(el=>el.setAttribute('placeholder',t(el.dataset.i18nPlaceholder)));
  all('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
  all('[data-publication-count]').forEach(el=>{el.textContent=publications.length;});
  all('[data-education-count]').forEach(el=>{el.textContent=educationPublicationCount;});
  syncBio();
  selectArea(state.area);renderWorkSelectors();renderProjects(state.filter);selectTeaching(state.teaching);renderTeachingProjects();renderCourseProjects();selectResource(state.resource);renderEducationPublications();renderCareerYears();renderPublications();
  if(detailDialog.open&&state.modal){const modal=state.modal;modal.type==='work'?openWork(modal.id):openImage(modal);}
  if(remember){
    try{localStorage.setItem('jiang-cv-language',lang);}catch{}
    try{const url=new URL(window.location.href);url.searchParams.set('lang',lang);history.replaceState(null,'',url);}catch{}
  }
  updateScroll();
}

document.addEventListener('click',event=>{
  const target=event.target;
  const lang=target.closest('[data-lang]');if(lang){setLanguage(lang.dataset.lang);return;}
  if(target.closest('[data-toggle-bio]')){state.bioExpanded=!state.bioExpanded;syncBio();return;}
  const area=target.closest('[data-area]');if(area){selectArea(area.dataset.area);return;}
  const showcase=target.closest('[data-showcase]');if(showcase){selectWork(showcase.dataset.showcase);return;}
  const workStep=target.closest('[data-work-step]');if(workStep){stepWork(Number(workStep.dataset.workStep));return;}
  const work=target.closest('[data-work]');if(work){openWork(work.dataset.work);return;}
  if(target.closest('[data-open-library]')){openPublications();return;}
  const filter=target.closest('[data-filter]');if(filter){renderProjects(filter.dataset.filter);return;}
  const project=target.closest('[data-project]');if(project){selectProject(Number(project.dataset.project));return;}
  const teaching=target.closest('[data-teaching]');if(teaching){selectTeaching(teaching.dataset.teaching);return;}
  const teachingProjects=target.closest('[data-education-project-group]');if(teachingProjects){renderTeachingProjects(teachingProjects.dataset.educationProjectGroup);return;}
  const teachingProject=target.closest('[data-teaching-project-id]');if(teachingProject){selectTeachingProject(teachingProject.dataset.teachingProjectId);return;}
  if(target.closest('[data-teaching-framework]')){selectTeaching('fund');$('teaching-panel').scrollIntoView({behavior:reducedMotion()?'auto':'smooth',block:'start'});$('tab-fund').focus({preventScroll:true});return;}
  const resource=target.closest('[data-resource]');if(resource){selectResource(resource.dataset.resource);if(resource.dataset.resource==='papers')$('education-publications').open=true;return;}
  const year=target.closest('[data-year]');if(year){selectYear(year.dataset.year);return;}
  const careerStep=target.closest('[data-career-step]');if(careerStep){stepCareer(Number(careerStep.dataset.careerStep));return;}
  const publication=target.closest('[data-publication-filter]');if(publication){state.publicationFilter=publication.dataset.publicationFilter;renderPublications();return;}
  if(target.closest('[data-reset-publications]')){state.publicationFilter='all';state.publicationYear='all';state.publicationStatus='all';state.search='';$('publication-search').value='';$('publication-year').value='all';$('publication-status').value='all';renderPublications();return;}
  const citation=target.closest('[data-citation]');if(citation){toggleCitation(citation.dataset.citation);return;}
  const copy=target.closest('[data-copy]');if(copy){copyCitation(copy.dataset.copy);return;}
  if(target.closest('[data-copy-email]')){copyText('jiangzy@buct.edu.cn','emailCopied','emailFallback');return;}
  const image=target.closest('[data-image]');if(image){openImage({type:'image',src:image.dataset.image,workId:image.dataset.imageWork,areaKey:image.dataset.areaImage,teachingKey:image.dataset.teachingImage,captionKey:image.dataset.captionKey});return;}
  if(target.closest('.dialog-close')){detailDialog.close();return;}
  if(target.closest('.library-close')){libraryDialog.close();return;}
  if(target.closest('[data-go-teaching]')){$('teaching').scrollIntoView({behavior:reducedMotion()?'auto':'smooth'});}
});

document.addEventListener('keydown',event=>{
  const tab=event.target.closest('[role="tab"]');
  if(tab){
    const list=tab.closest('[role="tablist"]'),tabs=all('[role="tab"]',list);let i=tabs.indexOf(tab);
    if(event.key==='ArrowRight')i=(i+1)%tabs.length;
    else if(event.key==='ArrowLeft')i=(i+tabs.length-1)%tabs.length;
    else if(event.key==='Home')i=0;
    else if(event.key==='End')i=tabs.length-1;
    else return;
    event.preventDefault();tabs[i].click();
    const replacement=document.getElementById(tabs[i].id);if(replacement)replacement.focus({preventScroll:true});
    return;
  }
  const node=event.target.closest('.map-node');
  if(node&&(event.key==='Enter'||event.key===' ')){event.preventDefault();selectArea(node.dataset.area);}
});

$('publication-search').addEventListener('input',event=>{state.search=event.target.value;renderPublications();});
$('publication-year').addEventListener('change',event=>{state.publicationYear=event.target.value;renderPublications();});
$('publication-status').addEventListener('change',event=>{state.publicationStatus=event.target.value;renderPublications();});
const years=[...new Set(publications.map(paper=>paper.year))].sort((a,b)=>b-a);
$('publication-year').insertAdjacentHTML('beforeend',years.map(year=>`<option value="${year}">${year}</option>`).join(''));
all('.chart-axis').forEach(axis=>{const ticks=all('span',axis);ticks.forEach((tick,index)=>tick.style.setProperty('--tick',(index/(ticks.length-1)*100)+'%'));});

const menu=document.querySelector('.menu-toggle'),nav=$('navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.addEventListener('click',event=>{if(nav.classList.contains('open')&&!event.target.closest('.nav-wrap'))closeMenu();});
const sections=all('main>section[id]'),navLinks=all('a[href^="#"]',nav);
function updateScroll(){
  const span=document.documentElement.scrollHeight-window.innerHeight;
  document.querySelector('.scroll-progress').style.width=(span>0?Math.max(0,Math.min(100,window.scrollY/span*100)):0)+'%';
  const atBottom=span>0&&window.scrollY+window.innerHeight>=document.documentElement.scrollHeight-6;
  const active=atBottom?sections.at(-1):sections.filter(section=>section.getBoundingClientRect().top<=150).at(-1);
  navLinks.forEach(link=>{const current=link.getAttribute('href')==='#'+active?.id;link.classList.toggle('current',current);if(current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
}
let ticking=false;
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{updateScroll();ticking=false;});ticking=true;}},{passive:true});
window.addEventListener('resize',updateScroll);

let preferred='zh';
try{preferred=localStorage.getItem('jiang-cv-language')||'zh';}catch{}
const queryLanguage=new URL(window.location.href).searchParams.get('lang');
setLanguage(content[queryLanguage]?queryLanguage:content[preferred]?preferred:'zh',false);
if(window.location.hash==='#other-publications')openPublications();
