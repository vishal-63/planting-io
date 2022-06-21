import React, { useState } from "react";
import { RiPencilFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { useForm } from "react-hook-form";

import {
  AddNew,
  Address,
  AccountButton,
  AccountForm,
  AddressModalContainer,
  AddressWrapper,
  EditAddress,
  Input,
  InputWrapper,
  Label,
  MainWrapper,
  Title,
} from "./AccountElements";
import ModalContainer from "./Backdrop";
import { ValidationError } from "./LoginModal/LoginModalElements";

const addresses = [
  {
    building: "202, Kanak Residency",
    locality: "Pritamnagar, Paldi",
    city: "Ahmedabad",
    pincode: "380007",
    state: "Gujarat",
    country: "India",
  },
  {
    building: "106, Puja Abhishek",
    locality: "Pritamnagar, Paldi",
    city: "Ahmedabad",
    pincode: "380007",
    state: "Gujarat",
    country: "India",
  },
];

const AddressSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [address, setAddress] = useState({});
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (a, title) => {
    setAddress(a);
    setModalTitle(title);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <MainWrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title>Saved Addresses</Title>
        <AddNew onClick={() => openModal({}, "Add New Address")}>
          <IoMdAdd /> Add New Address
        </AddNew>
      </div>
      <AddressWrapper className="addresses">
        {addresses.map((add, index) => (
          <Address key={index}>
            <div className="address-name">Address {index + 1}</div>
            <p>{add.building}</p>
            <p>{add.locality}</p>
            <p>
              {add.city} - {add.pincode}
            </p>
            <p>
              {add.state}, {add.country}
            </p>
            <EditAddress onClick={() => openModal(add, "Edit Address")}>
              <RiPencilFill />
            </EditAddress>
          </Address>
        ))}
      </AddressWrapper>

      {modalOpen && (
        <AddressModal
          address={address}
          title={modalTitle}
          handleClose={closeModal}
        />
      )}
    </MainWrapper>
  );
};

const AddressModal = ({ address, title, handleClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ModalContainer onClick={handleClose}>
      <AddressModalContainer onClick={(e) => e.stopPropagation()}>
        <Title>{title}</Title>
        <AccountForm
          name="address"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputWrapper>
            <Label htmlFor="building">Building</Label>
            <Input
              type="text"
              name="building"
              id="building"
              defaultValue={address.building}
              {...register("building", { required: "Field is required" })}
            />
            <ValidationError>{errors.building?.message}</ValidationError>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="locality">Locality</Label>
            <Input
              type="text"
              name="locality"
              id="locality"
              defaultValue={address.locality}
              {...register("locality", { required: "Field is required" })}
            />
            <ValidationError>{errors.locality?.message}</ValidationError>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              name="city"
              id="city"
              defaultValue={address.city}
              {...register("city", { required: "Field is required" })}
            />
            <ValidationError>{errors.city?.message}</ValidationError>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="pincode">Pin Code</Label>
            <Input
              type="number"
              name="pincode"
              id="pincode"
              defaultValue={address.pincode}
              {...register("pincode", {
                required: "Field is required",
                minLength: { value: 6, message: "Pincode must 6 digits" },
                maxLength: { value: 6, message: "Pincode must 6 digits" },
              })}
            />
            <ValidationError>{errors.pincode?.message}</ValidationError>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="state">State</Label>
            <Input
              type="text"
              name="state"
              id="state"
              defaultValue={address.state}
              {...register("state", { required: "Field is required" })}
            />
            <ValidationError>{errors.state?.message}</ValidationError>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="country">Country</Label>
            <Input
              type="text"
              name="country"
              id="country"
              defaultValue={address.country}
              {...register("country", { required: "Field is required" })}
            />
            <ValidationError>{errors.country?.message}</ValidationError>
          </InputWrapper>
          <div>
            <AccountButton className="primary">Save</AccountButton>
            <AccountButton className="cancel" onClick={handleClose}>
              Cancel
            </AccountButton>
          </div>
        </AccountForm>
      </AddressModalContainer>
    </ModalContainer>
  );
};

export default AddressSection;
