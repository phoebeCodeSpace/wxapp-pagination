import userModel from '../../model/user'
import { random } from '../../utils/util'

Page({
  data: {
    key: null,
    userList:[],
    userTotal: 0
  },

  getUserList(e){
    const data = e.detail

    userModel.getUserList(data)
    .then(result => {
      this.setData({
        userList: result.list,
        userTotal: result.total
      })
    })
  },

  onReachBottom() {
    this.setData({
      key: random(16)
    })
  }
})
