import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import {
  DashboardCard,
  DashboardTable,
} from "../../../../Components/Dashboard Items/DashboardElements";
import DashboardHeader from "../../../../Components/DashboardHeader";
import DashboardMenu from "../../../../Components/DashboardMenu";

import { NurseryMenu } from "../../../../data/dashboard-menu-items";
import { services } from "../../../../data/service";
import { Cookies } from "react-cookie";
import ModalContainer from "../../../../Components/Backdrop";
import {
  Modalbutton,
  ModalDiv,
} from "../../../../Components/DashboardHeader/DashboardHeaderElements";
import { IoRemoveCircleOutline } from "react-icons/io5";

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

const ManageServices = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [services, setServices] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteServiceId, setDeleteServiceId] = useState("");

  const navigate = useNavigate();

  useEffect(async () => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);

    if (new Cookies().get("nurseryId") !== undefined) {
      const res = await fetch("http://localhost:8080/api/service/get", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
        },
      });
      const body = await res.json();
      setServices(body);
    } else {
      navigate("/nursery/login");
    }
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClose = () => setModalOpen(false);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} />
      <DashboardMenu
        activePage="manage-services"
        menuOpen={menuOpen}
        listItems={NurseryMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1rem" }}>
          <Title>Your Services</Title>
          <DashboardTable className="order-list">
            <thead>
              <tr>
                <th>Service Type</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index}>
                  <td>{service.type}</td>
                  <td>{service.price}</td>
                  <td>{service.discount}</td>
                  <td style={{ maxWidth: "250px" }}>
                    <p
                      style={{
                        width: "inherit",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {service.details}
                    </p>
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Link
                        to={`/nursery/dashboard/manage-services/${service.id}`}
                      >
                        <Icon className="edit">
                          <FiEdit />
                        </Icon>
                      </Link>
                      <Icon
                        className="delete"
                        onClick={() => {
                          setDeleteServiceId(service.id);
                          setModalOpen(true);
                        }}
                      >
                        <AiOutlineDelete />
                      </Icon>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </DashboardTable>
        </DashboardCard>

        {modalOpen && (
          <DeleteModal handleClose={handleClose} serviceId={deleteServiceId} />
        )}
      </Container>
    </>
  );
};

const DeleteModal = ({ handleClose, serviceId }) => {
  const deactivateService = async () => {
    const res = await fetch(
      `http://localhost:8080/api/service/deactivate/${serviceId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${new Cookies().get("nurseryId")}`,
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

export default ManageServices;
