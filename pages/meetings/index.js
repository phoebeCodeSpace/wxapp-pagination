import userModel from '../../model/user'
import { random } from '../../utils/util'

const type = {
  'JOIN' : 0,
  'BOOK' : 1
}
const scene = {
  [type['JOIN']]: {
    key: 'joinKey'
  },
  [type['BOOK']]: {
    key: 'bookKey'
  }
}

const currentTab = type['JOIN']
Page({
  data: {
    type,
    currentTab,
    bookKey: null,
    bookMeetings: [],
    bookTotal:0,
    joinMeetings: [],
    joinTotal: 0,
    joinKey: null
  },

  onChange(event) {
    const currentTab = event.detail.index
    this.setData({
      currentTab
    })
  },

  getJoinMeetings(e){
    const data = e.detail
  
    userModel.getJoinMeetings(data)
      .then(result => {
          this.setData({
            joinMeetings: result.list,
            joinTotal: result.total
          })
        })
  },

  getBookMeetings(e){
    const data = e.detail

    userModel.getBookMeetings(data)
      .then(result => {
        this.setData({
          bookMeetings: result.list,
          bookTotal: result.total
        })
      })

  },

  onReachBottom(){
    const key = scene[+this.data.currentTab].key
    this.setData({
      [key]: random(16)
    })
  }
})