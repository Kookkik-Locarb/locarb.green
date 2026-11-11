# LO-CARB — locarb.green

Website (static HTML, TH / EN) + design tokens + Storybook component library — all from the LO-CARB Figma design system.
เว็บไซต์ (HTML ล้วน ไทย/อังกฤษ) + Design Tokens + Storybook รวมคอมโพเนนต์ — มาจาก Design System ใน Figma

## โครงสร้างโปรเจกต์ / Project structure

```
lo-carb-website/
├── website/                     ← เว็บไซต์ (อัปขึ้นโฮสต์ได้ทันที ไม่ต้อง build)
│   ├── index.html               หน้าแรก
│   ├── About-*.html             เกี่ยวกับเรา
│   ├── Solution-*.html          โซลูชัน
│   ├── Blog*.html, Portfolio-Detail.html
│   ├── Contact.html
│   ├── css/
│   │   ├── base.css             สไตล์หลัก ใช้ทุกหน้า
│   │   ├── inner.css            สไตล์เพิ่มสำหรับหน้าย่อย (โหลดหลัง base.css)
│   │   └── ds-overrides.css     ปรับตาม Design System ล่าสุด
│   ├── js/                      สคริปต์ (site.js ใช้ทุกหน้า, home-*.js เฉพาะหน้าแรก, contact-form.js)
│   └── assets/
│       ├── fonts/               ฟอนต์ทั้งหมด + fonts.css (@font-face)
│       ├── images/              รูปภาพ (.webp/.jpg/.png) — โลโก้ = logo-locarb.webp
│       └── clients/             โลโก้ลูกค้า (.svg)
├── design-tokens/
│   ├── tokens.css               CSS variables: Primitive → Semantic → Component
│   └── tokens.json              รูปแบบ DTCG (Style Dictionary / Tokens Studio)
├── stories/                     ← Storybook stories
│   ├── *.stories.js             Foundations, Controls, Input, Navigation, Content, Feedback, Sections, Pages
│   ├── snippets.js              markup จริงที่ดึงมาจากหน้าเว็บ
│   └── styles/
│       ├── added-components.css คอมโพเนนต์ที่มีใน Design System แต่ยังไม่มีบนเว็บ (Select, Radio, Toast, Modal, Spinner, Badge, Sidebar)
│       └── storybook.css        สไตล์สำหรับหน้า Storybook เท่านั้น
├── storybook-config/            ตั้งค่า Storybook (toolbar: Surface / Lang / Viewport)
├── .github/workflows/deploy.yml Deploy เว็บ + Storybook ขึ้น GitHub Pages อัตโนมัติ
├── vercel.json                  ตั้งค่า Deploy บน Vercel (เว็บ + Storybook)
└── package.json
```

## เริ่มใช้งาน / Getting started

ต้องมี Node.js 18+ / Requires Node.js 18+

```bash
npm install
npm run storybook        # เปิด Storybook ที่ http://localhost:6006
npm run website          # เปิดเว็บที่ http://localhost:3000
npm run build            # build เว็บ + Storybook รวมไว้ใน dist/ (ใช้ตอน deploy)
```

## Storybook

- แถบด้านบน: **Surface** (Eggwhite / Black / Green) · **Lang** (ไทย / English) · **Viewport** (Desktop 1440 / Tablet 768 / Mobile 375)
- แผง **Controls** ด้านล่างใช้ปรับข้อความ / variant / state ของคอมโพเนนต์ได้สด ๆ
- คอมโพเนนต์ที่มีป้าย **(ADDED)** = มีใน Design System แต่ยังไม่ได้ใช้บนเว็บ
- เมื่อแก้หน้าเว็บ ให้อัปเดต markup ใน `stories/snippets.js` ให้ตรงกัน

### เผยแพร่ Storybook / Publish

- **GitHub Pages (อัตโนมัติ):** push ขึ้น `main` แล้วตั้ง Settings → Pages → Source = *GitHub Actions* → เว็บอยู่ที่ `/` และ Storybook ที่ `/storybook/`
- **Chromatic (แบบในตัวอย่าง Grommet):** `npx chromatic --project-token=<token>` (สมัครฟรีที่ chromatic.com)
- **Vercel:** ตั้งค่าไว้แล้วใน `vercel.json` — import repo แล้วกด Deploy ได้เลย (เว็บอยู่ที่ `/` และ Storybook ที่ `/storybook/`) ไม่ต้องตั้ง Framework / Build command เอง
- **Netlify:** Build command `npm run build-storybook`, Publish directory `storybook-static`

## Deploy เว็บอย่างเดียว / Website only

โฟลเดอร์ `website/` เป็นเว็บนิ่งพร้อมใช้ — อัปขึ้นโฮสต์ใดก็ได้ (Root directory = `website`, ไม่มี build command)

## Design tokens

| Tier | ตัวอย่าง |
|---|---|
| Primitive | `--g` #0EA552 · `--k` #000 · `--c` #F3F0DF · `--green-text` #00A158 · `--white` |
| Semantic | `--color-text-primary`, `--color-primary-default`, `--color-primary-on` (ขาว) |
| Component | `--button-primary-bg`, `--button-primary-text`, `--input-border-focus` … |

ใส่ `data-surface="black"` / `.on-k` หรือ `data-surface="green"` / `.on-g` ที่ section แล้วสีข้างในเปลี่ยนตาม · Breakpoints: Tablet ≤ 1100px, Mobile ≤ 680px

## Changelog (Nov 2026)

- ปุ่มสีเขียว: ตัวหนังสือและไอคอนเป็นสีขาว
- What We Do: คำบริการเป็นตัวหนังสือสีเขียว ไม่ใช้ pill
- Our Clients: hover โลโก้ลูกค้า — โลโก้เป็นสีและเลื่อนขึ้น ชื่อองค์กรแสดงด้านล่างโดยไม่บังโลโก้
- Tagline "We put the world on a carbon diet.": ไม่ทับซ้อน และเรียงคอลัมน์เดียวบน Tablet / Mobile
- จัดโครงสร้างไฟล์ใหม่: แยก CSS / JS / ฟอนต์ / รูปภาพ ออกจาก HTML (หน้าตาเว็บเหมือนเดิมทุกพิกเซล)

## ⚠️ ฟอนต์ / Font licensing

Termina และ Anakotmai เป็นฟอนต์มีลิขสิทธิ์ — ตรวจสอบสิทธิ์ webfont ก่อน push ขึ้น repository สาธารณะ (แนะนำตั้ง repo เป็น private)
`assets/fonts/fonts-extended.css` มีน้ำหนักเพิ่มเติม (Anakotmai Light, STIX Regular/Medium/Bold/Italic) ที่ยังไม่ได้ใช้บนเว็บ
