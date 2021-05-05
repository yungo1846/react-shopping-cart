import NumberInput, { Props } from './NumberInput';

export default {
  title: 'Components/Commons/NumberInput',
  component: NumberInput,
  argTypes: {},
};

const Template = (args: Props) => <NumberInput {...args} />;

export const Default = Template.bind({});

Default.args = {
  initValue: 1,
  maxLength: 2,
};