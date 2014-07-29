# D3 Notes

selections and groupings

A selection is an array of elements pulled from the current document. D3 uses CSS3 to select elements. For example, you can select by tag ("div"), class (".awesome"), unique identifier ("#foo"), attribute ("[color=red]"), or containment ("parent child"). Selectors can also be intersected (".this.that" for logical AND) or unioned (".this, .that" for logical OR).



my explanation:
selection.text(), selection.attr() and etc. all take either literal values or a function as an argument. if it is a function, it will be called for each element (group?) in the selection AND the data bound to that element will be passed as the first argument to the function.

The "passing of the function" is needed to get access to the data bound to the element.

Examples:
.text("someString")
…or the result of a function:

If you want to set several style properties at once, use an object literal like so: 
selection.style({'stroke': 'black', 'stroke-width': 2})

.text(someFunction())
…or an anonymous function itself can be the argument, such as when you write:

.text(function(d) {
    return d;
})


from https://github.com/mbostock/d3/wiki/Selections#data
# selection.attr(name[, value])

If value is specified, sets the attribute with the specified name to the specified value on all selected elements. If value is a constant, then all elements are given the same attribute value; otherwise, if value is a function, then the function is evaluated for each selected element (in order), being passed the current datum d and the current index i, with the this context as the current DOM element. The function's return value is then used to set each element's attribute. A null value will remove the specified attribute.

summary:
- operators act on selections
- operators that are used to set the content of elements (e.g. attr()) return the current selection so that they are chain-able!
- operators take "name" and "value". "value" could be a function.
- function is called for each element in the selection
- datum d and its index i are passed on to the function
- the element that the function is being called on is accesible via 'this' inside the function.
- the return value of the "value function" will be used to set the value in the operator.


d3.select(node)

Selects the specified node. This is useful if you already have a reference to a node, such as d3.select(this) within an event listener, or a global such as document.body.



