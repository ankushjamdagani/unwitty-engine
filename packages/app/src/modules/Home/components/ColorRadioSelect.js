import { Box, Flex, useRadio, useRadioGroup } from '@chakra-ui/react';

function ColorRadioButton(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='3px'
        borderRadius='full'
        bg={`${props.value}.400`}
        title={props.value}
        _checked={{
          borderColor: `white`
        }}
        mr={2}
        mb={2}
        w={props.size || 4}
        h={props.size || 4}
      />
    </Box>
  );
}

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
