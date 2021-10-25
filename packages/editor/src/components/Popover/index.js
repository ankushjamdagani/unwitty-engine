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
        background='bgPrimary'
        borderColor='borderPrimary'
        {...contentProps}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
};

export default PopoverWrapper;
