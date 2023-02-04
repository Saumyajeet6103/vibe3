import React from "react";

import {
  Img,
  Text,
  Button,
  Input,
  SelectBox,
  Line,
  TextArea,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row font-outfit md:gap-[20px] sm:gap-[20px] items-start mx-[auto] pb-[34px] w-[100%]">
        <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[302px]">
          <div className="flex flex-col gap-[50px] items-start justify-start mx-[auto] my-[34px] w-[89%]">
            <div className="flex flex-row gap-[14px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[16px] md:w-[100%] sm:w-[100%] w-[67%]">
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
                    onClick={() => navigate("/message")}
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
                  <div className="bg-gray_900_5f flex flex-col font-outfit items-start justify-start p-[10px] rounded-radius10 w-[100%]">
                    <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[6px] md:w-[100%] sm:w-[100%] w-[44%]">
                      <Img
                        src="images/img_settings_24X24.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="font-medium text-gray_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
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
            <div className="font-urbanist md:h-[244px] sm:h-[244px] h-[258px] md:ml-[0] sm:ml-[0] ml-[16px] relative md:w-[100%] sm:w-[100%] w-[88%]">
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
          <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start md:w-[100%] sm:w-[100%] w-[95%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[10px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="text-black_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  General Settings
                </Text>
                <Text
                  className="font-medium text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Update your photo and personal details here.
                </Text>
              </div>
              <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between md:w-[100%] sm:w-[100%] w-[auto]">
                <Text
                  className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Every changes automaticly saved
                </Text>
                <div className="flex flex-row gap-[12px] items-center justify-between sm:w-[100%] w-[auto]">
                  <Button
                    className="cursor-pointer font-medium min-w-[106px] text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillGray900"
                  >
                    Preview
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[106px] text-[14px] text-center text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillGray100"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[34px] items-start justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="bg-white_A700 flex flex-col items-start justify-start outline outline-[0.75px] outline-gray_100 py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <Text
                    className="font-medium md:ml-[0] sm:ml-[0] ml-[24px] text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Personal Information
                  </Text>
                  <Line className="bg-gray_100 h-[1.5px] mt-[24px] w-[100%]" />
                  <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[24px] mt-[32px] pt-[2px] md:w-[100%] sm:w-[100%] w-[94%]">
                    <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex md:flex-col sm:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                          <div className="flex md:flex-1 sm:flex-1 flex-col gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <Text
                              className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              <span className="text-black_900 text-[16px] font-urbanist">
                                First Name
                              </span>
                              <span className="text-red_600 text-[16px] font-urbanist">
                                *
                              </span>
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="flex w-[100%]"
                              name="SearchInput One"
                              placeholder="Kevin"
                              prefix={
                                <Img
                                  src="images/img_user_2.svg"
                                  className="mr-[12px] my-[auto]"
                                  alt="user"
                                />
                              }
                              shape="RoundedBorder8"
                              size="lg"
                              variant="OutlineGray400"
                            ></Input>
                          </div>
                          <div className="flex md:flex-1 sm:flex-1 flex-col gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                            <Text
                              className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              <span className="text-black_900 text-[16px] font-urbanist">
                                Last Name
                              </span>
                              <span className="text-red_600 text-[16px] font-urbanist">
                                *
                              </span>
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                              wrapClassName="w-[100%]"
                              name="SearchInput Two"
                              placeholder="Cranel"
                              shape="RoundedBorder8"
                              size="sm"
                              variant="OutlineGray400"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[24px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            <span className="text-black_900 text-[16px] font-urbanist">
                              Email Address
                            </span>
                            <span className="text-red_600 text-[16px] font-urbanist">
                              *
                            </span>
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            wrapClassName="flex w-[100%]"
                            type="email"
                            name="email"
                            placeholder="hello.kevincranel@workmail.com"
                            prefix={
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="mr-[12px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="ml-[35px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder8"
                            size="xl"
                            variant="OutlineGray400"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[26px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Username
                          </Text>
                          <Input
                            className="p-[0] w-[100%]"
                            wrapClassName="flex pb-[13px] pl-[16px] pr-[14px] pt-[14px] w-[100%]"
                            name="searchinput Three"
                            placeholder=""
                            prefix={
                              <Img
                                src="images/img_link.svg"
                                className="mr-[35px] my-[auto]"
                                alt="link"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="ml-[35px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="OutlineGray400_1"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start mt-[24px] w-[100%]">
                          <Text
                            className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Biography
                          </Text>
                          <TextArea
                            className="font-normal not-italic text-[14px] placeholder:text-black_900 text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                            name="searchinput Four"
                            placeholder="Dedicated to create amazing for art exhibition information please check link below:"
                          ></TextArea>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Website
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_900 text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                          wrapClassName="flex w-[100%]"
                          name="weburl"
                          placeholder="weloveart.com/kevincranel"
                          prefix={
                            <Img
                              src="images/img_globe.svg"
                              className="mr-[12px] my-[auto]"
                              alt="globe"
                            />
                          }
                          shape="RoundedBorder8"
                          size="lg"
                          variant="OutlineGray400"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[33px] items-center justify-start outline outline-[0.75px] outline-gray_100 py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[24px] justify-start w-[100%]">
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[24px] text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Notification Settings
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] w-[100%]" />
                  </div>
                  <List
                    className="flex-col md:gap-[20px] sm:gap-[20px] grid items-center pb-[100px] md:w-[100%] sm:w-[100%] w-[94%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between pb-[4px] w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Item Sold
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          When someone purchased one of your items
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera.svg"
                        className="h-[24px] w-[auto]"
                        alt="camera"
                      />
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between pb-[4px] w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Successful Purchase
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          When you successfully buy an item
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera.svg"
                        className="h-[24px] w-[auto]"
                        alt="camera One"
                      />
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between pb-[4px] w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Auction Expirates
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          When a timed auction you created ends
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera_24X40.svg"
                        className="h-[24px] w-[auto]"
                        alt="camera Two"
                      />
                    </div>
                    <Line className="self-center h-[1.5px] bg-gray_100 w-[100%]" />
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between pb-[4px] w-[100%]">
                      <div className="flex sm:flex-1 flex-col gap-[12px] items-start justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Owned Item Updates
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          When a significant update occurs for one of the items
                          you have purchased on Enefthy
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera_24X40.svg"
                        className="h-[24px] w-[auto]"
                        alt="camera Three"
                      />
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="bg-white_A700 flex flex-col gap-[33px] items-center justify-start outline outline-[0.75px] outline-gray_100 py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[24px] justify-start w-[100%]">
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[24px] text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Your Photo
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] sm:w-[100%] w-[86%]">
                    <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[68%]">
                      <Img
                        src="images/img_ellipse1015.png"
                        className="h-[64px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[64px]"
                        alt="Ellipse1023"
                      />
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[58%]">
                        <Text
                          className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Edit your photo
                        </Text>
                        <div className="flex flex-row font-outfit gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                          <Text
                            className="font-normal not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Delete
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-red_600 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            variant="body1"
                          >
                            Update
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[14px] items-center justify-start outline-[0.75px] outline-dashed outline-gray_901 p-[14px] rounded-radius15 w-[100%]">
                      <Button
                        className="flex h-[48px] items-center justify-center w-[48px]"
                        shape="icbCircleBorder25"
                        size="lgIcn"
                        variant="icbFillGray50"
                      >
                        <Img
                          src="images/img_cloud.svg"
                          className="h-[22px]"
                          alt="cloud"
                        />
                      </Button>
                      <div className="flex flex-col gap-[10px] items-center justify-start md:w-[100%] sm:w-[100%] w-[82%]">
                        <Text
                          className="font-medium text-gray_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          Click to upload or drag and drop
                        </Text>
                        <Text
                          className="font-medium leading-[130.00%] text-center text-gray_500 tracking-ls012 md:tracking-ls1 sm:tracking-ls1"
                          variant="body2"
                        >
                          PNG, JPG or Gif
                          <br />
                          Max 20Mb
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[32px] items-center justify-start outline outline-[0.75px] outline-gray_100 py-[24px] rounded-radius15 shadow-bs1 w-[100%]">
                  <div className="flex flex-col gap-[24px] justify-start w-[100%]">
                    <Text
                      className="font-medium md:ml-[0] sm:ml-[0] ml-[24px] text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Social Linked
                    </Text>
                    <Line className="bg-gray_100 h-[1.5px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[11px] items-start justify-start md:w-[100%] sm:w-[100%] w-[86%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Img
                        src="images/img_signal.svg"
                        className="h-[28px] w-[auto]"
                        alt="signal"
                      />
                      <Button
                        className="cursor-pointer font-medium min-w-[96px] text-[14px] text-center text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGreen600"
                      >
                        Connected
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] sm:w-[100%] w-[85%]">
                      <Text
                        className="font-medium text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Edit your photo
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1"
                        variant="body1"
                      >
                        Use Google to sign in to your account.
                        <br />
                        Click here to learn more.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
