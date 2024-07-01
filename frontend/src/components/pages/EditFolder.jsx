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
} from "./EditFolder.style";
import Context from "../context/UserContext.jsx";
import Nav from "../partials/Nav";
import DashboardLayout from "../layouts/DashboardLayout";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Input from "../common/Input";
import { useParams } from "react-router-dom";

export default function EditFolder() {
  const { id } = useParams();
  const { editFolder, getFolder, authenticated } = useContext(Context);
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
    editFolder(folder);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await authenticated(token);
      await setUser(data);

      const folder = await getFolder(id);
      await setFolder(folder);
    }

    fetchData();
  }, [token, authenticated]);

  return (
    <DashboardLayout>
      <Nav name={user.name} />
      <Container>
        <FormContainer>
          <HeaderContainer>
            <Icon icon={faFolderPlus} color={folder.color} />
            <Title>Edit your folder</Title>
          </HeaderContainer>
          <DataContainer onSubmit={handleSubmit}>
            <Input
              type={"text"}
              text={"Folder name"}
              name={"name"}
              value={folder.name || ""}
              placeholder={"Enter the folder name"}
              handelOnChange={handleChange}
            />
            <Input
              type={"color"}
              text={"Folder color"}
              name={"color"}
              value={folder.color || "#000000"}
              placeholder={"Select the folder color"}
              handelOnChange={handleColorChange}
            />
            <Buttons>
              <AddButton>Update</AddButton>
              <LinkButton to="/dashboard/folders">Back</LinkButton>
            </Buttons>
          </DataContainer>
          <SubText>Edit your folder however you want.</SubText>
        </FormContainer>
      </Container>
    </DashboardLayout>
  );
}
