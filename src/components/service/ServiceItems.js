import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Software Developer",
      time: '5/2022 - Present',
    text: [
        "Prudential is a company that provides insurance, investment management, and \n" +
        "other products and services. The project is to develop an internal use web \n" +
        "application focused on the stock market, especially the S&P 500"
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 2,
    name: "Front-End Developer",
      time: '12/2020 - 2/2022',
    text: [
        "BCG Digital Ventures is a business builder that helps organizations invent, \n" +
        "launch and scale business, products, and platforms. This project is to design \n" +
        "and improve the product management system. Arrange product stock and \n" +
        "check the store availability.\n"
    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "Front-End Developer",
      time: '9/2019 - 10/2020',
    text: [
        "AIG is a company that provides a wide range of property casualty insurance \n" +
        "and other financial services. This project redesigned and rebuilt the Automated \n" +
        "Billing System which is used by sales and procurement staff to prepare the \n" +
        "price for customer quotes."
    ],
    image: "assets/img/news/3.png",
  },
  {
    id: 4,
    name: "UI Developer",
      time: '8/2018 - 8/2019',
    text: [
        "BMS is a biopharmaceutical company. The project is to develop a human \n" +
        "resource management web application to manage employee information, track \n" +
        "employee records, and handle recruitment and onboarding processes."
    ],
    image: "assets/img/news/4.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
                <h5 className="title font-bold text-black text-[14px] mb-[15px]">
                    {service.time}
                </h5>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
