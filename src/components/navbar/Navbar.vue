<template>
  <nav>
    <v-app-bar flat app>
      <!-- Hamburger icon -->
      <v-app-bar-nav-icon class="grey--text" @click="toggleShowDrawer" />

      <!-- Title -->
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">PVR</span>
        <span>Cinema</span>
      </v-toolbar-title>

      <!-- Spacer -->
      <v-spacer />

      <!-- Signout button -->
      <v-btn text color="grey" @click="logout">
        <span>Sign out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation drawer -->
    <v-navigation-drawer v-model="showDrawer" app class="primary">
      <avatar />
      <drawer />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import Avatar from "./Avatar";
import Drawer from "./Drawer";

export default {
  name: "Navbar",
  data() {
    return {
      showDrawer: false // Weather to show the navigation drawer or not
    };
  },
  methods: {
    ...mapActions({
      logout: "logout"
    }),
    /**
     * Show or hide the drawer
     */
    toggleShowDrawer() {
      this.showDrawer = !this.showDrawer;
    }
  },
  components: {
    Drawer, // List of links
    Avatar // The avatar of the user
  }
};
</script>
