import{g as T,f as F,e as q,s as B}from"./links.Ce9S4kjc.js";import{C as V}from"./Blur.CvHKqkVq.js";import{C as L}from"./Card.CfeVpmnZ.js";import{G as U,a as A}from"./Row.DRnp1mVs.js";import{G as J,S as H}from"./SeoStatisticsOverview.WnRc2YxT.js";import{_ as D}from"./_plugin-vue_export-helper.BN1snXvA.js";import{v as n,o as h,c as b,B as r,b as S,k as P,l as s,a as g,E as R,t as u,C as y,m as I,G as Q,u as f}from"./runtime-dom.esm-bundler.tPRhSV4q.js";import{K as M}from"./KeywordsGraph.CBzX1-Xj.js";import{n as N}from"./numbers.BT5e8rgb.js";import{W as X}from"./WpTable.aGv2G4lv.js";import{P as O}from"./PostTypes.Cef6XkQ_.js";import{S as j,T as Y,c as Z,u as tt,L as et}from"./LicenseConditions.DhdYCq3P.js";import{C as st}from"./Tooltip.DhkkBQWW.js";import{C as G}from"./Table.vI2Sprsc.js";import{C as z}from"./Index.Dq9-2wXY.js";import{b as ot,a as it}from"./Caret.BthVBOwE.js";import{R as rt}from"./RequiredPlans.DXcIqsat.js";import"./default-i18n.DXRQgkn2.js";import"./helpers.CXsRrhc8.js";import"./index.B6JTtDta.js";import"./Slide.fjAuzpC8.js";import"./_baseClone.DejpcsWN.js";import"./_arrayEach.Fgt6pfHj.js";import"./_getTag.BWQxgJie.js";import"./license.4lyTI3li.js";import"./upperFirst.yVnsg4QL.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.zLSwYOtv.js";import"./constants.CPpKID74.js";import"./addons.DW40jBC1.js";const at={setup(){return{searchStatisticsStore:T()}},components:{Graph:J},computed:{series(){var l,c;if(!((c=(l=this.searchStatisticsStore.data)==null?void 0:l.keywords)!=null&&c.distribution))return[];const t=this.searchStatisticsStore.data.keywords.distribution;return[{name:this.$t.__("Keywords",this.$td),data:[{x:this.$t.__("Top 3 Position",this.$td),y:t.top3,fillColor:"#005AE0"},{x:this.$t.__("4-10 Position",this.$td),y:t.top10,fillColor:"#00AA63"},{x:this.$t.__("11-50 Position",this.$td),y:t.top50,fillColor:"#F18200"},{x:this.$t.__("50-100 Position",this.$td),y:t.top100,fillColor:"#DF2A4A"}]}]}}},nt={class:"aioseo-search-statistics-keywords-distribution-graph"};function lt(t,l,c,a,e,d){const _=n("graph");return h(),b("div",nt,[r(_,{series:d.series,loading:a.searchStatisticsStore.loading.keywords,preset:"keywordsDistribution"},null,8,["series","loading"])])}const E=D(at,[["render",lt]]),ct={setup(){return{searchStatisticsStore:T()}},components:{CoreLoader:ot,CoreWpTable:G,Statistic:j},mixins:[O],props:{index:{type:Number,required:!0},postDetail:{type:Boolean,required:!1,default:!1}},data(){return{numbers:N,loading:!1}},computed:{postColumns(){return[{slug:"post_title",label:this.$t.__("Title",this.$td),width:"100%"},{slug:"clicks",label:this.$t.__("Clicks",this.$td),width:"120px"},{slug:"ctr",label:this.$t.__("Avg. CTR",this.$td),width:"120px"},{slug:"impressions",label:this.$t.__("Impressions",this.$td),width:"120px"},{slug:"position",label:this.$t.__("Position",this.$td),width:"120px"}]},keywords(){return this.postDetail?this.searchStatisticsStore.data.postDetail.keywords.paginated.rows:this.searchStatisticsStore.data.keywords.paginated.rows},row(){return this.keywords[this.index]}},methods:{openPostDetail(t){this.$router.push({path:"/post-detail",query:{postId:t.postId,previousRoute:this.$route.name}})}},mounted(){var t,l;!this.row||(l=(t=this.row)==null?void 0:t.pages)!=null&&l.length||(this.loading=!0,this.searchStatisticsStore.getPagesByKeywords([this.row.keyword]).then(c=>{this.loading=!1;const a=c[this.row.keyword];a&&(this.postDetail?this.searchStatisticsStore.data.postDetail.keywords.paginated.rows[this.index].pages=Object.values(a).slice(0,10):this.searchStatisticsStore.data.keywords.paginated.rows[this.index].pages=Object.values(a).slice(0,10))}))}},dt={class:"keyword-inner"},ht={key:0,class:"keyword-inner-loading"},pt={class:"post-title"},ut=["onClick"],ft={key:1,class:"post-title"},gt={key:0,class:"row-actions"},_t=["href"],mt=["href"];function wt(t,l,c,a,e,d){const _=n("core-loader"),w=n("statistic"),m=n("core-wp-table");return h(),b("div",dt,[e.loading?(h(),b("div",ht,[r(_,{dark:""})])):S("",!0),d.row.pages&&!e.loading?(h(),P(m,{ref:"table",class:"posts-table",key:1,columns:d.postColumns,rows:d.row.pages,"show-header":!1,"show-bulk-actions":!1,"show-table-footer":!1},{post_title:s(({row:o})=>[g("div",pt,[o.postId?(h(),b("a",{key:0,href:"#",onClick:R(v=>d.openPostDetail(o),["prevent"])},u(o.objectTitle),9,ut)):(h(),b("span",ft,u(o.objectTitle),1))]),o.postId?(h(),b("div",gt,[g("span",null,[g("a",{class:"view",href:o.context.permalink,target:"_blank"},[g("span",null,u(t.viewPost(o.context.postType.singular)),1)],8,_t),y(" | ")]),g("span",null,[g("a",{class:"edit",href:o.context.editLink,target:"_blank"},[g("span",null,u(t.editPost(o.context.postType.singular)),1)],8,mt)])])):S("",!0)]),clicks:s(({row:o})=>[y(u(e.numbers.compactNumber(o.clicks)),1)]),ctr:s(({row:o})=>[y(u(o.ctr)+"% ",1)]),impressions:s(({row:o})=>[y(u(e.numbers.compactNumber(o.impressions)),1)]),position:s(({row:o})=>[o.difference.comparison?(h(),P(w,{key:0,type:"position",total:o.position,difference:o.difference.position},null,8,["total","difference"])):S("",!0)]),_:1},8,["columns","rows"])):S("",!0)])}const yt=D(ct,[["render",wt]]),kt={setup(){return{licenseStore:F(),searchStatisticsStore:T(),settingsStore:q()}},components:{CoreTooltip:st,CoreWpTable:G,Cta:z,KeywordInner:yt,Statistic:j,SvgCaret:it},mixins:[O,X,Y],data(){return{numbers:N,tableId:"aioseo-search-statistics-keywords-table",activeRow:-1,showUpsell:!1,isPreloading:!1,isFetching:!1,interval:null,sortableColumns:[],strings:{position:this.$t.__("Position",this.$td),ctaButtonText:this.$t.__("Unlock Keyword Tracking",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Keyword Tracking is a %1$s Feature",this.$td),"PRO")}}},props:{keywords:Object,loading:{type:Boolean,default(){return!1}},showHeader:{type:Boolean,default(){return!0}},showTableFooter:Boolean,showItemsPerPage:Boolean,columns:{type:Array,default(){return["keyword","clicks","ctr","impressions","position","diffPosition","buttons"]}},appendColumns:{type:Object,default(){return{}}},postDetail:{type:Boolean,default(){return!1}},refreshOnLoad:{type:Boolean,default(){return!0}},page:{type:String,default(){return""}}},computed:{getFilters(){return this.searchStatisticsStore.shouldShowSampleReports?[]:this.keywords.filters},changeItemsPerPageSlug(){return this.postDetail?"searchStatisticsPostDetailKeywords":"searchStatisticsKeywordRankings"},allColumns(){var c,a;const t=Z(this.columns),l=((a=(c=this.keywords)==null?void 0:c.filters)==null?void 0:a.find(e=>e.active))||{};return this.appendColumns[l.slug||"all"]&&t.push(this.appendColumns[l.slug||"all"]),t.map(e=>(e.endsWith("Sortable")&&(e=e.replace("Sortable",""),this.sortableColumns.push(e)),e))},tableColumns(){return[{slug:"keyword",label:this.$t.__("Keyword",this.$td)},{slug:"clicks",label:this.$t.__("Clicks",this.$td),width:"80px"},{slug:"ctr",label:this.$t.__("Avg. CTR",this.$td),width:"100px"},{slug:"impressions",label:this.$t.__("Impressions",this.$td),width:"120px"},{slug:"position",label:this.$t.__("Position",this.$td),width:"85px"},{slug:"diffDecay",label:this.$t.__("Diff",this.$td),width:"95px"},{slug:"diffPosition",label:this.$t.__("Diff",this.$td),width:"80px"},{slug:"buttons",label:"",width:this.hasSlot("buttons")?"240px":"40px"}].filter(t=>this.allColumns.includes(t.slug)).map(t=>(t.sortable=this.isSortable&&this.sortableColumns.includes(t.slug),t.sortable&&(t.sortDir=t.slug===this.orderBy?this.orderDir:"asc",t.sorted=t.slug===this.orderBy),t)).filter(t=>!this.searchStatisticsStore.shouldShowSampleReports||t.slug!=="buttons")},isSortable(){return this.filter==="all"&&this.$isPro&&!this.licenseStore.isUnlicensed}},methods:{sanitizeString:B,isRowActive(t){return t===this.activeRow},toggleRow(t){if(this.activeRow===t){this.activeRow=-1;return}this.activeRow=t},fetchData(t){return this.isPreloading=!1,this.isFetching=!0,this.page!==""&&(t={...t,page:this.page}),this.postDetail?this.searchStatisticsStore.updatePostDetailKeywords(t).finally(()=>{this.isFetching=!1}):this.searchStatisticsStore.updateKeywords(t).finally(()=>{this.isFetching=!1})},hasSlot(t="default"){return!!this.$slots[t]},shouldLimitText(t){return 120<B(t).length},maybePreloadPages(){if(!(!this.$isPro||this.licenseStore.isUnlicensed||!this.searchStatisticsStore.isConnected||this.isPreloading)){if(this.isFetching&&!this.interval){this.interval=setInterval(()=>{this.isFetching||(clearInterval(this.interval),this.maybePreloadPages())},100);return}this.isPreloading=!0,this.preloadPages().then(()=>{this.isPreloading=!1})}},preloadPages(){var e,d,_,w,m;let t=((d=(e=this.searchStatisticsStore.data.keywords)==null?void 0:e.paginated)==null?void 0:d.rows)||[];this.postDetail&&(t=((m=(w=(_=this.searchStatisticsStore.data.postDetail)==null?void 0:_.keywords)==null?void 0:w.paginated)==null?void 0:m.rows)||[]);const l=[];t.forEach(o=>{o.pages||l.push(o.keyword)});const c=[];for(let o=0;o<l.length;o+=10)c.push(l.slice(o,o+10));const a=[];return c.forEach(o=>{a.push(new Promise(v=>{this.searchStatisticsStore.getPagesByKeywords(o).then(C=>{Object.entries(C).forEach($=>{const[i,p]=$,k=t.findIndex(K=>K.keyword===i);if(k===-1)return;const x=Object.values(p).slice(0,10);this.postDetail?this.searchStatisticsStore.data.postDetail.keywords.paginated.rows[k].pages=x:this.searchStatisticsStore.data.keywords.paginated.rows[k].pages=x})}).finally(()=>{v()})}))}),Promise.all(a)}},mounted(){this.maybePreloadPages()},updated(){this.maybePreloadPages()}},bt={class:"aioseo-search-statistics-keywords-table"},St={class:"keyword"},Pt=["onClick"],vt=["onClick"],Ct={class:""};function $t(t,l,c,a,e,d){const _=n("core-tooltip"),w=n("statistic"),m=n("svg-caret"),o=n("base-button"),v=n("keyword-inner"),C=n("cta"),$=n("core-wp-table");return h(),b("div",bt,[r($,{ref:"table",class:"keywords-table",id:e.tableId,columns:d.tableColumns,rows:Object.values(c.keywords.rows),totals:c.keywords.totals,filters:d.getFilters,"additional-filters":c.keywords.additionalFilters,loading:c.loading,"initial-page-number":t.pageNumber,"initial-search-term":t.searchTerm,"initial-items-per-page":a.settingsStore.settings.tablePagination[d.changeItemsPerPageSlug],"show-header":c.showHeader,"show-bulk-actions":!1,"show-table-footer":c.showTableFooter,"show-items-per-page":c.showItemsPerPage&&!a.searchStatisticsStore.shouldShowSampleReports,"show-pagination":"","blur-rows":e.showUpsell,onFilterTable:t.processFilter,onProcessAdditionalFilters:t.processAdditionalFilters,onPaginate:t.processPagination,onProcessChangeItemsPerPage:t.processChangeItemsPerPage,onSearch:t.processSearch,onSortColumn:t.processSort},{keyword:s(({row:i,index:p,editRow:k})=>[g("div",St,[d.shouldLimitText(i.keyword)?(h(),P(_,{key:0},{tooltip:s(()=>[y(u(d.sanitizeString(i.keyword)),1)]),default:s(()=>[g("a",{class:"limit-line",href:"#",onClick:R(x=>{k(p),d.toggleRow(p)},["prevent"])},u(d.sanitizeString(i.keyword)),9,Pt)]),_:2},1024)):(h(),b("a",{key:1,href:"#",onClick:R(x=>{k(p),d.toggleRow(p)},["prevent"])},u(d.sanitizeString(i.keyword)),9,vt))])]),clicks:s(({row:i})=>[y(u(i.clicks),1)]),ctr:s(({row:i})=>[y(u(e.numbers.compactNumber(i.ctr))+"% ",1)]),impressions:s(({row:i})=>[y(u(e.numbers.compactNumber(i.impressions)),1)]),position:s(({row:i})=>[y(u(Math.round(i.position).toFixed(0)),1)]),diffPosition:s(({row:i})=>[i.difference.comparison?(h(),P(w,{key:0,type:"position",difference:i.difference.position,showCurrent:!1,"tooltip-offset":"-100px,0"},null,8,["difference"])):S("",!0)]),diffDecay:s(({row:i})=>[i.difference.comparison?(h(),P(w,{key:0,type:"decay",difference:i.difference.decay,showCurrent:!1,"tooltip-offset":"-100px,0"},null,8,["difference"])):S("",!0)]),buttons:s(({row:i,index:p,column:k,editRow:x})=>[g("div",Ct,[I(t.$slots,"buttons",{row:i,column:k,index:p}),r(o,{type:"gray",class:Q(["toggle-row-button",{active:d.isRowActive(p)}]),onClick:K=>{x(p),d.toggleRow(p)}},{default:s(()=>[r(m)]),_:2},1032,["class","onClick"])])]),"edit-row":s(({index:i})=>[r(v,{index:i,postDetail:c.postDetail},null,8,["index","postDetail"])]),cta:s(()=>[e.showUpsell?(h(),P(C,{key:0,"cta-link":t.$links.getPricingUrl("search-statistics","search-statistics-upsell"),"button-text":e.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("search-statistics","search-statistics-upsell",t.$isPro?"pricing":"liteUpgrade"),"hide-bonus":!a.licenseStore.isUnlicensed},{"header-text":s(()=>[y(u(e.strings.ctaHeader),1)]),_:1},8,["cta-link","button-text","learn-more-link","hide-bonus"])):S("",!0)]),tablenav:s(()=>[I(t.$slots,"tablenav")]),_:3},8,["id","columns","rows","totals","filters","additional-filters","loading","initial-page-number","initial-search-term","initial-items-per-page","show-header","show-table-footer","show-items-per-page","blur-rows","onFilterTable","onProcessAdditionalFilters","onPaginate","onProcessChangeItemsPerPage","onSearch","onSortColumn"])])}const W=D(kt,[["render",$t]]),Tt={setup(){return{searchStatisticsStore:T()}},components:{CoreBlur:V,CoreCard:L,GridColumn:U,GridRow:A,KeywordsDistributionGraph:E,KeywordsGraph:M,KeywordsTable:W,SeoStatisticsOverview:H},data(){return{strings:{keywordPositionsCard:this.$t.__("Keyword Positions",this.$td),keywordPositionsTooltip:this.$t.__("This graph is a visual representation of how well <strong>keywords are ranking in search results over time</strong> based on their position and average CTR. This can help you understand the performance of keywords and identify any trends or fluctuations.",this.$td),keywordPerformanceCard:this.$t.__("Keyword Performance",this.$td),keywordPerformanceTooltip:this.$t.__("This table displays the performance of keywords that your site ranks for over time, including metrics such as impressions, click-through rate, and average position in search results. It allows for easy analysis of how keywords are performing and identification of any underperforming keywords that may need to be optimized or replaced.",this.$td)},defaultKeywords:{rows:[],totals:{page:0,pages:0,total:0}}}}},xt={class:"aioseo-search-statistics-dashboard"},Dt=["innerHTML"],Rt=["innerHTML"];function Kt(t,l,c,a,e,d){const _=n("seo-statistics-overview"),w=n("keywords-graph"),m=n("grid-column"),o=n("keywords-distribution-graph"),v=n("grid-row"),C=n("core-card"),$=n("keywords-table"),i=n("core-blur");return h(),P(i,null,{default:s(()=>[g("div",xt,[r(v,null,{default:s(()=>[r(m,null,{default:s(()=>[r(C,{slug:"keywordPositions","header-text":e.strings.keywordPositionsCard,toggles:!1,"no-slide":""},{tooltip:s(()=>[g("span",{innerHTML:e.strings.keywordPositionsTooltip},null,8,Dt)]),default:s(()=>[r(_,{statistics:["keywords","impressions","position"],"show-graph":!1,view:"side-by-side"}),r(v,null,{default:s(()=>[r(m,{md:"6"},{default:s(()=>[r(w,{"legend-style":"simple"})]),_:1}),r(m,{md:"6"},{default:s(()=>[r(o)]),_:1})]),_:1})]),_:1},8,["header-text"]),r(C,{slug:"keywordPerformance","header-text":e.strings.keywordPerformanceCard,toggles:!1,"no-slide":""},{tooltip:s(()=>[g("span",{innerHTML:e.strings.keywordPerformanceTooltip},null,8,Rt)]),default:s(()=>{var p,k;return[r($,{keywords:((k=(p=a.searchStatisticsStore.data)==null?void 0:p.keywords)==null?void 0:k.paginated)||e.defaultKeywords,ref:"table","show-items-per-page":"","show-table-footer":""},null,8,["keywords"])]}),_:1},8,["header-text"])]),_:1})]),_:1})])]),_:1})}const Bt=D(Tt,[["render",Kt]]),It={class:"aioseo-search-statistics-keyword-rankings"},Ft={__name:"Index",setup(t){const{strings:l}=tt(),c=F(),a=T();return(e,d)=>(h(),b("div",It,[f(a).shouldShowSampleReports?S("",!0):(h(),P(f(Bt),{key:0})),f(a).shouldShowSampleReports?S("",!0):(h(),P(f(z),{key:1,"cta-second-button-action":"",onCtaSecondButtonClick:f(a).showSampleReports,"cta-link":e.$links.getPricingUrl("search-statistics","search-statistics-upsell","dashboard"),"button-text":f(l).ctaButtonText,"second-button-text":f(l).ctaSecondButtonText,"cta-second-button-new-badge":"","cta-second-button-visible":"","learn-more-link":e.$links.getUpsellUrl("search-statistics","dashboard",e.$isPro?"pricing":"liteUpgrade"),"feature-list":[f(l).feature1,f(l).feature2,f(l).feature3,f(l).feature4],"align-top":"","hide-bonus":!f(c).isUnlicensed},{"header-text":s(()=>[y(u(f(l).ctaHeader),1)]),description:s(()=>[r(f(rt),{"core-feature":["search-statistics"]}),y(" "+u(f(l).ctaDescription),1)]),_:1},8,["onCtaSecondButtonClick","cta-link","button-text","second-button-text","learn-more-link","feature-list","hide-bonus"]))]))}},Lt={setup(){return{searchStatisticsStore:T()}},components:{CoreCard:L,GridColumn:U,GridRow:A,KeywordsDistributionGraph:E,KeywordsGraph:M,KeywordsTable:W,SeoStatisticsOverview:H},data(){return{strings:{keywordPositionsCard:this.$t.__("Keyword Positions",this.$td),keywordPositionsTooltip:this.$t.__("This graph is a visual representation of how well <strong>keywords are ranking in search results over time</strong> based on their position and average CTR. This can help you understand the performance of keywords and identify any trends or fluctuations.",this.$td),keywordPerformanceCard:this.$t.__("Keyword Performance",this.$td),keywordPerformanceTooltip:this.$t.__("This table displays the performance of keywords that your site ranks for over time, including metrics such as impressions, click-through rate, and average position in search results. It allows for easy analysis of how keywords are performing and identification of any underperforming keywords that may need to be optimized or replaced.",this.$td)},defaultKeywords:{rows:[],totals:{page:0,pages:0,total:0}}}},mounted(){this.searchStatisticsStore.isConnected&&this.searchStatisticsStore.loadInitialData()}},Ut={class:"aioseo-search-statistics-keywords"},At=["innerHTML"],Ht=["innerHTML"];function Mt(t,l,c,a,e,d){const _=n("seo-statistics-overview"),w=n("keywords-graph"),m=n("grid-column"),o=n("keywords-distribution-graph"),v=n("grid-row"),C=n("core-card"),$=n("keywords-table");return h(),b("div",Ut,[r(v,null,{default:s(()=>[r(m,null,{default:s(()=>[r(C,{slug:"keywordPositions","header-text":e.strings.keywordPositionsCard,toggles:!1,"no-slide":""},{tooltip:s(()=>[g("span",{innerHTML:e.strings.keywordPositionsTooltip},null,8,At)]),default:s(()=>[r(_,{statistics:["keywords","impressions","position"],"show-graph":!1,view:"side-by-side"}),r(v,null,{default:s(()=>[r(m,{md:"6"},{default:s(()=>[r(w,{"legend-style":"simple"})]),_:1}),r(m,{md:"6"},{default:s(()=>[r(o)]),_:1})]),_:1})]),_:1},8,["header-text"]),r(C,{slug:"keywordPerformance","header-text":e.strings.keywordPerformanceCard,toggles:!1,"no-slide":""},{tooltip:s(()=>[g("span",{innerHTML:e.strings.keywordPerformanceTooltip},null,8,Ht)]),default:s(()=>{var i,p;return[r($,{keywords:((p=(i=a.searchStatisticsStore.data)==null?void 0:i.keywords)==null?void 0:p.paginated)||e.defaultKeywords,loading:a.searchStatisticsStore.loading.keywords,columns:["keywordSortable","clicksSortable","ctrSortable","impressionsSortable","positionSortable","buttons"],"append-columns":{all:"diffPosition",topLosing:"diffDecay",topWinning:"diffDecay"},"show-items-per-page":"","show-table-footer":""},null,8,["keywords","loading"])]}),_:1},8,["header-text"])]),_:1})]),_:1})])}const Nt=D(Lt,[["render",Mt]]),Ot={setup(){return{searchStatisticsStore:T()}},mixins:[et],components:{KeywordRankings:Nt,Lite:Ft}},jt={class:"aioseo-search-statistics-keyword-rankings"};function Gt(t,l,c,a,e,d){const _=n("keyword-rankings",!0),w=n("lite");return h(),b("div",jt,[t.shouldShowMain("search-statistics","keyword-rankings")||a.searchStatisticsStore.shouldShowSampleReports?(h(),P(_,{key:0})):S("",!0),(t.shouldShowUpgrade("search-statistics","keyword-rankings")||t.shouldShowLite)&&!a.searchStatisticsStore.shouldShowSampleReports?(h(),P(w,{key:1})):S("",!0)])}const ke=D(Ot,[["render",Gt]]);export{ke as default};
