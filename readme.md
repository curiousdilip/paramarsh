# Paramarsh Informatics Pvt. Ltd.

## Description

This is a single-page web application built using React, designed to showcase a company's services, products, client testimonials, and career opportunities. The application is visually appealing and features a responsive navigation bar, various sections with images and text content, and the use of third-party libraries for additional functionality.

## Table of Contents

- [Project Name](#project-name)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Components and Sections](#components-and-sections)
  - [Dependencies](#dependencies)
  - [Contributing](#contributing)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/curiousdilip/paramarsh.git
   ```

2. Change to the project directory:

   ```shell
   cd paramarsh
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm run dev
   ```

## Usage

To view the application, open your web browser and navigate to `http://localhost:3000`.

## Components and Sections

### Header Component (`Header.js`)

- The navigation bar at the top of the page.
- Changes its appearance when the user scrolls down the page.
- Contains a logo, a toggle button for a mobile menu, and links to various sections of the page.

### Home Page Component (`page.js`)

- The main component for the home page of the website.
- Utilizes the `Header` component.
- Contains multiple sections, including "Hero," "About," "Why Choose Us" (Expertise), "Our Products," "Our Recent Projects," "Our Clients," and "Work For Us."
- Sections include text content, images, and carousels (Swiper sliders) for displaying client logos and reviews.

### Dependencies and Libraries

- The code imports various libraries and dependencies like `react`, `classnames`, `next/image`, `swiper`, `aos`, and others to enhance the functionality and appearance of the website.

### CSS Styles

- The styles for the components are defined in CSS files or in-line styles, including animations and transitions for elements.

### Data

- The text and image data for various sections are imported from a separate data file (`data/home.js`) for maintainability.

### Effect Hooks

- The code uses `useEffect` hooks for initialization, including initializing AOS (Animate On Scroll) and handling scroll events.

## Dependencies

- List any project-specific dependencies and their versions.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or fix: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add your feature'`.
4. Push to your branch: `git push origin feature/your-feature-name`.
5. Open a pull request.
