"use strict";
window.common = {
    Init: function(){
        window.lang = "en";
    },
    ChangeLang: function(){
        if(window.lang == "en"){
            myVue.navDom.navbarValue.service = "Coustomer Sevice";
            myVue.navDom.navbarValue.news = "Newsletter";
            myVue.navDom.navbarValue.signIn = "Sign in";
            myVue.navDom.navbarValue.favorite = "Favorites";
            myVue.navDom.navbarValue.shoppingBag = "Shopping bag ";
            myVue.navDom.navbarValue.women = "Women";
            myVue.navDom.navbarValue.men = "Men";
            myVue.navDom.navbarValue.kid = "Kids";
            myVue.footerDom.footerValue.contact = "Contact us";
            myVue.serviceDom.serviceTitle = "How can we help you today?";
            myVue.serviceDom.name = "Name";
            myVue.serviceDom.phone = "Phone number";
            myVue.serviceDom.email = "E-mail address";
            myVue.serviceDom.message = "Message";
            myVue.serviceDom.clean = "Clean";
            myVue.serviceDom.commit = "Commit";
            myVue.serviceDom.mailSubject = "Tlotheshion's issues report";
        }else if(window.lang == "zh"){
            myVue.navDom.navbarValue.service = "客戶服務";
            myVue.navDom.navbarValue.news = "訂閱郵件";
            myVue.navDom.navbarValue.signIn = "登入";
            myVue.navDom.navbarValue.favorite = "最愛";
            myVue.navDom.navbarValue.shoppingBag = "購物袋 ";
            myVue.navDom.navbarValue.women = "女裝";
            myVue.navDom.navbarValue.men = "男裝";
            myVue.navDom.navbarValue.kid = "童裝";
            myVue.footerDom.footerValue.contact = "聯絡我們";
            myVue.serviceDom.serviceTitle = "我們能如何協助你?";
            myVue.serviceDom.name = "名字";
            myVue.serviceDom.phone = "電話";
            myVue.serviceDom.email = "信箱";
            myVue.serviceDom.message = "訊息";
            myVue.serviceDom.clean = "清除";
            myVue.serviceDom.commit = "提交";
            myVue.serviceDom.mailSubject = "Tlotheshion問題回報";
        }
    },
}
common.Init();