# Next App Router Env Variable

Let's say you have an env variable `SECRET_TOKEN` which you don't want your
users to know about. This is used to call an external API. Also, you're using
the App Router.

1. Add it to `.env.local` and Vercel (described in `.env.example`)
2. In `src/app/page.tsx` call a server-side API with `handleButtonClick()`. The
   variable won't be visible to the client (it only will be if you prefix it with
   `NEXT_PUBLIC_`)
3. In `src/app/api/route.js`, you can use the env variable to send a request to
   a server. Take the response from that call and pass it back to the frontend.

(All the rest of the files are boilerplate)
