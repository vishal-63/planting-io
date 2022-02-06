import React, { useEffect, useState } from "react";
import {
  DashboardCard,
  DashboardTable,
} from "../../Components/Dashboard Items/DashboardElements";
import DashboardHeader from "../../Components/DashboardHeader";
import DashboardMenu from "../../Components/DashboardMenu";
import { AdminMenu } from "../../data/dashboard-menu-items";
import { complaints } from "../../data/complaints";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit, FiEye } from "react-icons/fi";
import styled from "styled-components";

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
  margin-bottom: 1rem;
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

const Complaints = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.innerWidth >= 1100 ? setMenuOpen(true) : setMenuOpen(false);
  }, [setMenuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
                      <Icon className="view">
                        <FiEye />
                      </Icon>
                      <Icon className="edit">
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
        </DashboardCard>
      </Container>
    </>
  );
};

export default Complaints;

const ComplaintDescription = styled.p`
  color: #5c5b5b;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: inherit;
`;
