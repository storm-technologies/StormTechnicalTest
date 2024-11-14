# Project Setup for Evaluation

Welcome to storm test for todo list using vuejs. This is a test to evaluate your skills with Vue.js, Pinia, Tailwind CSS, and Vite. Please follow the instructions below to clone the existing project, create a new component, and submit your changes via a pull request.

## Prerequisites

Ensure you have the following installed on your development machine:

- Node.js and npm: [Download here](https://nodejs.org/).
- Git: [Download here](https://git-scm.com/).

## Instructions

### Step 1: Clone the Repository

We will provide you with a GitHub repository URL. Use it to clone the project to your local machine:

```bash
git clone https://dev.azure.com/StormDev/Storm_JavaScript_Test/_git/vue-storm-js
```

### Step 2: Install Dependencies

Navigate to the project directory and install all necessary dependencies:

```bash
cd vue-storm-js
npm install
npm run dev
```

### Step 3: Create a Todo Component

1. Inside the `src/components` directory, create a new file named `Todo.vue`.

2. Define a simple Todo component using Vue.js and Pinia:

   - Use Pinia to manage a todo list state.
   - Implement basic functionalities such as adding and displaying todos.

3. Use Tailwind CSS to style the component and its elements.

### Step 4: Integrate the Component

1. Import your `Todo.vue` component into the `App.vue` file or any other relevant parent component.

2. Ensure the new component is rendering correctly within the application.

3. Run the development server to test your implementation:

```bash
npm run dev
```

Access the application in your browser via [http://localhost:{port}](http://localhost:port).

### Step 5: Commit Your Changes

1. Create a new branch for your work to avoid committing directly to the `main` or `master` branch:

```bash
git checkout -b feature/add-todo-component
```

2. Stage and commit your changes with a clear and descriptive message:

```bash
git add .
git commit -m "feat: add Todo component using Vue.js and Pinia"
```

### Step 6: Push Changes and Open a Pull Request

1. Push your branch to the remote repository:

```bash
git push origin feature/add-todo-component
```

2. Open a pull request:

   - Visit your repository on Azure.
   - Navigate to the "Pull requests" tab.
   - Click on "New pull request".
   - Select the branch you just pushed and follow the prompts to create the pull request.

## Conclusion

Upon completing the tasks, you've demonstrated your ability to create a component using Vue.js, manage state with Pinia, and apply styles with Tailwind CSS. The pull request provides us with an opportunity to review your work. If you have any questions, please feel free to reach out.

Thank you for participating!
