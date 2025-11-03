// Small JS for basic interactivity
document.addEventListener('DOMContentLoaded',()=>{
  // set current year in footer
  const y=document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
      const target=link.getAttribute('href');
      if(target && target.startsWith('#')){
        const el=document.querySelector(target);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth',block:'start'});
        }
      }
    })
  })

  // simple contact form handler — opens default mail client as a fallback
  const form=document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const data=new FormData(form);
      const email=data.get('email')?.toString().trim();
      const message=data.get('message')?.toString().trim();
      if(!email||!message){
        alert('Please provide an email and a short message.');
        return;
      }
      const subject=encodeURIComponent('Delight Tech inquiry from '+email);
      const body=encodeURIComponent(message+'\n\n(from: '+email+')');
      // mailto fallback to the Delight Tech address
      window.location.href=`mailto:info@delighttech.com?subject=${subject}&body=${body}`;
    })
  }

  // mobile nav toggle
  const navToggle=document.querySelector('.nav-toggle');
  const mainNav=document.getElementById('main-nav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click',()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      mainNav.style.display = expanded ? '' : 'flex';
    });
  }
});
