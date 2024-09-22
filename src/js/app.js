import Swup from "swup";
import SwupParallelPlugin from "@swup/parallel-plugin";

const swup = new Swup({
  plugins: [new SwupParallelPlugin()],
});

swup.hooks.on("visit:start", (visit) => {
  visit.scroll.reset = false;
});

swup.hooks.before("content:insert", (visit, { containers }) => {
  containers[0].previous.style.top = `-${window.scrollY}px`;
  window.scrollTo(0, { immediate: true });
});
