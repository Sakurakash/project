(function(){"use strict";var e={6657:function(e,t,i){i.d(t,{Z:function(){return c}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header",on:{click:e.changeTheme}},[t("div",{staticClass:"left"},[e._t("left",(function(){return[e._v("左边")]}))],2),e._t("center",(function(){return[e._v("中间")]})),t("div",{staticClass:"right"},[e._t("right",(function(){return[e._v("右边")]}))],2)],2)},n=[],s={name:"Header",data:function(){return{themeList:["theme","theme1","theme2"],index:1}},methods:{changeTheme(){document.documentElement.setAttribute("data-theme",this.themeList[this.index]),this.index++,this.index>=this.themeList.length&&(this.index=0)}}},o=s,a=i(1001),l=(0,a.Z)(o,r,n,!1,null,"f51f5216",null),c=l.exports},8737:function(e,t,i){i.d(t,{Z:function(){return d}});var r=function(){var e=this,t=e._self._c;return t("div",{ref:"wrapper",attrs:{id:"wrapper"}},[e._t("default")],2)},n=[],s=i(5592),o=i.n(s),a={name:"ScrollView",mounted(){this.iscroll=new(o())(this.$refs.wrapper,{mouseWheel:!0,scrollbars:!1,probeType:3,scrollX:!1,scrollY:!0});const e=new MutationObserver((()=>{this.iscroll.refresh()})),t={childList:!0,subtree:!0,attributeFilter:["height","offsetHeight"]};e.observe(this.$refs.wrapper,t)},methods:{scrolling(e){this.iscroll.on("scroll",(function(){e(this.y)}))},refresh(){setTimeout((()=>{this.iscroll.refresh()}))},scrollTo(e,t,i){this.iscroll.scrollTo(e,t,i)}}},l=a,c=i(1001),u=(0,c.Z)(l,r,n,!1,null,null,null),d=u.exports},8181:function(e,t,i){i.d(t,{eK:function(){return h},Y$:function(){return S},o7:function(){return v},Eg:function(){return a},Q5:function(){return c},S_:function(){return u},Fs:function(){return l},$s:function(){return d},sM:function(){return T},eO:function(){return w},KJ:function(){return f},mq:function(){return m},TS:function(){return p},fo:function(){return L}});i(7658);var r=i(4161),n=i(6369);r.Z.defaults.baseURL="https://netease-cloud-music-livid.vercel.app",r.Z.defaults.timeout=5e3;let s=0;r.Z.interceptors.request.use((e=>(s++,n["default"].showLoading(),e)),(e=>(n["default"].hiddenLoading(),Promise.reject(e)))),r.Z.interceptors.response.use((e=>(s--,0===s&&n["default"].hiddenLoading(),e)),(e=>(n["default"].hiddenLoading(),Promise.reject(e))));var o={get:function(e="",t={}){return t.realIP="116.25.146.177",new Promise(((i,n)=>{r.Z.get(e,{params:t}).then((function(e){i(e.data)})).catch((function(e){n(e)}))}))},post:function(e="",t={}){return new Promise(((i,n)=>{r.Z.post(e,t).then((function(e){i(e.data)})).catch((function(e){n(e)}))}))},all:function(e){return new Promise(((t,i)=>{r.Z.all(e).then(r.Z.spread(((...e)=>{t(e)}))).catch((function(e){i(e)}))}))}};const a=()=>o.get("/banner?type=2"),l=()=>o.get("/personalized?limit=6"),c=()=>o.get("/album/newest"),u=()=>o.get("/personalized/newsong"),d=e=>o.get("/playlist/detail",e),h=e=>o.get("/album",e),f=e=>o.get("/song/detail",e),m=e=>o.get("/lyric",e),p=e=>o.get("/song/url",e),v=e=>o.get("artists",e),y=()=>new Promise(((e,t)=>{o.get("/top/artists?offset=0&limit=5").then((t=>{e(t.artists)})).catch((e=>{t(e)}))})),g=e=>new Promise(((t,i)=>{const r=[];o.all([o.get(`artist/list?offset=0&limit=10&initial=${e}`)]).then((e=>{e.forEach((function(e){r.push(...e.artists)})),t(r)})).catch((e=>{i(e)}))})),S=()=>new Promise(((e,t)=>{const i=["热"],r=[y()];for(let n=65;n<91;n++){const e=String.fromCharCode(n);i.push(e),r.push(g(e))}o.all(r).then((t=>{const r={};r.keys=i,r.list=t,e(r)})).catch((e=>{t(e)}))})),L=()=>new Promise(((e,t)=>{const i={officialList:[{name:"飙升榜",id:3},{name:"新歌榜",id:0},{name:"原创榜",id:2},{name:"热歌榜",id:1}],recList:[{name:"云音乐说唱榜",id:23},{name:"云音乐电音榜",id:25},{name:"云音乐欧美新歌榜",id:32},{name:"云音乐ACG榜",id:22},{name:"云音乐古典榜",id:24},{name:"法国 NRJ Vos Hits 周榜",id:19}],globalList:[{name:"美国Billboard榜",id:6},{name:"UK排行榜周榜",id:5},{name:"Beatport全球电子舞曲榜",id:21}],otherList:[{name:"KTV唛榜",id:7},{name:"云音乐摇滚榜",id:27},{name:"云音乐韩语榜",id:28},{name:"云音乐国电榜",id:30},{name:"云音乐欧美热歌榜",id:31},{name:"云音乐日语榜",id:29}],titles:{officialList:"官方榜",recList:"推荐榜",globalList:"全球榜",otherList:"更多榜单"}};o.get("toplist/detail").then((t=>{t.list.forEach((e=>{let t=!1;for(const r in i){for(let n=0;n<i[r].length;n++)if(i[r][n].name===e.name){i[r][n].rank={},i[r][n].rank.coverImgUrl=e.coverImgUrl,i[r][n].rank.id=e.id,i[r][n].rank.name=e.name,i[r][n].rank.updateFrequency=e.updateFrequency,0!==e.tracks.length&&(i[r][n].rank.tracks=e.tracks),t=!0;break}if(t)break}})),e(i)})).catch((e=>{t(e)}))})),w=e=>o.get("search?type=1",e),T=()=>o.get("search/hot")},7067:function(e,t,i){var r=i(6369),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("MainHeader"),t("tab"),t("keep-alive",{attrs:{include:"singer,search"}},[t("router-view")],1),t("player")],1)},s=[],o=function(){var e=this,t=e._self._c;return t("Header",{staticClass:"header"},[t("div",{staticClass:"header-left",attrs:{slot:"left"},slot:"left"}),t("p",{staticClass:"header-title",attrs:{slot:"center"},slot:"center"},[e._v("网易云音乐")]),t("div",{staticClass:"header-right",attrs:{slot:"right"},on:{click:function(t){return t.stopPropagation(),e.accountClick.apply(null,arguments)}},slot:"right"})])},a=[],l=(i(7658),i(6657)),c={name:"MainHeader",components:{Header:l.Z},methods:{accountClick(){this.$router.push("/account")}}},u=c,d=i(1001),h=(0,d.Z)(u,o,a,!1,null,"55da049d",null),f=h.exports,m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tab"},[t("router-link",{attrs:{to:"recommend",custom:""},scopedSlots:e._u([{key:"default",fn:function({navigate:i,isActive:r}){return[t("div",{staticClass:"item",class:{active:r},on:{click:i}},[t("span",[e._v("推荐")])])]}}])}),t("router-link",{attrs:{to:"singer",custom:""},scopedSlots:e._u([{key:"default",fn:function({navigate:i,isActive:r}){return[t("div",{staticClass:"item",class:{active:r},on:{click:i}},[t("span",[e._v("歌手")])])]}}])}),t("router-link",{attrs:{to:"rank",custom:""},scopedSlots:e._u([{key:"default",fn:function({navigate:i,isActive:r}){return[t("div",{staticClass:"item",class:{active:r},on:{click:i}},[t("span",[e._v("排行")])])]}}])}),t("router-link",{attrs:{to:"search",custom:""},scopedSlots:e._u([{key:"default",fn:function({navigate:i,isActive:r}){return[t("div",{staticClass:"item",class:{active:r},on:{click:i}},[t("span",[e._v("搜索")])])]}}])})],1)},p=[],v={name:"tab"},y=v,g=(0,d.Z)(y,m,p,!1,null,"431c2f75",null),S=g.exports,L=function(){var e=this,t=e._self._c;return t("div",{staticClass:"player"},[t("NormalPlayer",{attrs:{totalTime:e.totalTime,currentTime:e.currentTime}}),t("MiniPlayer"),t("ListPlayer"),t("audio",{ref:"audio",attrs:{src:e.currentSong.url},on:{timeupdate:e.timeUpdate,ended:e.end}})],1)},w=[],T=function(){var e=this,t=e._self._c;return t("transition",{attrs:{css:!1},on:{enter:e.enter,leave:e.leave}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.isFullScreen,expression:"this.isFullScreen"}],staticClass:"normal-player"},[t("div",{staticClass:"player-wrapper"},[t("playerHeader"),t("playerMiddle",{attrs:{currentTime:e.currentTime}}),t("playerBottom",{attrs:{totalTime:e.totalTime,currentTime:e.currentTime}})],1),t("div",{staticClass:"player-bg"},[t("img",{attrs:{src:e.currentSong.picUrl}})]),t("div",{staticClass:"player-bg2"})])])},C=[],_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"header-left",on:{click:e.hiddenNormalPlayer}}),t("div",{staticClass:"header-title"},[t("h3",[e._v(e._s(e.currentSong.name))]),t("p",[e._v(e._s(e.currentSong.singer))])]),t("div",{staticClass:"header-right"})])},P=[],b=i(3822),k={name:"PlayerHeader",methods:{...(0,b.nv)(["setFullScreen","setMiniPlayer"]),hiddenNormalPlayer(){this.setFullScreen(!1),this.setMiniPlayer(!0)}},computed:{...(0,b.Se)(["currentSong"])}},x=k,I=(0,d.Z)(x,_,P,!1,null,"5c0ba69a",null),$=I.exports,M=function(){var e=this,t=e._self._c;return t("swiper",{staticClass:"banner",attrs:{options:e.swiperOption}},[t("swiper-slide",{staticClass:"cd"},[t("div",{ref:"cdWrapper",staticClass:"cd-wrapper"},[t("img",{attrs:{src:e.currentSong.picUrl,alt:""}})]),t("p",[e._v(e._s(e.getLyricText(e.currentLineNum)))])]),t("swiper-slide",{ref:"lyric",staticClass:"lyric"},[t("ScrollView",{ref:"scrollView"},[t("ul",e._l(e.currentLyric,(function(i,r){return t("li",{key:r,class:{active:e.currentLineNum===r}},[e._v(" "+e._s(i))])})),0)])],1),t("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)},N=[],E=i(551),F=i(8737),O={name:"PlayerHeader",data(){return{swiperOption:{speed:600,pagination:{el:".swiper-pagination",bulletClass:"my-bullet",bulletActiveClass:"my-bullet-active"},observer:!0,observeParents:!0,observeSlideChildren:!0},currentLineNum:0}},components:{Swiper:E.Swiper,SwiperSlide:E.SwiperSlide,ScrollView:F.Z},directives:{swiper:E.directive},computed:{...(0,b.Se)(["isPlaying","currentSong","currentLyric"])},watch:{isPlaying(e){e?this.$refs.cdWrapper.classList.add("active"):this.$refs.cdWrapper.classList.remove("active")},currentTime(e){const t=Math.floor(e)+"";if(this.currentLineNum=this.getActiveLineNum(t),document.querySelector("li.active")){const e=document.querySelector("li.active").offsetTop,t=this.$refs.lyric.$el.offsetHeight;e>t/2&&this.$refs.scrollView.scrollTo(0,t/2-e,100)}},currentLyric(e){this.currentLineNum=Object.keys(e)[0]}},methods:{getActiveLineNum(e){if(e<0)return this.currentLineNum;const t=this.currentLyric[e+""];return void 0===t||""===t?(e--,this.getActiveLineNum(e)):e+""},getLyricText(e){return this.currentLyric[e]}},props:{currentTime:{type:Number,default:0,required:!0}}},Z=O,A=(0,d.Z)(Z,M,N,!1,null,"22a2428c",null),H=A.exports,j=function(){var e=this,t=e._self._c;return t("div",{staticClass:"player-bottom"},[t("div",{staticClass:"bottom-progress"},[t("span",{ref:"eleCurrentTime"},[e._v("00:00")]),t("div",{ref:"progressBar",staticClass:"progress-bar",on:{click:e.progressClick}},[t("div",{ref:"progressLine",staticClass:"progress-line"},[t("div",{staticClass:"progress-dot"})])]),t("span",{ref:"eleTotalTime"},[e._v("00:00")])]),t("div",{staticClass:"bottom-control"},[t("div",{ref:"mode",staticClass:"mode loop",on:{click:e.mode}}),t("div",{staticClass:"prev",on:{click:e.prev}}),t("div",{ref:"play",staticClass:"play",on:{click:e.play}}),t("div",{staticClass:"next",on:{click:e.next}}),t("div",{staticClass:"favorite",class:{active:e.isFavorite(e.currentSong)},on:{click:e.favorite}})])])},q=[],U={loop:0,one:1,random:2},R=i(5380),D={name:"PlayerBottom",methods:{...(0,b.nv)(["setIsPlaying","setModeType","setCurrentIndex","setCurrentTime","setFavoriteSong"]),play(){this.currentSong.url&&this.setIsPlaying(!this.isPlaying)},prev(){this.setCurrentIndex(this.currentIndex-1)},next(){this.setCurrentIndex(this.currentIndex+1)},mode(){this.modeType===U.loop?this.setModeType(U.one):this.modeType===U.one?this.setModeType(U.random):this.modeType===U.random&&this.setModeType(U.loop)},favorite(){this.setFavoriteSong(this.currentSong)},isFavorite(e){const t=this.favoriteList.find((function(t){return t.id===e.id}));return void 0!==t},progressClick(e){const t=this.$refs.progressBar.offsetLeft,i=e.pageX,r=i-t,n=this.$refs.progressBar.offsetWidth,s=r/n;this.$refs.progressLine.style.width=100*s+"%";const o=this.totalTime*s;this.setCurrentTime(o)}},computed:{...(0,b.Se)(["isPlaying","modeType","currentIndex","currentSong","favoriteList"])},watch:{isPlaying(e){e?this.$refs.play.classList.add("active"):this.$refs.play.classList.remove("active")},modeType(e){e===U.loop?(this.$refs.mode.classList.remove("random"),this.$refs.mode.classList.add("loop")):e===U.one?(this.$refs.mode.classList.remove("loop"),this.$refs.mode.classList.add("one")):e===U.random&&(this.$refs.mode.classList.remove("one"),this.$refs.mode.classList.add("random"))},totalTime(e){const t=(0,R.mr)(e);this.$refs.eleTotalTime.innerHTML=t.minute+":"+t.second},currentTime(e){const t=(0,R.mr)(e);this.$refs.eleCurrentTime.innerHTML=t.minute+":"+t.second;const i=e/this.totalTime*100;this.$refs.progressLine.style.width=i+"%"}},props:{totalTime:{type:Number,default:0,required:!0},currentTime:{type:Number,default:0,required:!0}}},V=D,B=(0,d.Z)(V,j,q,!1,null,"191f86f0",null),Y=B.exports,G=i(3734),K=i.n(G),J=(i(6430),{name:"NormalPlayer",components:{playerHeader:$,playerMiddle:H,playerBottom:Y},computed:{...(0,b.Se)(["isFullScreen","currentSong"])},methods:{...(0,b.nv)(["setSongLyric"]),enter(e,t){K()(e,"transition.shrinkIn",{duration:500},(function(){t()}))},leave(e,t){K()(e,"transition.shrinkOut",{duration:500},(function(){t()}))}},watch:{currentSong(e){void 0!==e.id&&this.setSongLyric(e.id)}},props:{totalTime:{type:Number,default:0,required:!0},currentTime:{type:Number,default:0,required:!0}}}),W=J,Q=(0,d.Z)(W,T,C,!1,null,"73ce5596",null),X=Q.exports,z=function(){var e=this,t=e._self._c;return t("transition",{attrs:{css:!1},on:{enter:e.enter,leave:e.leave}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.isShowMiniPlayer,expression:"this.isShowMiniPlayer"}],staticClass:"mini-player"},[t("div",{staticClass:"player-wrapper"},[t("div",{staticClass:"player-left",on:{click:e.showNormalPlayer}},[t("img",{ref:"cd",attrs:{src:e.currentSong.picUrl}}),t("div",{staticClass:"player-title"},[t("h3",[e._v(e._s(e.currentSong.name))]),t("p",[e._v(e._s(e.currentSong.singer))])])]),t("div",{staticClass:"player-right"},[t("div",{ref:"play",staticClass:"play",on:{click:e.play}}),t("div",{staticClass:"list",on:{click:function(t){return t.stopPropagation(),e.showList.apply(null,arguments)}}})])])])])},ee=[],te={name:"MiniPlayer",methods:{...(0,b.nv)(["setFullScreen","setMiniPlayer","setListPlayer","setIsPlaying"]),showList(){this.setListPlayer(!0)},showNormalPlayer(){this.setFullScreen(!0),this.setMiniPlayer(!1)},play(){this.setIsPlaying(!this.isPlaying)},enter(e,t){K()(e,"transition.bounceUpIn",{duration:500},(function(){t()}))},leave(e,t){K()(e,"transition.bounceDownOut",{duration:500},(function(){t()}))}},computed:{...(0,b.Se)(["isShowMiniPlayer","isPlaying","currentSong"])},watch:{isPlaying(e){e?(this.$refs.play.classList.add("active"),this.$refs.cd.classList.add("active")):(this.$refs.play.classList.remove("active"),this.$refs.cd.classList.remove("active"))}}},ie=te,re=(0,d.Z)(ie,z,ee,!1,null,"4434020c",null),ne=re.exports,se=function(){var e=this,t=e._self._c;return t("transition",{attrs:{css:!1},on:{enter:e.enter,leave:e.leave}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.isShowListPlayer,expression:"this.isShowListPlayer"}],staticClass:"list-player"},[t("div",{staticClass:"player-wrapper"},[t("div",{staticClass:"player-top"},[t("div",{staticClass:"top-left"},[t("div",{ref:"mode",staticClass:"mode loop",on:{click:e.mode}}),0===this["modeType"]?t("p",[e._v("顺序播放")]):1===this["modeType"]?t("p",[e._v("单曲循环")]):t("p",[e._v("随机播放")])]),t("div",{staticClass:"top-right"},[t("div",{staticClass:"del",on:{click:e.delAll}})])]),t("div",{staticClass:"player-middle"},[t("ScrollView",{ref:"scrollView"},[t("ul",{ref:"play"},e._l(e.songs,(function(i,r){return t("li",{key:i.id,staticClass:"item",on:{click:function(t){return e.selectMusic(r)}}},[t("div",{staticClass:"item-left"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.currentIndex===r,expression:"currentIndex === index"}],staticClass:"item-play",on:{click:function(t){return t.stopPropagation(),e.play.apply(null,arguments)}}}),t("p",[e._v(e._s(i.name))])]),t("div",{staticClass:"item-right"},[t("div",{staticClass:"item-favorite",class:{active:e.isFavorite(i)},on:{click:function(t){return t.stopPropagation(),e.favorite(i)}}}),t("div",{staticClass:"item-del",on:{click:function(t){return t.stopPropagation(),e.del(r)}}})])])})),0)])],1),t("div",{staticClass:"player-bottom"},[t("p",{on:{click:function(t){return t.stopPropagation(),e.hidden.apply(null,arguments)}}},[e._v("关闭")])])])])])},oe=[],ae={name:"ListPlayer",components:{ScrollView:F.Z},methods:{...(0,b.nv)(["setListPlayer","setIsPlaying","setModeType","setDelSong","setCurrentIndex","setFavoriteSong"]),hidden(){this.setListPlayer(!1)},play(){this.setIsPlaying(!this.isPlaying)},mode(){this.modeType===U.loop?this.setModeType(U.one):this.modeType===U.one?this.setModeType(U.random):this.modeType===U.random&&this.setModeType(U.loop)},del(e){this.setDelSong(e)},delAll(){this.setDelSong()},selectMusic(e){this.setCurrentIndex(e)},favorite(e){this.setFavoriteSong(e)},isFavorite(e){const t=this.favoriteList.find((function(t){return t.id===e.id}));return void 0!==t},enter(e,t){K()(e,"transition.bounceUpIn",{duration:500},(function(){t()}))},leave(e,t){K()(e,"transition.bounceDownOut",{duration:500},(function(){t()}))}},computed:{...(0,b.Se)(["isShowListPlayer","isPlaying","modeType","songs","currentIndex","favoriteList"])},watch:{isPlaying(e){e?this.$refs.play.classList.add("active"):this.$refs.play.classList.remove("active")},modeType(e){e===U.loop?(this.$refs.mode.classList.remove("random"),this.$refs.mode.classList.add("loop")):e===U.one?(this.$refs.mode.classList.remove("loop"),this.$refs.mode.classList.add("one")):e===U.random&&(this.$refs.mode.classList.remove("one"),this.$refs.mode.classList.add("random"))},isShowListPlayer(e){e&&this.$refs.scrollView.refresh()}}},le=ae,ce=(0,d.Z)(le,se,oe,!1,null,"1cdd7e34",null),ue=ce.exports,de={name:"player",components:{NormalPlayer:X,MiniPlayer:ne,ListPlayer:ue},computed:{...(0,b.Se)(["currentSong","isPlaying","currentIndex","curTime","modeType","songs","favoriteList","historyList"])},methods:{...(0,b.nv)(["setCurrentIndex","setFavoriteList","setHistorySong","setHistoryList"]),timeUpdate(e){this.currentTime=e.target.currentTime},end(){if(this.modeType===U.loop)this.setCurrentIndex(this.currentIndex+1);else if(this.modeType===U.one)this.$refs.audio.play();else if(this.modeType===U.random){const e=(0,R.tT)(0,this.songs.length-1);this.setCurrentIndex(e)}}},watch:{isPlaying(e){e?(this.setHistorySong(this.currentSong),this.$refs.audio.play()):this.$refs.audio.pause()},currentIndex(){this.$refs.audio.oncanplay=()=>{this.totalTime=this.$refs.audio.duration,this.isPlaying?(this.setHistorySong(this.currentSong),this.$refs.audio.play()):this.$refs.audio.pause()}},curTime(e){this.$refs.audio.currentTime=e},favoriteList(e){(0,R.qQ)("favoriteList",e)},historyList(e){(0,R.qQ)("historyList",e)}},created(){const e=(0,R.$o)("favoriteList");if(null===e)return;this.setFavoriteList(e);const t=(0,R.$o)("historyList");null!==t&&this.setHistoryList(t)},mounted(){this.$refs.audio.ondurationchange=()=>{this.totalTime=this.$refs.audio.duration}},data(){return{totalTime:0,currentTime:0}}},he=de,fe=(0,d.Z)(he,L,w,!1,null,"47157709",null),me=fe.exports,pe={name:"app",components:{MainHeader:f,tab:S,player:me},methods:{}},ve=pe,ye=(0,d.Z)(ve,n,s,!1,null,"c44f375e",null),ge=ye.exports,Se=i(2631);const Le=()=>i.e(169).then(i.bind(i,5169)),we=()=>i.e(313).then(i.bind(i,9313)),Te=()=>i.e(830).then(i.bind(i,2830)),Ce=()=>i.e(236).then(i.bind(i,5236)),_e=()=>i.e(650).then(i.bind(i,2650)),Pe=()=>i.e(639).then(i.bind(i,2639));r["default"].use(Se.ZP);const be=[{path:"/",redirect:"/recommend"},{path:"/recommend",component:Le,children:[{path:"detail/:id/:type",component:we}]},{path:"/singer",component:Te,children:[{path:"detail/:id/:type",component:we}]},{path:"/rank",component:Ce,children:[{path:"detail/:id/:type",component:we}]},{path:"/search",component:_e},{path:"/account",component:Pe}],ke=new Se.ZP({mode:"history",base:"/",routes:be});var xe=ke,Ie={isFullScreen:!1,isShowMiniPlayer:!1,isShowListPlayer:!1,isPlaying:!1,modeType:U.loop,songs:[],currentSong:{},currentIndex:0,currentLyric:[],curTime:0,favoriteList:[],historyList:[]},$e={isFullScreen(e){return e.isFullScreen},isShowMiniPlayer(e){return e.isShowMiniPlayer},isShowListPlayer(e){return e.isShowListPlayer},isPlaying(e){return e.isPlaying},modeType(e){return e.modeType},songs(e){return e.songs},currentSong(e){return 0!==e.songs.length?e.songs[e.currentIndex]:{}},currentLyric(e){return e.currentLyric},currentIndex(e){return e.currentIndex},curTime(e){return e.curTime},favoriteList(e){return e.favoriteList},historyList(e){return e.historyList}};const Me="SET_FULL_SCREEN",Ne="SET_MINI_PLAYER",Ee="SET_LIST_PLAYER",Fe="SET_IS_PLAYING",Oe="SET_MODE_TYPE",Ze="SET_SONG_DETAIL",Ae="SET_SONG_LYRIC",He="SET_DEL_SONG",je="SET_CURRENT_INDEX",qe="SET_CURRENT_TIME",Ue="SET_FAVORITE_SONG",Re="SET_FAVORITE_LIST",De="SET_HISTORY_SONG",Ve="SET_HISTORY_LIST";var Be={[Me](e,t){e.isFullScreen=t,t&&(e.isShowMiniPlayer=!1,e.isShowListPlayer=!1)},[Ne](e,t){e.isShowMiniPlayer=t,t&&(e.isFullScreen=!1,e.isShowListPlayer=!1)},[Ee](e,t){e.isShowListPlayer=t},[Fe](e,t){e.isPlaying=t},[Oe](e,t){e.modeType=t},[Ze](e,t){e.songs=t},[Ae](e,t){e.currentLyric=t},[He](e,t){void 0!==t?e.songs.splice(t,1):e.songs=[],t<e.currentIndex&&(e.currentIndex-=1),0===e.songs.length&&(e.isFullScreen=!1,e.isShowListPlayer=!1,e.isShowMiniPlayer=!1)},[je](e,t){t<0?t=e.songs.length-1:t>e.songs.length-1&&(t=0),e.currentIndex=t},[qe](e,t){e.curTime=t},[Ue](e,t){const i=e.favoriteList.find((function(e){return e.id===t.id}));void 0===i&&e.favoriteList.push(t)},[Re](e,t){e.favoriteList=t},[De](e,t){const i=e.historyList.find((function(e){return e.id===t.id}));void 0===i&&(e.historyList.length>30&&e.historyList.splice(0,1),e.historyList.push(t))},[Ve](e,t){e.historyList=t}},Ye=i(8181),Ge={setFullScreen({commit:e},t){e(Me,t)},setIsPlaying({commit:e},t){e(Fe,t)},setListPlayer({commit:e},t){e(Ee,t)},setMiniPlayer({commit:e},t){e(Ne,t)},setModeType({commit:e},t){e(Oe,t)},setSongsDetail:async function({commit:e},t){const i=await(0,Ye.KJ)({ids:t.join(",")}),r=await(0,Ye.TS)({id:t.join(",")}),n=[];i.songs.forEach((function(e,t){const i={};i.url=r.data[t].url,i.name=e.name,i.id=e.id;let s="";const{ar:o}=e;o.forEach((function(e,t){0===t?s=e.name:s+="-"+e.name})),i.singer=s;const{al:a}=e;i.picUrl=a.picUrl,n.push(i)})),e(Ze,n)},async setSongLyric({commit:e},t){if(t){const i=await(0,Ye.mq)({id:t}),{lyric:r}=i.lrc,n=Ke(r);e(Ae,n)}},setDelSong({commit:e},t){e(He,t)},setCurrentIndex({commit:e},t){e(je,t)},setCurrentTime({commit:e},t){e(qe,t)},setFavoriteSong({commit:e},t){e(Ue,t)},setFavoriteList({commit:e},t){e(Re,t)},setHistorySong({commit:e},t){e(De,t)},setHistoryList({commit:e},t){e(Ve,t)}};function Ke(e){const t=e.split("\n"),i=/\[\d*:\d*\.\d*]/g,r=/\[\d*/i,n=/:\d*/i,s={};return t.forEach((function(e){let t=e.match(i);if(!t)return;t=t[0];const o=t.match(r)[0].substr(1),a=t.match(n)[0].substr(1),l=60*parseInt(o)+parseInt(a);s[l]=e.replace(i,"").trim()})),s}r["default"].use(b.ZP);var Je=new b.ZP.Store({state:Ie,getters:$e,mutations:Be,actions:Ge,modules:{}}),We=i(6112),Qe=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"container"},[t("div",{staticClass:"loading"}),t("p",{staticClass:"title"},[e._v(e._s(e.title))])])},Xe=[],ze={name:"Loading",data:function(){return{title:"正在加载...",isShow:!1}}},et=ze,tt=(0,d.Z)(et,Qe,Xe,!1,null,"21638437",null),it=tt.exports,rt={install:function(e,t){const i=e.extend(it),r=new i,n=document.createElement("div");document.body.appendChild(n),r.$mount(n),t&&null!==t.title&&void 0!==t.title&&(r.title=t.title),e.showLoading=()=>{r.isShow=!0},e.hiddenLoading=()=>{r.isShow=!1},e.prototype.$showLoading=()=>{r.isShow=!0},e.prototype.$hiddenLoading=()=>{r.isShow=!1}}};r["default"].use(rt,{title:"正在加载..."}),r["default"].use(We.Z,{loading:i(9352)}),r["default"].config.productionTip=!1,new r["default"]({router:xe,store:Je,render:e=>e(ge)}).$mount("#app")},5380:function(e,t,i){i.d(t,{$o:function(){return o},mr:function(){return n},qQ:function(){return s},tT:function(){return r}});const r=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),n=e=>{const t=e;let i=Math.floor(t/86400);i=i>=10?i:"0"+i;let r=Math.floor(t/3600%24);r=r>=10?r:"0"+r;let n=Math.floor(t/60%60);n=n>=10?n:"0"+n;let s=Math.floor(t%60);return s=s>=10?s:"0"+s,{day:i,hour:r,minute:n,second:s}},s=(e,t)=>{window.localStorage.setItem(e,JSON.stringify(t))},o=e=>JSON.parse(window.localStorage.getItem(e))},9352:function(e,t,i){e.exports=i.p+"img/loading.e3e952be.png"}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,r,n,s){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],s=e[u][2];for(var a=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](r[l])}))?r.splice(l--,1):(a=!1,s<o&&(o=s));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,r){return i.f[r](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+e+"."+{169:"b79973f7",236:"d91748fd",313:"0c06b2c6",639:"dbd9ce88",650:"e20ac162",830:"90b1ff1c"}[e]+".js"}}(),function(){i.miniCssF=function(e){return"css/"+e+"."+{169:"56c473c4",236:"1dca5ab6",313:"07dc1a43",639:"538183e1",650:"8e298f8e",830:"15c8d800"}[e]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="music163-vue:";i.l=function(r,n,s,o){if(e[r])e[r].push(n);else{var a,l;if(void 0!==s)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+s){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+s),a.src=r),e[r]=[n];var h=function(t,i){a.onerror=a.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((function(e){return e(i)})),t)return t(i)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,i,r,n){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=function(i){if(s.onerror=s.onload=null,"load"===i.type)r();else{var o=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=a,s.parentNode&&s.parentNode.removeChild(s),n(l)}};return s.onerror=s.onload=o,s.href=t,i?i.parentNode.insertBefore(s,i.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var n=i[r],s=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(s===e||s===t))return n}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){n=o[r],s=n.getAttribute("data-href");if(s===e||s===t)return n}},r=function(r){return new Promise((function(n,s){var o=i.miniCssF(r),a=i.p+o;if(t(o,a))return n();e(r,a,null,n,s)}))},n={143:0};i.f.miniCss=function(e,t){var i={169:1,236:1,313:1,639:1,650:1,830:1};n[e]?t.push(n[e]):0!==n[e]&&i[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={143:0};i.f.j=function(t,r){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var s=new Promise((function(i,r){n=e[t]=[i,r]}));r.push(n[2]=s);var o=i.p+i.u(t),a=new Error,l=function(r){if(i.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",a.name="ChunkLoadError",a.type=s,a.request=o,n[1](a)}};i.l(o,l,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,o=r[0],a=r[1],l=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(l)var u=l(i)}for(t&&t(r);c<o.length;c++)s=o[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(u)},r=self["webpackChunkmusic163_vue"]=self["webpackChunkmusic163_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998],(function(){return i(7067)}));r=i.O(r)})();
//# sourceMappingURL=app.1ea56274.js.map