
function Navbar() {
    return (
        <div>
            {/* navbar-section */}
            <navbar>
                <nav className="navbar-sec">
                    <div className="left-column">
                        <a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="react-logo" />React</a>

                    </div>
                    <div className="mid-column">
                        <a href="">Docs</a>
                        <a href="">Tutorials</a>
                        <a href="">Blogs</a>
                        <a href="">Comunity</a>
                    </div>
                    <div className="right-column">
                        <input type="text" placeholder="Search" />
                        <a href="#">v18.2.0</a>
                        <a href="#">Languages</a>
                        <a href="#">Github</a>
                    </div>
                </nav>
            </navbar>
        </div>
    );
};

export default Navbar;