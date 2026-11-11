import * as S from './snippets.js';
import { t } from './_helpers.js';
export default { title: 'Input/Form controls', parameters: { surface: 'black' } };

const field = ({ labelTh, labelEn, value, placeholder, state, required, help }) =>
  `<div class="cx-f" style="max-width:420px"><div class="fld${state === 'Error' ? ' is-error' : ''}${state === 'Disabled' ? ' is-disabled' : ''}"><label for="f1">${t(labelTh, labelEn)}${required ? ' <b>*</b>' : ''}</label><input id="f1" value="${value}" placeholder="${placeholder}"${state === 'Disabled' ? ' disabled' : ''}>${state === 'Error' ? `<span class="lc-help">${help}</span>` : ''}</div></div>`;
export const TextField = {
  render: field,
  args: { labelTh: 'อีเมลที่ทำงาน', labelEn: 'Work email', value: '', placeholder: 'name@company.com', state: 'Default', required: true, help: 'Please enter a valid email' },
  argTypes: { state: { control: 'inline-radio', options: ['Default', 'Error', 'Disabled'] } },
  parameters: { docs: { description: { story: 'Underline field from the contact form (`.cx-f .fld`). Focus = thicker underline.' } } },
};
export const Textarea = { render: () => `<div class="cx-f" style="max-width:640px"><div class="fld full"><label for="ta">${t('ข้อความ', 'Message')}</label><textarea id="ta" placeholder="Tell us about your project"></textarea></div></div>` };
export const Select = {
  name: 'Select (ADDED)',
  render: () => `<div class="cx-f" style="max-width:420px"><div class="fld lc-select"><label for="sel">${t('หัวข้อ', 'Topic')} <b>*</b></label><select id="sel"><option>Climate defense</option><option>Reporting</option><option>Capacity building</option><option>Business solutions</option></select></div></div>`,
};
export const Checkbox = { render: () => S.agree };
export const Radio = {
  name: 'Radio (ADDED)',
  render: () => `<div class="sb-col">${[['บริษัทเอกชน', 'Private company', true], ['หน่วยงานรัฐ', 'Public agency', false], ['อื่น ๆ', 'Other', false, true]].map(([th, en, c, d]) => `<label class="lc-radio"><input type="radio" name="org"${c ? ' checked' : ''}${d ? ' disabled' : ''}><span>${t(th, en)}</span></label>`).join('')}</div>`,
};
export const SearchBar = { render: () => S.search.replace(/hidden(="")?/g, '').replace('class="srch"', 'class="srch open" style="position:relative;inset:auto;display:block"'), parameters: { full: true } };
export const ContactForm = { render: () => `<div style="max-width:760px">${S.form}</div>` };
