import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Button, SelectBox, Text, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const OtherUserProfilePage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row font-outfit md:gap-[20px] sm:gap-[20px] items-center mx-[auto] w-[100%]">
        <Sidebar className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[302px]" />
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
          <div className="font-urbanist md:h-[1741px] sm:h-[2711px] h-[940px] relative w-[100%]">
            <Img
              src="images/img_rectangle2057.png"
              className="absolute h-[260px] inset-x-[0] mx-[auto] object-cover top-[0] w-[100%]"
              alt="Rectangle2057"
            />
            <div className="absolute bottom-[0] flex md:flex-col sm:flex-col flex-row gap-[34px] inset-x-[0] items-start justify-between mx-[auto] w-[95%]">
              <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-center mb-[272px] p-[18px] rounded-radius15 shadow-bs1 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[87%]">
                  <Img
                    src="images/img_ellipse1015_42X42.png"
                    className="h-[100px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[100px]"
                    alt="Ellipse1022"
                  />
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Text
                      className="text-black_900 text-left tracking-ls02 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Eleanor Pena
                    </Text>
                    <div className="flex flex-row gap-[6px] items-center justify-between mt-[4px] w-[100%]">
                      <Text
                        className="font-medium text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body2"
                      >
                        0x864784f44ajf84bskw4w...
                      </Text>
                      <Img
                        src="images/img_lock_18X18.svg"
                        className="h-[18px] w-[18px]"
                        alt="lock One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-[10px] w-[100%]">
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-center text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body1"
                  >
                    Dedicated to create amazing for art exhibition information
                    please check link below:
                  </Text>
                  <div className="flex flex-row gap-[6px] items-center justify-center mt-[24px] md:w-[100%] sm:w-[100%] w-[45%]">
                    <Img
                      src="images/img_globe_18X18.svg"
                      className="h-[18px] w-[18px]"
                      alt="globe"
                    />
                    <Text
                      className="font-normal not-italic text-black_900 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      artistictea.io
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-between mt-[24px] md:w-[100%] sm:w-[100%] w-[87%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      shape="RoundedBorder10"
                      size="lg"
                      variant="FillGray900"
                    >
                      Follow
                    </Button>
                    <Button
                      className="flex h-[32px] items-center justify-center w-[32px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_reply.svg"
                        className="h-[18px]"
                        alt="reply"
                      />
                    </Button>
                    <Button
                      className="flex h-[32px] items-center justify-center w-[32px]"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_camera_32X32.svg"
                        className="h-[18px]"
                        alt="camera"
                      />
                    </Button>
                  </div>
                  <Line className="bg-gray_100 h-[1px] mt-[24px] w-[100%]" />
                  <Text
                    className="font-normal mt-[29px] not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Joined April 2021
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[34px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[118px] md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 flex-row gap-[12px] items-center justify-between sm:w-[100%] w-[auto]">
                    <Button
                      className="flex items-center justify-center text-center"
                      leftIcon={
                        <Img
                          src="images/img_grid.svg"
                          className="mr-[10px] text-center"
                          alt="grid"
                        />
                      }
                      shape="CircleBorder18"
                      size="md"
                      variant="FillBlack900"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-white_A700 tracking-ls014 md:tracking-ls1 sm:tracking-ls1">
                        Created
                      </div>
                    </Button>
                    <div className="flex flex-row gap-[10px] items-center justify-center p-[8px] rounded-radius18 w-[auto]">
                      <Img
                        src="images/img_folderadd.svg"
                        className="h-[20px] ml-[4px] w-[20px]"
                        alt="folderadd"
                      />
                      <Text
                        className="font-medium mr-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        Collection
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center p-[8px] rounded-radius18 w-[auto]">
                      <Img
                        src="images/img_clock_24X24.svg"
                        className="h-[20px] ml-[4px] w-[20px]"
                        alt="clock Three"
                      />
                      <Text
                        className="font-medium mr-[4px] text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        History
                      </Text>
                    </div>
                  </div>
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="flex-1 font-normal not-italic p-[0] text-[12px] placeholder:text-gray_500 text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    wrapClassName="flex sm:w-[100%] w-[auto]"
                    name="SearchInput One"
                    placeholder="Search by name"
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer mr-[14px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#93989a"
                          className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder8"
                    size="smSrc"
                    variant="srcOutlineGray300_1"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="gap-[19px] md:gap-[20px] sm:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_11.png')",
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
                              src="images/img_favorite.svg"
                              className="h-[18px]"
                              alt="favorite"
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
                                alt="sort"
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
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            onClick={() => navigate("/marketdetail")}
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
                            "url('images/img_group33978_12.png')",
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
                                alt="sort One"
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
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            onClick={() => navigate("/marketdetail")}
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
                            "url('images/img_group33978_13.png')",
                        }}
                      >
                        <div className="flex flex-row gap-[8px] items-center justify-end mb-[94px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
                          <Text
                            className="bg-gray_900_26 font-medium h-[28px] pl-[10px] sm:pr-[20px] pr-[30px] py-[7px] rounded-radius14 text-left text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[75px]"
                            variant="body2"
                          >
                            Ended
                          </Text>
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
                              Fixed Price
                            </Text>
                            <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[4px] w-[100%]">
                              <Img
                                src="images/img_sort.svg"
                                className="h-[16px] w-[16px]"
                                alt="sort Two"
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
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            onClick={() => navigate("/marketdetail")}
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
                            "url('images/img_group33978_15.png')",
                        }}
                      >
                        <div className="flex flex-row gap-[8px] items-center justify-end mb-[94px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
                          <Text
                            className="bg-gray_900_26 font-medium h-[28px] pl-[10px] sm:pr-[20px] pr-[30px] py-[7px] rounded-radius14 text-left text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[75px]"
                            variant="body2"
                          >
                            Ended
                          </Text>
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
                        <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[86%]">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Uowaw Your Face is Good
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
                              Fixed Price
                            </Text>
                            <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[88%]">
                              <Img
                                src="images/img_sort.svg"
                                className="h-[16px] w-[16px]"
                                alt="sort Three"
                              />
                              <Text
                                className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                1,32 ETH
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            onClick={() => navigate("/marketdetail")}
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
                            "url('images/img_group33978_16.png')",
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
                        <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[63%]">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            One Blooded Hand
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
                                alt="sort Four"
                              />
                              <Text
                                className="font-medium text-black_900 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                                variant="body1"
                              >
                                5,52 ETH
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            onClick={() => navigate("/marketdetail")}
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
                            "url('images/img_group33978_14.png')",
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
                              src="images/img_favorite.svg"
                              className="h-[18px]"
                              alt="favorite One"
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
                                alt="sort Five"
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
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            onClick={() => navigate("/marketdetail")}
                            shape="RoundedBorder10"
                            size="lg"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </div>
                      </div>
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

export default OtherUserProfilePage;
