(function(){
  // card click -> where the Vimeo player will open
  document.querySelectorAll('.card').forEach(function(c){
    c.addEventListener('click', function(){
      var id = c.getAttribute('data-vimeo');
      var box = c.classList.contains('ph') ? c : c.querySelector('.ph');
      var lab = box.querySelector('.ph-label');
      if(c.classList.contains('playing')){
        c.classList.remove('playing');
        lab.innerHTML = lab.getAttribute('data-orig');
        return;
      }
      if(!lab.getAttribute('data-orig')) lab.setAttribute('data-orig', lab.innerHTML);
      c.classList.add('playing');
      lab.innerHTML = '<b>▶ Vimeo player</b>player.vimeo.com/video/' + id + '<br>title=0 · byline=0 · portrait=0 · dnt=1';
    });
  });

  // sticky bar appears after the hero
  var hero = document.querySelector('.hero'), bar = document.getElementById('sticky');
  window.addEventListener('scroll', function(){
    bar.classList.toggle('on', window.scrollY > hero.offsetHeight - 80);
  }, {passive:true});
})();
