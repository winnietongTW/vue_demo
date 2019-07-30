"use strict";
window.myVue = {
    bodyDom: null,
    navDom: null,
    footerDom: null,
    serviceDom: null,
    Init: function(){
        Vue.component("my-navbar", {
            props: ["navbars"],
            methods: {
                changeLang: function(e){
                    if(e.target.value == "en"){
                        window.lang = "en";
                    }else if(e.target.value == "zh"){
                        window.lang = "zh";
                    }
                    common.ChangeLang();
                }
            },
            template: `
                <div class="navBar">
                    <div class="option">
                        <ul class="left">
                            <li><a :href="navbars.serviceLink">{{navbars.service}}</a></li>
                            <li>{{navbars.news}}</li>
                            <!-- <li class="more"></li> -->
                            <li>
                                <select id="languageList" @change="changeLang">
                                    <option value="en">{{navbars.listEn}}</option>
                                    <option value="zh">{{navbars.listZh}}</option>
                                </select>
                            </li>
                        </ul>
                        <ul class="right">
                            <li class="signIn">{{navbars.signIn}}</li>
                            <li class="favorite">{{navbars.favorite}}</li>
                            <li class="bag">{{navbars.shoppingBag}}({{navbars.bagItemCount}})</li>
                        </ul>
                    </div>
                    <div class="logo"><a :href="navbars.indexLink"></a></div>
                    <div class="sort">
                        <div></div>
                        <div class="list">
                            <ul>
                                <li>{{navbars.women}}</li>
                                <li>{{navbars.men}}</li>
                                <li>{{navbars.kid}}</li>
                            </ul>
                        </div>
                        <div class="search"><!-- Search --></div>
                    </div>
                </div>
            `
        });

        myVue.navDom = new Vue({
            el: "#navbarContainer",
            data: {
                navbarValue: {
                    service: "Coustomer Sevice",
                    news: "Newsletter",
                    signIn: "Sign in",
                    favorite: "Favorites",
                    shoppingBag: "Shopping bag ",
                    bagItemCount: 0,
                    women: "Women",
                    men: "Men",
                    kid: "Kids",
                    listEn: "English",
                    listZh: "繁體中文",
                    indexLink: "index.html",
                    serviceLink: "service.html"
                }
            }
        })
    
        Vue.component("my-footer", {
            props: ["footers"],
            template: `
            <div class="footer">
                <div class="contact">{{footers.contact}}： <a class="contactMail" :href="footers.myMailLink">{{footers.myMail}}</a></div>
                <div class="copyright">{{footers.copyRight}}</div>
            </div>
            `
        });

        myVue.footerDom = new Vue({
            el: "#footerContainer",
            data: {
                footerValue:{
                    copyRight: "COPYRIGHT © Winnie Tong. ALL RIGHTS RESERVED.",
                    contact: "Contact me",
                    myMail: "tong83315@gmail.com",
                    myMailLink: "mailto:tong83315@gmail.com"
                }
            }
        })

        myVue.serviceDom = new Vue({
            el: ".service",
            data: {
                serviceTitle: "How can we help you today?",
                name: "Name",
                phone: "Phone number",
                email: "E-mail address",
                message: "Message",
                clean: "Clean",
                commit: "Commit",
                myMail: "tong83315@gmail.com",
                mailSubject: "Tlotheshion's issues report"
            },
            methods: {
                cleanMsg: function(){
                    var formInput = document.querySelectorAll(".formInput");
                    for(var i= 0; i<formInput.length; i++)
                        formInput[i].value = "";
                },
                commitMsg: function(){
                    var name = document.querySelector(".formName");
                    var phone = document.querySelector(".formPhone");
                    var email = document.querySelector(".formEmail");
                    var message = document.querySelector(".formMsg");
                    var postEmal = document.querySelector(".postForm");
                    var msg = myVue.serviceDom.name + ":%20" + name.value + "%0A" + myVue.serviceDom.phone + ":%20" + phone.value + "%0A" + myVue.serviceDom.email + ":%20" + email.value + "%0A----------------------------------------%0A" + myVue.serviceDom.message + ":%0A%09" + message.value;
                    postEmal.setAttribute("href","mailto:" + myVue.serviceDom.myMail + "?subject=" + myVue.serviceDom.mailSubject + "&body=" + msg);
                    if(name.value && phone.value && email.value && message.value)
                        postEmal.click();
                    myVue.serviceDom.cleanMsg();
                }
            }
        })
    },
}
myVue.Init();