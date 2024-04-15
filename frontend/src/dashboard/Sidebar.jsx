import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiArrowSmLeft, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

import userImg from "../assets/profile.jpg"
import { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";

const SideBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo 
              href="/" 
              img={user?.photoURL || userImg} 
              imgAlt="Logo"
              className="w-16 h-16 "
            >
            <p>{user?.displayName || "User"}</p>
        </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Painel de Controle
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload de Livros
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Gerenciar Livros
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Usuários
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Logar
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiArrowSmLeft}>
            Deslogar
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  )
}

export default SideBar