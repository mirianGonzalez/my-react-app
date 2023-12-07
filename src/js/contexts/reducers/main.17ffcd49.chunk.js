/* eslint-disable no-mixed-operators */
/* eslint-disable no-sequences */
/* eslint-disable strict */
/* eslint-disable no-unused-expressions */
(this.webpackJsonpwonderlist = this.webpackJsonpwonderlist || []).push([[0], {
    14: function(e, t, n) {},
    17: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0)
          , c = n.n(a)
          , i = n(8)
          , l = n.n(i)
          , r = (n(14),
        n(3))
          , o = n(2)
          , s = n(1)
          , m = n(6)
          , u = n.n(m)
          , d = function(e, t) {
            switch (t.type) {
            case "ADD_NEW_LIST":
                return [].concat(Object(r.a)(e), [Object(s.a)(Object(s.a)({}, t.list), {}, {
                    id: u()()
                })]);
            case "RENAME_LIST":
                return e.map((function(e) {
                    return e.id === t.payload.id ? Object(s.a)(Object(s.a)({}, e), {}, {
                        name: t.payload.name,
                        lastUpdated: Date.now()
                    }) : e
                }
                ));
            case "PIN_LIST":
                return e.map((function(e) {
                    return e.id === t.id ? Object(s.a)(Object(s.a)({}, e), {}, {
                        pinned: !0,
                        lastUpdated: Date.now()
                    }) : e
                }
                ));
            case "UNPIN_LIST":
                return e.map((function(e) {
                    return e.id === t.id ? Object(s.a)(Object(s.a)({}, e), {}, {
                        pinned: !1,
                        lastUpdated: Date.now()
                    }) : e
                }
                ));
            case "REMOVE_LIST":
                return e.map((function(e) {
                    return Object(s.a)(Object(s.a)({}, e), {}, {
                        lastUpdated: Date.now()
                    })
                }
                )).filter((function(e) {
                    return e.id !== t.id
                }
                ));
            case "ADD_LIST_ITEM":
                return e.map((function(e) {
                    return e.id === t.payload.listId ? Object(s.a)(Object(s.a)({}, e), {}, {
                        lastUpdated: Date.now(),
                        items: [].concat(Object(r.a)(e.items), [{
                            id: u()(),
                            name: t.payload.itemName,
                            completed: t.payload.completed
                        }])
                    }) : e
                }
                ));
            case "MARK_AS_COMPLETE":
                return e.map((function(e) {
                    return e.id === t.payload.listId ? Object(s.a)(Object(s.a)({}, e), {}, {
                        lastUpdated: Date.now(),
                        items: Object(r.a)(e.items.map((function(e) {
                            return e.id === t.payload.itemId && (e.completed = !0),
                            e
                        }
                        )))
                    }) : e
                }
                ));
            case "MARK_AS_INCOMPLETE":
                return e.map((function(e) {
                    return e.id === t.payload.listId ? Object(s.a)(Object(s.a)({}, e), {}, {
                        lastUpdated: Date.now(),
                        items: Object(r.a)(e.items.map((function(e) {
                            return e.id === t.payload.itemId && (e.completed = !1),
                            e
                        }
                        )))
                    }) : e
                }
                ));
            case "REMOVE_LIST_ITEM":
                return e.map((function(e) {
                    return e.id === t.payload.listId ? Object(s.a)(Object(s.a)({}, e), {}, {
                        lastUpdated: Date.now(),
                        items: e.items.filter((function(e) {
                            return e.id !== t.payload.itemId
                        }
                        ))
                    }) : e
                }
                ));
            default:
                return e
            }
        }
          , p = Object(a.createContext)()
          , E = function(e) {
            var t = Object(a.useState)(!1)
              , n = Object(o.a)(t, 2)
              , i = n[0]
              , l = n[1]
              , r = Object(a.useReducer)(d, [], (function() {
                var e = localStorage.getItem("wonderItems");
                return e ? JSON.parse(e) : []
            }
            ))
              , s = Object(o.a)(r, 2)
              , m = s[0]
              , u = s[1];
            return Object(a.useEffect)((function() {
                localStorage.setItem("wonderItems", JSON.stringify(m))
            }
            ), [m]),
            c.a.createElement(p.Provider, {
                value: {
                    lists: m,
                    newListForm: i,
                    showNewListForm: l,
                    dispatch: u
                }
            }, e.children)
        }
          , b = function() {
            var e = Object(a.useContext)(p)
              , t = e.lists
              , n = e.newListForm
              , i = e.showNewListForm
              , l = Math.max.apply(Math, Object(r.a)(t.map((function(e) {
                return e.lastUpdated
            }
            ))));
            return c.a.createElement("div", {
                className: "header"
            }, c.a.createElement("div", {
                className: "text"
            }, c.a.createElement("h3", null, "Wonderlist"), t.length ? c.a.createElement("p", null, "Updated ", function(e) {
                var t = new Date(e)
                  , n = t.toDateString().slice(0, -5)
                  , a = t.getHours()
                  , c = t.getMinutes()
                  , i = "am";
                a > 12 && (a -= 12,
                i = "pm"),
                c = c < 10 ? "0".concat(c) : c;
                var l = "".concat(a, ":").concat(c, " ").concat(i);
                return "".concat(n, ", ").concat(l)
            }(l)) : c.a.createElement("p", null, "It's empty. Add new list first")), c.a.createElement("div", {
                className: "new-list-btn"
            }, c.a.createElement("button", {
                type: "button",
                title: "Add List",
                onClick: function() {
                    return i((function() {
                        return !n
                    }
                    ))
                },
                disabled: n
            }, "New List")))
        }
          , f = function(e) {
            var t = e.items
              , n = e.editing
              , a = e.onRemove
              , i = e.onComplete;
            return t.length ? c.a.createElement(c.a.Fragment, null, t.map((function(e, l) {
                return c.a.createElement("div", {
                    className: "list-item",
                    key: e.id
                }, c.a.createElement("input", {
                    className: "inp-cbx",
                    id: "cbx" + e.id,
                    type: "checkbox",
                    checked: e.completed,
                    onChange: function() {
                        return n ? null : i(!e.completed, e.id)
                    },
                    style: {
                        display: "none"
                    }
                }), c.a.createElement("label", {
                    className: "cbx",
                    htmlFor: "cbx" + e.id
                }, c.a.createElement("span", null, c.a.createElement("svg", {
                    width: "12px",
                    height: "9px",
                    viewBox: "0 0 12 9"
                }, c.a.createElement("polyline", {
                    points: "1 5 4 8 11 1"
                }))), c.a.createElement("span", null, e.name)), n && c.a.createElement("span", {
                    className: "delete-item-btn",
                    onClick: function() {
                        return a(e.id, t.length > 1)
                    }
                }, "\xd7"))
            }
            ))) : null
        }
          , N = function(e) {
            var t = e.listId
              , n = e.onFocusOut
              , i = Object(a.useContext)(p).dispatch
              , l = Object(a.useState)("")
              , r = Object(o.a)(l, 2)
              , s = r[0]
              , m = r[1]
              , u = function() {
                n(),
                0 !== s.trim().length && (i({
                    type: "ADD_LIST_ITEM",
                    payload: {
                        listId: t,
                        itemName: s,
                        completed: !1
                    }
                }),
                m(""))
            };
            return c.a.createElement("div", {
                className: "list-item new"
            }, c.a.createElement("input", {
                className: "inp-cbx",
                id: "cbxNew",
                type: "checkbox",
                style: {
                    display: "none"
                },
                disabled: !0
            }), c.a.createElement("label", {
                className: "cbx",
                htmlFor: "cbxNew"
            }, c.a.createElement("span", null), c.a.createElement("span", null, c.a.createElement("input", {
                type: "text",
                autoFocus: !0,
                value: s,
                onBlur: u,
                className: "new-item-input",
                placeholder: "Type item name",
                onChange: function(e) {
                    return m(e.target.value)
                },
                onKeyPress: function(e) {
                    "Enter" === e.key && u()
                }
            }))))
        }
          , O = function(e) {
            var t = e.list
              , n = Object(a.useContext)(p).dispatch
              , i = Object(a.useState)(!1)
              , l = Object(o.a)(i, 2)
              , r = l[0]
              , s = l[1]
              , m = Object(a.useState)(!1)
              , u = Object(o.a)(m, 2)
              , d = u[0]
              , E = u[1]
              , b = Object(a.useState)(!1)
              , O = Object(o.a)(b, 2)
              , v = O[0]
              , y = O[1]
              , h = Object(a.useState)("")
              , I = Object(o.a)(h, 2)
              , j = I[0]
              , w = I[1]
              , g = function() {
                0 !== j.trim().length && (n({
                    type: "RENAME_LIST",
                    payload: {
                        id: t.id,
                        name: j
                    }
                }),
                y(!1))
            };
            return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                className: "list ".concat(0 === t.items.length ? "empty" : "", " ").concat(t.pinned ? "pinned" : "")
            }, c.a.createElement("div", {
                className: "list-header ".concat(v ? "edit-mode" : "")
            }, c.a.createElement("div", {
                className: "title"
            }, c.a.createElement("div", {
                className: "view"
            }, c.a.createElement("span", {
                className: "name"
            }, t.name), c.a.createElement("span", {
                className: "edit",
                role: "button",
                onClick: function() {
                    return y((function() {
                        return !v
                    }
                    ))
                }
            })), c.a.createElement("div", {
                className: "edit"
            }, c.a.createElement("input", {
                type: "text",
                autoFocus: !0,
                value: j,
                placeholder: t.name,
                onChange: function(e) {
                    return w(e.target.value)
                },
                onKeyPress: function(e) {
                    "Enter" === e.key && g()
                },
                onBlur: function() {
                    return y(!1)
                }
            }))), c.a.createElement("div", {
                className: "actions"
            }, t.pinned && c.a.createElement("button", {
                className: "ico-btn pin pinned",
                title: "Unpin List",
                type: "button",
                onClick: function() {
                    return n({
                        type: "UNPIN_LIST",
                        id: t.id
                    })
                }
            }), !t.pinned && c.a.createElement("button", {
                className: "ico-btn pin",
                title: "Pin List",
                type: "button",
                onClick: function() {
                    return n({
                        type: "PIN_LIST",
                        id: t.id
                    })
                }
            }), c.a.createElement("button", {
                className: "ico-btn delete",
                type: "button",
                title: "Delete List",
                onClick: function() {
                    return n({
                        type: "REMOVE_LIST",
                        id: t.id
                    })
                }
            }), c.a.createElement("button", {
                className: "ico-btn save",
                type: "button",
                title: "Save List",
                onClick: g,
                disabled: "" === j.trim()
            }))), c.a.createElement("div", {
                className: "list-content-wrapper"
            }, c.a.createElement("div", {
                className: "list-content"
            }, c.a.createElement(f, {
                items: t.items,
                editing: d,
                onRemove: function(e, a) {
                    n({
                        type: "REMOVE_LIST_ITEM",
                        payload: {
                            listId: t.id,
                            itemId: e
                        }
                    }),
                    a || E(!1)
                },
                onComplete: function(e, a) {
                    n({
                        type: e ? "MARK_AS_COMPLETE" : "MARK_AS_INCOMPLETE",
                        payload: {
                            listId: t.id,
                            itemId: a
                        }
                    })
                }
            }), r && c.a.createElement(N, {
                listId: t.id,
                onFocusOut: function() {
                    return s((function() {
                        return !r
                    }
                    ))
                }
            })), c.a.createElement("div", {
                className: "list-footer"
            }, c.a.createElement("button", {
                type: "button",
                title: "Add Item",
                onClick: function() {
                    return s((function() {
                        return !r
                    }
                    ))
                },
                disabled: r || d && t.items.length > 0
            }, "Add Item"), t.items.length > 0 && c.a.createElement("button", {
                className: "rmv",
                type: "button",
                title: "Remove Items",
                onClick: function() {
                    return E((function() {
                        return !d
                    }
                    ))
                },
                disabled: r
            }, "Remove Items")))))
        }
          , v = function() {
            var e = Object(a.useContext)(p)
              , t = e.dispatch
              , n = e.showNewListForm
              , i = Object(a.useState)("")
              , l = Object(o.a)(i, 2)
              , r = l[0]
              , s = l[1];
            return c.a.createElement("form", {
                onSubmit: function(e) {
                    return function(e) {
                        e.preventDefault(),
                        t({
                            type: "ADD_NEW_LIST",
                            list: {
                                name: r,
                                pinned: !1,
                                lastUpdated: Date.now(),
                                items: []
                            }
                        }),
                        s(""),
                        n(!1)
                    }(e)
                }
            }, c.a.createElement("div", {
                className: "list new-list"
            }, c.a.createElement("div", {
                className: "list-header edit-mode"
            }, c.a.createElement("div", {
                className: "title"
            }, c.a.createElement("div", {
                className: "edit"
            }, c.a.createElement("input", {
                type: "text",
                value: r,
                autoFocus: !0,
                placeholder: "List Name",
                onBlur: function() {
                    0 === r.trim().length && n(!1)
                },
                onChange: function(e) {
                    return s(e.target.value)
                }
            }))), c.a.createElement("div", {
                className: "actions"
            }, c.a.createElement("button", {
                className: "ico-btn save",
                type: "submit",
                disabled: "" === r.trim()
            })))))
        }
          , y = function() {
            var e = Object(a.useContext)(p)
              , t = e.lists
              , n = e.newListForm;
            return c.a.createElement(c.a.Fragment, null, n && c.a.createElement(v, null), t.length ? t.map((function(e) {
                return c.a.createElement(O, {
                    list: e,
                    key: e.id
                })
            }
            )) : null)
        };
        var h = function() {
            return c.a.createElement("div", {
                className: "app"
            }, c.a.createElement(E, null, c.a.createElement(b, null), c.a.createElement("div", {
                className: "content"
            }, c.a.createElement(y, null))))
        };
        Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        l.a.render(c.a.createElement(c.a.StrictMode, null, c.a.createElement(h, null)), document.getElementById("root")),
        "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(e) {
            e.unregister()
        }
        )).catch((function(e) {
            console.error(e.message)
        }
        ))
    },
    9: function(e, t, n) {
        e.exports = n(17)
    }
}, [[9, 1, 2]]]);
//# sourceMappingURL=main.17ffcd49.chunk.js.map