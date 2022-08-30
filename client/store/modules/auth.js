import jwtDecode from "jwt-decode";
export const state = () => ({
  user: ""
});
export const actions = {
  async login({ commit, state }, payload) {
    let reponse = await this.$request.post("api.login", payload);
    let user = jwtDecode(reponse.data);
    state.user = user;
    return reponse;
  },
  async logout({ commit }) {
    try {
      await this.$request.post("api.logout");
      localStorage.clear();
      this.$router.push("/login");

      // Force clear state using reload page
      setTimeout(() => location.reload(), 0);
    } catch (error) {
      console.error(error);
      localStorage.clear();
      this.$router.push("/login");
    }
  },
  forgotPassword({ commit }, payload) {
    return this.$request.post("/api/password/forgot", payload);
  },
  resetPassword({ commit }, payload) {
    return this.$request.post("/api/password/reset", payload);
  }
};
