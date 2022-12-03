
const data = [
    {
        id: 1,
        title: 'Declarative',
        desc1: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        desc2: "Declarative views make your code more predictable and easier to debug."
    },
    {
        id: 1,
        title: 'Component-Based',
        desc1: "Build encapsulated components that manage their own state, then compose them to make complex UIs.",
        desc2: "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."
    },
    {
        id: 1,
        title: 'Learn Once, Write Anywhere',
        desc1: "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.",
        desc2: "React can also render on the server using Node and power mobile apps using React Native."
    }
]

function Main() {
    return (
        <div>
            {/* main-section */}

            <div className="main-sec">
                <div className="first-row">
                    {
                        data.map((value) => (
                            <div className="card">
                                <h3>{value.title}</h3>
                                <p>{value.desc1}</p>
                                <p>{value.desc2}</p>
                            </div>
                        )
                        )
                    }
                </div>
            </div>

        </div>
    );
}
export default Main;