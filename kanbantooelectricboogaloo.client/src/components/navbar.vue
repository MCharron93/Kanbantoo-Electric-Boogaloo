<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <h5 class="text-light lead my-1">
          Kanban 2 - Electric Boogaloo!
        </h5>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <button
              class="btn btn-outline-primary text-uppercase"
              @click="login"
              v-if="!user.isAuthenticated"
            >
              Login
            </button>

            <div class="dropdown" v-else>
              <div
                class="dropdown-toggle"
                @click="state.dropOpen = !state.dropOpen"
              >
                <img
                  :src="user.picture"
                  alt="user photo"
                  height="40"
                  class="rounded-circle"
                />
                <span class="mx-3 text-light">{{ user.name }}</span>
              </div>
              <div
                class="dropdown-menu p-0 list-group w-100"
                :class="{ show: state.dropOpen }"
                @click="state.dropOpen = false"
              >
                <router-link :to="{ name: 'Profile' }">
                  <div class="list-group-item list-group-item-action hoverable">
                    Profile
                  </div>
                </router-link>
                <router-link :to="{ name: 'Home' }">
                  <div class="list-group-item list-group-item-action hoverable">
                    Home
                  </div>
                </router-link>
                <div
                  class="list-group-item list-group-item-action hoverable"
                  @click="logout"
                >
                  logout
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  font-size: 16px;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
.list-group-item {
  background: transparent;
}
/* @media (max-width: 500px) {
  nav #mobile-nav {
    background-color: #A8B2EC!important;
  }
} */
</style>
