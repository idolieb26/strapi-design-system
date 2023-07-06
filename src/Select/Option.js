import React, { useRef } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import checkmarkIcon from '../BaseCheckbox/assets/checkmark.svg';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { Typography } from '../Typography';

const CheckMark = styled(Box)`
  border: 1px solid
    ${({ theme, selected, indeterminate }) =>
      selected || indeterminate ? theme.colors.primary600 : theme.colors.neutral300};
  height: 18px;
  width: 18px;
  background-color: ${({ theme, selected, indeterminate }) =>
    selected || indeterminate ? theme.colors.primary600 : theme.colors.neutral0};

  ${({ theme, indeterminate }) =>
    indeterminate &&
    `&::after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${theme.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

  `}

  ${({ selected }) =>
    selected &&
    `  
    &::after {
      content: '';
      background: url(${checkmarkIcon}) no-repeat no-repeat center center;
      width: 100%;
      height: 100%;
      position: absolute;
    }

  `}
`;

const OptionBox = styled(Box)`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  &.is-focused {
    background: ${({ theme }) => theme.colors.primary100};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary100};
  }
`;

export const Option = ({ selected, indeterminate, children, value, multi, isChild, startIcon, ...props }) => {
  const optionRef = useRef(null);

  return (
    <OptionBox
      as="li"
      hasRadius
      paddingLeft={isChild ? 7 : 4}
      paddingRight={4}
      paddingTop={2}
      paddingBottom={2}
      ref={optionRef}
      role="option"
      aria-selected={selected}
      background="neutral0"
      data-strapi-value={value}
      {...props}
    >
      <Flex>
        {startIcon && (
          <Box paddingRight={2} aria-hidden>
            {startIcon}
          </Box>
        )}

        {multi && (
          <Box paddingRight={2} aria-hidden>
            <CheckMark
              hasRadius
              overflow="hidden"
              position="relative"
              indeterminate={indeterminate}
              selected={selected}
              zIndex={1}
            />
          </Box>
        )}
        <Typography textColor={selected ? 'primary600' : 'neutral800'} fontWeight={selected ? 'bold' : null}>
          {children}
        </Typography>
      </Flex>
    </OptionBox>
  );
};

Option.defaultProps = {
  isChild: false,
  multi: false,
  selected: false,
  startIcon: undefined,
  indeterminate: false,
};

Option.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  indeterminate: PropTypes.bool,
  isChild: PropTypes.bool,
  multi: PropTypes.bool,
  selected: PropTypes.bool,
  startIcon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Option.displayName = 'Option';
