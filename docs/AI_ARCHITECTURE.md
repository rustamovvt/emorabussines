# AI architecture

Do not let the model directly write arbitrary production code.

Use a structured Site JSON schema and tools.

Example tool set:
- create_site
- update_theme
- update_text
- add_section
- remove_section
- reorder_sections
- add_gallery
- add_video
- add_music
- add_countdown
- publish_site

The AI produces validated JSON/tool calls. The renderer turns that JSON
into safe React components.

This makes the PRO AI editor much safer, cheaper and easier to version.
