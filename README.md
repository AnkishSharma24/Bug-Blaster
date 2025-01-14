# Step 1 npx create-react-app bug-blaster

Notes
-> Since npx is isntalling latest react version 19, it is not compatible with current testing-library.
-> Need to downgrade react 19 to 18 to be compatible with testing-library.

STEPS

1. Use npx create-react-app -> npx create-react-app my-app
2. Check Installed React Version -> cd my-app, Check the installed version of React: -> npm list react
3. Install React 18 -> npm install react@^18.0.0 react-dom@^18.0.0
4. Install a Compatible Version of the Testing Library -> npm install --save @testing-library/react@^13.0.0 @testing-library/jest-dom@^5.14.1 @testing-library/user-event@^13.2.1
5. Verify Compatibility -> npm list react @testing-library/react
6. Start the Application -> npm start
