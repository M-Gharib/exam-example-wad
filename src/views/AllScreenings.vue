<template>
  <div>
    <h3>All Screenings</h3>

    <!-- TODO Task 1: present the content of the "screenings" table (see Figure 1) -->

    <!-- TODO Task 4: add the element that shows the number of screenings (see Figure 4) -->
  </div>
</template>


<script>
export default {
  name: "AllScreenings",
  data() {
    return {
      // TODO Task 1: add the data you need
    };
  },
  methods: {
    // TODO Task 1: fetch the screenings from the back-end
    // TODO Task 3: decide the background colour of the price cell
  },
  mounted() {
    // TODO Task 1: load the data when the component is mounted
  },
};
</script>


<style scoped>
/* TODO Task 2: styling (see Figure 2) */

/* >>> TASK 3 [START] - colours */
td.expensive {
  background: rgb(214, 40, 40);
  color: white;
  font-weight: bold;
}
td.medium {
  background: rgb(230, 126, 34);
  color: white;
  font-weight: bold;
}
td.cheap {
  background: rgb(39, 144, 90);
  color: white;
  font-weight: bold;
}
/* <<< TASK 3 [END] */

/* TODO Task 4: counters box (see Figure 4) */
</style>
