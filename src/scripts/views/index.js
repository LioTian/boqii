var indexTpl = require("../tpls/index.string");
//定义视图
SPA.defineView("index",{
	html:indexTpl,

	//轮播图
	bindEvents:{
		"show":function(){
			var mySwiper = new Swiper ('.swiper-container', {
				autoplay:2000,
				autoplayDisableOnInteraction : false,
				
			    direction: 'horizontal',
			    loop: true,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			  })
		}
	}


})
