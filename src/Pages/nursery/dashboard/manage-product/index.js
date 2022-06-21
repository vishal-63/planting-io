import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";
import { Cookies } from "react-cookie";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsKeyFill } from "react-icons/bs";

import { NurseryMenu } from "../../../../data/dashboard-menu-items";

import DashboardHeader from "../../../../Components/DashboardHeader";
import DashboardMenu from "../../../../Components/DashboardMenu";
import {
  DashboardCard,
  DashboardTable,
} from "../../../../Components/Dashboard Items/DashboardElements";
import ModalContainer from "../../../../Components/Backdrop";
import {
  Modalbutton,
  ModalDiv,
} from "../../../../Components/DashboardHeader/DashboardHeaderElements";

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
  &.view {
    background-color: #2e7bc2;
  }
  &.delete {
    background-color: #e16565;
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

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");

  const [selectedOption, setSelectedOption] = useState("Plant");
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [activeProducts, setActiveProducts] = useState([]);
  const [inactiveProducts, setInactiveProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(async () => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);

    if (new Cookies().get("nurseryId") !== undefined) {
      const res = await fetch("http://localhost:8080/api/product/get", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
        },
      });
      const body = await res.json();
      setProducts(body);
      setFilteredProducts(_.filter(body, { type: "Plant" }));
    } else {
      navigate("/nursery/login");
    }
  }, [setMenuOpen]);

  useEffect(() => {
    setActiveProducts(
      _.remove(filteredProducts, (product) => {
        return product.active;
      })
    );
    setInactiveProducts(
      _.remove(filteredProducts, (product) => {
        return !product.active;
      })
    );
  }, [filteredProducts]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClose = () => setModalOpen(false);

  const filterProducts = (productType) => {
    setSelectedOption(productType);
    setFilteredProducts(_.filter(products, { type: productType }));
  };

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="manage-products"
        menuOpen={menuOpen}
        listItems={NurseryMenu}
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
            <Title>Your Products</Title>
            <FilterDropdownContainer>
              <div
                className="label"
                onClick={() => setDropdownMenuOpen(!dropdownMenuOpen)}
              >
                Filter: {selectedOption}{" "}
                <span>
                  <RiArrowDropDownLine />
                </span>
              </div>
              <DropdownMenu isVisible={dropdownMenuOpen}>
                <li onClick={() => filterProducts("Plant")}>Plants</li>
                <li onClick={() => filterProducts("Seed")}>Seeds</li>
                <li onClick={() => filterProducts("Tool")}>Tools</li>
              </DropdownMenu>
            </FilterDropdownContainer>
          </div>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {activeProducts.map((product, index) => (
                <tr key={index}>
                  <td style={{ width: "12%" }}>
                    <img src={product.photoPath[0]} alt={product.name} />
                  </td>
                  <td style={{ width: "18%" }}>{product.name}</td>
                  <td>{product.type}</td>
                  <td>{product.price}</td>
                  <td>{product.discount}</td>
                  <td>{product.quantity}</td>

                  <td>
                    <div style={{ display: "flex" }}>
                      <Link
                        to={`/nursery/dashboard/manage-products/${product.id}`}
                      >
                        <Icon className="edit">
                          <FiEdit />
                        </Icon>
                      </Link>
                      <Icon
                        className="delete"
                        onClick={() => {
                          setDeleteProductId(product.id);
                          setModalOpen(true);
                        }}
                      >
                        <AiOutlineDelete />
                      </Icon>
                    </div>
                  </td>
                </tr>
              ))}
              {inactiveProducts.map((product, index) => (
                <tr key={index} className="inactive">
                  <td style={{ width: "12%" }}>
                    <img src={product.photoPath[0]} alt={product.name} />
                  </td>
                  <td style={{ width: "18%" }}>{product.name}</td>
                  <td>{product.type}</td>
                  <td>{product.price}</td>
                  <td>{product.discount}</td>
                  <td>{product.quantity}</td>

                  <td>
                    <div style={{ display: "flex" }}>
                      <Link
                        to={`/nursery/dashboard/manage-products/${product.id}`}
                      >
                        <Icon className="edit">
                          <FiEdit />
                        </Icon>
                      </Link>
                      <Icon className="view">
                        <BsKeyFill />
                      </Icon>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </DashboardTable>
        </DashboardCard>

        {modalOpen && (
          <DeleteModal handleClose={handleClose} productId={deleteProductId} />
        )}
      </Container>
    </>
  );
};

const DeleteModal = ({ handleClose, productId }) => {
  const deactivateProduct = async () => {
    const res = await fetch(
      `http://localhost:8080/api/product/nursery-deactivate/${productId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
        },
      }
    );
    const body = await res.text();
    if (res.ok) setTimeout(() => handleClose(), 1000);
  };
  return (
    <ModalContainer onClick={handleClose}>
      <ModalDiv onClick={(e) => e.stopPropagation()}>
        <div>
          <span>
            <IoRemoveCircleOutline />
          </span>
          Are you sure you want to deactivate this product? <br />
        </div>
        <div>
          <Modalbutton className="cancel" onClick={handleClose}>
            Cancel
          </Modalbutton>
          <Modalbutton className="logout" onClick={deactivateProduct}>
            Yes
          </Modalbutton>
        </div>
      </ModalDiv>
    </ModalContainer>
  );
};

export default ManageProducts;
