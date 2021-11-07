export const Song = {
  state: {
    currentPlayingSong: {},
    songPlayList: [],
    songLyricInfo: {}
  },
  getters: {},
  mutations: {
    setCurrentPlayingSong(state: any, currentPlayingSong: any) {
      state.currentPlayingSong = currentPlayingSong;
    }
  },
  actions: {
    // 获取当前歌曲信息
    fetchCurrentPlayingSong() {
      return {};
    }
  }
};
