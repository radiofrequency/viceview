$(function() {
    $(".nav-link").click(function(e) {
        e.preventDefault();
        var route = $(e.currentTarget).attr("href");
        router.navigate(route, true);
    });

    var approuter = Backbone.Router.extend({
        routes: {
            ":id": "handler"
        },
        handler: function(data, data2) {
            var currentad = _.find(adslots, function(ad) {
                return ad.id === data;
            });
            var size = eval(currentad.sizes);
            var adwidth = 0;
            var adheight = 0;
            if (typeof(size[0]) == "number") {
                adwidth = size[0];
                adheight = size[1];
            } else {
                adwidth = size[0][0];
                adheight = size[0][1];
            }
            var adView = new AdView({
                el: $,
                element: "adview",
                adslot: currentad,
                adwidth: adwidth,
                adheight: adheight,
            });
            adView.render();
        }
    });
    var router = new approuter();
    Backbone.history.start({
        pushState: true
    });
});

(function() {
  this.AdView = Backbone.View.extend({
    initialize: function(options) {
      this.element = options.element;
      this.el = options.el;
      this.adslot = options.adslot;
      this.adwidth = options.adwidth;
      this.adheight = options.adheight;
      return;
    },
    events: {},
    render: function() {
      this.showadsense();
    },
    showadsense: function() {
      ViceView.showAdsense({adslot: this.adslot, element: this.element, adwidth: this.adwidth, adheight: this.adheight});
    },
  });
}).call(this);
