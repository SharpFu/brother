var Zan = require('../../common/index');

Page(Object.assign({}, Zan.Tab, {
  data: {
    tabItem: {
      list: [{
        id: '1',
        title: '商品1'
      }, {
        id: '2',
        title: '商品2'
      }, {
        id: '3',
        title: '商品3'
      }, {
        id: '4',
        title: '商品4'
      }],
      selectedId: '1',
      scroll: true,
      height: 45
    }
  },

  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }
}));
