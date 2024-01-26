# Welcome to my site's GitHub page!

This site doesn't require too much setup, but will need a few things done to help it work if you clone this repository.
As this site used Vite to scaffold it, .env variables will need to be set using **VITE_**{Your variable name}.
This site uses Supabase for its database, allowing me to dynamically change data, EmailJS for the contact form, and Google's reCAPTCHA for human verification for the contact form!

Here are the required variables if you more or less wanted a carbon copy and don't want to change anything:

    VITE_SUPABASE_URL=xxxx
    VITE_SUPABASE_APIKEY=xxxx
    VITE_SITE_KEY=xxxx
    VITE_EMAIL_ID=xxxx
    VITE_TEMPLATE=xxxx
    VITE_PUBLIC_KEY=xxxx

## What each one is for:

***VITE_SUPABASE_URL*** & ***VITE_SUPABASE_APIKEY*** are required if you were to use Supabase for some of your site's information.

***VITE_SITE_KEY*** is for Google's reCAPTCHA.

***VITE_EMAIL_ID*** & ***VITE_TEMPLATE*** & ***VITE_PUBLIC_KEY*** are required for EmailJS to work properly.

## Note:
This site's README is not fully completed, as the site is still being worked on.