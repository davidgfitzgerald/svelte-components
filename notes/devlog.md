# Dev Log

Rambling notes during development of thoughts, ideas, problems, solutions, etc.

# Tue 14th Jan

On lunch quickly refactoring out the floating label input into its own component.

# Mon 13th Jan

The app is dockerised but the styling has not been applied. Just working out what else needs to be copied into the docker container.

# Sun 12th Jan

Sat in the Tinto cafe on Gloucester Road in Bristol with a little time to kill so gonna have a little go at the 7 GUIs thing.

So, I didn't have time to get into the meatier 7 GUIs stuff but I did just dockerise the app.

# Tue 7th Jan

Start of this little experimental project.

Just going to mess around and create some components.

## Ideation

Getting inspiration from here: https://flowbite-svelte.com/

The device mockup component on there is quite cool. You can provide it a screenshot of your app and it appears
on a mockup of a device such iOS, android, laptop.

### List of components

- Accordion
- Alert
- Avatar
- Badge
- Banner
- Bottom Navigation (mobile)
- Breadcrumb
- Button Group
- Buttons
- Cards
- Carousel
- Checkbox
- Datepicker
- Drawer (modal coming out from side)

### Nav

- logo
- search

## 7 GUIs

Following https://eugenkiss.github.io/7guis/, I'm going to try and make some GUIs. There is a great person on youtube called Joy Of Code who [made a video](https://www.youtube.com/watch?v=afLUZz_7ySc&list=PLA9WiRZ-IS_zU2j29HQy478UCuHyDZQXC&index=6&t=626s) on it.

## Auth

Just used the inbuilt [lucia](https://lucia-auth.com/) authentication and customised the app such that all
routes are protected with auth by default. Was relatively painless to adapt.

## Tailwind

Going to acquaint myself with a bit of tailwind and style the `/login` page