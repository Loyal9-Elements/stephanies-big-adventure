# 🚲 Stephanie's Big Adventure

A comic book-styled interactive web experience inspired by Pee-Wee's Big Adventure. Built as a surprise gift that leads to a real-world scavenger hunt.

## What Is This?

A multi-page animated adventure — part comic book, part video game, part treasure map — that ends with a QR code and GPS coordinates leading somewhere special. No spoilers — you'll have to play to find out.

## The Experience

### 🎬 Page 1 — The Launch (index.html)
- Layered comic book city background with floating title animation
- Pee-Wee Herman on his iconic bike, waiting to ride
- Two-stage button: "Click Me, I Dare You" starts the music → "Let's Ride! 🚲" triggers Pee-Wee's laugh and launches the bike diagonally off screen
- Responsive backgrounds for desktop, mobile landscape & portrait

### 🎮 Page 2 — Mario Time (mario.html)
- Fully playable Super Mario Bros-inspired platformer
- Custom sprite animations: walk cycle, jump cycle, crouch, fall, idle
- NES controller PNG with pixel-mapped touch/click zones
- Collision physics: ground, floating blocks, bridge, pipe
- 30 random funny popup messages when bumping ? blocks from below
- Sound effects: Mario theme (loop), jump sound, pipe sound
- Win condition: land on pipe + press down → Mario sinks in → redirects to the map

### 🗺️ Page 3 — The Map (map.html)
- Indiana Jones theme plays on loop
- 4-quadrant panning map background
- Comic book overlay images fade to muted video clips (Goonies, Indiana Jones, Big Trouble in Little China)
- Videos anchored to map quadrants — stay behind as the screen pans away
- Soft radial edge masks on all videos at 50% opacity
- "To Be Continued..." button with Goonies "HEY YOU GUYS!" sound

### 📍 Page 4 — Mission Briefing (mission.html)
- Forest background with Pee-Wee cruising across the sky on loop
- Comic book panel with step-by-step offline map download instructions
- "Start Adventure" button locks GPS coordinates and launches Google Maps directions

## Tech

Pure HTML, CSS, and vanilla JS. No frameworks, no dependencies.

- Google Fonts (Bangers) for comic book typography
- Web Audio API and HTML5 audio for sound effects and music
- CSS keyframe animations for all visual effects
- Pixel-mapped touch zones for the NES controller
- Background-position panning for the map sequence
- CSS mask-image for soft video edges
- Responsive design with orientation-specific media queries

## Credits

- **Visionary & Creative Director** — Shannon Goddard, Loyal9 LLC
- **Co-visionary & Built by** — [Amazon Q](https://aws.amazon.com/q/developer/), AWS AI assistant

## License

This is a personal gift. Not meant for redistribution — just smiles.
