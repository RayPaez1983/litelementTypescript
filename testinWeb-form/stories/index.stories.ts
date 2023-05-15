import { html, TemplateResult } from 'lit';
import '../src/testinWeb-form.ts';

export default {
  title: 'TestinWebForm',
  component: 'testinweb-form',
  argTypes: {
    description: {
      control: 'description',
      description: 'Texto inferior del input',
    },
    descriptionType: {
      control: 'descriptionType',
      description: 'Cambiar el color de la descripción',
    },
    label: { control: 'label', description: 'Texto superior del input' },
    enviroment: {
      control: 'enviroment',
      description: 'Cambiar entre tema dark y light',
    },
    placeholder: {
      control: 'placeholder',
      description: 'Texto dentro del input',
    },
    withDescription: {
      control: 'withDescription',
      description: 'Mostrar u ocultar la descripción',
    },
    withLabel: {
      control: 'withLabel',
      description: 'Mostrar u ocultar el texto superior',
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  description?: string;
  descriptionType?: string;
  label?: string;
  enviroment?: string;
  placeholder?: string;
  withDescription?: boolean;
  withLabel?: boolean;
}

const Template: Story<ArgTypes> = ({
  description = 'Default description',
  descriptionType = 'info',
  label = 'Default Text',
  enviroment = 'light',
  placeholder = 'Placeholder',
  withDescription = false,
  withLabel = false,
}: ArgTypes) => html`
  <testinweb-form
    description="${description}"
    description-type="${descriptionType}"
    label="${label}"
    enviroment="${enviroment}"
    placeholder="${placeholder}"
    ?with-description="${withDescription}"
    ?with-label="${withLabel}"
  >
  </testinweb-form>
`;

export const Regular = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  withLabel: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  withDescription: true,
};

export const WarningDescription = Template.bind({});
WarningDescription.args = {
  withDescription: true,
  descriptionType: 'warning',
};

export const WithLabelAndDescription = Template.bind({});
WithLabelAndDescription.args = {
  withDescription: true,
  withLabel: true,
};

export const darkenviroment = Template.bind({});
darkenviroment.args = {
  withDescription: true,
  withLabel: true,
  enviroment: 'dark',
};

export const CustomText = Template.bind({});
CustomText.args = {
  withDescription: true,
  withLabel: true,
  description: 'Custom description',
  label: 'Name',
  placeholder: 'Write yout Name',
};
