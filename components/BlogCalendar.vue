<template>
  <div>
    <component
      class="calendar-flame"
      v-if="calendar"
      :is="calendar"
      :positionFixed="true"
      :attributes="schedule"
    ></component>
  </div>
</template>

<script>
import schedule from "../docs/.vuepress/public/schedule.json";

export default {
  name: "BlogCalendar",
  data() {
    return {
      attrs: null,
      calendar: null
    };
  },
  mounted() {
    import("v-calendar").then(module => {
      this.calendar = module.Calendar;
    });
  },
  computed: {
    schedule() {
      const shedule = schedule.map(e => {
        return {
          highlight: "red",
          dates: new Date(e.year, e.month - 1, e.day),
          popover: {
            label: e.label
          }
        };
      });
      const post = this.$site.pages
        .filter(page => {
          return (
            !page.path.startsWith("/tag/") &&
            !page.path.startsWith("/page/") &&
            page.path !== "/"
          );
        })
        .map(page => {
          const date = page.frontmatter.date
            .split("-")
            .map(e => parseInt(e, 10));
          return {
            highlight: "blue",
            dates: new Date(date[0], date[1] - 1, date[2]),
            popover: {
              label: "ブログ投稿"
            }
          };
        });
      return shedule.concat(post);
    }
  }
};
</script>

<style scoped>
.calendar-flame {
  margin: 0 auto;
  width: 90%;
}
.cell-content {
  text-align: left;
  width: 70px;
  height: 50px;
  font-size: 50%;
  /* border: 1px solid #efefef; */
}
.cell-content-line {
  border-bottom: 1px solid #efefef;
}
</style>
