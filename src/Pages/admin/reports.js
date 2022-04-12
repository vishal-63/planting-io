import styled from "styled-components";
import { FiEdit, FiEye } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import React, { useEffect, useRef, useState } from "react";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import AdminDashboardItems from "../../Components/Admin Dashboard Items";
import { AdminMenu } from "../../data/dashboard-menu-items";
import {
  DashboardCard,
  DashboardTable,
  DashboardTableStatus,
} from "../../Components/Dashboard Items/DashboardElements";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import ModalContainer from "../../Components/Backdrop";
import ProductModal from "../../Components/ProductModal";
import {
  Modalbutton,
  ModalDiv,
} from "../../Components/DashboardHeader/DashboardHeaderElements";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { BsKeyFill } from "react-icons/bs";
import _ from "lodash";
import { RiArrowDropDownLine } from "react-icons/ri";
import logo from "../../Images/logo.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { PDFExport } from "@progress/kendo-react-pdf";

const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #fbfbfb;
  padding: 2.5rem 1.5rem;
  position: relative;

  @media (min-width: 1100px) {
    width: calc(100vw - 275px);
    left: 275px;
  }
`;

const Title = styled.h4`
  font-size: 1.1rem;
  color: #444;
  font-weight: 500;
  margin: 1rem;
`;

const Icon = styled.span`
  color: #fff;
  font-size: 0.85rem;
  width: fit-content;
  margin-right: 0.5rem;
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.edit {
    background-color: #2ec272;
  }
  &.delete {
    background-color: #e16565;
  }
  &.view {
    background-color: #2e7bc2;
  }
`;

const FilterDropdownContainer = styled.div`
  color: #3f3f3f;
  position: relative;
  font-size: 1rem;
  cursor: pointer;

  & .label {
    display: flex;
  }

  & span {
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }
`;

const DropdownMenu = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  position: absolute;
  top: 100%;
  right: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);

  & li {
    padding: 0.5rem 1rem;
    cursor: pointer;

    &:hover {
      background-color: #21a021;
      color: #fff;
    }
  }
`;

const Reports = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [nurseries, setNurseries] = useState([]);
  const [services, setServices] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState([]);
  const [inactiveProducts, setInactiveProducts] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const [deactivateProductId, setDeactivateProductId] = useState("");

  const [currentProduct, setCurrentProduct] = useState({});

  const [jwt, setJwt] = useState(new Cookies().get("adminId"));

  const [selectedOption, setSelectedOption] = useState("Users");
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  React.useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(async () => {
    const res = await fetch(
      "http://localhost:8080/api/admin/get-all-products",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const body = await res.json();
    console.log(body);
    setProducts(body);
  }, []);

  // useEffect(async () => {
  //   const res = await fetch(
  //     "http://localhost:8080/api/admin/get-all-services",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${jwt}`,
  //       },
  //     }
  //   );
  //   const body = await res.json();
  //   console.log(body);
  //   setServices(body);
  // }, []);

  //   useEffect(async () => {
  //     const res = await fetch("http://localhost:8080/api/admin/get-all-users", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${jwt}`,
  //       },
  //     });
  //     const body = await res.json();
  //     console.log(body);
  //     setUsers(body);
  //   }, []);

  //   useEffect(async () => {
  //     const res = await fetch(
  //       "http://localhost:8080/api/admin/get-all-nurseries",
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${jwt}`,
  //         },
  //       }
  //     );
  //     const body = await res.json();
  //     console.log(body);
  //     setNurseries(body);
  //   }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const downloadReport = () => {
    const input = document.getElementById("report");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="report"
        menuOpen={menuOpen}
        listItems={AdminMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title>Services</Title>
            <FilterDropdownContainer>
              <div
                className="label"
                onClick={() => setDropdownMenuOpen(!dropdownMenuOpen)}
              >
                Filter: Services{" "}
                <span>
                  <RiArrowDropDownLine />
                </span>
              </div>
              <DropdownMenu isVisible={dropdownMenuOpen}>
                <li>Users</li>
                <li>Nurseries</li>
                <li>Products</li>
                <li>Services</li>
              </DropdownMenu>
            </FilterDropdownContainer>
          </div>
          <button onClick={handleExportWithComponent}>Download</button>
          <PDFExport fileName="report.pdf" ref={pdfExportComponent}>
            <div
              id="report"
              style={{
                width: 692,
                height: 712,
                overflowX: "hidden",
                overflowY: "scroll",
              }}
            >
              <img src={logo} alt="" />
              <DashboardTable className="order-list">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Nursery Name</th>
                    {/* <th>Nursery Name</th> */}
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td>#{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.type}</td>
                      {/*<td>{product.email}</td>
                  <td>{product.phone}</td>
                  <td>{product.address}</td> */}
                      <td>{product.nurseryName}</td>
                      <td>{product.price}.00</td>
                      <td>{product.discount}.00</td>
                      <td>{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </DashboardTable>
            </div>
          </PDFExport>
        </DashboardCard>
      </Container>
    </>
  );
};
export default Reports;
