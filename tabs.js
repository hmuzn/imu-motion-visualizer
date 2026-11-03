const measureTab=document.querySelector('#measureTab');
const datasetTab=document.querySelector('#datasetTab');
const measureView=document.querySelector('#measureView');
const datasetView=document.querySelector('#datasetView');
const datasetFrame=document.querySelector('#datasetFrame');

function showTab(name){
  const dataset=name==='dataset';
  measureTab.classList.toggle('active',!dataset);
  datasetTab.classList.toggle('active',dataset);
  measureTab.setAttribute('aria-selected',String(!dataset));
  datasetTab.setAttribute('aria-selected',String(dataset));
  measureView.classList.toggle('active',!dataset);
  datasetView.classList.toggle('active',dataset);
  if(dataset&&!datasetFrame.hasAttribute('src'))datasetFrame.src=datasetFrame.dataset.src;
  history.replaceState(null,'',dataset?'#dataset':'#measure');
  window.scrollTo({top:0,behavior:'instant'});
  window.dispatchEvent(new Event('resize'));
}

measureTab.addEventListener('click',()=>showTab('measure'));
datasetTab.addEventListener('click',()=>showTab('dataset'));
showTab(location.hash==='#dataset'?'dataset':'measure');
