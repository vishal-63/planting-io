import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit, FiEye } from "react-icons/fi";

import {
  DashboardCard,
  DashboardTable,
} from "../../Components/Dashboard Items/DashboardElements";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import ModalContainer from "../../Components/Backdrop";

import { AdminMenu } from "../../data/dashboard-menu-items";
import { complaints } from "../../data/complaints";
import {
  ComplaintDescription,
  ComplaintModalWrapper,
  Container,
  Icon,
  Row,
  Title,
  ComplaintReply,
  Grid,
  ComplaintStatus,
} from "../../Components/ComplaintElements";
import { DashboardButton } from "../../Components/DashboardInputs";

const Complaints = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeComplaint, setActiveComplaint] = useState({});

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const openModal = (complaint) => {
    setActiveComplaint(complaint);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <DashboardHeader toggleMenu={toggleMenu} name="Admin" />
      <DashboardMenu
        activePage="complaints"
        menuOpen={menuOpen}
        listItems={AdminMenu}
      />
      <Container>
        <DashboardCard style={{ padding: "1.5rem" }}>
          <Title>Complaints</Title>
          <DashboardTable>
            <thead>
              <tr>
                <th>Complaint Id</th>
                <th>Complaint</th>
                <th>Issued By</th>
                <th>Issue Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint, index) => (
                <tr key={index}>
                  <td>{complaint.id}</td>
                  <td style={{ maxWidth: "300px" }}>
                    <p>{complaint.subject}</p>
                    <ComplaintDescription>
                      {complaint.description}
                    </ComplaintDescription>
                  </td>
                  <td>{complaint.issuedBy}</td>
                  <td>{complaint.issueDate}</td>
                  <td className={`complaint-status ${complaint.statusClass}`}>
                    {complaint.status}
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      {/* <Icon className="view">
                        <FiEye />
                      </Icon> */}
                      <Icon
                        className="edit"
                        onClick={() => openModal(complaint)}
                      >
                        <FiEdit />
                      </Icon>
                      <Icon className="delete">
                        <AiOutlineDelete />
                      </Icon>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </DashboardTable>

          {modalOpen && (
            <ComplaintModal
              handleClose={closeModal}
              complaint={activeComplaint}
            />
          )}
        </DashboardCard>
      </Container>
    </>
  );
};

const ComplaintModal = ({ handleClose, complaint }) => {
  return (
    <ModalContainer onClick={handleClose}>
      <ComplaintModalWrapper onClick={(e) => e.stopPropagation()}>
        <div className="id">{complaint.id}</div>
        <ComplaintStatus className={complaint.statusClass}>
          {complaint.status}
        </ComplaintStatus>
        <Grid>
          <div className="heading">Issue Date:</div>{" "}
          <div className="content">{complaint.issueDate}</div>
          <div className="heading">Issued By:</div>{" "}
          <div className="content">{complaint.issuedBy}</div>
          <div className="heading">Subject:</div>
          <div className="content">{complaint.subject}</div>
          <div className="heading">Description:</div>
          <div className="content">{complaint.description}</div>
        </Grid>

        <ComplaintReply
          rows={5}
          placeholder="Reply to the Complaint"
          disabled={complaint.status === "Resolved" ? true : false}
        ></ComplaintReply>
        <div>
          <DashboardButton type="submit" className="primary">
            Save
          </DashboardButton>
          <DashboardButton className="cancel">Cancel</DashboardButton>
        </div>
      </ComplaintModalWrapper>
    </ModalContainer>
  );
};

export default Complaints;
