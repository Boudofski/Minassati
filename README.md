# منصتي Next.js

منصتي منصة تعليمية عربية للأطفال لتعلّم أساسيات الإسلام بطريقة مبسطة وآمنة وجميلة.

## التقنية

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- RTL Arabic-first layout
- SEO metadata, sitemap, robots, JSON-LD
- Vercel-ready

## التشغيل المحلي

```bash
npm install
npm run dev
```

ثم افتح:

```text
http://localhost:3000
```

## البناء

```bash
npm run build
npm run start
```

## النشر على Vercel

1. ارفع المشروع إلى GitHub.
2. اربط المستودع في Vercel.
3. استخدم الإعدادات الافتراضية لـ Next.js.
4. أضف الدومين `minassati.ma`.
5. تحقق من الصفحات:
   - `/`
   - `/learn`
   - `/qa`
   - `/quran`
   - `/audio`
   - `/about`
   - `/contact`
   - `/privacy`
   - `/sitemap.xml`
   - `/robots.txt`
   - `/ads.txt`

## المحتوى

البيانات التجريبية موجودة في:

- `src/data/categories.ts`
- `src/data/lessons.ts`
- `src/data/questions.ts`
- `src/data/quran.ts`

يمكن لاحقًا استبدال هذه الملفات بمصدر CMS أو قاعدة بيانات أو APIs للقرآن والصوت.
