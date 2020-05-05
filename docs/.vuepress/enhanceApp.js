import { BlogCalendar } from "./components/BlogCalendar.vue";

export default ({ Vue, options, router, siteData }) => {
  Vue.component("BlogCalendar", BlogCalendar);
  Vue.config.productionTip = false;
};
