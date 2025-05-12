import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ChatBot = ({ messages, setMessages }) => {
  const [input, setInput] = useState('');
  const [showPrompts, setShowPrompts] = useState(true); // Controls whether to display prompts
  const navigate = useNavigate();

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Add user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: 'user' },
      ]);

      // Determine bot response based on input
      let botResponse;
      if (input.toLowerCase() === 'introduction to the programming language?') {
        botResponse = `Here's a brief introduction to programming languages, their purpose, and some of the most popular ones:

**What is a Programming Language?**
A programming language is a formal set of instructions that can be used to produce various kinds of output, including software applications, scripts, or algorithms. These languages are used to communicate with computers, allowing developers to write code that a machine can execute to perform specific tasks.

**Purpose of Programming Languages**
- **Communication**: They enable humans to communicate with machines in a structured way.
- **Automation**: They automate tasks and processes, reducing the need for manual intervention.
- **Problem Solving**: They provide a means to solve complex problems through algorithms and data structures.
- **Software Development**: They are essential for developing applications, websites, and systems.

**Types of Programming Languages**
- **High-Level Languages**: These are closer to human languages and abstract away the hardware details. Examples include:
  - **Python**: Known for its readability and simplicity; widely used in web development, data analysis, artificial intelligence, and scientific computing.
  - **Java**: A versatile, object-oriented language used for building cross-platform applications, mobile apps (Android), and large-scale enterprise systems.
  - **JavaScript**: The standard language for web development, used for both client-side and server-side programming, particularly in creating interactive web pages.

- **Low-Level Languages**: These are closer to machine code and provide less abstraction from the hardware. Examples include:
  - **C**: A powerful language often used for system programming and embedded systems. It offers high performance and fine control over system resources.
  - **Assembly Language**: A low-level programming language that is specific to a computer architecture. It uses mnemonics to represent machine-level code.

- **Scripting Languages**: These are typically interpreted languages used for automating tasks. Examples include:
  - **Bash**: A Unix shell and command language used for task automation in Unix/Linux environments.
  - **Ruby**: Known for its elegant syntax, often used in web development, especially with the Ruby on Rails framework.

**Conclusion**
Programming languages are essential tools for developers and are the foundation for creating software applications. Each language has its strengths and use cases, making it important to choose the right one based on your needs. As you begin your programming journey, focus on understanding the fundamentals, practicing regularly, and building projects to solidify your knowledge.`;
      } else if (input.toLowerCase() === 'basic syntax of programming languages?') {
        botResponse = `The basic syntax of programming languages refers to the set of rules and structures that define how code must be written in a particular language. While different languages have unique syntax, there are several fundamental concepts common to many programming languages. Here’s an overview of key elements of programming language syntax:

1. **Variables and Data Types**
   - **Variable Declaration**: Most languages allow you to declare variables to store data.
   - **Data Types**: Common data types include integers, floats (decimal numbers), strings (text), and booleans (true/false).

2. **Operators**
   - **Arithmetic Operators**: Used for mathematical calculations.
   - **Comparison Operators**: Used to compare values.
   - **Logical Operators**: Used to combine conditional statements.

3. **Control Structures**
   - **Conditional Statements**: Used for branching logic.
   - **Loops**: Used for repeated execution of code blocks.

4. **Functions**
   - Functions are reusable blocks of code that perform a specific task.

5. **Comments**
   - Comments are non-executable lines in the code, used for explanations or notes.

6. **Input and Output**
   - Handling user input and displaying output is common in programming.

7. **Basic Structure of a Program**
   - Most programming languages follow a similar structure for writing a program.

**Conclusion**
Understanding the basic syntax of programming languages is crucial for writing code effectively. Each language may have its unique syntax, but the fundamental concepts remain consistent across languages. Once you grasp these basics, you can dive deeper into specific languages and explore their advanced features.`;
      } else {
        botResponse = "I'm sorry, I don't have information on that topic.";
      }

      // Add bot response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: 'bot' },
      ]);

      // Clear input field
      setInput('');
    }
  };

  // Predefined question prompts
  const questionPrompts = [
    'Introduction to the Programming language?',
    'Basic syntax of programming languages?',
  ];

  // Handle click on question prompt
  const handlePromptClick = (question) => {
    setInput(question);
    setShowPrompts(false); // Hide prompts after selecting a question
  };

  return (
    <div className="flex flex-col h-screen p-5 bg-white">
      {/* Back to Document Selection */}
      <button
        onClick={() => navigate('/')}
        className="text-gray-500 text-xs w-40 mb-4 cursor-pointer hover:text-gray-700 transition"
      >
        ← Back to Document Selection
      </button>
      {/* Chat Section */}
      <div className="flex-grow mt-5">
        <div className="h-96 overflow-y-auto border border-gray-300 p-4 rounded-lg bg-white">
          {messages.map((msg, index) => (
            <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <span
                className={`inline-block px-4 py-2 rounded-lg ${
                  msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}

          {/* Question Prompts within Chat Section */}
          {showPrompts && (
            <div className="mt-4">
              <p className="font-semibold text-gray-600 mb-2 text-center leading-relaxed">
                ✉️
                <br />
                Ask SEC Insights questions about the 
                <br />
                documents you've selected, such as:
              </p>

              {questionPrompts.map((prompt, index) => (
                <div className="flex justify-center" key={index}>
                  <button
                    onClick={() => handlePromptClick(prompt)}
                    className="flex justify-center items-center w-full max-w-xs mb-2 p-2 bg-gray-100 border border-gray-300 rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-600 text-sm ml-4"
                  >
                    {prompt}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Input Section */}
      <form onSubmit={handleChatSubmit} className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start typing your question..."
          className="flex-grow p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="ml-3 p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 focus:outline-none"
        >
          ↑
        </button>
      </form>
    </div>
  );
};

export default ChatBot;





