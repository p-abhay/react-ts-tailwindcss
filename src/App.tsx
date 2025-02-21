function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="font-sans text-4xl font-bold">
          Vite + React + Typescript + Tailwind CSS <br />
          <div className="text-center mt-2">Starter Template</div>
        </p>
        <ul className="mt-8 list-disc font-mono text-2xl">
          <li>Vite 6.1</li>
          <li>React 19.0</li>
          <li>Typescript 5.7</li>
          <li>Tailwind CSS 4.0</li>
          <li>
            tailwind.config.ts for Tailwind CSS IntelliSense(VS Code Extension)
          </li>
          <li>eslint</li>
        </ul>
      </div>
    </>
  );
}

export default App;
