// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accounts: [],
    def_value: '',
    stay_top: false,
    use_phone: false,
    hide_pwd: false,
    view_pwd_img: '../../images/hide_pwd.png'
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
    // this.initView();
  },
  bindViewPwd: function () {
    this.data.hide_pwd = !this.data.hide_pwd;
    if (!this.data.hide_pwd) {
      this.data.view_pwd_img = "../../images/hide_pwd.png";
    } else {
      this.data.view_pwd_img = "../../images/show_pwd.png";
    }

    this.setData({
      hide_pwd: this.data.hide_pwd,
      view_pwd_img: this.data.view_pwd_img
    });
  },
  initView: function () {
    this.setData({
      def_value: '',
      stay_top: false,
      use_phone: false,
      hide_pwd: false,
      view_pwd_img: '../../images/hide_pwd.png'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // TODO: load data from storage
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
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
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