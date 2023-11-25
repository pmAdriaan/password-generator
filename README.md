<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>PASSWORD-GENERATOR</h1>
<h3>◦ Creating Keys to Your Safety</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat-square&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=&logo=css3&logoColor=white" alt="CSS3" />
</p>
<img src="https://img.shields.io/github/license/pmAdriaan/password-generator?style=flat-square&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/pmAdriaan/password-generator?style=flat-square&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/pmAdriaan/password-generator?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/pmAdriaan/password-generator?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#%EF%B8%8F-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running Password Generator](#-running-password-generator)
    - [🌐 Live Demo Password Generator](#-live-demo-password-generator)
    - [📸 Password Generator Screenshot ](#-password-generator-screenshot)
- [📄 License](#-license)

---


## 📍 Overview

The repository hosts a password generator web application. With a user-friendly interface, the app uses JavaScript to create secure, random passwords based on user input (desired length and character types). The styling ensures a sleek design, optimized for both desktop and mobile viewing. By integrating customizability with security, this application adds value by providing tailored yet robust password solutions.

---

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The application follows a simple 3-tier architecture with HTML as a structure, CSS for styling, and JavaScript for functionality. |
| 🔗 | **Dependencies**   | The application is dependent solely on HTML, CSS, and JavaScript, without reliance on external libraries or frameworks.|
| 🧩 | **Modularity**     | The code is divided into three separate files based on their functions: HTML for structure, CSS for styling, and JavaScript for logic. |
| 🧪 | **Testing**        |  The codebase does not include any testing strategies or tools.|
| ⚡️ | **Performance**   | As a lightweight and simple static web application, its performance should be optimal with minimal resource usage. |
| 🔐 | **Security**       | The code does not handle sensitive data, and hence, no explicit security measures are in place. Yet, generated passwords take into account complexity requirements.|
| 🔀 | **Version Control**| The repository uses Git for version control.|
| 🔌 | **Integrations**   | The code has no explicit system interactions or service integrations. It could benefit from integrating with a password manager. |
| 📶 | **Scalability**    | Given its structure, the application can be easily scaled by adding more features while maintaining performance and responsiveness. |

---


## 📂 Repository Structure

```sh
└── password-generator/
    ├── index.html
    ├── script.js
    └── style.css

```

---


## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                               | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---                                                                                | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [index.html](https://github.com/pmAdriaan/password-generator/blob/main/index.html) | The code represents the HTML structure for Password Generator webpage. The page includes a header, a central card with a title, a read-only text area for displaying the generated password, and a button for generating the password. The page also links to a corresponding CSS styles file and a JavaScript functions file for handling password generation.                                                                                                                                                 |
| [script.js](https://github.com/pmAdriaan/password-generator/blob/main/script.js)   | The code is for the password generator web application that uses Javascript to generate random passwords. Users are asked to specify the length (between 8 and 128 characters) and the character types they want in their password, including special characters, numbers, lowercase and uppercase letters. The generator ensures at least a character from each selected type is included, then remaining characters are randomized from the chosen sets, and the password gets shuffled before returning it.    |
| [style.css](https://github.com/pmAdriaan/password-generator/blob/main/style.css)   | This CSS code styles the webpage for password generator application. It provides a standard design for elements like buttons, cards, headers, footers, and the password display area. The entire webpage is structured with box-sizing properties and responsive design. It also includes media queries for mobile-responsive design, adjusting the font size of buttons and the password field for screens smaller than 690px and 500px. The design mainly utilizes a color scheme of whites, reds, blues, and greys. |

</details>

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the password-generator repository:
```sh
git clone https://github.com/pmAdriaan/password-generator
```

2. Change to the project directory:
```sh
cd password-generator
```

3. Install the dependencies:
```sh
► N/A
```

### 🤖 Running Password Generator

```sh
► Open index.html with Live Server plugin in VS Code
```

### 🌐 Live Demo Password Generator
► [password-generator](https://pmadriaan.github.io/password-generator/)


### 📸 Password Generator Screenshot

![password-generator Screenshot](./images/password-generator_screenshot.png?raw=true "password-generator")

---

---

## 📄 License


Copyright © 2023 Mihai Pirvu.

This project is licensed under the `ℹ️  MIT-License`. See the [MIT License](https://github.com/pmAdriaan/password-generator/blob/main/LICENSE) file for additional info.

---


[**Return**](#Top)

---
