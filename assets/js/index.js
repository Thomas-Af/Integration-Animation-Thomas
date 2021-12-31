let threshold = []

for (var i = 0; i < 99; i++) {
  threshold.push(i / 100)
}

let options = {
  root: null,
  rootMargin: '0px',
  threshold: threshold
}

let observer = new IntersectionObserver(callback, options);

function callback(entries, observer){
  entries.forEach((entry, i) => {
    entry.target.style.setProperty('--ratio', entry.intersectionRatio)
    // if(entry.isIntersecting){
    //   entry.target.classList.add('visible')
    //   entry.target.querySelector('#animlargeur').beginElement()
    // }else{
    //   entry.target.classList.remove('visible')
    // }
  });

}

document.querySelectorAll('.equipeStandard article div').forEach((item, i) => {
  observer.observe(item)
});
