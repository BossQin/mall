export const myRequest = (option) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: "http://152.136.185.210:7878/api/m5" + option.url,
			method: option.method || "GET",
			data: option.data || {},
			success: (res) => {
				// if (res.data.status !== 0) {
				// 	return uni.showToast({
				// 		title: '获取数据失败'
				// 	})
				// }
				resolve(res.data)
			},
			fail: (err) => {
				uni.showToast({
					title: '请求数据失败'
				})
				reject(err)
			}
		})
	})
}

// 构造器
export class Goods {
  constructor(itemInfo,columns,services) {
      this.title = itemInfo.title
      this.desc = itemInfo.desc
      this.price = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discount = itemInfo.discountDesc
      this.columns = columns
      this.services = services
      this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
      this.logo = shopInfo.shopLogo
      this.name = shopInfo.name
      this.fans = shopInfo.cFans
      this.sells = shopInfo.cSells
      this.score = shopInfo.score
      this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info,rule){
    // imags可能没有值（某些商品有值，某些没有值）
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}

export
// 防抖函数，优化性能
function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
};

// 时间戳格式化函数（常用）
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

export function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};
