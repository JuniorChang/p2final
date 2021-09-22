<template>
  <div>
    <h1>Testing</h1>
    <h2>THIS THIS THIS</h2>

    
<!-- Start of Name Input -->
    <div>
      <label class="form-label"> Character Name </label>
      <input class="form-control char-name" type="text" v-model="name" />
    </div>
<!-- End of Name Input -->

<!-- Start of Role Selection -->
    <label class="role">Select Your Role</label>
    <div class="d-flex justify-content-start">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="role"
          v-model="role"
        />

        <label class="form-check-label" for="flexRadioDefault1"> Solo </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value="role"
          v-model="role"
          checked
        />

        <label class="form-check-label" for="flexRadioDefault2">
          Support
        </label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value="support"
          v-model="role"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2"> Mid </label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value="mid"
          v-model="role"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2"> AD </label>
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value="AD"
          v-model="role"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2"> Roam </label>
      </div>     
    </div>
<!-- End of Role Selection -->

<!-- Start of Server Selection -->
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Server
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="Alpha">Alpha</a>
        <a class="dropdown-item" href="Beta">Beta</a>
        <a class="dropdown-item" href="Charlie">Charlie</a>
      </div>
    </div>
<!-- End of Server Selection -->

<!-- Start of Item Selection -->
    <form>
      <div class="form-group d-flex justify-content-start">
        <div class="form-check">
          <label for="Boots" class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              id="boots"
              value="boots"
              v-model="items"
            />
            Boots
          </label>
        </div>
        <div class="form-check">
          <label for="hand" class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              id="hand"
              value="hand"
              v-model="items"
            />
            hand
          </label>
        </div>
        <div class="form-check">
          <label for="head" class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              id="head"
              value="head"
              v-model="items"
            />
            head
          </label>
        </div>
        <div class="form-check">
          <label for="weapon" class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              id="weapon"
              value="weapon"
              v-model="items"
            />
            weapon
          </label>
        </div>
      </div>
    </form>
    
<!-- End of Item Selection -->

<!-- Start of Submit Button -->
  <div> 
      <button class="btn btn-primary" v-on:click="addNewChar">
          Add Now
      </button>
  </div>
  <div class="body"></div>


  </div>



</template>






<script>
export default {
  name: "AddChar",
  data: function () {
    return {
      name: "",
      role:"",
      server:"",
      items: [],
    };
  },
};
// import axios from "axios";

// const API_URL = ""

   

</script>

<style scoped>
.char-name {
  max-width: 25vw;
}

.dropdown {
  margin-top: 20px;
}

.form-group {
  margin-top: 20px;
}

.body {
  min-height: 500px;
}

.btn {
    margin-top: 10px;
}
</style>
