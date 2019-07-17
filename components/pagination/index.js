Component({

  properties: {
    name: String,
    key: {
      type: String,
      observer: '_loadMoreData'
    },
    initImmediately: {
      type: Boolean,
      value: true,
      observer: function(val){
        if (val && !this.data.initState) {
          this.initData()
        }
      }
    },
    size: {
      type: Number,
      value: 10
    },
    total: Number,
    list: {
      type: Array,
      observer: '_endState'
    }
  },

  data: {
    initState: false, // 是否已经加载过
    page: 0,
    loading: false,
    ended: false
  },

  lifetimes: {
    attached: function () {
      if (this.data.initImmediately){
        this.initData()
      }
    }
  },

  methods: {
    initData(){
      console.info(`${this.data.name}:start init data`)
      this._loadMoreData()
      this.setData({
        initState: true
      })
    },
    _loadMoreData(){
      const { loading, ended, size } = this.data
      if (loading) return
      if (ended) return

      const page = this.data.page + 1
      console.info(`${this.data.name}:load page${page} data `)
      this.setData({
        loading: true,
        page
      })
      this.triggerEvent('getList', {
        page,
        size
      })
    },
    _endState(val, oldVal) {
      if (!this.data.initState) return
      // if (val.length === oldVal.length) return
      const { total, list } = this.properties
      console.log(total)
      console.log(list)
      let ended = false
      if (list.length >= total) {
        ended = true
      }
      this.setData({
        loading: false,
        ended
      })
    },
  }
})
