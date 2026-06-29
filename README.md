Title: NEXTJS-RESUME

Summary:
This project is a personal resume website built with Next.js and Tailwind CSS. 

How To Run Locally
1. In terminal, type 
- npx create-next-app@latest nextjs-resume
- cd nextjs-resume
- npm run dev
2. When prompted, type "Y" on Mac to confirm Tailwind CSS
3. Open the local host: "http://localhost:3000" to access the default page
4. Open the files 
- SRC
- App
- Page.js

MVP Items
1. Resume Content in src/app/page.js
- All resume sections are written as JSX inside src/app/page.js.
- Content must be your real information — no Lorem Ipsum or placeholder text.
- Use semantic HTML elements (<header>, <main>, <section>, <footer>, etc.).

2. Style with Tailwind CSS
- All styling must be done with Tailwind CSS utility classes applied via className.
- Do not write custom CSS rules in globals.css — use Tailwind classes instead.
- The page must be visually styled — plain unstyled HTML is not acceptable.
- Layout should be clean and readable at a standard desktop viewport.

3. No Errors
- The dev server starts with npm run dev and the page loads without errors.
- No errors in the browser console.

Known Issues/Limitations
- Resume content is presented as a single page. There is no additional navigation needed. 
- Cannot use style.css language in global. css. You must use the style classes. 