export async function waitShadowElement(selector: string) {
  function getElement(selector: string) {
    return document.body.querySelector(selector)?.shadowRoot;
  }

  await new Promise<void>((resolve) => {
    const interval = setInterval(() => {
      if (getElement(selector)) {
        clearInterval(interval);
        resolve();
      }
    });
  });
}
