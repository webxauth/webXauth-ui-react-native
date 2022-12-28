const runFirst = `
setTimeout(function() {
    localStorage.setItem("isMobile", "1");
  }, 100);
true; // note: this is required, or you'll sometimes get silent failures
`
const runBeforeFirst = `
window.isNativeApp = true;
true; // note: this is required, or you'll sometimes get silent failures
`

export { runFirst, runBeforeFirst }
