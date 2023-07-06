import e from "react";
class o extends e.Component {
  render() {
    const { children: r, ...t } = this.props;
    return e.cloneElement(r, t);
  }
}
export {
  o as default
};
