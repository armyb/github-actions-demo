import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          github action 示例 (React 项目发布到 GitHub Pages)
        </p>
        
        <a
          className="App-link"
          href="http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn github action
        </a>
      </header>
    </div>
  );
}

export default App;
