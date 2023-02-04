import React from "react";

import { Img, Text, Button, Input, SelectBox, List, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const MyProfileWalletPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row font-outfit md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
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
                    <div className="flex flex-row gap-[18px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[47%]">
                      <Img
                        src="images/img_car.svg"
                        className="h-[24px] w-[24px]"
                        alt="car"
                      />
                      <Text
                        className="font-medium mt-[5px] text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
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
                    className="common-pointer flex flex-col items-start justify-start p-[10px] w-[100%]"
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
                  <div className="bg-gray_900_5f flex flex-col font-outfit items-start justify-start p-[10px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[39%]">
                      <Img
                        src="images/img_calculator.svg"
                        className="h-[24px] w-[24px]"
                        alt="calculator"
                      />
                      <Text
                        className="font-medium text-gray_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Wallet
                      </Text>
                    </div>
                  </div>
                  <div
                    className="common-pointer flex flex-col font-urbanist items-start justify-start p-[10px] w-[100%]"
                    onClick={() => navigate("/myprofilehistory")}
                  >
                    <div className="flex flex-row gap-[18px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[40%]">
                      <Img
                        src="images/img_clock_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock Two"
                      />
                      <Text
                        className="font-medium mt-[5px] text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
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
          <div className="flex md:flex-col sm:flex-col flex-row font-urbanist gap-[34px] items-center justify-between md:w-[100%] sm:w-[100%] w-[98%]">
            <div className="flex flex-col gap-[30px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
              <Text
                className="text-black_900 text-left tracking-ls034 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h1"
                variant="h1"
              >
                Wallet
              </Text>
              <List
                className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start outline outline-[0.75px] outline-gray_100 p-[24px] sm:px-[20px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] sm:w-[100%] w-[91%]">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-radius50 w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465.png"
                        className="h-[22px]"
                        alt="Frame162465"
                      />
                    </Button>
                    <div className="flex flex-col gap-[6px] items-start justify-end pt-[8px] w-[100%]">
                      <div className="flex flex-col gap-[13px] items-center justify-start md:w-[100%] sm:w-[100%] w-[75%]">
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Spending
                        </Text>
                        <Text
                          className="text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          $432,215.32
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-between py-[3px] w-[100%]">
                        <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                          <Img
                            src="images/img_cursor.svg"
                            className="h-[18px] w-[18px]"
                            alt="cursor"
                          />
                          <Text
                            className="font-normal not-italic text-green_600 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            +2.4%
                          </Text>
                        </div>
                        <div className="bg-gray_500 h-[4px] my-[7px] rounded-radius50 w-[4px]"></div>
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start outline outline-[0.75px] outline-gray_100 p-[24px] sm:px-[20px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] sm:w-[100%] w-[89%]">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-radius50 w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465_gray_900.png"
                        className="h-[22px]"
                        alt="Frame162465 One"
                      />
                    </Button>
                    <div className="flex flex-col gap-[6px] items-start justify-end pt-[6px] w-[100%]">
                      <div className="flex flex-col gap-[15px] items-start justify-start md:w-[100%] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Income
                        </Text>
                        <Text
                          className="text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          $21,579.22
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-between py-[3px] w-[100%]">
                        <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                          <Img
                            src="images/img_trendingup.svg"
                            className="h-[18px] w-[18px]"
                            alt="trendingup"
                          />
                          <Text
                            className="font-normal not-italic text-left text-red_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            -2.32
                          </Text>
                        </div>
                        <div className="bg-gray_500 h-[4px] my-[7px] rounded-radius50 w-[4px]"></div>
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start outline outline-[0.75px] outline-gray_100 p-[23px] sm:px-[20px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[13px] items-start justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[90%]">
                    <Button
                      className="flex h-[42px] items-center justify-center rounded-radius50 w-[42px]"
                      size="mdIcn"
                      variant="icbFillGray50"
                    >
                      <Img
                        src="images/img_frame162465_gray_900_42X42.png"
                        className="h-[22px]"
                        alt="Frame162465 Two"
                      />
                    </Button>
                    <div className="flex flex-col gap-[6px] items-start justify-end pt-[8px] w-[100%]">
                      <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] sm:w-[100%] w-[67%]">
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Total Saving
                        </Text>
                        <Text
                          className="text-black_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          $68,483.16
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-start justify-between py-[3px] w-[100%]">
                        <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                          <Img
                            src="images/img_cursor.svg"
                            className="h-[18px] w-[18px]"
                            alt="cursor One"
                          />
                          <Text
                            className="font-normal not-italic text-green_600 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            +2.4%
                          </Text>
                        </div>
                        <div className="bg-gray_500 h-[4px] my-[7px] rounded-radius50 w-[4px]"></div>
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          May 17, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="font-outfit text-black_900 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Recent Activity
                  </Text>
                  <Text
                    className="font-medium font-urbanist text-gray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    View All
                  </Text>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start outline outline-[0.75px] outline-gray_100 py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[23px] items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                        <Text
                          className="font-medium md:mt-[0] sm:mt-[0] mt-[2px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Item List
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[188px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Status
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[72px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Open Price
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[71px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Your Offer
                        </Text>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[71px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Time Left
                        </Text>
                      </div>
                      <Line className="bg-gray_100 h-[1.5px] w-[100%]" />
                    </div>
                    <List
                      className="flex-col md:gap-[20px] sm:gap-[20px] grid items-center sm:pr-[20px] pr-[21px] md:w-[100%] sm:w-[100%] w-[94%]"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-row gap-[14px] items-start justify-between sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_ellipse1018_5.png"
                            className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                            alt="Ellipse1018"
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
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Actived
                        </Text>
                        <div className="flex sm:flex-1 flex-row gap-[6px] items-center justify-center sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-[6px] items-center justify-center sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1h 19m
                        </Text>
                      </div>
                      <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[14px] items-center justify-between md:w-[100%] sm:w-[100%] w-[33%]">
                          <Img
                            src="images/img_group33978.png"
                            className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                            alt="Ellipse1018 One"
                          />
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Dayco Serpentine Belt
                            </Text>
                            <Text
                              className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              From Marvin McKinney
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[25px] text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          On Going
                        </Text>
                        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[6px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[51px] md:w-[100%] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[6px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[63px] md:w-[100%] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One One"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[59px] text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1h 19m
                        </Text>
                      </div>
                      <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-row gap-[14px] items-center justify-between sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_group33978_1.png"
                            className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                            alt="Ellipse1018 Two"
                          />
                          <div className="flex flex-col items-start justify-start w-[auto]">
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
                              From Ralphi Arness
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          On Going
                        </Text>
                        <div className="flex sm:flex-1 flex-row gap-[6px] items-center justify-center sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Two"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-[6px] items-center justify-center sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One Two"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1h 19m
                        </Text>
                      </div>
                      <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[14px] items-start justify-between md:w-[100%] sm:w-[100%] w-[31%]">
                          <Img
                            src="images/img_group33978_2.png"
                            className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                            alt="Ellipse1018 Three"
                          />
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Worldpac Alternator
                            </Text>
                            <Text
                              className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              From Annette Black
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[37px] text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Ended
                        </Text>
                        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[6px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[70px] md:w-[100%] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Three"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[6px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[63px] md:w-[100%] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One Three"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[59px] text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1h 19m
                        </Text>
                      </div>
                      <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[14px] items-start justify-between md:w-[100%] sm:w-[100%] w-[24%]">
                          <Img
                            src="images/img_group33978_5.png"
                            className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                            alt="Ellipse1018 Four"
                          />
                          <div className="flex flex-col items-center justify-start w-[auto]">
                            <Text
                              className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Fram Oil Filter
                            </Text>
                            <Text
                              className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              variant="body2"
                            >
                              From Eleanor Pena
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[85px] text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Actived
                        </Text>
                        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[6px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[63px] md:w-[100%] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Four"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[6px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[63px] md:w-[100%] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_sort.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One Four"
                          />
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            5.62 ETH
                          </Text>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] sm:ml-[0] ml-[59px] text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          1h 19m
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col items-center justify-start outline outline-gray_100 p-[24px] sm:px-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
              <div className="flex flex-col items-center justify-start mb-[16px] w-[100%]">
                <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Text
                      className="font-medium text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Wallet
                    </Text>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu"
                    />
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius15 w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-row gap-[26px] items-end justify-between p-[14px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group33970.png')",
                      }}
                    >
                      <div className="flex flex-col items-start justify-start mb-[2px] ml-[4px] mt-[6px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Local Banking Card
                        </Text>
                        <div className="flex flex-row items-start justify-between md:ml-[0] sm:ml-[0] ml-[2px] mt-[36px] md:w-[100%] sm:w-[100%] w-[99%]">
                          <Img
                            src="images/img_.svg"
                            className="h-[5px] mt-[4px] w-[auto]"
                            alt="Two"
                          />
                          <Img
                            src="images/img_.svg"
                            className="h-[5px] mt-[4px] w-[auto]"
                            alt="Three"
                          />
                          <Img
                            src="images/img_.svg"
                            className="h-[5px] mt-[4px] w-[auto]"
                            alt="Four"
                          />
                          <Text
                            className="font-normal not-italic text-left text-white_A700_a2 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            3982
                          </Text>
                        </div>
                        <Text
                          className="font-normal md:ml-[0] sm:ml-[0] ml-[2px] mt-[34px] not-italic text-left text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Kevin Cranel
                        </Text>
                      </div>
                      <Img
                        src="images/img_visalogo.svg"
                        className="h-[16px] mt-[106px] w-[auto]"
                        alt="visalogo"
                      />
                    </div>
                  </div>
                </div>
                <Line className="bg-gray_100 h-[1.5px] mt-[24px] w-[100%]" />
                <div className="flex flex-col gap-[30px] items-center justify-start mt-[22px] pt-[6px] w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] sm:w-[100%] w-[47%]">
                    <Text
                      className="font-normal not-italic text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Your Balance
                    </Text>
                    <Text
                      className="text-black_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $185,424.52
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[228px] text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      shape="RoundedBorder10"
                      size="lg"
                      variant="FillGray900"
                    >
                      Add New Card
                    </Button>
                    <Button
                      className="flex h-[42px] items-center justify-center w-[42px]"
                      shape="icbRoundedBorder8"
                      size="mdIcn"
                      variant="icbFillGray90067"
                    >
                      <Img
                        src="images/img_topup.png"
                        className="h-[24px]"
                        alt="TopUp"
                      />
                    </Button>
                  </div>
                </div>
                <Line className="bg-gray_100 h-[1.5px] mt-[24px] w-[100%]" />
                <div className="flex flex-col gap-[20px] items-start justify-start mt-[33px] w-[100%]">
                  <Text
                    className="font-medium text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Transaction History
                  </Text>
                  <List
                    className="flex-col gap-[24.5px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-[24px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-radius50 w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_icon.png"
                            className="h-[24px]"
                            alt="Icon"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Exchange to ETH
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Today at 4:13 PM
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
                          2.22 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-radius50 w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_topup.png"
                            className="h-[24px]"
                            alt="Frame162471"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Enefty Top Up
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Today at 4:23 PM
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
                          1.32 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-1 flex-row gap-[19px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-radius50 w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_icon_gray_900.png"
                            className="h-[24px]"
                            alt="Icon One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Open Bid Success
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Yesterday at 5:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort Seven"
                        />
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          5.56 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-1 flex-row gap-[23px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                        <Button
                          className="flex items-center justify-center w-[42px]"
                          shape="icbCircleBorder21"
                          size="smIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_icon_gray_900.png"
                            className="h-[24px]"
                            alt="Icon Two"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Open Bid Success
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Yesterday at 3:12 AM
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[16px] w-[16px]"
                          alt="sort Eight"
                        />
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          2.21 ETH
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-1 flex-row gap-[36px] items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                        <Button
                          className="flex h-[42px] items-center justify-center rounded-radius50 w-[42px]"
                          size="mdIcn"
                          variant="icbFillGray50"
                        >
                          <Img
                            src="images/img_topup.png"
                            className="h-[24px]"
                            alt="Frame162471 One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Enefty Top Up
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body2"
                          >
                            Yesterday at 3:12 AM
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
                          2.32 ETH
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileWalletPage;
