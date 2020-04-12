# CV and Motivation Letter template :page_facing_up:

My CV and motivation letter built with some tools I work confidently with:
- HTML (and JSX),
- CSS (and Stylus),
- JavaScript (and React)


## Usage

This project was created with the unconventional purpose of getting exported in PDF format by a web browser, nothing more. With all honesty, it was a just lot easier for me to create my CV this way than using software where I get to use my mouse more than my keyboard, and I also find the end result easier to update.

Most text in the document is `contenteditable`, so you can update the content before printing without even looking at the code.

There is no `package.json` file or anything of the sort, and no build process, everything is taken care of by the browser, all internal and external dependencies are directly or indirectly referenced in `index.html`, which is the entry point for the project.

If you want to run this locally, you will need to use some static file server. I prefer [`live-server`](https://www.npmjs.com/package/live-server), but anything that can give you access to the files over HTTP should do just fine.

## May I use this for my CV?

Of course!

Feel free to clone or fork this repository, and use it for your own CV and motivation letter, or somebody else’s, or turn it into a template for your favorite chicken paprikash recipe. :blush:

If I saved you a few hours of work with this, or just helped you land a new job (congratulations!), maybe consider buying me a cup of tea. :tea:


## Caveats

Just cloning the repository and opening `index.html` in your browser via `file://` will most likely fail with some spooky CORS error.


## Contact

Feel free to reach out at tothab@gmail.com.


## Licence

The code is licensed under MIT, do what you will, have fun!

The beautiful background image (`assets/background.png`) is originally from [Toptal Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/xv/).
