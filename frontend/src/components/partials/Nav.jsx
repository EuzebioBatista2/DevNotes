import {
  AuthContainer,
  AuthLink,
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
        <AuthLink to="/dashboard/profile">
          <UserName title={name}>{name}</UserName>
        </AuthLink>
        <AuthLink to="/dashboard/profile">
          <ProfileImage src="/images/imageProfile.webp" />
        </AuthLink>
      </AuthContainer>
    </NavContainer>
  );
}
