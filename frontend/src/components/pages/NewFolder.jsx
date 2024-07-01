import { useContext, useEffect, useState } from "react";
import {
  AddButton,
  Buttons,
  Container,
  DataContainer,
  FormContainer,
  HeaderContainer,
  Icon,
  LinkButton,
  SubText,
  Title,
} from "./NewFolder.style";
import Context from "../context/UserContext.jsx";
import Nav from "../partials/Nav";
import DashboardLayout from "../layouts/DashboardLayout";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Input from "../common/Input";

export default function NewFolder() {
  const { newFolder, authenticated } = useContext(Context);
  const [user, setUser] = useState({});
  const [folder, setFolder] = useState({});
  const [color, setColor] = useState("#000000");
  const [token] = useState(localStorage.getItem("devNotes@token") || "");

  function handleChange(e) {
    e.preventDefault();
    setFolder({ ...folder, [e.target.name]: e.target.value });
  }

  function handleColorChange(e) {
    e.preventDefault();
    setColor(e.target.value);
    setFolder({ ...folder, color: `${color}` });
  }

  function handleSubmit(e) {
    e.preventDefault();
    newFolder(folder);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await authenticated(token);
      setFolder({ userId: data.id, color: color });
      await setUser(data);
    }

    fetchData();
  }, [token, authenticated]);

  return (
    <DashboardLayout>
      <Nav name={user.name} />
      <Container>
        <FormContainer>
          <HeaderContainer>
            <Icon icon={faFolderPlus} color={color} />
            <Title>Create your folder</Title>
          </HeaderContainer>
          <DataContainer onSubmit={handleSubmit}>
            <Input
              type={"text"}
              text={"Folder name"}
              name={"name"}
              placeholder={"Enter the folder name"}
              handelOnChange={handleChange}
            />
            <Input
              type={"color"}
              text={"Folder color"}
              name={"color"}
              placeholder={"Select the folder color"}
              handelOnChange={handleColorChange}
            />
            <Buttons>
              <AddButton>Create</AddButton>
              <LinkButton to="/dashboard/folders">Back</LinkButton>
            </Buttons>
          </DataContainer>
          <SubText>Create a new folder and store your files easily.</SubText>
        </FormContainer>
      </Container>
    </DashboardLayout>
  );
}
