define("mixins/data-options",[],function(){return{optionsPrefix:"grid",parseOptions:function(){var e=this,t=this.$el.data()||{},n=new RegExp("^"+this.optionsPrefix+"([a-zA-Z]+)");return $.each(t,function(r,i){t.hasOwnProperty(r)&&n.test(r)&&(shortName=r.match(n)[1].replace(/[A-Z]/,function(e){return(e||"").toLowerCase()}),e.options[shortName]=i)}),this}}}),define("static-grid",["backbone","mixins/data-options"],function(e,t){var n=e.View.extend({options:{itemSelector:".static-grid-item",itemMargin:0,imageSelector:".static-grid-item .image",imageRate:1,imageCol:4,imagePosition:"inner"},initialize:function(){var e=this;this.parseOptions(),this.$el.addClass("c"+this.options.imageCol),this.setItemsSize(),$(window).resize(function(){e.setItemsSize(),e.$el.find(e.options.imageSelector+" img").each(function(){e.setImageSize(this)})})},getImageSize:function(e){var t=[],n=this.$el.find(this.options.itemSelector),r=1e4,s=0;for(i=0;i<this.options.imageCol;i++){var o=$(n[i]).width();s+=o,o-=this.options.itemMargin,o>0&&(r=o<r?o:r)}s>e&&(r-=1);var u=parseInt(r/this.options.imageRate);return{itemWidth:r,itemHeight:u,totalWidth:e}},setItemsSize:function(){var e=this,t=$(window).height()-$(document).height();this.$el.width(""),this.$el.find(this.options.itemSelector).each(function(){$(this).width("")}),this.$el.css("marginLeft","-"+this.options.itemMargin+"px").width(this.$el.parent().width()+this.options.itemMargin),itemSize=this.getImageSize(this.$el.width()),this.$el.find(this.options.itemSelector).each(function(){$(this).width(itemSize.itemWidth+e.options.itemMargin);var t=$(this).find(".image");$(t).height(itemSize.itemHeight);var n=parseInt($(t).attr("data-width")),r=parseInt($(t).attr("data-height")),i=n/r;$(t).data("imageRate",i).addClass(e.options.imageRate>=1?"w":"h")}),this.$el.css("visibility","visible"),$(window).height()-$(document).height()<0&&t==0&&this.setItemsSize()},setImageSize:function(e){var t=$(e).parent().data("imageRate"),n=$(e).parent().width()/$(e).parent().height();if(this.options.imagePosition=="inner")if(n>=1)var r=t<=n?"h":"w";else var r=n<=t?"w":"h";else if(n>=1)var r=t<=n?"w":"h";else var r=n<=t?"h":"w";$(e).removeClass("w h").addClass(r);if(this.options.imagePosition=="inner"){var i=$(e).height(),s=$(e).parent().height();$(e).css("marginTop",parseInt((s-i)/2)+"px")}else{$(e).css({marginTop:0,marginLeft:0});var o=$(e).width(),u=$(e).parent().width();o!=u&&$(e).css("marginLeft",parseInt((u-o)/2)+"px");var i=$(e).height(),s=$(e).parent().height();i!=s&&$(e).css("marginTop",parseInt((s-i)/2)+"px")}},render:function(){return this}});return _.extend(n.prototype,t),n});