import { html } from 'lit';
import { fixture, expect, assert } from '@open-wc/testing';
import { TestinWebForm } from '../src/TestinWebForm.js';
import '../src/testinWeb-form.js';

let el: TestinWebForm;
const cleanComponent = async () => {
  el = await fixture<TestinWebForm>(html`<testinWeb-form></testinWeb-form>`);
  await el.updateComplete;
};

describe('TestinWebForm', () => {
  describe('Default values ', () => {
    cleanComponent();
    it('props values', () => {
      expect(el.enviroment).to.equal('light');
      assert.typeOf(el.enviroment, 'String');
      expect(el.description).to.equal('Default description');
      assert.typeOf(el.description, 'String');
      expect(el.descriptionType).to.equal('info');
      assert.typeOf(el.descriptionType, 'String');
      expect(el.label).to.equal('Default label');
      assert.typeOf(el.label, 'String');
      expect(el.placeholder).to.equal('Default placeholder');
      assert.typeOf(el.placeholder, 'String');
      expect(el.withDescription).to.equal(false);
      assert.typeOf(el.withDescription, 'Boolean');
      expect(el.withLabel).to.equal(false);
      assert.typeOf(el.withLabel, 'Boolean');
    });
  });
  describe('view the component in the DOM', () => {
    it('label is not displayed', () => {
      const text = el.shadowRoot?.querySelector('#label')?.textContent;
      expect(text).to.equal(undefined);
    });
    it('description is not displayed', () => {
      const description =
        el.shadowRoot?.querySelector('#description')?.textContent;
      expect(description).to.equal(undefined);
    });
    it('view input', () => {
      const input = el.shadowRoot?.querySelector('#input');
      expect(input?.getAttribute('id')).to.equal('input');
    });
  });
  describe('change props', () => {
    it('label is in the DOM', async () => {
      el.label = 'CUSTOM TEXT';
      el.withLabel = true;
      await el.updateComplete;
      const text = el.shadowRoot?.querySelector('#label')?.textContent;
      expect(text).to.equal('CUSTOM TEXT');
    });
    it('label is in the DOM', async () => {
      el.description = 'CUSTOM TEXT';
      el.withDescription = true;
      el.descriptionType = 'warning';
      await el.updateComplete;
      const text = el.shadowRoot?.querySelector('#description')?.textContent;
      const descriptionType = el.shadowRoot
        ?.querySelector('#description')
        ?.getAttribute('class');
      expect(text).to.equal('CUSTOM TEXT');
      expect(descriptionType).to.equal('warning');
    });
    it('label is in the DOM', async () => {
      el.placeholder = 'CUSTOM TEXT';
      await el.updateComplete;
      const input = el.shadowRoot?.querySelector('#input');
      expect(input?.getAttribute('placeholder')).to.equal('CUSTOM TEXT');
    });
  });
});
