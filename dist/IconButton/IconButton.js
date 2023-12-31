import { jsxs as m, jsx as a } from "react/jsx-runtime";
import * as e from "react";
import s from "styled-components";
import { BaseButton as g } from "../BaseButton/BaseButton.js";
import { Flex as v } from "../Flex/Flex.js";
import { Tooltip as R } from "../Tooltip/Tooltip.js";
import { VisuallyHidden as k } from "../VisuallyHidden/VisuallyHidden.js";
const W = e.forwardRef(({
  label: r,
  background: i,
  borderWidth: c,
  noBorder: d = !1,
  children: u,
  icon: f,
  disabled: o = !1,
  onClick: l,
  "aria-label": p,
  ...h
}, $) => {
  const t = m(n, {
    "aria-disabled": o,
    background: o ? "neutral150" : i,
    borderWidth: d ? 0 : c,
    justifyContent: "center",
    height: `${2}rem`,
    width: `${2}rem`,
    ...h,
    ref: $,
    onClick: (b) => {
      !o && l && l(b);
    },
    children: [a(k, {
      as: "span",
      children: r ?? p
    }), e.cloneElement(f || u, {
      "aria-hidden": !0,
      focusable: !1
    })]
  });
  return r ? a(R, {
    label: r,
    children: t
  }) : t;
}), n = s(g)`
  svg {
    > g,
    path {
      fill: ${({
  theme: r
}) => r.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({
  theme: r
}) => r.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({
  theme: r
}) => r.colors.neutral400};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({
  theme: r
}) => r.colors.neutral600};
      }
    }
  }
`, E = s(v)`
  & span:first-child button {
    border-left: 1px solid ${({
  theme: r
}) => r.colors.neutral200};
    border-radius: ${({
  theme: r
}) => `${r.borderRadius} 0 0 ${r.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({
  theme: r
}) => `0 ${r.borderRadius} ${r.borderRadius} 0`};
  }

  & ${n} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({
  theme: r
}) => r.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({
  theme: r
}) => r.colors.neutral100};

      svg {
        path {
          fill: ${({
  theme: r
}) => r.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({
  theme: r
}) => r.colors.neutral150};
      svg {
        path {
          fill: ${({
  theme: r
}) => r.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({
  theme: r
}) => r.colors.neutral600};
        }
      }
    }
  }
`;
export {
  W as IconButton,
  E as IconButtonGroup
};
