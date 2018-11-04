const screen = {
  state: {
    clientHeight: 375,
    clientWidth: 667
  },
  reducers: {
    setScreen(state, data) {
      console.log(data);
      return {
        ...state,
        clientHeight: data.clientHeight,
        clientWidth: data.clientWidth
      };
    },
    setClientHeight(state, clientHeight) {
      return {
        ...state,
        clientHeight
      };
    },
    setClientWidth(state, clientWidth) {
      return {
        ...state,
        clientWidth
      };
    }
  },
  effects: {
    // async getTest() {
    //   console.log('chufagetTest');
    //   await new Promise(resolve => {
    //     setTimeout(() => {
    //       this.setTest(0);
    //       resolve();
    //     }, 2000);
    //   });
    // }
  }
};

export default screen;
