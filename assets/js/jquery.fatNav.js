! function(t, o, a) {
    var s = "fatNav",
        i = {};

    function n(o) {
        this.settings = t.extend({}, i, o), this._defaults = i, this._name = s, this.init()
    }
    t.extend(n.prototype, {
        init: function() {
            var o = this,
                a = this.$nav = t(".fat-nav"),
                s = this.$hamburger = t('<small class="hamburger"><div class="hamburger__icon"></div></small>');
            this._bodyOverflow = t("body").css("overflow"), navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && a.children().css({
                height: "110%",
                transform: "translateY(-5%)"
            }), t("body").append(s), t().add(s).add(a.find("small")).on("click", function(t) {
                o.toggleNav()
            })
        },
        toggleNav: function() {
            this.$nav.fadeToggle(400), this.toggleBodyOverflow(), t().add(this.$hamburger).add(this.$nav).toggleClass("active")
        },
        toggleBodyOverflow: function() {
            var o = t("body");
            o.toggleClass("no-scroll");
            var a = o.hasClass("no-scroll");
            o.css("overflow", a ? "hidden" : this._bodyOverflow)
        }
    }), void 0 === t[s] && (t[s] = function(t) {
        return new n(this, t)
    })
}(jQuery, window, document);