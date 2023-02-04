import React from "react";

import Sidebar from "components/Sidebar";
import { Input, Img, Button, SelectBox, Text, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MyProfilePreviewPage = () => {
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
          <div className="font-urbanist md:h-[1733px] sm:h-[2703px] h-[936px] relative w-[100%]">
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-end justify-end mx-[auto] p-[34px] sm:px-[20px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_group33879.png')" }}
            >
              <Button
                className="flex h-[36px] items-center justify-center mt-[156px] rounded-radius50 w-[36px]"
                size="smIcn"
                variant="icbFillWhiteA700"
              >
                <Img
                  src="images/img_ticket.svg"
                  className="h-[20px]"
                  alt="ticket"
                />
              </Button>
            </div>
            <div className="absolute bottom-[0] flex md:flex-col sm:flex-col flex-row gap-[34px] inset-x-[0] items-start justify-between mx-[auto] w-[95%]">
              <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-center mb-[268px] p-[18px] rounded-radius15 shadow-bs1 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[87%]">
                  <Img
                    src="images/img_ellipse1015.png"
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
                <div className="flex flex-col items-center justify-start mb-[12px] w-[100%]">
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-center text-gray_500 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body1"
                  >
                    Dedicated to create amazing for art exhibition information
                    please check link below:
                  </Text>
                  <div className="flex flex-row gap-[6px] items-center justify-start mt-[24px] md:w-[100%] sm:w-[100%] w-[83%]">
                    <Img
                      src="images/img_globe_18X18.svg"
                      className="h-[18px] w-[18px]"
                      alt="globe"
                    />
                    <Text
                      className="font-normal not-italic text-black_900 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body2"
                    >
                      weloveart.com/kevincranel
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-between mt-[24px] md:w-[100%] sm:w-[100%] w-[87%]">
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      shape="RoundedBorder10"
                      size="lg"
                      variant="FillGray900"
                    >
                      Edit Profile
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
                    className="font-normal mt-[27px] not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Joined November 2021
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] items-center justify-start md:mt-[0] sm:mt-[0] mt-[118px] md:w-[100%] sm:w-[100%] w-[auto]">
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
                    variant="srcFillGray50"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group33978_7.png')",
                        }}
                      >
                        <div className="flex flex-row gap-[8px] items-center justify-end mb-[147px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[75px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            Ended
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
                      <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] sm:ml-[0] ml-[8px] md:w-[100%] sm:w-[100%] w-[79%]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Diehard BATTERY-SILVER
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Ralph Edwards
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group33978.png')",
                        }}
                      >
                        <div className="flex flex-row gap-[8px] items-center justify-end mb-[147px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
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
                      <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] sm:ml-[0] ml-[8px] md:w-[100%] sm:w-[100%] w-[69%]">
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
                          By Marvin McKinney
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group33978_8.png')",
                        }}
                      >
                        <div className="flex flex-row gap-[8px] items-center justify-end mb-[147px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[75px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            Ended
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[18px]"
                              alt="favorite Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] sm:ml-[0] ml-[8px] md:w-[100%] sm:w-[100%] w-[54%]">
                        <Text
                          className="font-semibold text-black_900 text-left tracking-ls016 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Bosch Spark Plug
                        </Text>
                        <Text
                          className="font-medium mt-[4px] text-gray_500 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body2"
                        >
                          By Guy Hawkins
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_10.png')",
                        }}
                      >
                        <div className="flex flex-row gap-[8px] items-center justify-end mb-[147px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[75px] text-[12px] text-center text-white_A700 tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            Ended
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-radius50 w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[18px]"
                              alt="favorite Three"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] sm:ml-[0] ml-[8px] md:w-[100%] sm:w-[100%] w-[44%]">
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
                          By Jerome Bell
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group33978_5.png')",
                        }}
                      >
                        <div className="flex flex-row gap-[8px] items-center justify-end mb-[147px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
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
                              alt="favorite Four"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] sm:ml-[0] ml-[8px] md:w-[100%] sm:w-[100%] w-[44%]">
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
                          By Eleanor Pena
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-radius15 shadow-bs1 w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col items-end justify-start p-[8px] rounded-radius12 w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_group33978_140X240.png')",
                        }}
                      >
                        <div className="flex flex-row gap-[8px] items-center justify-end mb-[147px] ml-[auto] md:w-[100%] sm:w-[100%] w-[51%]">
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
                              alt="favorite Five"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] sm:ml-[0] ml-[8px] md:w-[100%] sm:w-[100%] w-[56%]">
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

export default MyProfilePreviewPage;
