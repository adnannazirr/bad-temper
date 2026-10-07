# images/gallery

Two ways to fill the gallery in bulk:

1. **Upload photos** button (bottom-right of the Gallery page, edit mode only) — drop many files per category at once.
2. **Folders** — put files in `classes/`, `studio/` or `community/` and list them in `manifest.json`, e.g.

```json
{ "Classes": ["01.jpg", "02.jpg"], "Studio": ["room.jpg"], "Community": [] }
```

The hero and feature photos load from this folder by name: `gallery-hero.jpg`, `gallery-feature.jpg`.
