import { Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react';

const PopoverWrapper = ({
  trigger,
  content,
  closeOnBlur = true,
  gutter = 8,
  contentProps,
  ...restProps
}) => {
  return (
    <Popover gutter={gutter} closeOnBlur={closeOnBlur} {...restProps}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent
        background='gray.900'
        borderColor='gray.700'
        {...contentProps}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};

export default PopoverWrapper;
