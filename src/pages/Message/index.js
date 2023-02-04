import React from "react";

import { Img, Text, Button, Input, List, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const MessagePage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row font-outfit md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[302px]">
          <div className="bg-gray_50 border-bw15 border-gray_100 border-solid flex flex-col gap-[50px] items-start justify-start p-[18px] w-[100%]">
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
                  nasa
                </Text>
                <Text
                  className="font-normal not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  @kecrane
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
                        zxcxc
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray_900_5f flex flex-col font-outfit items-start justify-start p-[10px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[18px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[47%]">
                      <Img
                        src="images/img_user_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="font-medium mt-[5px] text-gray_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        asdfg
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
                        alt="user One"
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
                        alt="user Two"
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
        <div className="flex flex-1 md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="md:h-[100px] sm:h-[100px] h-[1076px] relative md:w-[100%] sm:w-[100%] w-[34%]">
            <div className="absolute bg-white_A700 flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] outline outline-gray_100 p-[24px] sm:px-[20px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                wrapClassName="flex mb-[974px] sm:w-[100%] w-[94%]"
                name="SearchInput"
                placeholder="Search chat"
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
                variant="srcFillGray50"
              ></Input>
            </div>
            <List
              className="absolute bottom-[0] flex-col font-urbanist grid inset-x-[0] items-center mx-[auto] w-[100%]"
              orientation="vertical"
            >
              <div className="bg-gray_900_67 flex flex-1 flex-col items-center justify-start my-[0] p-[20px] w-[100%]">
                <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[93%]">
                  <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                    <Img
                      src="images/img_ellipse1018_7.png"
                      className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                      alt="Ellipse1018"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Jenny Wilson
                      </Text>
                      <Text
                        className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        How are you?
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    16:00
                  </Text>
                </div>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[14px] items-start justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_8.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 One"
                  />
                  <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Kristin Watson
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Wow, this is really epic
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  18:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_9.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 Two"
                  />
                  <div className="flex flex-col items-center justify-start w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Darlene Robertson
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Wow, this is really epic
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  08:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_10.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 Three"
                  />
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Arlene McCoy
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      perfect!
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  11:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_11.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 Four"
                  />
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Ralph Edwards
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      I'll be there in 2 mins
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  11:30
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_12.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 Five"
                  />
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Darrell Steward
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Haha that's terrifying 😂
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  13:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_13.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 Six"
                  />
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      woohoooo
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  09:30
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_14.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 Seven"
                  />
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Eleanor Pena
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      omg, this is amazing
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  09:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_15.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 Eight"
                  />
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      aww
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  12:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_16.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 Nine"
                  />
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Wade Warren
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Haha oh man
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  12:30
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[13px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_17.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 Ten"
                  />
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Theresa Webb
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      just ideas for next time
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  14:00
                </Text>
              </div>
              <Line className="self-center h-[1.5px] bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-between mx-[33px] my-[0] md:w-[100%] sm:w-[100%] w-[83%]">
                <div className="flex flex-row gap-[14px] items-center justify-between w-[auto]">
                  <Img
                    src="images/img_ellipse1018_18.png"
                    className="h-[42px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[42px]"
                    alt="Ellipse1018 Eleven"
                  />
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Albertus Marque
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Hahahaha, Impossible
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  14:00
                </Text>
              </div>
            </List>
          </div>
          <div className="bg-gray_50 flex md:flex-1 sm:flex-1 flex-col font-urbanist items-center justify-start mb-[2px] md:w-[100%] sm:w-[100%] w-[67%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start outline outline-gray_100 p-[27px] sm:px-[20px] w-[100%]">
                <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[7px] md:w-[100%] sm:w-[100%] w-[16%]">
                  <Text
                    className="font-semibold text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="font-medium mt-[4px] text-green_600 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Online
                  </Text>
                </div>
                <Img
                  src="images/img_search.svg"
                  className="h-[24px] md:ml-[0] sm:ml-[0] ml-[473px] w-[24px]"
                  alt="search"
                />
                <Img
                  src="images/img_clock_2.svg"
                  className="h-[24px] md:ml-[0] sm:ml-[0] ml-[20px] w-[24px]"
                  alt="clock Three"
                />
                <Img
                  src="images/img_overflowmenu.svg"
                  className="h-[24px] md:ml-[0] sm:ml-[0] ml-[20px] w-[24px]"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-[50px] md:w-[100%] sm:w-[100%] w-[92%]">
                <div className="flex flex-col gap-[14px] items-start justify-start md:w-[100%] sm:w-[100%] w-[56%]">
                  <div className="bg-gray_100 border border-gray_300 border-solid flex flex-col items-center justify-start p-[10px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-gray_900_ab text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                      variant="body1"
                    >
                      Amateurs think about how much money they can make.
                      <br />
                      Professionals think about how much money they could lose
                    </Text>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    4:32 Am
                  </Text>
                </div>
                <div className="flex flex-col gap-[10px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[105px] mt-[30px] md:w-[100%] sm:w-[100%] w-[85%]">
                  <div className="bg-gray_900 flex flex-col items-center justify-start p-[14px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-left text-white_A700_ab tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                      variant="body1"
                    >
                      The price of a commodity will never go to zero. When you
                      invest in commodities futures,
                      <br />
                      you are not buying a piece of paper that says you own an
                      intangible of the company that
                      <br />
                      can go bankrupt 😌.{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[13%]">
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark"
                    />
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      4:10 Am
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_100 border border-gray_300 border-solid flex flex-col items-center justify-start mt-[28px] p-[10px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] md:w-[100%] sm:w-[100%] w-[57%]">
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_900_ab text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                    variant="body1"
                  >
                    Amateurs think about how much money they can make.
                    <br />
                    Professionals think about how much money they could lose
                  </Text>
                </div>
                <div className="flex flex-col gap-[14px] items-start justify-start mt-[28px] md:w-[100%] sm:w-[100%] w-[90%]">
                  <div className="bg-gray_100 border border-gray_300 border-solid flex flex-col items-center justify-start p-[10px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-gray_900_ab text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                      variant="body1"
                    >
                      {`It's not always easy to do what's not popular, but that's where you make your money.`}
                      <br />
                      Buy stocks that look bad to less careful investors and
                      hang on until their real value is recognized.
                    </Text>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body2"
                  >
                    4:26 Am
                  </Text>
                </div>
                <div className="flex flex-col gap-[10px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[87px] mt-[30px] md:w-[100%] sm:w-[100%] w-[88%]">
                  <div className="bg-gray_900 flex flex-col items-center justify-start p-[14px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-left text-white_A700_ab tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                      variant="body1"
                    >
                      {`99%+ of traders don't care about Ferraris and yachts. They just want to pay their bills, save a`}
                      <br />
                      little extra money, and sleep well at night. The only way
                      to do that is to bat 70% or more.
                      <br />
                      Anything less, and these goals are nothing more than
                      fantasy.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[10px] items-start justify-end ml-[auto] md:w-[100%] sm:w-[100%] w-[14%]">
                    <Img
                      src="images/img_checkmark_24X24.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark One"
                    />
                    <Text
                      className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      5:22 Am
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col font-outfit items-center justify-start mt-[188px] outline outline-gray_100 p-[16px] w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  wrapClassName="flex sm:w-[100%] w-[96%]"
                  name="typingfield"
                  placeholder="Write message"
                  prefix={
                    <Img
                      src="images/img_map.svg"
                      className="mr-[16px] my-[auto]"
                      alt="map"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_videocamera.svg"
                      className="ml-[35px] my-[auto]"
                      alt="video_camera"
                    />
                  }
                  shape="RoundedBorder15"
                  size="md"
                  variant="FillGray50"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
