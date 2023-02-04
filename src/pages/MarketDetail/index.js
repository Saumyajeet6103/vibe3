import React from "react";

import { Img, Text, Button, Input, SelectBox, List, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const MarketDetailPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row font-outfit md:gap-[20px] sm:gap-[20px] items-start mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[302px]">
          <div className="bg-gray_50 border-bw15 border-gray_100 border-solid flex flex-col items-start justify-start p-[18px] w-[100%]">
            <div className="flex flex-row gap-[14px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[16px] mt-[16px] md:w-[100%] sm:w-[100%] w-[67%]">
              <Img
                src="images/img_ellipse1015.png"
                className="h-[56px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[56px]"
                alt="Ellipse1015"
              />
              <div className="flex flex-col gap-[6px] items-start justify-start mt-[4px] w-[62%]">
                <Text
                  className="font-semibold text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Kevin Cranel
                </Text>
                <Text
                  className="font-normal not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  @kecrane
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start mt-[50px] w-[100%]">
              <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                <Text
                  className="font-medium md:ml-[0] sm:ml-[0] ml-[16px] text-gray_901 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  GENERAL
                </Text>
                <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[54%]">
                      <Img
                        src="images/img_clock_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
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
                        Message
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
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
                <div className="flex flex-col font-outfit gap-[8px] items-center justify-start w-[100%]">
                  <div className="bg-gray_900_5f flex flex-col items-start justify-start p-[10px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[42%]">
                      <Img
                        src="images/img_user_3.svg"
                        className="h-[24px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="font-medium text-gray_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Market
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/activebid")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[50%]">
                      <Img
                        src="images/img_judge.svg"
                        className="h-[24px] w-[24px]"
                        alt="judge"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Active Bid
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/saved")}
                  >
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[39%]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock One"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Saved
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
                      <Img
                        src="images/img_clock_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock Two"
                      />
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        History
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-urbanist h-[258px] md:h-[310px] sm:h-[310px] mb-[17px] md:ml-[0] sm:ml-[0] ml-[16px] mt-[49px] relative md:w-[100%] sm:w-[100%] w-[88%]">
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
        <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:px-[20px] sm:px-[20px] w-[100%]">
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
                leftIcon={
                  <Img
                    src="images/img_sort.svg"
                    className="mr-[10px] text-center"
                    alt="sort"
                  />
                }
                shape="RoundedBorder10"
                size="xl"
                variant="OutlineGray100"
              >
                <div className="bg-transparent cursor-pointer font-medium text-[16px] text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1">
                  3,421 ETH
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
              <SelectBox
                className="sm:w-[100%] w-[27%]"
                placeholderClassName=""
                name="user Two"
                placeholder=""
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[24px] mr-[0] w-[24px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
            </div>
          </div>
          <div className="flex flex-col font-urbanist items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
            <div className="bg-gray_50 flex flex-row gap-[8px] items-center justify-start p-[6px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[19%]">
              <Text
                className="font-medium ml-[10px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body1"
              >
                Marketplace
              </Text>
              <Text
                className="font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body1"
              >
                {">"}
              </Text>
              <Text
                className="font-medium text-gray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body1"
              >
                Open Bid
              </Text>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[50px] sm:gap-[50px] items-center justify-between mt-[34px] md:w-[100%] sm:w-[100%] w-[99%]">
              <Img
                src="images/img_group33978_5.png"
                className="h-[420px] sm:h-[auto] object-cover rounded-radius12 md:w-[100%] sm:w-[100%] w-[auto]"
                alt="Rectangle2054"
              />
              <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="text-black_900 text-left tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Dayco Serpentine Belt
                  </Text>
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_500_ab text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Open repair of infrarenal aortic aneurysm or dissection,
                    plus repair of associated arterial trauma, following
                    unsuccessful endovascular repair; tube prosthesis...
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[32px] grid grid-cols-2 mt-[20px] md:w-[100%] sm:w-[100%] w-[70%]"
                  orientation="horizontal"
                >
                  <div
                    className="common-pointer flex flex-row gap-[14px] items-center justify-between w-[100%]"
                    onClick={() => navigate("/otheruserprofile")}
                  >
                    <Img
                      src="images/img_ellipse1015_42X42.png"
                      className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                      alt="Ellipse1015 One"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Creator
                      </Text>
                      <Text
                        className="font-semibold mt-[2px] text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Eleanor Pena
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-row gap-[14px] items-center justify-between w-[100%]"
                    onClick={() => navigate("/otheruserprofile")}
                  >
                    <Img
                      src="images/img_ellipse1016.png"
                      className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                      alt="Ellipse1016"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Owner
                      </Text>
                      <Text
                        className="font-semibold mt-[2px] text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Ahmad Kazuto
                      </Text>
                    </div>
                  </div>
                </List>
                <Line className="bg-gray_100 h-[1.5px] mt-[20px] w-[100%]" />
                <div className="flex flex-row gap-[40px] items-start justify-start mt-[21px] pr-[4px] md:w-[100%] sm:w-[100%] w-[68%]">
                  <div className="flex flex-col gap-[14px] items-start justify-start w-[52%]">
                    <Text
                      className="font-medium text-gray_500_ab text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Auction End In
                    </Text>
                    <div className="flex flex-row items-center justify-evenly w-[100%]">
                      <Button
                        className="cursor-pointer font-semibold h-[44px] text-[20px] text-black_900 text-center tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[44px]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="FillGray50"
                      >
                        03
                      </Button>
                      <Img
                        src="images/img_user_10X10.svg"
                        className="h-[10px] w-[10px]"
                        alt="user Three"
                      />
                      <Button
                        className="cursor-pointer font-semibold h-[44px] text-[20px] text-black_900 text-center tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[44px]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="FillGray50"
                      >
                        12
                      </Button>
                      <Img
                        src="images/img_user_10X10.svg"
                        className="h-[10px] w-[10px]"
                        alt="user Four"
                      />
                      <Button
                        className="cursor-pointer font-semibold h-[44px] text-[20px] text-black_900 text-center tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[44px]"
                        shape="RoundedBorder10"
                        size="lg"
                        variant="FillGray50"
                      >
                        42
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[37%]">
                    <Text
                      className="font-medium text-gray_500_ab text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Current Bid
                    </Text>
                    <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_sort.svg"
                        className="h-[32px] w-[32px]"
                        alt="sort"
                      />
                      <Text
                        className="text-black_900 text-left tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        3,89 ETH
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[14px] items-center justify-start mt-[37px] md:w-[100%] sm:w-[100%] w-[56%]">
                  <Button
                    className="flex h-[50px] items-center justify-center w-[50px]"
                    shape="icbRoundedBorder8"
                    size="lgIcn"
                    variant="icbOutlineGray100"
                  >
                    <Img
                      src="images/img_favorite.svg"
                      className="h-[24px]"
                      alt="favorite"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[210px] text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    shape="RoundedBorder10"
                    size="2xl"
                    variant="FillGray900"
                  >
                    Place A Bid
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-start justify-start mt-[50px] w-[100%]">
              <Text
                className="text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                More Works by Eleanor Pena
              </Text>
              <List
                className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group33978_11.png')",
                    }}
                  >
                    <div className="flex flex-row gap-[8px] items-center justify-end mb-[94px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
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
                  <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[94%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[84%]">
                      <Text
                        className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Person Melirik Kesamping
                      </Text>
                      <Text
                        className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-gray_500 text-left tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Current Bid
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[92%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            2,42 ETH
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
                      backgroundImage: "url('images/img_group33978_12.png')",
                    }}
                  >
                    <div className="flex flex-row gap-[8px] items-center justify-end mb-[94px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
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
                  <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[94%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Building Reflection Xd
                      </Text>
                      <Text
                        className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-gray_500 text-left tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Current Bid
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[97%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Two"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            52,12 ETH
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
                      backgroundImage: "url('images/img_group33978_13.png')",
                    }}
                  >
                    <div className="flex flex-row gap-[8px] items-center justify-end mb-[94px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
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
                  <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[94%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[71%]">
                      <Text
                        className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Natural Atomic Circle
                      </Text>
                      <Text
                        className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[100%]">
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
                            alt="sort Three"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            22,52 ETH
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
                      backgroundImage: "url('images/img_group33978_14.png')",
                    }}
                  >
                    <div className="flex flex-row gap-[8px] items-center justify-end mb-[94px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
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
                          alt="heart Three"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] sm:w-[100%] w-[94%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[72%]">
                      <Text
                        className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Oldtown Artistic Alley
                      </Text>
                      <Text
                        className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-gray_500 text-left tracking-ls01 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Current Bid
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[97%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Four"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            1,224 ETH
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketDetailPage;
