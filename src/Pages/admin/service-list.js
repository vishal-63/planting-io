import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { Cookies } from "react-cookie";
import { FiEye } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { BsKeyFill } from "react-icons/bs";

import { AdminMenu } from "../../data/dashboard-menu-items";

import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import {
  DashboardCard,
  DashboardTable,
} from "../../Components/Dashboard Items/DashboardElements";
import ModalContainer from "../../Components/Backdrop";
import ProductModal from "../../Components/ProductModal";
import {
  Modalbutton,
  ModalDiv,
} from "../../Components/DashboardHeader/DashboardHeaderElements";

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

const ServiceList = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeServices, setActiveServices] = useState([]);
  const [inActiveServices, setInActiveServices] = useState([]);

  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState({});

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deactivateServiceId, setDeactivateServiceId] = useState("");

  const jwt = new Cookies().get("adminId");

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "http://localhost:8080/api/admin/get-all-services",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      const body = await res.json();

      setActiveServices(
        _.remove(body, (service) => {
          return service.is_active;
        })
      );
      setInActiveServices(
        _.remove(body, (service) => {
          return !service.is_active;
        })
      );
    }
    fetchData();
  }, [jwt]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const getService = async (id) => {
    console.log(id);
    const res = await fetch(
      `http://localhost:8080/api/admin/get-service/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const body = await res.json();
    setCurrentService(body);
    setServiceModalOpen(true);
  };

  const handleModalClose = () => {
    setServiceModalOpen(false);
    setDeleteModalOpen(false);
  };

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="service-list"
        menuOpen={menuOpen}
        listItems={AdminMenu}
        adminPage
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Services List</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Service Id</th>
                <th>Service Type</th>
                <th>Nursery Name</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeServices.map((service, index) => (
                <tr key={index}>
                  <td>#{service.id}</td>
                  <td>{service.type}</td>
                  <td>{service.nurseryName}</td>
                  <td>{service.price}.00</td>
                  <td>{service.discount}.00</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Icon
                        className="edit"
                        onClick={() => getService(service.id)}
                      >
                        <FiEye />
                      </Icon>
                      <Icon
                        className="delete"
                        onClick={() => {
                          setDeactivateServiceId(service.id);
                          setDeleteModalOpen(true);
                        }}
                      >
                        <AiOutlineDelete />
                      </Icon>
                    </div>
                  </td>
                </tr>
              ))}
              {inActiveServices.map((service, index) => (
                <tr key={index} className="inactive">
                  <td>#{service.id}</td>
                  <td>{service.type}</td>
                  <td>{service.nurseryName}</td>
                  <td>{service.price}.00</td>
                  <td>{service.discount}.00</td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Icon
                        className="edit"
                        onClick={() => getService(service.id)}
                      >
                        <FiEye />
                      </Icon>
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

        {serviceModalOpen && (
          <ServiceInfo
            item={currentService}
            handleModalClose={handleModalClose}
          />
        )}

        {deleteModalOpen && (
          <DeleteModal
            handleClose={handleModalClose}
            serviceId={deactivateServiceId}
          />
        )}
      </Container>
    </>
  );
};

const ServiceInfo = ({ item, handleModalClose }) => {
  return (
    <ModalContainer onClick={handleModalClose}>
      <ProductModal item={item} />
    </ModalContainer>
  );
};

const DeleteModal = ({ handleClose, serviceId }) => {
  const deactivateService = async () => {
    const res = await fetch(
      `http://localhost:8080/api/service/deactivate/${serviceId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${new Cookies().get("adminId")}`,
        },
      }
    );
    const body = await res.text();
    console.log(body);
    if (res.ok) setTimeout(() => handleClose(), 1000);
  };
  return (
    <ModalContainer onClick={handleClose}>
      <ModalDiv onClick={(e) => e.stopPropagation()}>
        <div>
          <span>
            <IoRemoveCircleOutline />
          </span>
          Are you sure you want to deactivate this service? <br />
        </div>
        <div>
          <Modalbutton className="cancel" onClick={handleClose}>
            Cancel
          </Modalbutton>
          <Modalbutton className="logout" onClick={deactivateService}>
            Yes
          </Modalbutton>
        </div>
      </ModalDiv>
    </ModalContainer>
  );
};

export default ServiceList;
