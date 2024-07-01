import { Link } from "react-router-dom";
import {
  AuthContainer,
  Logo,
  NavContainer,
  NavLink,
  ProfileImage,
  UserName,
} from "./Nav.style";

export default function Nav({ name }) {
  return (
    <NavContainer>
      <NavLink to="/dashboard">
        <Logo>DevNotes</Logo>
      </NavLink>

      <AuthContainer>
        <NavLink to="/profile">
          <UserName>{name}</UserName>
        </NavLink>
        <NavLink to="/profile">
          <ProfileImage src="/images/imageProfile.webp" />
        </NavLink>
      </AuthContainer>
    </NavContainer>
  );
}
