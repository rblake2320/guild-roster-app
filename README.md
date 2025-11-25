# Guild Roster Manager

A modern web application for managing gaming guild rosters with drag-and-drop functionality, member stats tracking, and guild war comparisons.

## Features

✨ **Core Functionality**
- 📋 Manage guild member rosters with an intuitive interface
- - 🎯 Drag-and-drop member organization and role assignment
  - - 📊 Track member statistics and performance metrics
    - - ⚔️ Compare guild stats across different war periods
      - - 🔄 Real-time roster updates and synchronization
       
        - 🛠️ **Technical Highlights**
        - - ⚡ Built with **React 18+** for fast, responsive UI
          - - 🚀 Powered by **Vite** for ultra-fast development and build times
            - - 🔍 **ESLint** configured for code quality and consistency
              - - ✅ Automated testing and CI/CD with GitHub Actions
                - - 🔐 Security scanning with CodeQL
                  - - 📱 Fully responsive and mobile-friendly design
                   
                    - ## Getting Started
                   
                    - ### Prerequisites
                    - - Node.js 18+ or higher
                      - - npm 9+
                       
                        - ### Installation
                       
                        - ```bash
                          # Clone the repository
                          git clone https://github.com/rblake2320/guild-roster-app.git
                          cd guild-roster-app

                          # Install dependencies
                          npm install

                          # Start development server
                          npm run dev

                          # Build for production
                          npm run build

                          # Preview production build
                          npm run preview
                          ```

                          ### Available Scripts

                          ```bash
                          npm run dev       # Start development server with HMR
                          npm run build     # Build optimized production bundle
                          npm run preview   # Preview production build locally
                          npm run lint      # Run ESLint to check code quality
                          npm test          # Run tests (when configured)
                          ```

                          ## Project Structure

                          ```
                          guild-roster-app/
                          ├── .github/
                          │   └── workflows/        # GitHub Actions CI/CD workflows
                          ├── src/
                          │   ├── assets/          # Static assets (images, icons)
                          │   ├── components/      # Reusable React components
                          │   ├── data/            # Data models and constants
                          │   ├── App.jsx          # Main App component
                          │   ├── App.css          # App styles
                          │   ├── index.css        # Global styles
                          │   └── main.jsx         # Application entry point
                          ├── public/              # Public static files
                          ├── index.html           # HTML entry point
                          ├── package.json         # Project dependencies and scripts
                          ├── vite.config.js       # Vite configuration
                          ├── eslint.config.js     # ESLint configuration
                          └── README.md            # This file
                          ```

                          ## Development Workflow

                          ### Code Quality

                          This project uses **ESLint** to maintain code quality standards. Before committing code:

                          ```bash
                          # Check for linting errors
                          npm run lint

                          # Automatic fixes (if available)
                          npm run lint -- --fix
                          ```

                          ### Testing

                          The project includes automated testing via GitHub Actions:
                          - Unit tests run on every push and pull request
                          - - CodeQL security scanning ensures code safety
                            - - Build validation across Node.js 18.x, 20.x, and 22.x
                             
                              - ### Deployment
                             
                              - The application automatically deploys to **GitHub Pages** on every push to the master branch. The build process:
                              - 1. Installs dependencies
                                2. 2. Builds the optimized production bundle
                                   3. 3. Uploads the dist/ folder to GitHub Pages
                                      4. 4. Deploys instantly
                                        
                                         5. **Live Demo**: [Guild Roster Manager](https://rblake2320.github.io/guild-roster-app/)
                                        
                                         6. ## CI/CD Pipeline
                                        
                                         7. This project uses **GitHub Actions** for continuous integration and deployment:
                                        
                                         8. ### Workflows
                                         9. - **Node.js CI**: Builds and tests the app on every push and PR
                                            - - **CodeQL Security**: Scans for security vulnerabilities
                                              - - **Stale Management**: Automatically manages inactive issues and PRs
                                                - - **GitHub Pages**: Automatic deployment to production
                                                 
                                                  - For details, see [.github/workflows/](.github/workflows/)
                                                 
                                                  - ## Security
                                                 
                                                  - This project includes security best practices:
                                                  - - 🔐 CodeQL advanced security scanning
                                                    - - 🛡️ Automated dependency vulnerability detection
                                                      - - 📋 Security policy documentation
                                                       
                                                        - For security concerns, please see [SECURITY.md](SECURITY.md)
                                                       
                                                        - ## Contributing
                                                       
                                                        - We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
                                                        - - How to report bugs
                                                          - - How to submit pull requests
                                                            - - Code style and standards
                                                              - - Development setup
                                                               
                                                                - ## Technologies Used
                                                               
                                                                - - **Frontend**: React 18+, JavaScript ES6+
                                                                  - - **Build Tool**: Vite 5.x
                                                                    - - **Linting**: ESLint with recommended configs
                                                                      - - **CI/CD**: GitHub Actions
                                                                        - - **Security**: CodeQL, npm audit
                                                                          - - **Styling**: CSS3 with modern features
                                                                            - - **Version Control**: Git & GitHub
                                                                             
                                                                              - ## License
                                                                             
                                                                              - This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
                                                                             
                                                                              - ## Support
                                                                             
                                                                              - For issues, questions, or suggestions:
                                                                              - - 📝 [Open an Issue](https://github.com/rblake2320/guild-roster-app/issues)
                                                                                - - 💬 [Discussions](https://github.com/rblake2320/guild-roster-app/discussions)
                                                                                 
                                                                                  - ## Roadmap
                                                                                 
                                                                                  - - [ ] User authentication and profiles
                                                                                    - [ ] - [ ] Guild war scheduling and tracking
                                                                                    - [ ] - [ ] Advanced analytics dashboard
                                                                                    - [ ] - [ ] Export roster to CSV/PDF
                                                                                    - [ ] - [ ] Dark mode support
                                                                                    - [ ] - [ ] Internationalization (i18n)
                                                                                    - [ ] - [ ] Mobile app version
                                                                                   
                                                                                    - [ ] ## Performance
                                                                                   
                                                                                    - [ ] This project is optimized for performance:
                                                                                    - [ ] - Fast builds with Vite (~1-3 seconds)
                                                                                    - [ ] - Minimal bundle size with tree-shaking
                                                                                    - [ ] - Fast refresh with HMR during development
                                                                                    - [ ] - Optimized production builds with minification and code splitting
                                                                                   
                                                                                    - [ ] ## Learn More
                                                                                   
                                                                                    - [ ] - [React Documentation](https://react.dev)
                                                                                    - [ ] - [Vite Documentation](https://vitejs.dev)
                                                                                    - [ ] - [ESLint Documentation](https://eslint.org)
                                                                                    - [ ] - [GitHub Actions Documentation](https://docs.github.com/en/actions)
                                                                                   
                                                                                    - [ ] ---
                                                                                   
                                                                                    - [ ] **Last Updated**: November 25, 2025
                                                                                   
                                                                                    - [ ] Made with ❤️ by the Guild Roster Team
