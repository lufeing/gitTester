function h (tag, data = null, children = null) {
  return {
    _isVNode: true,
    flags: VNodeFlags.ELEMENT_HTML,
    tag: 'h1',
    data: null,
    children: null,
    childrenFlags: ChildrenFlags.NO_CHILDREN,
    el: null
  }
}


const functionalComponentVNode = {
  _isVNode: true,
  flags: VNodeFlags.COMPONENT_FUNCTIONAL,
  tag: MyFunctionalComponent,
  data: null,
  children: {
    _isVNode: true,
    flags: 1,
    tag: 'div',
    data: null,
    children: null,
    childFlags: 1,
    el: null
  },
  childFlags: ChildrenFlags.SINGLE_VNOD,
  el: null,
}