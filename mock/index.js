import Mock from '../mock/mock-min'

export const api = {
  getUserList: '/api/get/getUserList',
  getJoinMeetings: '/api/get/getJoinMeetings',
  getBookMeetings : '/api/get/bookMeetings'
}


export const request = (url, data = {}) => {
  if (url === api.getUserList){
    const {
      page = 1, size = 20
    } = data
    
    return new Promise((resolve)=>{
      const mock = Mock.mock({
        'status': 0,
        'data': {
          [`list|${size}`]: [{
            'id|+1': (page - 1) * size,
            'name': '@cname()',
            'date': '@date()'
          }],
          total: 1000
        }
      })
      setTimeout(() => {
        resolve(mock)        
      }, 500);
    })
  }

  if (url === api.getJoinMeetings){
    const {
      page = 1, size = 10
    } = data
    
    return new Promise((resolve)=>{
      const mock = Mock.mock({
        'status': 0,
        'data': {
          [`list|${size}`]: [{
            'id|+1': (page - 1) * size,
            'theme': '@ctitle(3,8)',
            'name': '@cname()',
            'time': '@time()'
          }],
          total: 100
        }
      })
      setTimeout(() => {
        resolve(mock)        
      }, 1000);
    })
  }

  if (url === api.getBookMeetings){
    const {
      page = 1, size = 10
    } = data
    return new Promise((resolve)=>{
      const mock = Mock.mock({
        'status': 0,
        'data': {
          [`list|${size}`]: [{
            'id|+1': (page - 1) * size,
            'theme': '@ctitle(3,8)',
            'name': '@cname()',
            'time': '@time()'
          }],
          total: 60
        }
      })
      setTimeout(() => {
        resolve(mock)
      }, 1000);
    })
  }
}