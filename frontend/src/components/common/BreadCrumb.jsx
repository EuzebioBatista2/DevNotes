import { CrumbLink, CrumbText, Nav } from "./BreadCrumb.style";

export default function BreadCrumb() {
  return (
    <Nav>
      <CrumbLink to="/dashboard/folders">Folders</CrumbLink>
      <CrumbText>&gt;</CrumbText>
      <CrumbText>Files</CrumbText>
    </Nav>
  );
}
