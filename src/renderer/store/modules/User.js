const state = {
    userId: "",
    userName: "",
    userEmail: "",
    userPhotoUrl: "",
    userEmailVerified: ""
  }
  
  const mutations = {
    setUserId(state, value){
      state.userId = value
    },
    setUserName(state, value){
        state.userName = value
    },
    setUserEmail(state, value){
        state.userEmail = value
    },
    setUserPhotoUrl(state, value){
        state.userPhotoUrl = value
    },
    setUserEmailVerified(state, value){
        state.userEmailVerified = value
    },
    setUser(state, user){
        state.userEmailVerified = user.emailVerified;
        state.userId = user.uid;
        state.userEmail = user.email;
        state.userName = user.name;
        state.userPhotoUrl = user.photoURL;
    }

  }
  
  const actions = {
    someAsyncTask ({ commit }) {
      // do something async
      commit('setUserId'),
      commit('setUserName'),
      commit('setUserEmail'),
      commit('setUserPhoto'),
      commit('setUserEmailVerified')
    }
  }
  
  const getters = {
    getUser (state){
      let user = {};
      user.userId = state.userId;
      user.userName = state.userName;
      user.userEmail = state.userEmail;
      user.userPhotoUrl = state.userPhotoUrl;
      user.userEmailVerified = state.userEmailVerified;
      return user;
    }
  }
  
  export default {
    state,
    mutations,
    actions,
    getters
  }
  