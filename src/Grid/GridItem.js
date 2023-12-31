import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useGrid } from './GridContext';
import { Box } from '../Box';

const GridItemWrapper = styled.div`
  grid-column: span ${({ col }) => col};
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.tablet} {
    grid-column: span ${({ s }) => s};
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
    grid-column: span ${({ xs }) => xs};
  }
`;

export const GridItem = ({ col, xs, s, ...props }) => {
  const { gap, gridCols } = useGrid();

  return (
    <GridItemWrapper gap={gap} gridCols={gridCols} col={col} xs={xs} s={s}>
      <Box {...props} />
    </GridItemWrapper>
  );
};

GridItem.defaultProps = {
  col: undefined,
  s: undefined,
  xs: undefined,
};

GridItem.propTypes = {
  col: PropTypes.number,
  s: PropTypes.number,
  xs: PropTypes.number,
};
