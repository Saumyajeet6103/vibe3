import React from "react";

import { Img, Text, Button, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row font-outfit md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[302px]">
          <div className="bg-gray_50 border-bw15 border-gray_100 border-solid flex flex-col gap-[50px] items-start justify-start p-[18px] w-[100%]">
            <div className="flex flex-row gap-[14px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[16px] mt-[16px] md:w-[100%] sm:w-[100%] w-[67%]">
              <Img
                src="images/logo.png"
                
                className="h-[56px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[56px]"
                alt="Ellipse1015"
              />
              <div className="flex flex-col gap-[6px] items-start justify-start mt-[4px] w-[62%]">
                <Text
                  className="font-semibold text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Vibe.3
                </Text>
                <Text
                  className="font-normal not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                @NASAF
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                <Text
                  className="font-medium md:ml-[0] sm:ml-[0] ml-[16px] text-black_900 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  GENERAL
                </Text>
                <div className="flex flex-col font-outfit gap-[8px] items-center justify-start w-[100%]">
                  <div className="bg-gray_900_5f flex flex-col items-start justify-start p-[10px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[55%]">
                      <Img
                        src="images/img_eye.svg"
                        className="h-[24px] w-[24px]"
                        alt="eye"
                      />
                      <Text
                        className="font-medium text-gray_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/message")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[47%]">
                      <Img
                        src="images/img_car.svg"
                        className="h-[24px] w-[24px]"
                        alt="car"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                      Community
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/settings")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[45%]">
                      <Img
                        src="images/img_settings.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                <Text
                  className="font-medium md:ml-[0] sm:ml-[0] ml-[16px] text-gray_901 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  MARKETPLACE
                </Text>
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/market")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[41%]">
                      <Img
                        src="images/img_user.svg"
                        className="h-[24px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Market
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/activebid")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[50%]">
                      <Img
                        src="images/upload.svg"
                        className="h-[24px] w-[24px]"
                        alt="judge"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                       Upload
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/saved")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[39%]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Liked Songs
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                <Text
                  className="font-medium md:ml-[0] sm:ml-[0] ml-[16px] text-gray_901 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  MY PROFILE
                </Text>
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/myprofilecollection")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[50%]">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="user One"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/myprofilewallet")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[38%]">
                      <Img
                        src="images/img_computer.svg"
                        className="h-[24px] w-[24px]"
                        alt="computer"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Wallet
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/myprofilehistory")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[40%]">
                      {/* <Img */}
                        {/* src="images/img_clock_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock One"
                      /> */}
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        {/* History */}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-urbanist h-[258px] md:h-[261px] sm:h-[261px] mb-[17px] md:ml-[0] sm:ml-[0] ml-[16px] relative md:w-[100%] sm:w-[100%] w-[88%]">
              <div className="absolute bg-gray_900 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-radius15 w-[234px]"></div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[91%]">
                <Button
                  className="flex h-[50px] items-center justify-center rounded-radius50 w-[50px]"
                  size="lgIcn"
                  variant="icbOutlineGray5003f"
                >
                  <Img
                    src="images/img_question.svg"
                    className="h-[24px]"
                    alt="question"
                  />
                </Button>
                <Text
                  className="font-semibold mt-[14px] text-left text-white_A700 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Help Center
                </Text>
                <div className="flex flex-col gap-[30px] items-center justify-start mt-[12px] w-[100%]">
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-center text-gray_400 tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    Having trouble in Enefti?
                    <br />
                    Please contact us for more question
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[206px] text-[14px] text-center text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    Go To Help Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between outline outline-gray_100 p-[34px] sm:px-[20px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
              wrapClassName="flex md:mt-[0] md:w-[100%] my-[2px] sm:mt-[0] sm:w-[100%] w-[auto]"
              name="SearchInput"
              placeholder="Search items, collections, and users"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer mr-[16px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#93989a"
                    className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              size="mdSrc"
            ></Input>
            <div className="flex md:flex-1 sm:flex-1 flex-row font-urbanist gap-[30px] items-center justify-center md:mt-[0] sm:mt-[0] my-[2px] md:w-[100%] sm:w-[100%] w-[auto]">
              <Button
                className="flex items-center justify-center text-center"
                // leftIcon={
                //   <Img
                //     src="images/img_sort.svg"
                //     className="mr-[10px] text-center"
                //     alt="sort"
                //   />
                // }
                shape="RoundedBorder10"
                size="xl"
                variant="OutlineGray100"
              >
                <div className="bg-transparent cursor-pointer font-medium text-[16px] text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1">
                  Connect
                </div>
              </Button>
              <Button
                className="flex h-[52px] items-center justify-center w-[52px]"
                shape="icbCircleBorder25"
                size="lgIcn"
                variant="icbOutlineGray100"
              >
                <Img
                  src="images/img_lock.svg"
                  className="h-[24px]"
                  alt="lock"
                />
              </Button>
              {/* <div className="flex flex-row gap-[12px] items-center justify-between w-[27%]">
                { <Img
                  src="images/img_ellipse1015.png"
                  className="h-[52px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[52px]"
                  alt="Ellipse1020"
                />
                <Img 
                  { src="images/img_arrowdown.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowdown"
                /> }
              </div>  */}
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row font-urbanist gap-[34px] items-center justify-between md:w-[100%] sm:w-[100%] w-[98%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius15 w-[100%]"
                  style={{
                    backgroundImage: "url('images/headphones.png')",

                  }}
                >
                  <div className="bg-gradient  flex flex-col gap-[34px] items-start justify-center p-[30px] sm:px-[20px] rounded-radius15 w-[100%]">
                    <div className="flex flex-col gap-[14px] items-start justify-start mt-[19px] md:w-[100%] sm:w-[100%] w-[77%]">
                      <Text
                        className="text-left text-white_A700 tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Discover new sounds in a Decentralized World
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700_a2 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Bringing Music and Ownership together with Web3 NFT's and Automated Licenses 
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] items-center justify-start mb-[19px] md:w-[100%] sm:w-[100%] w-[39%]">
                      <Button
                        className="cursor-pointer font-semibold min-w-[120px] text-[14px] text-center text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="FillWhiteA700"
                      >
                        Explore More
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold min-w-[120px] text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="OutlineWhiteA700"
                      >
                        Sell Copyrights
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-center justify-start mt-[40px] w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Trending Songs
                  </Text>
                  <Text
                    className="font-medium text-gray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    View All
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group33917.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[8px] items-center justify-end mb-[94px] ml-[auto] md:w-[100%] sm:w-[100%] w-[55%]">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          shape="CircleBorder14"
                          size="sm"
                          variant="Outline"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                          size="smIcn"
                          variant="icbOutline"
                        >
                          <Img
                            src="images/img_heart.svg"
                            className="h-[18px]"
                            alt="heart"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[93%]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[77%]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          The Unfortable Facer
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Bane Riccardo
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-gray_500 text-left tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body3"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[4px] w-[100%]">
                            <Img
                              src="images/img_sort.svg"
                              className="h-[16px] w-[16px]"
                              alt="sort"
                            />
                            <Text
                              className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body1"
                            >
                              18,99 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium font-urbanist min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          shape="RoundedBorder10"
                          size="lg"
                          variant="FillGray900"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                      style={{
                        backgroundImage:
                          "url('images/img_group33917_140X222.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[8px] items-center justify-end mb-[94px] ml-[auto] md:w-[100%] sm:w-[100%] w-[55%]">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          shape="CircleBorder14"
                          size="sm"
                          variant="Outline"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                          size="smIcn"
                          variant="icbOutline"
                        >
                          <Img
                            src="images/img_heart.svg"
                            className="h-[18px]"
                            alt="heart One"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[93%]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[65%]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Mad Ballot Holder
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Angelina Cruzz
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-gray_500 text-left tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body3"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                            <Img
                              src="images/img_sort.svg"
                              className="h-[16px] w-[16px]"
                              alt="sort One"
                            />
                            <Text
                              className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body1"
                            >
                              4,32 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium font-urbanist min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          shape="RoundedBorder10"
                          size="lg"
                          variant="FillGray900"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group33917_1.png')",
                      }}
                    >
                      <div className="flex flex-row gap-[8px] items-center justify-end mb-[94px] ml-[auto] md:w-[100%] sm:w-[100%] w-[55%]">
                        <Button
                          className="cursor-pointer font-medium min-w-[75px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          shape="CircleBorder14"
                          size="sm"
                          variant="Outline"
                        >
                          2h 4m 32s
                        </Button>
                        <Button
                          className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                          size="smIcn"
                          variant="icbOutline"
                        >
                          <Img
                            src="images/img_heart.svg"
                            className="h-[18px]"
                            alt="heart Two"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[93%]">
                      <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[68%]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Pile of Many Plates
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Ralphi Arness
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                        <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                          <Text
                            className="not-italic text-gray_500 text-left tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body3"
                          >
                            Current Bid
                          </Text>
                          <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                            <Img
                              src="images/img_sort.svg"
                              className="h-[16px] w-[16px]"
                              alt="sort Two"
                            />
                            <Text
                              className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body1"
                            >
                              4,32 ETH
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="cursor-pointer font-medium font-urbanist min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          shape="RoundedBorder10"
                          size="lg"
                          variant="FillGray900"
                        >
                          Place a Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-[20px] items-center justify-start mt-[30px] w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="text-black_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Top Collection
                  </Text>
                  <Text
                    className="font-medium text-gray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    View All
                  </Text>
                </div>
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between pb-[2px] w-[100%]">
                    <Text
                      className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      Collection
                    </Text>
                    <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Volume
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        24h %
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Floor Price
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Owners
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col md:gap-[20px] sm:gap-[20px] grid items-center pr-[7px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 sm:flex-1 flex-row gap-[14px] items-center justify-between md:w-[100%] sm:w-[100%] w-[auto]">
                        <Img
                          src="images/img_ellipse1018.png"
                          className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                          alt="Ellipse1018"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Doodle Lucu
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            By Doodles
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="flex flex-row font-urbanist items-center justify-evenly sm:w-[100%] w-[11%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Three"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            14,32
                          </Text>
                        </div>
                        <Text
                          className="font-medium font-outfit sm:ml-[0] ml-[60px] text-green_600 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          + 20,4%
                        </Text>
                        <div className="flex flex-row font-urbanist items-center justify-center sm:ml-[0] ml-[53px] sm:w-[100%] w-[9%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One"
                          />
                          <Text
                            className="font-medium h-[18px] ml-[4px] text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            2,3
                          </Text>
                        </div>
                        <Text
                          className="font-medium font-urbanist sm:ml-[0] ml-[91px] text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          2,2K
                        </Text>
                        <Text
                          className="font-medium font-urbanist sm:ml-[0] ml-[85px] text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          18
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 sm:flex-1 flex-row gap-[14px] items-center justify-between md:w-[100%] sm:w-[100%] w-[auto]">
                        <Img
                          src="images/img_ellipse1018_42X42.png"
                          className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                          alt="Ellipse1018 One"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Kimawi Genesis
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            By Kimawi - Japan
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 sm:flex-1 flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[auto]">
                        <div className="flex flex-row font-urbanist items-start justify-evenly w-[auto]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Four"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            6,11
                          </Text>
                        </div>
                        <Text
                          className="font-medium font-outfit text-left text-red_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          - 18,2%
                        </Text>
                        <div className="flex flex-row font-urbanist items-center justify-center w-[auto]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One One"
                          />
                          <Text
                            className="font-medium ml-[4px] text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            12,52
                          </Text>
                        </div>
                        <Text
                          className="font-medium font-urbanist text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1,9K
                        </Text>
                        <Text
                          className="font-medium font-urbanist text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          21
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[40px] items-center justify-start outline outline-gray_100 p-[26px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[20px] items-center justify-start mt-[14px] w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Featured Creators
                  </Text>
                  <Text
                    className="font-medium mt-[2px] text-gray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    See All
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[12px] items-center justify-start p-[6px] rounded-radius15 shadow-bs2 w-[100%]">
                  <div className="md:h-[120px] sm:h-[120px] h-[146px] relative w-[100%]">
                    <Img
                      src="images/img_rectangle2043.png"
                      className="absolute h-[120px] inset-x-[0] mx-[auto] object-cover rounded-radius12 top-[0] w-[100%]"
                      alt="Rectangle2043"
                    />
                    <Img
                      src="images/img_ellipse1019.png"
                      className="absolute bottom-[0] h-[52px] inset-x-[0] mx-[auto] rounded-radius50 w-[52px]"
                      alt="Ellipse1019"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[8px] md:w-[100%] sm:w-[100%] w-[94%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-col font-urbanist items-start justify-start w-[auto]">
                        <div className="flex flex-row items-center justify-evenly w-[100%]">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Murakami Flowers
                          </Text>
                          <Img
                            src="images/img_checkmark.svg"
                            className="h-[18px] w-[18px]"
                            alt="checkmark"
                          />
                        </div>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          @mftmkkus
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-normal font-outfit min-w-[64px] my-[5px] not-italic text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        shape="CircleBorder14"
                        size="sm"
                        variant="Outline_1"
                      >
                        Follow
                      </Button>
                    </div>
                    <Line className="bg-gray_100 h-[1px] mt-[12px] w-[100%]" />
                    <Text
                      className="font-normal leading-[180.00%] mt-[11px] not-italic text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      variant="body2"
                    >
                      Murakami.Flowers is a workf in which artist Takasi
                      Murakami’s representative artwork.....
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-center justify-start mb-[15px] pt-[3px] w-[100%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Recent Activity
                  </Text>
                  <Text
                    className="font-medium mb-[2px] text-gray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    See All
                  </Text>
                </div>
                <List
                  className="flex-col gap-[20px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[34px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                      <Img
                        src="images/img_ellipse1018_1.png"
                        className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                        alt="Ellipse1018 Two"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Uzachi #4390
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Ragnarok Meta
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Five"
                      />
                      <Text
                        className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        2.15 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                  <div className="flex flex-1 flex-row gap-[34px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-start justify-between w-[auto]">
                      <Img
                        src="images/img_ellipse1018_2.png"
                        className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                        alt="Ellipse1018 Three"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Doodles #3486
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Doodles
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Six"
                      />
                      <Text
                        className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        4.42 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                  <div className="flex flex-1 flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-start justify-between w-[auto]">
                      <Img
                        src="images/img_ellipse1018_3.png"
                        className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                        alt="Ellipse1018 Four"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Murakami #2766
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Murakami
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Seven"
                      />
                      <Text
                        className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        1.08 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                  <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-start justify-between w-[auto]">
                      <Img
                        src="images/img_ellipse1018_4.png"
                        className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                        alt="Ellipse1018 Five"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Doodles #2761
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Murakami
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Eight"
                      />
                      <Text
                        className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        4.4 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                  <div className="flex flex-1 flex-row gap-[14px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-start justify-between w-[auto]">
                      <Img
                        src="images/img_ellipse1018_5.png"
                        className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                        alt="Ellipse1018 Six"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Peachy Puch#22
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From Mindblowonstudio
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Nine"
                      />
                      <Text
                        className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        5.62 ETH
                      </Text>
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
                  <div className="flex flex-1 flex-row gap-[33px] items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                      <Img
                        src="images/img_ellipse1018_6.png"
                        className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                        alt="Ellipse1018 Seven"
                      />
                      <div className="flex flex-col items-center justify-start w-[auto]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Gemmy #3723
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          From GemmySolana
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[16px] w-[16px]"
                        alt="sort Ten"
                      />
                      <Text
                        className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        5.32 ETH
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
