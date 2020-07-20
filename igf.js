! function(t) {
    t.fn.instagramFeed = function(e) {
        if (!this.length) return this;
        plugin = this, plugin.defaults = {
            accessToken: null,
            limit: null,
            list: !0,
            videos: !1,
            urls: !1,
            captions: !1,
            date: !1,
            likes: !1,
            comments_count: !1,
            error: function() {},
            success: function() {}
        };
        var i = t.extend({}, plugin.defaults, e),
            s = t(this),
            a = function(t) {
                for (var e = t.split(" "), i = "", s = 0; s < e.length; s++) {
                    var a;
                    if ("@" == e[s][0]) a = '<a href="https://www.instagram.com/' + e[s].replace("@", "").toLowerCase() + '" target="_blank">' + e[s] + "</a>";
                    else if ("#" == e[s][0]) {
                        a = '<a href="https://www.instagram.com/explore/tags/' + e[s].replace("#", "").toLowerCase() + '" target="_blank">' + e[s] + "</a>"
                    } else a = e[s];
                    i += a + " "
                }
                return i
            };
        ! function() {
            if (i.accessToken) {
                var e = "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + i.accessToken + "&count=" + i.limit;
                t.ajax({
                    type: "GET",
                    url: e,
                    dataType: "jsonp",
                    success: function(t) {
                        200 === t.meta.code && t.data.length ? (function(t) {
                            for (var e = 0; e < t.length; e++) {
                                var o, n, l = t[e];
                                if ("image" === l.type || !i.videos) {
                                    if (o = '<figure style="background-image:url(' + l.images.standard_resolution.url + ');" data-src="' + l.images.standard_resolution.url + '" title="' + l.caption.text + '" data-filter="' + l.filter + '" />', i.urls && (o = '<a href="' + l.link + '" target="_blank">' + o + "</a>"), (i.captions || i.date || i.likes || i.comments_count) && (o += '<div class="igfInfo"><div class="igfMeta">'),
                                        i.likes && (o += '<a href="' + l.link + '" target="_blank" class="igfLikes"><i class="icon ion-md-heart"></i> <span>' + l.likes.count + "</span></a>&nbsp;&nbsp;"), i.comments_count && l.comments && (o += '<a href="' + l.link + '" target="_blank" class="igfComments"><i class="icon ion-logo-twitch"></i> <span>' + l.comments.count + "</span></a>"), (i.captions || i.date || i.likes || i.comments_count) && (o += "</div>"),
                                        i.captions && l.caption && (o += '<div class="igfCaption" data-caption-id="' + l.caption.id + '">' + a(l.caption.text) + ""),
                                        i.date) {
                                        var r = new Date(1e3 * l.created_time),
                                            c = r.getDate(),
                                            d = r.getMonth() + 1,
                                            u = r.getFullYear();
                                        r.getHours(), r.getMinutes(), r.getSeconds(), o += '<br/><br/><small class="igfDate">' + (r = d + "/" + c + "/" + u) + "</small></div></div><!-- igfInfo -->"
                                    }
                                }
                                "video" === l.type && i.videos && l.videos && (l.videos.standard_resolution ? n = l.videos.standard_resolution.url : l.videos.low_resolution ? n = l.videos.low_resolution.url : l.videos.low_bandwidth && (n = l.videos.low_bandwidth.url),
                                	o = 'test', o += '', o += ""), i.list && o && (o = '<div class="igfItem" data-instagram-id="' + l.id + '">' + o + "</div>"),
                                "" !== o && s.append(o)
                            }
                        }(t.data), i.success.call(this)) : i.error.call(this)
                    },
                    error: function() {
                        i.error.call(this)
                    }
                })
            }
        }()
    }
}(jQuery);
