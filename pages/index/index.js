Page({
  data: {
    imgUrls: [
      'http://img.netbian.com/file/2021/0505/534974d61465e607f5821a82d43a06c6.jpg',
      'http://img.netbian.com/file/2021/0408/762b7521d45f66ee20b6d46278b2236c.jpg',
      'http://img.netbian.com/file/2020/0304/83f4b8dc41fe069de22b7e736c580497.jpg',
      'http://img.netbian.com/file/2018/0717/eedc028654a97e0895f3bf1d796640a5.jpg',
    ],
    interval: 3000,
    time: '',
    timeFlag: true,
    timer: '',
    XB_Times: null,
    start: '00:00',
    end: '23:00'
  },
  bindTimeChange(e) {
    console.log(e);
    let tim = this.getCurrentDate(e.detail.value + ':00')
    this.setData({
      time: e.detail.value,
      timeFlag: false,
      XB_Times: tim
    })
    this.countDown()
  },
  getCurrentDate(timer = "19:00:00") {
    if (timer === "00:00:00") {
      timer = "24:00:00"
    }
    var now = new Date();
    var year = now.getFullYear(); //得到年份
    var month = now.getMonth() + 1; //得到月份
    var date = now.getDate(); //得到日期
    var EndTime = timer; //你下班的时间
    var time = year + "/" + month + "/" + date + "," + EndTime;
    return time;
  },
  addZero(i) {
    return i < 10 ? "0" + i : i + "";
  },
  countDown() {
    var nowtime = new Date();
    var endtime = new Date(this.data.XB_Times);
    var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
    var d = parseInt(lefttime / (24 * 60 * 60));
    var h = parseInt((lefttime / (60 * 60)) % 24);
    var m = parseInt((lefttime / 60) % 60);
    var s = parseInt(lefttime % 60);
    d = this.addZero(d);
    h = this.addZero(h);
    m = this.addZero(m);
    s = this.addZero(s);
    this.setData({
      timer: `下班倒计时:${h} 时 ${m} 分 ${s} 秒`
    })
    if (lefttime <= 0) {
      this.setData({
        timer: `已经下班了`
      })
      return;
    }
    setTimeout(() => {
      this.countDown(this.data.XB_Times);
    }, 1000);
  },
  onShow() {
    let XB_Times = this.getCurrentDate();
    this.setData({
      XB_Times
    })
    this.countDown(XB_Times);
  },
  onLookImg(e) {
    console.log(e);
    let current = e.currentTarget.dataset.item
    let that = this
    qq.previewImage({
      urls: that.data.imgUrls,
      current,
      success(res) {
        console.log(res);
      }
    })
  },
  onShareAppMessage() {
    console.log('触发了我')
    return {
      title: '下班倒计时',
      imageUrl:'http://img.netbian.com/file/2020/0304/83f4b8dc41fe069de22b7e736c580497.jpg'
    }
  }
})