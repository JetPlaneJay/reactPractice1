// import React from "react"
// import ReactDOM from "react-dom"


// ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"))


// ReactDOM.render(
//     <ul>blah!<li>hello</li><li>goodbye</li></ul>, 
//     document.getElementById("root")
//     )


// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }


// function MainContent() {
//     return (
//         <h1>Hello World</h1>
//     )
// }




// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,

//     document.getElementById("root")
//     )


// ReactDOM.render(<h1>Hello!</h1>, document.getElementById("root"))

// const hey = document.createElement("h1")
// hey.textContent = "Hello Again"
// hey.className = "header"
// document.getElementById("root").append(hey)

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)


// {$$typeof: Symbol(react.element), 
// type: 'h1', 
// key: null, 
// ref: null,
//  props: {…}, …}

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )


// ReactDOM.render(
//     page, document.getElementById("root")
// )
// ReactDOM.render(
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>,
//     document.getElementById("root")
//     )

// const navbar = (
//     <nav>
//         <h1>Jay's Page</h1>
//         <ul>
//             <li>Random</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
        
//     </nav>
// )


// ReactDOM.render(
//     navbar, document.getElementById("root")
// )


// const page = (
//     <div>
//         <img src="images/blah.jpg"></img>
//         <h1>Fun Facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Power thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// document.getElementById("root").append(JSON.stringify(page))



// function TemporaryName() {
//     return (
//         <div>
//         <img src="images/blah.jpg"></img>
//         <h1>Fun Facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Power thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     )
// }
// ReactDOM.render(
//     <TemporaryName />, document.getElementById("root")
// )

function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="images/blah.jpg" />
                </nav>
            </header>
            <h1>Reasons I like React</h1>
            <ol>
                <li>It's likely to find me a job</li>
                <li>I see some of the possibilities linking to a database</li>
                <li>I am a fan of web and software software development</li>
            </ol>
            <footer>
            <small>© 2022 Morrell development. All rights reserved.</small>
            </footer>
        </div>

    )
}

ReactDOM.render(
    <Page />, document.getElementById("root")
)


// 1. What is a React component?
// A React component is a peice to a puzzle. The React Component is made of a specific element or elements for a page.
// Each component can be assembled to creat a functioning webpage

// 

// 2. What's wrong with this code?
// ```
// function myComponent() {
//     return (
//         <small>I'm tiny text!</small>
//     )
// }
// ```
// the text is not wrapped in an element

// 3. What's wrong with this code?
// ```
// function Header() {
//     return (
//         <header>
//             <nav>
//                 <img src="./react-logo.png" width="40px" />
//             </nav>
//         </header>
//     )
// }



// ReactDOM.render(Header(), document.getElementById("root"))
// ```
//the ReactDOM Header() should be <Header />