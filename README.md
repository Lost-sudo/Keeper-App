# Notes Application

This project is a simple Notes application built with **React** and **Vite**. The application allows users to create and manage notes with a title and content. It demonstrates the use of React's state management and functional components, along with a minimal setup using Vite for fast development.

## Features

```markdown
- **Create Notes**: Add notes with a title and content.
- **Display Notes**: View all added notes with the content truncated to 50 characters for a cleaner display.
- **Delete Notes**: Remove notes.
- **Responsive Design**: Ensures the application works well across various screen sizes.
```

## Technology Stack

### Frontend
```markdown
- **React**: For building interactive UI components.
- **Vite**: A fast build tool for modern web applications.
```

### Styling
```markdown
- **CSS**: Used for styling the components.
```

## Project Structure

```plaintext
src/
├── components/
│   ├── Notes.js         # Main component for managing notes
│   ├── CreateArea.js    # Component for adding new notes
│   └── Entry.js         # Component for displaying individual notes
├── public/
│   └── style.css        # Global styles
├── App.js               # Root component
├── index.js             # Application entry point
```

## Installation and Setup

```bash
1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd notes-app

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

5. Open the application in your browser:
   http://localhost:3000
```

## How to Use

```markdown
1. **Add a Note**: Use the input fields to provide a title and content, then click the "Add" button to save the note.
2. **View Notes**: Added notes are displayed below the input area. Titles and truncated content make it easy to browse notes.
```

## Future Enhancements

```markdown
- **Edit Notes**: Allow users to update existing notes.
- **Search Notes**: Enable searching through notes by title or content.
```

## Resources

```markdown
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
```

---

### Author
```markdown
This project is developed by **John Patrick Paraon** as part of his learning journey in React and modern web development.
```

