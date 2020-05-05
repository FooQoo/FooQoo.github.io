<template>
  <div>
    <component
      v-if="calendar"
      :is="calendar"
      is-expanded
      :attributes="attrs"
    ></component>
  </div>
</template>

<script>
import schedule from "../public/schedule.json";

export default {
  name: "BlogCalendar",
  data() {
    return {
      attrs: this.getSchedule(),
      calendar: null,
    };
  },
  mounted() {
    import("v-calendar").then((module) => {
      this.calendar = module.Calendar;
    });
  },
  methods: {
    getSchedule: () => {
      return schedule.map((e) => {
        return {
          highlight: {
            animated: true,
            height: "1.8rem",
            backgroundColor: "red",
            borderColor: null,
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "1.8rem",
            opacity: 1,
          },
          dates: new Date(e.year, e.month - 1, e.day),
          popover: {
            label: e.label,
          },
        };
      });
    },
  },
};
</script>

<style scoped>
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
