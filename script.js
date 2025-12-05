// script.js — tiny UX microinteractions
document.addEventListener('DOMContentLoaded', function(){
  // contact form microinteraction
  const submitBtn = document.getElementById('submitBtn');
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');

  submitBtn.addEventListener('click', function(){
    submitBtn.disabled = true;
    submitBtn.innerText = 'Sending...';
    // fake send
    setTimeout(function(){
      submitBtn.innerText = 'Sent ✓';
      msg.innerText = 'Thanks — I will reply soon!';
      form.reset();
      setTimeout(function(){
        submitBtn.disabled = false;
        submitBtn.innerText = 'Send';
        msg.innerText = '';
      }, 1400);
    }, 900);
  });

  // small parallax for hero doodle (pointer move)
  const doodle = document.getElementById('heroDoodle');
  const float1 = document.getElementById('float1');
  const float2 = document.getElementById('float2');
  const hero = document.getElementById('hero');
  hero.addEventListener('mousemove', function(e){
    const r = hero.getBoundingClientRect();
    const cx = (e.clientX - r.left) / r.width - 0.5;
    const cy = (e.clientY - r.top) / r.height - 0.5;
    if (doodle){
      doodle.style.transform = `translate(${cx * 10}px, ${cy * 8}px)`;
    }
    if (float1){
      float1.style.transform = `translate(${cx * -18}px, ${cy * -14}px) rotate(-6deg)`;
    }
    if (float2){
      float2.style.transform = `translate(${cx * 12}px, ${cy * 10}px) rotate(-12deg)`;
    }
  });
  hero.addEventListener('mouseleave', function(){
    if (doodle) doodle.style.transform = '';
    if (float1) float1.style.transform = '';
    if (float2) float2.style.transform = '';
  });
});
