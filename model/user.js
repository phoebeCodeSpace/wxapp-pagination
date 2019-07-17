import { api, request } from '../mock/index'

class User {
  constructor(){
    this.userList = {
      list: [],
      total: 0
    }
    this.joinMeetings = {
      list: [],
      total: 0
    }
    this.bookMeetings = {
      list: [],
      total: 0
    }
  }

  getUserList(){
    return request(api.getUserList)
      .then((res) => {
        const concatList = [...this.userList.list, ...res.data.list]
        this.userList = {
          list: concatList,
          total: res.data.total
        }
        return this.userList
      })
  }

  getJoinMeetings(){
    return request(api.getJoinMeetings)
          .then((res) => {
            const concatList = [...this.joinMeetings.list, ...res.data.list]
            this.joinMeetings = {
              list: concatList,
              total: res.data.total
            }
            // console.log(this.joinMeetings.list)
            return this.joinMeetings
          })
  }

  getBookMeetings(){
    return request(api.getBookMeetings)
          .then((res) => {
            const concatList = [...this.bookMeetings.list, ...res.data.list]
            this.bookMeetings = {
              list: concatList,
              total: res.data.total
            }
            // console.log(this.bookMeetings.list)
            return this.bookMeetings
          })
  }
  
}

const userModel = new User()
export default userModel