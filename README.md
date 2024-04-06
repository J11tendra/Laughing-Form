# laughingForm: A Multi-Step Form in React

This project is a multi-step form built with React, SCSS, and the Context API. It serves as a learning ground for building complex forms with features like progress tracking, validation, and responsiveness.

## Table of Contents

- [Overview](#overview)
- [Project Goals](#goals)
- [Technologies](#technologies)
- [Features](#features)
- [My Process](#process)
- [Additional Notes](#notes)
- [Additional Details](#additional-details)
- [Author](#author)
- [License](#license)

## Overview

![HomePage-1](https://github.com/J11tendra/Laughing-Form/blob/main/public/active-states-step-1.jpg?raw=true)

<p align="center"><i>Personal Info (step-1) Desktop</i></p>

![HomePage-2](https://github.com/J11tendra/Laughing-Form/blob/main/public/active-states-step-2.jpg?raw=true)

<p align="center"><i>Select Your Plan (step-2) Desktop</i></p>

![HomePage-3](https://github.com/J11tendra/Laughing-Form/blob/main/public/active-states-step-3.jpg?raw=true)

<p align="center"><i>Pick add-ons (step-3) Desktop</i></p>

![HomePage-4](https://github.com/J11tendra/Laughing-Form/blob/main/public/active-states-step-4.jpg?raw=true)

<p align="center"><i>Finishing up (step-4) Desktop</i></p>

## Project Goals

This project aimed to:

- Demonstrate the use of React, SCSS, and the Context API for creating a multi-step form.
- Implement responsive design for a seamless user experience across devices.
- Develop a clean and maintainable codebase using modular components and global styles.

## Technologies

- Frontend: React, SCSS
- State Management: Context API
- Styling: Global CSS classes, media queries for responsiveness (350px - 1980px)
- Validation: Plain JavaScript (no external libraries)

## Features

- Multi-Step Progress: Users navigate through a series of steps, completing each one before moving forward.
- Backtracking: Users can revisit previous steps to modify their selections.
- Summary and Confirmation: The final step presents a summary of selections and allows confirmation.
- Responsive Layout: The interface adapts to various screen sizes for optimal viewing.
- Form Validation: Built-in validation checks for missing fields, incorrect email format, and empty selections.

## My Process

For your laughingForm project, I used a component-based approach, creating functional components for each page or route, which helps with maintainability. Here's what I did:

- Created global SCSS styles, mixins, and variables for consistent styling throughout the application.
- Separated each page or route into functional components for modularity.
- Used a separate Context API to manage application data and logic related to form validation.

## Additional Details

- This project is named laughingForm.
- TypeScript conversion is planned for future improvements.
- User data is currently stored in variables, not a database.
- The design inspiration is from FrontendMentor.io

## Author

    Development: Jitendra Choudhary

## License

This project is licensed under the MIT License. See the LICENSE file for details.
