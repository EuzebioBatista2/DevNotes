import { useContext, useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Context from "../context/UserContext";
import Nav from "../partials/Nav";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import {
  AddButton,
  ButtonText,
  Container,
  FoldersContainer,
  HeaderContainer,
  HeaderText,
  Icon,
  MessageContainer,
} from "./Dashboard.style";
import EmptyFolder from "../common/EmptyFolder";
import Folder from "../common/Folder";
import Loading from "./Loading";

export default function Dashboard() {
  const { authenticated, loading, setLoading } = useContext(Context);
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem("devNotes@token") || "");

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const data = await authenticated(token);
      setUser(data);
    }

    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [token]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DashboardLayout>
          <Nav name={user.name} />
          <Container>
            <HeaderContainer>
              <HeaderText>Folders:</HeaderText>
              <AddButton to="/dashboard/folders/newfolder">
                <ButtonText>New folder</ButtonText>
                <Icon icon={faFolderPlus} />
              </AddButton>
            </HeaderContainer>
            {user.folders && user.folders.length > 0 ? (
              <FoldersContainer>
                {user.folders.map((folder) => (
                  <Folder
                    key={folder._id}
                    id={folder._id}
                    name={folder.name}
                    color={folder.color}
                  />
                ))}
              </FoldersContainer>
            ) : (
              <MessageContainer>
                <EmptyFolder />
              </MessageContainer>
            )}
          </Container>
        </DashboardLayout>
      )}
    </>
  );
}
