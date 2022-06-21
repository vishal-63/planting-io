import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";

import {
  DashboardCard,
  DashboardTable,
} from "../../Components/Dashboard Items/DashboardElements";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import ModalContainer from "../../Components/Backdrop";
import { AdminMenu } from "../../data/dashboard-menu-items";
import {
  ComplaintDescription,
  ComplaintModalWrapper,
  Container,
  Icon,
  Title,
  ComplaintReply,
  Grid,
  ComplaintStatus,
} from "../../Components/ComplaintElements";
import { DashboardButton } from "../../Components/DashboardInputs";
import { Cookies } from "react-cookie";

const Complaints = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeComplaint, setActiveComplaint] = useState({});
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8080/api/complaint/get-all", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${new Cookies().get("adminId")}`,
        },
      });
      const body = await res.json();
      setComplaints(body);
    }
    fetchData();
  }, []);

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
        adminPage
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
                  <td>#{complaint.complaintId}</td>
                  <td style={{ maxWidth: "300px" }}>
                    <p>{complaint.complaintSubject}</p>
                    <ComplaintDescription>
                      {complaint.complaintDescription}
                    </ComplaintDescription>
                  </td>
                  <td>{complaint.userName}</td>
                  <td>{complaint.issueDate}</td>
                  <td
                    className={`complaint-status ${
                      complaint.resolved ? "resolved" : "unresolved"
                    }`}
                  >
                    {complaint.resolved ? "Resolved" : "Unresolved"}
                  </td>
                  <td>
                    <div style={{ display: "flex" }}>
                      <Icon
                        className="edit"
                        onClick={() => openModal(complaint)}
                      >
                        <AiFillEdit />
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
  const [reply, setReply] = useState(complaint.reply);

  const replyToComplaint = async () => {
    const formData = new FormData();
    formData.set("reply", reply);
    const res = await fetch(
      `http://localhost:8080/api/complaint/reply/${complaint.complaintId}`,
      {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${new Cookies().get("adminId")}`,
        },
      }
    );
  };

  return (
    <ModalContainer onClick={handleClose}>
      <ComplaintModalWrapper onClick={(e) => e.stopPropagation()}>
        <div className="id">#{complaint.complaintId}</div>
        <ComplaintStatus
          className={complaint.resolved ? "resolved" : "unresolved"}
        >
          {complaint.resolved ? "Resolved" : "Unresolved"}
        </ComplaintStatus>
        <Grid>
          <div className="heading">Issue Date:</div>{" "}
          <div className="content">{complaint.issueDate}</div>
          <div className="heading">Issued By:</div>{" "}
          <div className="content">{complaint.userName}</div>
          <div className="heading">Subject:</div>
          <div className="content">{complaint.complaintSubject}</div>
          <div className="heading">Description:</div>
          <div className="content">{complaint.complaintDescription}</div>
        </Grid>

        <ComplaintReply
          rows={5}
          placeholder="Reply to the Complaint"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          disabled={complaint.status === "Resolved" ? true : false}
        ></ComplaintReply>
        <div>
          <DashboardButton
            type="submit"
            className="primary"
            onClick={replyToComplaint}
          >
            Save
          </DashboardButton>
          <DashboardButton className="cancel" onClick={handleClose}>
            Cancel
          </DashboardButton>
        </div>
      </ComplaintModalWrapper>
    </ModalContainer>
  );
};

export default Complaints;
