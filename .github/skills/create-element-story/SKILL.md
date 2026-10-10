---
name: create-element-story
description: 'Create or simplify Storybook stories for native HTML elements in go-web-starter-design-kit. Use when adding an element story, creating a component demo, configuring story controls, or reducing story markup. Consult the reference elements.html page and repository elements.css to render elements as intended with the least necessary markup and one Default story.'
---

# Create Element Story

## Goal

Show the smallest usable HTML example that renders and behaves as intended with
the existing styles. Minimize both rendered markup and story implementation,
without removing necessary semantics, accessibility, or native behavior.

## Required Sources

Read the current relevant sections of both sources before creating or changing
a story. Do not rely on remembered examples or copy the whole demo page.

- Reference usage: `/Users/smaton/Documents/Personal/dot-dev/ui/html/pages/elements.html`.
- Styling contract: repository-root [elements.css](../../../elements.css).

The reference HTML is outside this repository. If it is unavailable, ask for its
location or relevant excerpt instead of silently inventing a replacement.

Also read the nearest current story, such as
[Button.stories.js](../../../src/elements/button/Button.stories.js), for local
Storybook conventions. Check existing `.storybook` configuration only as needed;
shared CSS, themes, and addons should not be duplicated inside a story. Consult
repository-root `variables.css` or `sprite.svg` only when relevant to the element.

## Workflow

1. Identify the requested native element in the reference page. Match its markup
   to the selectors, `data-*` attributes, native attributes, and pseudo states in
   `elements.css`. Resolve differences using the current CSS for styling and
   valid native HTML for behavior.
2. Start with only the element and the children or associated elements it needs.
   For each attribute, wrapper, child, style, and listener, ask whether removing
   it breaks intended styling, behavior, or accessibility. Omit it if not.
3. Create `src/elements/<element-name>/<ElementName>.stories.js`. Keep everything
   specific to that element in its folder, leaving room for a later Code Connect
   file. Do not create Code Connect files unless explicitly requested.
4. Use the existing HTML Storybook renderer and metadata conventions, a title
   such as `Elements/Input`, and exactly one named export: `Default`. Use args
   and controls for supported variations instead of separate variant stories.
5. Implement only the markup and control wiring needed for this element. Prefer
   direct DOM construction and text nodes for editable content over helpers,
   abstractions, or interpolating control values into unescaped HTML.
6. Build and check the story as described below. Remove anything shown to be
   unnecessary, and preserve unrelated user changes.

## Minimal Markup Rules

- Do not copy Go template directives, page navigation, section headings,
  explanatory paragraphs, or demo layout classes such as `element-preview`.
- Avoid preview wrappers unless native relationships, required grouping, or
  containment make them necessary. Use shared Storybook layout for presentation.
- Use existing CSS without modifying it to make a story look right. Do not add
  decorative classes, inline layout styles, redundant attributes, or new styles.
- Preserve essential relationships: labels with their controls, radio group
  names, required table structure, and dialog/popover targets. Reduce sample
  data and repeated content to the minimum that demonstrates the element.
- Keep interactive elements accessible. Do not drop a control's accessible name
  or label just because the reference demo omits one. Use native interactions
  instead of custom event handlers where they already provide the behavior.
- For optional basic icons, use the home symbol from repository-root `sprite.svg`
  with only the required `svg`/`use` markup, dimensions, and `aria-hidden`.
  Resolve the sprite URL for this project; do not copy the demo's server path.
  Do not add SVG attributes unless rendering or accessibility requires them.
- Add event spies, listeners, or helpers only for behavior worth demonstrating.
  Do not add logging or state infrastructure mechanically to every story.

## Controls

- Offer only meaningful variations supported by the reference markup and CSS.
  Use booleans for optional content/native flags, text for content, and a small
  option set for mutually exclusive variants. Avoid speculative options.
- Use conditional controls when a setting does not apply to the selected variant.
  Never allow a control combination to remove essential content. For buttons,
  icon visibility is a boolean for text-bearing variants; hide it for the
  icon-only variant and always render the home icon in that variant.
- Reuse the installed pseudo-state addon when pinned interaction states are
  needed. Do not invent state styles or redefine CSS rules in the story.
- Keep resting-state markup free of empty classes and simulation styles.
  Pseudo classes and any necessary browser-focus simulation are Storybook-only
  instrumentation, not part of the starter HTML users should copy.
- If providing a source example in docs, show minimal consumer HTML rather than
  story metadata, control wiring, preview wrappers, or simulated-state classes.

## Validation

Run `npm run build-storybook` after changing a story. Confirm the build index has
exactly one story for the element, named `Default`, at the intended import path.
Check editor diagnostics for the touched file.

In the existing running Storybook, or after starting it with `npm run storybook`,
verify the default render and relevant control combinations. Check conditional
controls, native keyboard behavior, light/dark themes, and sprite rendering where
applicable. Confirm the element fits a narrow viewport without adding demo chrome.
Distinguish authored pseudo-state previews from actual browser behavior.

Finish by checking that the default rendered markup contains only necessary
elements and attributes. Do not change unrelated stories, shared styles,
configuration, or dependencies. Report any checks that could not be performed.