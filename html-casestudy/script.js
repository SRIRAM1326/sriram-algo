/* ==========================================================================
   NanoProfitsAI Case Study — PoOS Design System Helper Logic
   ========================================================================== */

function copyDiagram(button) {
  const container = button.closest('.diagram-display-box');
  const code = container.querySelector('code').textContent;

  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.textContent;
    button.textContent = 'Copied! ✓';
    button.style.background = 'var(--gold)';
    button.style.color = 'var(--navy)';

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
      button.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy diagram text: ', err);
  });
}
