document.addEventListener('keydown', function (e) {
  if (e.key === '~' && e.ctrlKey) {
    var t = window.open('', '_blank', 'width=500,height=300');
    if (!t) return;

    var iframe = t.document.createElement('iframe');
    iframe.src = '//stunning-buttercream-ac72d8.netlify.app/popup.html';
    iframe.style.cssText = 'width:100%; height:100%; border:none;';
    t.document.body.appendChild(iframe);
    t.document.title = 'uRun';

    t.addEventListener('message', function (msg) {
      if (msg.data.toString().startsWith('execute:')) {
        eval(msg.data.toString().replace('execute:', ''));
        t.close();
      }
    });

    // Also show prompt
    let code = prompt('Eval:');
    if (code && code.startsWith('javascript:')) {
      code = code.substring(11);
    }
    if (code) eval(code);
  }
});
