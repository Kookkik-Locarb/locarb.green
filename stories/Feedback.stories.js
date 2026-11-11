import * as S from './snippets.js';
import { t, icons } from './_helpers.js';
export default { title: 'Feedback/Components' };
export const FormAlert = { render: () => S.formErr.replace(/ hidden(="")?/, '').replace('></p>', '>' + t('กรุณากรอกข้อมูลให้ครบ', 'Please fill in the required fields') + '</p>'), parameters: { surface: 'black' } };
export const FormSuccess = { render: () => `<div class="cx-f" style="max-width:560px">${S.formDone.replace(/ hidden(="")?/g, '')}</div>`, parameters: { surface: 'black' } };
export const Toast = {
  name: 'Toast (ADDED)',
  args: { status: 'success' },
  argTypes: { status: { control: 'inline-radio', options: ['success', 'error', 'warning', 'info'] } },
  render: ({ status }) => {
    const txt = { success: ['ส่งข้อความแล้ว', 'Message sent', 'เราจะติดต่อกลับภายใน 1 วันทำการ', "We'll get back to you within one business day."], error: ['ส่งไม่สำเร็จ', 'Could not send', 'ลองอีกครั้ง หรืออีเมลหาเราโดยตรง', 'Try again or email us directly.'], warning: ['ข้อมูลยังไม่ครบ', 'Missing details', 'กรุณาเลือกหัวข้ออย่างน้อย 1 หัวข้อ', 'Pick at least one topic.'], info: ['เปลี่ยนภาษาแล้ว', 'Language changed', 'แสดงผลเป็นภาษาไทย', 'Now showing English.'] }[status];
    return `<div class="lc-toast ${status}" role="${status === 'error' ? 'alert' : 'status'}"><div><b>${t(txt[0], txt[1])}</b><p>${t(txt[2], txt[3])}</p></div><button class="lc-x" aria-label="Close">${icons.close}</button></div>`;
  },
};
export const Modal = {
  name: 'Modal (ADDED)',
  render: () => `<div class="lc-scrim"><div class="lc-modal" role="dialog" aria-modal="true" aria-labelledby="m-t"><button class="lc-close" aria-label="Close">${icons.close}</button><h3 id="m-t">${t('ดาวน์โหลดรายงาน', 'Download the report')}</h3><p>${t('กรอกอีเมลเพื่อรับไฟล์ PDF', 'Enter your email and we will send you the PDF.')}</p><div class="lc-actions"><a class="btn b-g" href="#">${t('ส่งให้ฉัน', 'Send it to me')}<span class="ar"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 8h12M9 3l5 5-5 5"/></svg></span></a><a class="xh-ghost" href="#">${t('ยกเลิก', 'Cancel')}</a></div></div></div>`,
  parameters: { full: true },
};
export const Spinner = { name: 'Spinner (ADDED)', render: () => `<div class="sb-row"><span class="lc-spinner s" role="status" aria-label="Loading"></span><span class="lc-spinner" role="status" aria-label="Loading"></span><span class="lc-spinner l" role="status" aria-label="Loading"></span></div>` };
export const Tooltip = { render: () => `<span class="lc-tooltip" role="tooltip">${t('การนิคมอุตสาหกรรมแห่งประเทศไทย (กนอ.)', 'Industrial Estate Authority of Thailand (IEAT)')}</span>` };
export const ProgressBar = { render: () => `<div class="sol9-bar" style="max-width:480px;height:2px;background:var(--c-l)"><i style="width:40%"></i></div>`, parameters: { surface: 'black' } };
