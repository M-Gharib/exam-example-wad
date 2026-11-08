<template>
  <div>
    <h1>Screenings Management Panel</h1>

    <!-- TODO Task 5: table with one row per screening, every field editable (see Figure 5) -->
    <!-- TODO Task 6: "update" and "delete" button in each row -->

    <h3>Add a Screening</h3>
    <!-- TODO Task 7: form (and "Add Screening" button) for adding a new screening -->
  </div>
</template>


<script>
export default {
  name: "ScreeningManagement",
  data() {
    return {
      // TODO Task 5 and Task 7: add the data you need
    };
  },
  methods: {
    // TODO Task 5: fetch all screenings from the back-end
    // TODO Task 6: updateScreening(...) and deleteScreening(...)
    // TODO Task 7: addScreening(...)
  },
  mounted() {
    // TODO Task 5: load the data when the component is mounted
  },
};
</script>


<style scoped>
h1 {
  font-size: 20px;
}
.container {
  background: #e4e6ee;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
  margin: 0 auto 30px auto;
  padding: 10px 20px;
  width: 90%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
}
table {
  border-spacing: 4px 6px;
}
input {
  width: 105px;
  text-align: center;
}
button {
  border: 0;
  padding: 6px 14px;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
.update {
  background: rgb(19, 67, 163);
}
.delete {
  background: rgb(214, 40, 40);
}
.add {
  background: #3b3f6b;
  padding: 10px 24px;
  margin-top: 5px;
}
</style>
