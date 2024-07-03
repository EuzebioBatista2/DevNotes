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
} from "./NewFile.style.js";
import Context from "../context/UserContext.jsx";
import Nav from "../partials/Nav";
import DashboardLayout from "../layouts/DashboardLayout";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Input from "../common/Input";
import { useParams } from "react-router-dom";

export default function NewFile() {
  const { folderId } = useParams();
  const { authenticated, verifyFolder, newFile } = useContext(Context);
  const [user, setUser] = useState({});
  const [file, setFile] = useState({});
  const [token] = useState(localStorage.getItem("devNotes@token") || "");

  function handleChange(e) {
    e.preventDefault();
    setFile({ [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    newFile(folderId, file);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await authenticated(token);
      setUser(data);
      await verifyFolder(folderId);
    }

    fetchData();
  }, [token, authenticated]);

  return (
    <DashboardLayout>
      <Nav name={user.name} />
      <Container>
        <FormContainer>
          <HeaderContainer>
            <Icon icon={faFileCirclePlus} />
            <Title>Create your file</Title>
          </HeaderContainer>
          <DataContainer onSubmit={handleSubmit}>
            <Input
              type={"text"}
              text={"File name"}
              name={"name"}
              placeholder={"Enter the file name"}
              handelOnChange={handleChange}
            />
            <Buttons>
              <AddButton>Create</AddButton>
              <LinkButton to={`/dashboard/files/${folderId}`}>Back</LinkButton>
            </Buttons>
          </DataContainer>
          <SubText>Create a new file and write your notes.</SubText>
        </FormContainer>
      </Container>
    </DashboardLayout>
  );
}
