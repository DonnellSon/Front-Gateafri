const functions = {
    isWindow: function (obj) {
        return obj != null && obj === obj.window;
    },
    getWindow: function (elem) {
        return functions.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    },
    offset: function (el) {

        var docElem, win,
            elem = el,
            box = { top: 0, left: 0 },
            doc = elem && elem.ownerDocument;

        if (!doc) {
            return;
        }

        docElem = doc.documentElement;

        box = elem.getBoundingClientRect();
        win = functions.getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    },
    resizeTextarea: (textarea, content) => {
        textarea.style.whiteSpace = "pre";
        textarea.style.width = "1px";
        content.style.width = "1px";
        textarea.style.height = "19px";
        content.style.width = textarea.scrollWidth + 'px';
        textarea.style.width = textarea.scrollWidth + 'px';
        textarea.style.whiteSpace = "pre-wrap";
        textarea.style.height = (textarea.scrollHeight - 2) + 'px';
        if (textarea.value.length < 1) {
            textarea.style.width = "calc(100% - calc(30px * 4))";
            content.style.width = "calc(100% - calc(30px * 4))";
            textarea.style.width = "100%";
        }
    },
    fix: (elem) => {
        var l = elem.getBoundingClientRect().left;
        var w = elem.offsetWidth;
        var h = elem.offsetHeight;
        if (document.scrollingElement.scrollTop < functions.offset(elem).top - (window.innerHeight - elem.getBoundingClientRect().height)) {
            elem.style.position = 'fixed';
            elem.style.bottom = '0px';
            elem.style.left = l + 'px';
            elem.style.width = w + 'px';
            elem.style.height = h + 'px';
        }

        else if (elem.getBoundingClientRect().top < 60) {
            elem.style.position = 'fixed';
            elem.style.top = '60px';
            elem.style.left = l + 'px';
            elem.style.width = w + 'px';
            elem.style.height = h + 'px';
        }

    },
    autoViewPort: (elem) => {

        if (window.document.documentElement.scrollTop < functions.offset(elem).top - (window.innerHeight - elem.getBoundingClientRect().height)) {
            window.document.documentElement.scrollTo({ left: 0, top: functions.offset(elem).top - (window.innerHeight - elem.getBoundingClientRect().height) });
        }
        if (elem.getBoundingClientRect().top < 60) {
            window.document.documentElement.scrollTo({ left: 0, top: functions.offset(elem).top - (60) });
        }




    },
    focusForm: (elem) => {
        elem.focus();
    },
    media: (mediaQueries, cb) => {
        console.log(Object.keys(mediaQueries))
        Object.keys(mediaQueries).forEach((k) => {
                var x = window.matchMedia(mediaQueries[k]);
                if(x.matches){
                    cb(k);
                }
                x.addEventListener("change", (x) => {
                    if(x.matches){
                        cb(k);
                    }
                })
        })


    }
}
module.exports = functions;