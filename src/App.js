import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header"></div>
      <div class="overlay">
       <div class="logBox">
       <img src="https://jamianooriya.in/wp-content/uploads/2023/02/jamia-web-logo-1.png" class="logo"></img>
          <h2>Login</h2>
          <form action="/submit-login" method="post">
            <input type="text" class="txtbox" name="username" placeholder="Username" required /><br />
            <input type="password" class="txtbox" name="password" placeholder="Password" required /><br />
            <input type="submit" value="Login" class="btnOk" />
        </form>
          </div>
      </div>
    </div>
       
  );
}

export default App;
