# Professional Portfolio
Welcome to my portfolio repository! 

Below you can find details on how I built this site including dependencies, software, and structure.

## Getting Started (Setup)
#### Install Vite
1. Run ```$ npm create vite@latest``` in terminal from your desired directory
2. Follow the prompts

#### Install Tailwind
1. Run ```npm install -D tailwindcss postcss autoprefixer``` from command line to install the necessary dependencies for tailwind
2. Run ```npx tailwindcss init -p``` from command line to initialize the tailwind configuration
3. Update the ```tailwind.config.js``` file to add the paths to the files we want Tailwind to know about. For this site, it is just ```index.html``` and any subfolder in ```./src/``` (inclusive) (i.e ```content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]```)
4. Add the Tailwind directives to your CSS in the ```index.css``` file.

#### Install Prettier & Prettier-Tailwind
Prettier is our code formatter. Prettier has a plugin called ```prettier-plugin-tailwind``` that automatically sorts Tailwind classes by the team's recommended order.

1. Run ```npm install -D prettier prettier-plugin-tailwindcss``` to install the two packages we need
2. Create a prettier config  file ```prettier.config.cjs```. Add the plugin into here.

