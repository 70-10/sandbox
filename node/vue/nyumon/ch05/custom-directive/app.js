Vue.directive("fallback-image", {
  bind(el, binding) {
    console.log("bind", binding);
    const once = binding.modifiers.once;
    el.addEventListener("error", function onError() {
      el.src = binding.value;
      if (once) {
        el.removeEventListener("error", onError);
      }
    });
  },
  update(el, binding) {
    console.log("Update", binding);
    if (binding.value === binding.oldValue) {
      return;
    }

    if (binding.oldValue !== el.src) {
      return;
    }
    el.src = binding.value;
  }
});

const vm = new Vue({
  el: "#app",
  data() {
    return {
      altText: "logo",
      noImageURL: "https://dummyimage.com/400x400/000/ffffff.png&text=no+image"
    };
  }
});

window.vm = vm;
