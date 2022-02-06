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

const ShopPage = ({ items }) => {
  const itemsPerPage = 12;

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
      <Sidebar>
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
          <Checkbox value="500" label="Below Rs. 500" />
          <Checkbox value="500" label="Below Rs. 500" />
          <Checkbox value="500" label="Below Rs. 500" />
          <Checkbox value="500" label="Below Rs. 500" />
          <Checkbox value="500" label="Below Rs. 500" />
          <Checkbox value="500" label="Below Rs. 500" />
          <Checkbox value="500" label="Below Rs. 500" />
        </div>
      </Sidebar>
      <div>
        <PageInfoDiv>
          <span>
            Showing {itemOffset + 1} - {itemOffset + itemsPerPage} of{" "}
            {items.length} Results
          </span>
          <span>
            Sort By: Alphabetically (A-Z) <AiFillCaretDown />
          </span>
        </PageInfoDiv>
        <PlantCardWrapper style={{ justifyContent: "space-between" }}>
          <Items currentItems={currentItems} />
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
            Showing {itemOffset + 1} - {itemOffset + itemsPerPage} of{" "}
            {items.length} Results
          </span>
        </PageInfoDiv>
      </div>
    </ShopContainer>
  );
};

const Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <PlantCard key={index}>
            <Link to={`${item.link}/${item.id}`}>
              <PlantImg src={item.img} alt={item.name} />
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
                  {[...Array(item.stars)].map((index) => (
                    <AiFillStar key={index} />
                  ))}
                  {[...Array(5 - item.stars)].map((index) => (
                    <AiFillStar key={index} style={{ color: "#dadada" }} />
                  ))}
                </PlantStarsWrapper>
              </div>
              <PlantPrice>
                <DiscountedPrice>
                  <BiRupee />
                  <span>{item.discountedPrice}</span>
                </DiscountedPrice>
                <ActualPrice>{item.actualPrice}</ActualPrice>
              </PlantPrice>
            </Link>
          </PlantCard>
        ))}
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
