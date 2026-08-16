# sajadsoorni.com

My portfolio site. One page, no menu, no blog. Someone opens it from an email
I've sent them and decides in about ten seconds whether to reply.

Live at https://sajadsoorni.com

## How it's built

Plain HTML and CSS with about forty lines of JavaScript. I'm a videographer,
not a developer — a framework would have been more to maintain than the site
is worth.

The work videos sit on Vimeo. The hero clip is a file in this repo, because
Vimeo won't autoplay silently the way I wanted it to.

There are two hero files, not one. A 16:9 clip on a portrait phone gets
cropped to about a third of its width, so there's a 2:3 version and the page
picks whichever fits. Only one of them ever downloads.

The whole thing stays under 2.5 MB. That number is the point — most people
open it on a phone, outside, on mobile data.

## Running it

    npx serve .

## Files

    index.html
    styles.css
    script.js
    media/        hero clips and poster frames

Cloudflare Pages builds nothing and serves the root as-is. Push to main and
it's live in about a minute.

## The footage

The clips and stills in media/ are my own work and aren't free to reuse.
The code, do what you like with.

hello@sajadsoorni.com
