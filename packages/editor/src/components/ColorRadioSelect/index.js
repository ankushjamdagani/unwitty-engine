import { Flex, useRadioGroup } from '@chakra-ui/react';

import ColorRadioButton from './ColorRadioButton';

function ColorRadioSelect({ options, radioProps, ...rest }) {
  const { getRootProps, getRadioProps } = useRadioGroup(rest);
  const group = getRootProps();
  return (
    <Flex {...group}>
      <Flex flexWrap='wrap'>
        {options.map(c => {
          const radio = getRadioProps({ value: c });
          return <ColorRadioButton key={c} {...radio} {...radioProps} />;
        })}
      </Flex>
    </Flex>
  );
}

export default ColorRadioSelect;
