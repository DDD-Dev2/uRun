document.addEventListener('keydown', function (event) {
  if (event.key === '~' && event.ctrlKey) {
    const popup = window.open('', '_blank', 'width=500,height=300');
    const iframe = popup.document.createElement('iframe');

    iframe.src = '//stunning-buttercream-ac72d8.netlify.app/popup.html';
    iframe.style.cssText = 'width:100%; height:100%; border:none;';
    popup.document.body.appendChild(iframe);
    popup.document.title = 'uRun';

    popup.addEventListener('message', function (msgEvent) {
      const data = msgEvent.data.toString();
      if (data.startsWith('execute:')) {
        eval(data.replace('execute:', ''));
        popup.close();
      }
    });

    let code = prompt('Eval:');
    if (code && code.startsWith('javascript:')) {
      code = code.substring(11);
    }
    if (code) eval(code);
  }
});
