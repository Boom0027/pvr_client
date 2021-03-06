import { mapGetters, mapActions } from "vuex";

export const addUserMixin = {
  data() {
    return {
      firstName: "", // Firstname of the new user
      lastName: "", // Lastname of the new user
      email: "", // Email of the new user
      city: "", // City of the new user
      validateOnBlur: true, // Should we validate on blur
      searchCityTimeout: null, // Timeout for searching a city
      prevCitySearch: false, // Previous search
      showDialog: false // Show dialog or not
    };
  },
  computed: {
    ...mapGetters({
      cities: "getCities",
      cityLoading: "getCityLoading"
    }),
    formattedCities() {
      // Step 1: Check if undefined
      if (typeof this.cities === "undefined") {
        return [];
      }

      // Step 2: If not undefined
      return this.cities.map(city => {
        return { text: city.name, id: city.id };
      });
    }
  },
  methods: {
    ...mapActions({
      searchCity: "searchCity" // Searches a city
    }),
    /**
     * Search city local
     */
    searchCityLocal(value) {
      // Step 0: Detect a change
      if (value === this.prevCitySearch) {
        return false;
      }
      this.prevCitySearch = value;

      // Step 1: Clear city timeout if not null
      if (this.searchCityTimeout !== null) {
        clearTimeout(this.searchCityTimeout);
      }

      // Step 2: Create a new timeout
      this.searchCityTimeout = setTimeout(() => {
        this.searchCity(value);
      }, 500);
    }
  }
};
