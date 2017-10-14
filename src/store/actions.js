export default {
    register({ commit }, userId) {
        setTimeout(() => {
            commit('register', userId);
        }, 10);     
    }
}