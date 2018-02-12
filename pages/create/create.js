// pages/create/create.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accounts: [],
    def_value: '',  // for form reseting
    stay_top: false,
    use_phone: false,
    hide_pwd: false,
    pwd_focus: false,
    view_pwd_img: app.globalData.images[0]
  },
  formSubmit: function (e) {
    console.log('Submiting form with data: ', e.detail.value);
    this.data.accounts.push(e.detail.value);
    
    this.setData({
      accounts: this.data.accounts,
      def_value: '',
      stay_top: false,
      use_phone: false,
    });

    wx.showToast({
      title: '保存成功',
    });
    // console.log('bindViewPwd: ' + JSON.stringify(this.data.accounts));
  },
  formReset: function () {
  },
  bindViewPwd: function () {
    this.setData({
      hide_pwd: !this.data.hide_pwd,
      view_pwd_img: app.globalData.images[ (!this.data.hide_pwd) | 0],
      pwd_focus: true // mandatory!
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getStorage({
      key: app.globalData.storageKey,
      success: function (res) {
        if (res.data)
          that.setData({ accounts: res.data });

        console.log('Load stored data: ' + JSON.stringify(res.data));
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 每次打开页面都会调用一次
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onUnload, saving to storage');
    try {
      wx.setStorageSync(app.globalData.storageKey, this.data.accounts);
    } catch (e) {
      console.log(e);
    }
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})