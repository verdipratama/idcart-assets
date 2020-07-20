(function(a) {
    function h() {
        g || (g = !0, d ? (b.find("a").hide(), b.find("img").show(), a.ajax(d, { dataType: "html" }).done(function(c) {
            var c = a("<div></div>").append(c.replace(j, "")),
                e = c.find("a.blog-pager-older-link");
            e ? d = e.attr("href") : (d = "", b.hide());
            c = c.find(i).children();
            a(i).append(c);
            window._gaq && window._gaq.push(["_trackPageview", d]);
            window.gapi && window.gapi.plusone && window.gapi.plusone.go && window.gapi.plusone.go();
            window.disqus_shortname && a.getScript("http://" + window.disqus_shortname + ".disqus.com/blogger_index.js");
            window.FB && window.FB.XFBML && window.FB.XFBML.parse && window.FB.XFBML.parse();
            window.twttr && window.twttr.widgets && window.twttr.widgets.load && window.twttr.widgets.load();
            b.find("img").hide();
            b.find("a").show();
            g = !1
        })) : b.hide())
    }

    function k() {
        var a = Math.max(f.height(), l.height(), document.documentElement.clientHeight),
            b = f.scrollTop() + f.height();
        150 > a - b && h() }
    var d = "",
        b = null,
        i = "div.blog-posts",
        g = !1,
        f = a(window),
        l = a(document),
        j = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    a(document).ready(function() {
        if ("item" !=
            _WidgetManager._GetAllData().blog.pageType && (d = a("a.blog-pager-older-link").attr("href"))) {
            var c = a('<a href="javascript:;">Load more...</a>');
            c.click(h);
            var e = a('<img src="https://lh3.googleusercontent.com/-FiCzyOK4Mew/T4aAj2uVJKI/AAAAAAAAPaY/x23tjGIH7ls/s32/ajax-loader.gif" style="display: none;">');
            f.scroll(k);
            b = a('<div class="loadmorebutton" style="text-align: center; font-size: 150%;"></div>');
            b.append(c);
            b.append(e);
            b.insertBefore(a("#blog-pager"));
            a("#blog-pager").hide() }
    })
})(jQuery);
