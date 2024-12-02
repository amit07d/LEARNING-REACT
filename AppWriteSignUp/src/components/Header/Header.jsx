import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status); // Tracks authentication status
  const navigate = useNavigate();

  // Navigation items based on authentication status
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true, // Always active
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus, // Active if not logged in
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus, // Active if not logged in
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus, // Active if logged in
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus, // Active if logged in
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          {/* Logo Section */}
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          {/* Navigation Items */}
          <ul className="flex ml-auto items-center">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="ml-4">
                    <button
                      onClick={() => navigate(item.slug)}
                      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {/* Logout Button */}
            {authStatus && (
              <li className="ml-4">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
