import React from "react";

import { Img, Text, Button } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="bg-gray_50 border-bw15 border-gray_100 border-solid flex flex-col gap-[50px] items-start justify-start py-[34px] w-[100%]">
          <div className="flex flex-row gap-[14px] items-center justify-start md:ml-[0] sm:ml-[0] ml-[34px] md:w-[100%] sm:w-[100%] w-[59%]">
            <Img
              src="images/img_ellipse1015.png"
              className="h-[56px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[56px]"
              alt="Ellipse1015"
            />
            <div className="flex flex-col gap-[9px] items-start justify-start w-[62%]">
              <Text
                className="font-outfit font-semibold text-black_900 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h5"
                variant="h5"
              >
                Kevin Cranel
              </Text>
              <Text
                className="font-normal font-outfit not-italic text-gray_500 text-left tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body1"
              >
                @kecrane
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[15px] justify-start w-[100%]">
              <Text
                className="font-medium font-urbanist md:ml-[0] sm:ml-[0] ml-[34px] text-gray_901 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body2"
              >
                GENERAL
              </Text>
              <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[18px] items-center justify-start p-[10px] w-[100%]">
                  <Img
                    src="images/img_clock_1.svg"
                    className="h-[24px] ml-[24px] w-[24px]"
                    alt="clock"
                  />
                  <Text
                    className="font-medium font-urbanist text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start p-[10px] w-[100%]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[24px] ml-[24px] w-[24px]"
                    alt="message"
                  />
                  <Text
                    className="font-medium font-urbanist text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Message
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start p-[10px] w-[100%]">
                  <Img
                    src="images/img_settings.svg"
                    className="h-[24px] ml-[24px] w-[24px]"
                    alt="settings"
                  />
                  <Text
                    className="font-medium font-urbanist text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] justify-start mt-[31px] w-[100%]">
              <Text
                className="font-medium font-urbanist md:ml-[0] sm:ml-[0] ml-[34px] text-gray_901 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body2"
              >
                MARKETPLACE
              </Text>
              <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[18px] items-center justify-start p-[10px] w-[100%]">
                  <Img
                    src="images/img_user.svg"
                    className="h-[24px] ml-[24px] w-[24px]"
                    alt="user"
                  />
                  <Text
                    className="font-medium font-urbanist text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Market
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start p-[10px] w-[100%]">
                  <Img
                    src="images/img_link.svg"
                    className="h-[24px] ml-[24px] w-[24px]"
                    alt="link"
                  />
                  <Text
                    className="font-medium font-urbanist text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Active Bid
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start p-[10px] w-[100%]">
                  <Img
                    src="images/img_clock.svg"
                    className="h-[24px] ml-[24px] w-[24px]"
                    alt="clock One"
                  />
                  <Text
                    className="font-medium font-urbanist text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Saved
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[15px] justify-start mt-[31px] w-[100%]">
              <Text
                className="font-medium font-urbanist md:ml-[0] sm:ml-[0] ml-[34px] text-gray_901 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body2"
              >
                MY PROFILE
              </Text>
              <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[18px] items-center justify-start p-[10px] w-[100%]">
                  <Img
                    src="images/img_settings_24X24.svg"
                    className="h-[24px] ml-[24px] w-[24px]"
                    alt="settings Two"
                  />
                  <Text
                    className="font-medium font-urbanist text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Collection
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start p-[10px] w-[100%]">
                  <Img
                    src="images/img_car.svg"
                    className="h-[24px] ml-[24px] w-[24px]"
                    alt="car"
                  />
                  <Text
                    className="font-medium font-urbanist text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Wallet
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start p-[10px] w-[100%]">
                  <Img
                    src="images/img_clock_24X24.svg"
                    className="h-[24px] ml-[24px] w-[24px]"
                    alt="clock Two"
                  />
                  <Text
                    className="font-medium font-urbanist text-gray_500 text-left tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    History
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[231px] sm:h-[231px] h-[258px] md:ml-[0] sm:ml-[0] ml-[34px] relative md:w-[100%] sm:w-[100%] w-[78%]">
            <div className="absolute bg-gray_900 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-[auto] p-[14px] rounded-radius15 w-[234px]">
              <Text
                className="font-semibold font-urbanist mt-[29px] text-left text-white_A700 tracking-ls018 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h5"
                variant="h5"
              >
                Help Center
              </Text>
              <Text
                className="font-normal font-urbanist leading-[180.00%] mt-[18px] not-italic text-center text-gray_400 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[81%]"
                variant="body1"
              >
                Having trouble in Enefti?
                <br />
                Please contact us for more question
              </Text>
              <Button
                className="cursor-pointer font-medium font-urbanist min-w-[206px] mt-[34px] text-[14px] text-center text-gray_900 tracking-ls014 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillWhiteA700"
              >
                Go To Help Center
              </Button>
            </div>
            <Button
              className="absolute flex h-[50px] inset-x-[0] items-center justify-center mx-[auto] rounded-radius50 top-[0] w-[50px]"
              size="lgIcn"
              variant="icbOutlineGray5003f"
            >
              <Img
                src="images/img_question.svg"
                className="h-[24px]"
                alt="question"
              />
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
