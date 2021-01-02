import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { FlexBox, Text } from '__COMPONENTS/atoms';

const Wrapper = styled(FlexBox)`
  background: rgba(0, 0, 0, 0.1);
`;

const FPSDebugger = ({ fps }) => (
  <Wrapper zIndex='111' p={4}>
    <Text color='text' fontFamily='mono'>
      FPS :: {fps}
    </Text>
  </Wrapper>
);

export default connect((state) => ({ fps: state.timing.fps }))(FPSDebugger);
