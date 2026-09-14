# Practice 1.1 - Installing and configuring Web Development Tools

### 2DAW - DWEC Bilingual.

> **Jorge Rodríguez Rodríguez**:

#### Files included in this repository:

Ennumerate and explain each one of the files included in this repo.

- **README.md:** This is the practice document with answered questions.
- **image.png:** Vscode image preview.
- Etc...

#### Instructions:

- Fill your name and lastname and answer the questions in the current `README.md` file. You have to submit the activity as a GitHub repo link that has to include the

- You can add images to this tocument with the syntax:

  ```md
  ![Text to display](link/to/the/image)
  ```

- Any other question about Markdown language you can find in the [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

### Install and configure VSCode

1. **Install `VSCode` in your computer**.

- It's already installed.

![VSCode Image](image.png)

1. **Create a new folder called `p1.1-frontend-tools`and open it as a workspace in VSCode. Copy the current `README.md` inside it**.
2. **What functionalities do the following VSCode extensions add?**
   - **Bootstrap 5 quick Snippets:** Autocomplete premade code snippets from bootstrap 5 components.
   - **Live Server:** Starts a local developmen server and reloads the website whenever you save the changes to your files.
   - **Prettier:** Formats and organize the code with consistent style rules.
   - **Markdown All in One:** Add add useful features for markdown editing (shortcuts, automatic list and table formatting, table of contents, etc)
3. **Install the extensions listed in the previous point in VSCode**.
4. **What other extensions do you know that you consider interesting for developing in JavaScript**?

- **Console ninja**: JavaScript console.log output and runtime errors right next to your code.
  ![Console ninja preview](https://www.nico.fyi/_next/image?url=%2Fstatic%2Fimages%2Farticles%2Fconsole-ninja.png.webp&w=3840&q=75)

- **Error Lens**: Improve highlighting of errors, warnings and other language diagnostics.
  ![Error Lens preview](https://www.webatoms.in/api/attachments/att/241/ErrorLens.gif)

1. **Find in VSCode the option in `Settings` to `Format On Save` and activate it. What effect has this option?**

- It will format my code whenever i save.

### Create a Hello World in JS

7. **Create an `index.html` file inside your worspace folder.**
8. **Create the basic html structure using the `!` snippet and change the title to 'Hello World'**

   ```html
   <!DOCTYPE html>
   <html lang="en">
   	<head>
   		<meta charset="UTF-8" />
   		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
   		<title>Hello World</title>
   	</head>
   	<body></body>
   </html>
   ```

9. **Create a new file called `app.js` and add this two lines**

   ```js
   console.log("Hello Console!");
   document.body.innerHTML = "<h1>Hello document!<h1>";
   ```

10. **Import the script in your html using one of the techniques explained in class. Explain here the technique, show the code and justify why did you choose this technique**.

11. **Launch `index.html` in Live Server and check that the script is running. Click right button and select inspect to show the developer tools and take a look on the console.**
12. **Change some message in the JS code and sava changes. You can check that Live Server refreshes the web page.**

### Create a simple form with Bootstrap 4.

13. **At this point, we are going to create a page called `form.html` starting from the `Bs5-$` template provided by the Bootstrap extension we added. What files does this template import in the html by default?**
14. **Create a `<div>`with the class `.container` to wrap all the sections in the web page**

15. **Add a standard navigation bar inside the nav area using the `bs5-navbar-standard` snippet inside the container**

16. **Inside the main area create a form using Bootstrap to collect data from a new user who wants to register at an academy that offers courses. We can copy code from [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/forms/overview/)**.

### Install Git, and upload your repository to GitHub

17. **Install [git](https://git-scm.com/) in your computer**.
18. **Init the git repository**
19. **Log in to your GitHub account provided by IES Azarquiel**
20. **Follow the teacher on GitHub at the following link: [https://github.com/jeatzr/](https://github.com/jeatzr/)**
21. **Create a new empty repository on GitHub named `p1.1-frontend-tools`.**
22. **Follow the instructions in the command line provided by GitHub to add your files, create the first commit and push it. Notice that in out case we have to add all files to the staged area with `git add .`, not just`git add README.md`**
23. **To finish, submit the link of your GH repo to the task in our Classroom.**
