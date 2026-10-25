# Umodzi Impact Hub Website
## Website Implementation Guide — Cursor Agent

**Project:** Umodzi Impact Hub Website  
**Purpose:** Implement a professional, responsive marketing website  
**Framework:** Next.js, TypeScript and Tailwind CSS  
**Initial release:** Static website with contact and enquiry functionality  
**Status:** Implementation specification

---

## 1. Project objective

Implement a complete, professional website for Umodzi Impact Hub, a Malawi-based team-building and experiential learning provider.

The website must communicate the organisation's purpose, showcase its services and team-building packages, present approved client experiences, and encourage potential customers to make enquiries.

The final website should be visually polished, easy to navigate, responsive across devices, accessible, performant and maintainable.

Before implementing anything, inspect the existing project and read the `README.md`, `WEBSITE_IMPLEMENTATION_GUIDE.md`, and any available requirements-analysis document. Follow the existing project structure and preserve working code.

Do not recreate the project if the setup is already complete.

## 2. Business information

Use the following information as the initial content foundation.

### Business identity

**Name:** Umodzi Impact Hub — provisional until confirmed.

**Business description:** A team-building and experiential learning provider serving organisations, companies, NGOs, schools, youth groups, faith communities, leadership teams and other groups.

**Approach:** Combine connection, collaboration, fun, reflection and purposeful learning to help teams improve communication, trust, leadership and teamwork.

**Mission:** Deliver customised team-building experiences that strengthen collaboration, leadership, trust and organisational culture.

**Vision:** A Malawi where strong, connected and collaborative teams drive positive change in organisations and communities.

Core Values 

1. Integrity 

We practice what we preach by acting consistently with our words and commitments. 

2. Intentionality 

We approach every engagement with purpose and ensure our work is aligned with our mission and clients' needs. 

3. Open-mindedness 

We value diverse perspectives and design team-building experiences that reflect and strengthen our clients' values. 

4. Feedback Literacy 

We embrace feedback as an opportunity for learning, growth, and continuous improvement as individuals and as a team. 

5. Good Vibes 

We believe people learn best when they enjoy the experience. We foster an environment that is fun, inclusive, and full of positive energy.  

Progressiveness 

We remain innovative, adaptable, and committed to continuously improving our services and ways of working. 

Accountability 

We take ownership of our responsibilities, honour our commitments, and hold ourselves and each other accountable. 

Do not invent a founding year, physical address, contact information, brand slogan, awards or other unsupported facts.

## 3. Website architecture

Implement the following pages, adapting routing conventions to the existing Next.js App Router project.

### Home — `/`

Purpose: Introduce the business and guide visitors towards services and enquiries.

Recommended sections:
1. Header and primary navigation.
2. Hero section with a compelling headline, supporting description, imagery and primary call to action.
3. Short introduction to Umodzi Impact Hub.
4. Overview of the main services.
5. Team-building package previews.
6. Explanation of the Umodzi approach and values.
7. Featured client experience, only if publication permission is confirmed.
8. Verified testimonials or outcomes, if approved content is available.
9. Final enquiry call to action.
10. Footer with approved contact information and social links.

### About — `/about`

Include the organisation's introduction, mission, vision, values and approach to team building.

Use clear, human-centred language. Do not create fictitious biographies or staff profiles.

### Services — `/services`

Present the following proposed services:

1. Team Building and Facilitation.
2. Team Retreat Planning and Coordination.
3. Venue Sourcing and Booking.
4. Transport Coordination.
5. Catering and Refreshments.
6. Event Branding and Setup.
7. Team T-Shirts and Merchandise.
8. Photography and Event Documentation.
9. Team Dynamics Assessment.
10. Strategy and Action Planning.
11. Leadership and Executive Retreats.
12. Customised Team Experiences.

The final service list and the status of Strategy and Action Planning must be confirmed. Keep the service content centralised so it can be updated easily.

### Packages — `/packages`

Present the four proposed experiences:

**Connect**
- Duration: approximately 2–3 hours.
- Activities include icebreakers, communication activities, team challenges and guided reflection.
- Indicative price: MWK 10,000 per person.
- Minimum booking: MWK 200,000, up to 20 participants.

**Collaborate**
- Duration: approximately 4–5 hours.
- Includes Connect activities plus problem-solving, leadership, conflict resolution, goal alignment, facilitation and certificates.
- Indicative price: MWK 30,000 per person.
- Minimum booking: MWK 600,000.

**Transform**
- Duration: approximately 8 hours.
- Includes customised leadership simulations, team challenges, strategy workshops, action planning, selected photography, awards and a final report.
- Indicative price: MWK 50,000 per person.
- Minimum booking: MWK 1,000,000.

**Executive Leadership Forum**
- Duration: customised 1–2 day retreat.
- May include leadership coaches or speakers, executive strategy sessions, team dynamics assessment, facilitation and action planning.
- Starting price: MWK 2,500,000.
- Accommodation is excluded from the supplied package information.

**Pricing requirement:** These figures are supplied as initial business information and must not automatically be treated as final, publicly approved prices. Keep them in a central data file and mark them as requiring approval. Do not publish unconfirmed pricing until approval is obtained.

Every package should have a clear description, duration, key inclusions and enquiry call to action. Do not promise services that have not been confirmed.

### Experiences — `/experiences`

Prepare a portfolio page for approved client projects.

Potential case study:

**Lessons in Conservation Team-Building Experience**
- Client: Lessons in Conservation.
- Date: 28–30 August 2026.
- Location: Liwonde National Park, Malawi.
- Participants: 17 members.
- Programme themes: communication, collaboration, problem-solving, strengths-based teamwork, conflict resolution, reflection and alignment.
- Reported feedback: 12 respondents rated the overall experience Excellent or Good, and 11 indicated they would recommend Umodzi.

Only publish the client name, statistics, photographs and other case-study details after obtaining the required approval and verifying the information. Do not invent testimonials.

### Gallery — `/gallery`

Create a responsive image gallery using approved photographs and videos only.

Requirements:
- Responsive image layout.
- Descriptive alternative text.
- Appropriate image sizing and optimisation.
- Sensible loading behaviour.
- Graceful handling of missing images.
- No fabricated event photographs presented as actual Umodzi projects.

If approved assets are unavailable, create a clean placeholder state for development and testing.

### Contact — `/contact`

Provide a clear way for visitors to enquire about services.

Prepare the layout for:
- Phone contact.
- WhatsApp contact.
- Email contact.
- Social media links.
- Optional physical address or map, once supplied.
- An enquiry form only when a working submission mechanism has been agreed and configured.

Do not invent contact details. Do not present a form as operational if it cannot deliver enquiries. If no backend or form service is configured, use working telephone, email and WhatsApp links where valid details are available.

## 4. Shared components

Implement reusable components rather than duplicating code.

Expected components include:
- Site header.
- Desktop navigation.
- Mobile navigation.
- Footer.
- Primary and secondary buttons.
- Page headings and section headings.
- Service cards.
- Package cards.
- Call-to-action sections.
- Image or gallery components.
- Breadcrumbs where useful.
- Consistent content containers.

Use the component structure already established during project setup unless a change provides a clear benefit.

## 5. Design direction

Create a contemporary, premium and welcoming visual experience appropriate for corporate clients and community groups.

Priorities:
- Strong typography and clear visual hierarchy.
- Spacious layouts with consistent alignment.
- High-quality, relevant photography.
- Consistent spacing and content widths.
- Clear calls to action.
- Well-designed service and package cards.
- Subtle, purposeful transitions.
- Responsive layouts from mobile to desktop.
- Accessible contrast and visible keyboard focus.
- Consistent interaction patterns.

Do not choose a permanent brand palette or logo that the client has not supplied or approved. Use a temporary, easily replaceable design system and centralise the colour tokens.

Do not copy another organisation's website. Reference sites may inform general layout ideas, but the implementation must have its own visual identity.

Avoid excessive animation, unnecessary gradients, generic AI-style marketing copy, emoji-heavy layouts and decorative elements that reduce usability.

## 6. Technical requirements

- Use TypeScript with strict type checking.
- Use semantic HTML.
- Use reusable React components.
- Use Tailwind CSS consistently with the installed version.
- Follow Next.js App Router conventions.
- Use framework-supported image optimisation appropriate to the deployment target.
- Keep content and repeated business data separate from presentation.
- Create meaningful page titles and descriptions.
- Include canonical URLs only when the production domain is confirmed.
- Provide a custom not-found page.
- Ensure navigation and buttons work.
- Avoid unnecessary client components.
- Do not add a database, authentication system, payment processing or booking engine.
- Do not expose secrets or API keys in client-side code.
- Do not add dependencies without a clear need.

If static export is configured, check that each feature is compatible with it. Document any feature that requires a server or external service.

## 7. Content management within the codebase

Create centralised data files for repeated content such as:

- Navigation items.
- Services.
- Packages.
- Business values.
- Approved case studies.
- Contact information.
- Social links.

Use appropriate TypeScript types.

Avoid duplicating the same business information across multiple page components.

Clearly identify unconfirmed content in code or documentation. Do not display internal development notes to visitors.

## 8. SEO, accessibility and performance

Implement:
- Unique page titles and meta descriptions.
- Appropriate heading hierarchy.
- Descriptive link labels.
- Alternative text for meaningful images.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Accessible form labels if a form is implemented.
- Responsive image sizes and appropriate compression.
- Lazy loading for suitable below-the-fold images.
- A sensible 404 experience.
- Appropriate favicon and social-sharing metadata when approved assets are available.

Do not add fake ratings, structured business data containing invented facts, or unsupported SEO claims.

## 9. Implementation sequence

Work through the following phases in order.

### Phase 1 — Inspect and plan
- Inspect the existing codebase.
- Check the project setup and scripts.
- Identify missing dependencies or configuration.
- Report any conflicts before making major structural changes.

### Phase 2 — Design foundation and shared layout
- Establish temporary design tokens.
- Implement global styles.
- Build the header and navigation.
- Implement responsive mobile navigation.
- Build the footer and reusable UI components.
- Test navigation at common screen sizes.

### Phase 3 — Homepage
- Implement the homepage sections.
- Use centralised content.
- Add clear calls to action.
- Use approved assets or clearly controlled placeholders.
- Check the layout on mobile, tablet and desktop.

### Phase 4 — Inner pages
- Implement About, Services, Packages, Experiences, Gallery and Contact.
- Reuse the shared components.
- Verify all internal links.
- Keep uncertain information configurable.

### Phase 5 — Functionality and content
- Connect working phone, email and WhatsApp links where approved details exist.
- Configure an enquiry form only if the submission method is available and tested.
- Add approved content and media.
- Remove unnecessary placeholders from public-facing pages.

### Phase 6 — Quality assurance
- Run linting.
- Run TypeScript checks.
- Run the production build.
- Test navigation and all interactive controls.
- Review responsive behaviour.
- Check accessibility basics.
- Verify image loading and metadata.
- Resolve errors caused by the implementation.

### Phase 7 — Handover
- Update the README.
- Document how to run and build the website.
- List unresolved client decisions.
- Document any third-party services needed.
- Provide a concise summary of completed pages, tests and outstanding issues.

## 10. Working rules for Cursor Agent

1. Implement one phase at a time.
2. Inspect the existing project before modifying files.
3. Preserve useful work.
4. Do not rewrite unrelated files.
5. Do not create fake business details.
6. Do not claim that a feature works without testing it.
7. Do not leave non-functional buttons or dead links.
8. Do not implement backend features without approval.
9. Explain important design or architecture decisions briefly.
10. Run appropriate validation after each significant phase.
11. Fix errors before proceeding where practical.
12. If requirements conflict or information is missing, identify the issue and use a safe, clearly documented placeholder rather than guessing.

## 11. Acceptance criteria

The website implementation is acceptable when:

- All agreed pages exist and are accessible.
- The header, navigation and footer are consistent.
- The site works on mobile, tablet and desktop.
- Services and packages are presented clearly.
- Content is maintainable through centralised data.
- Contact links work when configured.
- No unapproved business information is fabricated.
- No visible control falsely suggests unavailable functionality.
- Accessibility and SEO fundamentals are addressed.
- Linting, type checking and production build pass, or remaining blockers are explicitly documented.
- The README accurately explains how to run and maintain the application.

## 12. First instruction to Cursor

Begin with **Phase 1: Inspect and plan**.

Review the current workspace and identify what has already been completed during project setup. Then implement **Phase 2: Design foundation and shared layout**.

Do not implement every page in a single uncontrolled change. After completing the shared layout, validate it and report the files changed, tests performed and any outstanding issues.

Wait for review before proceeding to the homepage if the current task or conversation requests staged approval.

## Project setup

The specification above is the build brief. Commands for this repository:

```powershell
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

`npm run dev` serves [http://localhost:3000](http://localhost:3000). `npm run build` writes the static site to `out/`.

Home, About, Services, Packages, Experiences, Gallery, and Contact are in the navigation. Package prices in `data/packages.ts` stay unpublished while `approved` is false. The Lessons in Conservation case study stays unpublished while `approved` is false in `data/experiences.ts`. Photographs in `public/photos` are web-sized copies used by the gallery and homepage. The camera originals are in `photo-originals` and are not published. Contact and social links render only after real values are added in `data/contact.ts`. There is no enquiry form, because no submission service is configured.

Design tokens live in `lib/brand.ts` and `app/globals.css`. The dev and build scripts use Webpack because Windows Application Control on this PC blocks the native Next.js SWC binary that Turbopack requires.
# Umodzi-Impact-Website
