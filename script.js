const gacha = document.getElementById('gacha');
const btn   = document.getElementById('spinBtn');
let busy = false;

btn.addEventListener('click', () => {
  if(busy) return;
  busy = true;
  gacha.classList.add('spin');

  /* 2.8s でアニメ終了、その後再度回せるように busy フラグ解除 */
  setTimeout(()=>{ busy = false; }, 2800);
});
