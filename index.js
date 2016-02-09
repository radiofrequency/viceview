//     ViceView.js 1.0.0
//     (c) 2010-2016 Ryan Folstad, datememe.com
//     ViceView may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://github.com/radiofrequency/viceview

(function() {
    'use strict';
    var ViceView = {};
    ViceView.showAdsense = function(options) {
        //options.element name of element to place ad in.
        //options.adslot  adslot information
        //options.adwidth width of the ad
        //options.adheight height of the ad

        if (options.element === undefined || options.element === null) {
            console.error("no element specified");
            return;
        }
        if (options.adslot === undefined || options.adslot === null) {
            console.error("no adslot specified");
            return;
        } else {
            if (options.adslot.slot === undefined || options.adslot.slot === null) {
                console.error("no adslot.slot specified");
                return;
            }
            if (options.adslot.sizes === undefined || options.adslot.sizes === null) {
                console.error("no adslot.sizes specified");
                return;
            }
            if (options.adslot.id === undefined || options.adslot.id === null) {
                console.error("no adslot.id specified");
                return;
            }
        }

        if (options.adwidth === undefined || options.adwidth === null) {
            console.error("no adwidth specified");
            return;
        }

        if (options.adheight === undefined || options.adheight === null) {
            console.error("no adheight specified");
            return;
        }
        var target = document.getElementById(options.element);
        if (target === null || target === undefined) {
            console.error("no target element not found");
            return;
        }
        target.innerHTML = "";
        var e = document.createElement("iframe");
        e.setAttribute("frameBorder", "0");
        e.setAttribute("scrolling", "no");
        e.setAttribute("width", options.adwidth);
        e.setAttribute("height", options.adheight);
        e.setAttribute("vspace", "0");
        e.setAttribute("hspace", "0");
        e.setAttribute("allowTransparency", "true");
        e.setAttribute("marginWidth", "0");
        e.setAttribute("marginHeight", "0");
        e.style.border = "none";
        e.style.margin = "0px";
        e.style.padding = "0px";
        e.style.width = options.adwidth + "px";
        e.style.height = options.adheight + "px";
        target.appendChild(e);
        var adslotsscript = "";
        adslotsscript += "googletag.defineSlot('" + options.adslot.slot + "', " + options.adslot.sizes + ", '" + options.adslot.id + "').addService(googletag.pubads());";
        var asyncDFP = "<scr" + "ipt>var googletag = googletag || {};" + "googletag.cmd = googletag.cmd || [];" + "var gads = document.createElement('script');" + "gads.async = true;" + "gads.type = 'text/javascript';" + "var useSSL = 'https:' == document.location.protocol;" + "gads.src = (useSSL ? 'https:' : 'http:') +" + "    '//www.googletagservices.com/tag/js/gpt.js';" + "var node = document.getElementsByTagName('script')[0];" + "node.parentNode.insertBefore(gads, node);" + "googletag.cmd.push(function() {" + adslotsscript + " googletag.pubads().enableSingleRequest();" + " googletag.enableServices();" + "});</scr" + "ipt>";
        var adSlot = "<scr" + "ipt>googletag.cmd.push(function() { googletag.display('" + options.adslot.id + "'); });</scr" + "ipt>";
        var adSlotDiv = "<div id='" + options.adslot.id + "' style='width: " + options.adwidth + "px;  height: " + options.adheight + "px;'></div>";
        var dbf = "<html><head></head><body>" + asyncDFP + adSlotDiv + adSlot + "</body></html>";
        if (e.contentWindow) {
            e = e.contentWindow;
        } else if (e.contentDocument) {
            if (e.contentDocument.document) {
                e = e.contentDocument.document;
            } else {
                e = e.contentDocument;
            }
        }
        e.onerror = function(e) {
            console.error(e);
        };
        if (e.document) {
            e.document.open();
            e.document.write(dbf);
            e.document.close();
        }
    };
    window.ViceView = ViceView;
}());