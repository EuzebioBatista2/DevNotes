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
        <NavLink to="/dashboard/profile">
          <UserName>{name}</UserName>
        </NavLink>
        <NavLink to="/dashboard/profile">
          <ProfileImage src="/images/imageProfile.webp" />
        </NavLink>
      </AuthContainer>
    </NavContainer>
  );
}
