import logo from "../images/troll-face.png"

export default function Header(){
  return (
      <header className="header">
      <img src={logo} className="logo" />
      <h2 className="header--main">Meme Generator</h2>
      <h4 className="header--text">Project</h4>
      </header>
  )
}