# Contributing to Guild Roster Manager

Thank you for your interest in contributing to the Guild Roster Manager project! We welcome contributions from everyone. This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and professional in all interactions with other contributors. We are committed to providing a welcoming and inclusive environment for everyone.

## How to Report Issues

If you find a bug or have a suggestion for improvement:

1. **Check existing issues** - Search the [Issues page](https://github.com/rblake2320/guild-roster-app/issues) to see if your issue has already been reported
2. 2. **Provide details** - Include:
   3.    - Clear description of the issue
         -    - Steps to reproduce (for bugs)
              -    - Expected vs actual behavior
                   -    - Your environment (Node.js version, browser, OS)
                        -    - Screenshots if applicable
                         
                             - ## How to Submit Pull Requests
                         
                             - ### Step 1: Fork and Setup
                         
                             - ```bash
                               # Fork the repository on GitHub
                               # Clone your fork
                               git clone https://github.com/YOUR_USERNAME/guild-roster-app.git
                               cd guild-roster-app

                               # Add upstream remote
                               git remote add upstream https://github.com/rblake2320/guild-roster-app.git

                               # Create a new branch
                               git checkout -b feature/your-feature-name
                               ```

                               ### Step 2: Make Your Changes

                               1. Make your code changes
                               2. 2. Write clear, descriptive commit messages
                                  3. 3. Keep commits atomic and focused
                                     4. 4. Update documentation as needed
                                       
                                        5. ```bash
                                           # Check code quality
                                           npm run lint

                                           # Fix linting issues automatically (if possible)
                                           npm run lint -- --fix
                                           ```

                                           ### Step 3: Test Your Changes

                                           ```bash
                                           # Build the project
                                           npm run build

                                           # Preview the production build
                                           npm run preview

                                           # Check for any errors
                                           npm run lint
                                           ```

                                           ### Step 4: Push and Create Pull Request

                                           ```bash
                                           # Push your branch
                                           git push origin feature/your-feature-name
                                           ```

                                           Then:
                                           1. Go to your fork on GitHub
                                           2. 2. Click "Compare & pull request"
                                              3. 3. Fill in the PR template with:
                                                 4.    - Title: Short description of changes
                                                       -    - Description: Why you made these changes, what they do
                                                            -    - Related issues: Link to any related issues
                                                                 -    - Testing: Describe how you tested the changes
                                                                  
                                                                      - ## Development Workflow
                                                                  
                                                                      - ### Local Development
                                                                  
                                                                      - ```bash
                                                                        # Install dependencies
                                                                        npm install

                                                                        # Start development server (with hot reload)
                                                                        npm run dev

                                                                        # Open browser to http://localhost:5173
                                                                        ```

                                                                        ### Project Structure

                                                                        ```
                                                                        src/
                                                                        ├── assets/        # Images, icons, fonts
                                                                        ├── components/    # React components
                                                                        ├── data/          # Constants, types, utilities
                                                                        ├── App.jsx        # Root component
                                                                        ├── index.css      # Global styles
                                                                        └── main.jsx       # Entry point
                                                                        ```

                                                                        ### Code Style Guidelines

                                                                        1. **JavaScript/React**
                                                                        2.    - Use ES6+ syntax
                                                                              -    - Follow the existing code style
                                                                                   -    - Use meaningful variable and function names
                                                                                        -    - Add comments for complex logic
                                                                                             -    - Max line length: 100 characters
                                                                                              
                                                                                                  - 2. **File Naming**
                                                                                                    3.    - Components: PascalCase (e.g., `GuildMember.jsx`)
                                                                                                          -    - Utilities: camelCase (e.g., `formatDate.js`)
                                                                                                               -    - Styles: lowercase with hyphens (e.g., `guild-member.css`)
                                                                                                                
                                                                                                                    - 3. **React Best Practices**
                                                                                                                      4.    - Use functional components with hooks
                                                                                                                            -    - Keep components small and focused
                                                                                                                                 -    - Use meaningful prop names
                                                                                                                                      -    - Avoid prop drilling (consider context for complex state)
                                                                                                                                           -    - Memoize expensive operations if needed
                                                                                                                                            
                                                                                                                                                - ### ESLint and Code Quality
                                                                                                                                            
                                                                                                                                                - The project uses ESLint to maintain code quality:
                                                                                                                                            
                                                                                                                                                - ```bash
                                                                                                                                                  # Check for linting errors
                                                                                                                                                  npm run lint

                                                                                                                                                  # Fix fixable errors automatically
                                                                                                                                                  npm run lint -- --fix
                                                                                                                                                  ```
                                                                                                                                                  
                                                                                                                                                  Make sure all code passes linting before submitting a PR.
                                                                                                                                                  
                                                                                                                                                  ## Commit Message Guidelines
                                                                                                                                                  
                                                                                                                                                  Write clear commit messages that follow this format:
                                                                                                                                                  
                                                                                                                                                  ```
                                                                                                                                                  <type>: <subject>

                                                                                                                                                  <body>

                                                                                                                                                  <footer>
                                                                                                                                                  ```
                                                                                                                                                  
                                                                                                                                                  ### Type
                                                                                                                                                  - `feat`: A new feature
                                                                                                                                                  - - `fix`: A bug fix
                                                                                                                                                    - - `docs`: Documentation only changes
                                                                                                                                                      - - `style`: Changes that don't affect code meaning (whitespace, formatting)
                                                                                                                                                        - - `refactor`: Code change that neither fixes a bug nor adds a feature
                                                                                                                                                          - - `perf`: Code change that improves performance
                                                                                                                                                            - - `test`: Adding or updating tests
                                                                                                                                                              - - `ci`: Changes to CI/CD configuration
                                                                                                                                                                - - `chore`: Other changes that don't modify src or test files
                                                                                                                                                                 
                                                                                                                                                                  - ### Subject
                                                                                                                                                                  - - Use imperative mood ("add" not "added" or "adds")
                                                                                                                                                                    - - Don't capitalize first letter
                                                                                                                                                                      - - Don't end with a period
                                                                                                                                                                        - - Limit to 50 characters
                                                                                                                                                                         
                                                                                                                                                                          - ### Example
                                                                                                                                                                          - ```
                                                                                                                                                                            feat: add drag-and-drop member reordering

                                                                                                                                                                            Implement drag-and-drop functionality for guild members
                                                                                                                                                                            to allow users to reorder members without page refresh.
                                                                                                                                                                            Uses react-beautiful-dnd library.

                                                                                                                                                                            Fixes #123
                                                                                                                                                                            ```
                                                                                                                                                                            
                                                                                                                                                                            ## Pull Request Process
                                                                                                                                                                            
                                                                                                                                                                            1. **Update main branch**
                                                                                                                                                                            2.    ```bash
                                                                                                                                                                                     git fetch upstream
                                                                                                                                                                                     git rebase upstream/master
                                                                                                                                                                                     ```
                                                                                                                                                                                  
                                                                                                                                                                                  2. **Resolve conflicts** (if any)
                                                                                                                                                                                  3.    ```bash
                                                                                                                                                                                           git add .
                                                                                                                                                                                           git rebase --continue
                                                                                                                                                                                           ```
                                                                                                                                                                                        
                                                                                                                                                                                        3. **Squash commits** (if multiple small commits)
                                                                                                                                                                                        4.    ```bash
                                                                                                                                                                                                 git rebase -i HEAD~3  # Change pick to squash for commits to combine
                                                                                                                                                                                                 ```
                                                                                                                                                                                              
                                                                                                                                                                                              4. **Force push your branch**
                                                                                                                                                                                              5.    ```bash
                                                                                                                                                                                                       git push -f origin feature/your-feature-name
                                                                                                                                                                                                       ```
                                                                                                                                                                                                    
                                                                                                                                                                                                    ## CI/CD Checks
                                                                                                                                                                                                
                                                                                                                                                                                                Your PR will automatically run:
                                                                                                                                                                                          - ✅ ESLint code quality checks
                                                                                                                                                                                          - - ✅ Build verification
                                                                                                                                                                                            - - ✅ Automated tests
                                                                                                                                                                                              - - ✅ Security scanning (CodeQL)
                                                                                                                                                                                               
                                                                                                                                                                                                - All checks must pass before merging.
                                                                                                                                                                                               
                                                                                                                                                                                                - ## Review Process
                                                                                                                                                                                               
                                                                                                                                                                                                - 1. A maintainer will review your PR
                                                                                                                                                                                                  2. 2. They may request changes or ask questions
                                                                                                                                                                                                     3. 3. Make any requested changes
                                                                                                                                                                                                        4. 4. Request another review once changes are made
                                                                                                                                                                                                           5. 5. PR will be merged once approved
                                                                                                                                                                                                             
                                                                                                                                                                                                              6. ## Documentation
                                                                                                                                                                                                             
                                                                                                                                                                                                              7. If your contribution changes functionality:
                                                                                                                                                                                                              8. 1. Update the README if adding new features
                                                                                                                                                                                                                 2. 2. Add JSDoc comments to new functions/components
                                                                                                                                                                                                                    3. 3. Update the project structure in README if adding new files
                                                                                                                                                                                                                       4. 4. Add inline comments for complex logic
                                                                                                                                                                                                                         
                                                                                                                                                                                                                          5. ## Getting Help
                                                                                                                                                                                                                         
                                                                                                                                                                                                                          6. - 📖 [Read the documentation](https://github.com/rblake2320/guild-roster-app)
                                                                                                                                                                                                                             - - 💬 [Start a discussion](https://github.com/rblake2320/guild-roster-app/discussions)
                                                                                                                                                                                                                               - - 🐛 [Report a bug](https://github.com/rblake2320/guild-roster-app/issues)
                                                                                                                                                                                                                                
                                                                                                                                                                                                                                 - ## Additional Resources
                                                                                                                                                                                                                                
                                                                                                                                                                                                                                 - - [React Documentation](https://react.dev)
                                                                                                                                                                                                                                   - - [Vite Documentation](https://vitejs.dev)
                                                                                                                                                                                                                                     - - [ESLint Documentation](https://eslint.org/docs)
                                                                                                                                                                                                                                       - - [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                         - ## Recognition
                                                                                                                                                                                                                                        
                                                                                                                                                                                                                                         - Contributors will be acknowledged in:
                                                                                                                                                                                                                                         - - The project README
                                                                                                                                                                                                                                           - - Release notes for their contributions
                                                                                                                                                                                                                                             - - The contributors section on GitHub
                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                               - Thank you for contributing to the Guild Roster Manager! 🎉
