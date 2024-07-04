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
} from "./EditFile.style.js";
import Context from "../context/UserContext.jsx";
import Nav from "../partials/Nav";
import DashboardLayout from "../layouts/DashboardLayout";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Input from "../common/Input";
import { useParams } from "react-router-dom";

export default function EditFile() {
  const { folderId, fileId } = useParams();
  const { authenticated, getFile, updateFile } = useContext(Context);
  const [user, setUser] = useState({});
  const [file, setFile] = useState({ _id: "", name: "" });
  const [token] = useState(localStorage.getItem("devNotes@token") || "");

  function handleChange(e) {
    e.preventDefault();
    setFile({ ...file, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateFile(folderId, file);
  }

  useEffect(() => {
    async function fetchData() {
      const data = await authenticated(token);
      const dataFile = await getFile(folderId, fileId);
      if (data && dataFile) {
        setUser(data);
        setFile({ _id: dataFile._id, name: dataFile.name });
      }
    }

    fetchData();
  }, [token, authenticated]);

  return (
    <DashboardLayout>
      <Nav name={user.name} />
      <Container>
        <FormContainer>
          <HeaderContainer>
            <Icon icon={faFileCircleCheck} />
            <Title>Edit your file</Title>
          </HeaderContainer>
          <DataContainer onSubmit={handleSubmit}>
            <Input
              type={"text"}
              text={"File name"}
              name={"name"}
              value={file.name}
              placeholder={"Enter the file name"}
              handelOnChange={handleChange}
            />
            <Buttons>
              <AddButton>Update</AddButton>
              <LinkButton to={`/dashboard/files/${folderId}`}>Back</LinkButton>
            </Buttons>
          </DataContainer>
          <SubText>Edit the file and write your notes.</SubText>
        </FormContainer>
      </Container>
    </DashboardLayout>
  );
}
