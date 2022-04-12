import React, { useState, useEffect } from "react";
import { AiFillCaretDown, AiFillStar, AiOutlineSearch } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
// import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

// import { plants } from "../../data/plants";
import {
  ActualPrice,
  DiscountedPrice,
  PlantCard,
  PlantCardWrapper,
  PlantImg,
  PlantName,
  NurseryName,
  PlantPrice,
  PlantStarsWrapper,
} from "../InfoSection/InfoElements";

import {
  CheckboxLabel,
  PageInfoDiv,
  Pagination,
  ShopContainer,
  Sidebar,
  SidebarLabel,
  SidebarSearch,
  SidebarTitle,
} from "./ShopPageElements";

const ShopPage = ({ items, link }) => {
  const itemsPerPage = 16;

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
    window.scrollTo(0, 0);
  }, [items, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <ShopContainer>
      {/* <Sidebar>
        <div>
          <SidebarTitle>Search</SidebarTitle>
          <SidebarSearch>
            <input type="text" name="search" placeholder="Search our Store" />
            <AiOutlineSearch />
          </SidebarSearch>
        </div>
        <div>
          <SidebarTitle>Categories</SidebarTitle>
          <SidebarLabel>Best Seller</SidebarLabel>
          <SidebarLabel>Recommended</SidebarLabel>
          <SidebarLabel>Top Rated</SidebarLabel>
        </div>
        <div>
          <SidebarTitle>Vendors</SidebarTitle>
          <Checkbox value="shri-ramesh" label="Shri Ramesh Nursery" />
          <Checkbox value="vrundavan" label="Vrundavan Nursery" />
          <Checkbox value="bajrang" label="Bajrang Nursery" />
          <Checkbox value="mother-nature" label="Mother Nature" />
          <span>View All</span>
        </div>
        <div>
          <SidebarTitle>Price</SidebarTitle>
          <Checkbox value="<500" label="Below Rs. 500" />
          <Checkbox value="500-1000" label="Rs.500 - Rs.1000" />
          <Checkbox value="1000-1500" label="Rs.1000 - Rs.1500" />
          <Checkbox value="1500-2000" label="Rs.1500 - Rs.2000" />
          <Checkbox value="2000-2500" label="Rs.2000 - Rs.2500" />
          <Checkbox value="2500-3000" label="Rs.2500 - Rs.3000" />
          <Checkbox value=">3000" label="Above Rs.3000" />
        </div>
      </Sidebar> */}
      <div style={{ width: "100%" }}>
        <PageInfoDiv>
          <span>
            Showing {itemOffset + 1} -{" "}
            {itemOffset + itemsPerPage > items.length
              ? items.length
              : itemOffset + itemsPerPage}{" "}
            of {items.length} Results
          </span>
          <span>{/* Sort By: Alphabetically (A-Z) <AiFillCaretDown /> */}</span>
        </PageInfoDiv>
        <PlantCardWrapper style={{ justifyContent: "space-between" }}>
          <Items currentItems={currentItems} link={link} />
        </PlantCardWrapper>
        <PageInfoDiv className="second">
          <Pagination
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousLabel="Prev"
            breakLabel="..."
            activeClassName="active"
            renderOnZeroPageCount={null}
            previousClassName="previous"
            nextClassName="next"
          />
          <span>
            Showing {itemOffset + 1} -{" "}
            {itemOffset + itemsPerPage > items.length
              ? items.length
              : itemOffset + itemsPerPage}{" "}
            of {items.length} Results
          </span>
        </PageInfoDiv>
      </div>
    </ShopContainer>
  );
};

const Items = ({ currentItems, link }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => {
          item.stars === undefined && (item.stars = 0);
          return (
            <PlantCard key={index}>
              <Link to={`${link}/${item.id}`}>
                <PlantImg src={item.photoPath[0]} alt={item.name} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "1rem .5rem 0",
                  }}
                >
                  <PlantName>{item.name}</PlantName>
                  <PlantStarsWrapper>
                    {[...Array(item.stars)].map((val, index) => (
                      <AiFillStar key={index} style={{ color: "#ffbf34" }} />
                    ))}
                    {[...Array(5 - item.stars)].map((val, index) => (
                      <AiFillStar key={index} style={{ color: "#dadada" }} />
                    ))}
                    {"  "}({item.reviewCount})
                  </PlantStarsWrapper>
                </div>
                <NurseryName>{item.nurseryName}</NurseryName>
                <PlantPrice>
                  <DiscountedPrice>
                    <BiRupee />
                    <span>{item.price - item.discount}.00</span>
                  </DiscountedPrice>
                  <ActualPrice>{item.price}.00</ActualPrice>
                </PlantPrice>
              </Link>
            </PlantCard>
          );
        })}
    </>
  );
};

const Checkbox = ({ value, label }) => {
  return (
    <CheckboxLabel>
      <input type="checkbox" value={value} />

      {label}
    </CheckboxLabel>
  );
};

export default ShopPage;
