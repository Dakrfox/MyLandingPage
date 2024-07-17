import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FaMusic } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";

import "./App.css";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About Me", href: "#", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "LinkedIn", href: "http://linkedin.com/in/dk-fox", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function App() {
  return (
    <>
      {/* Navbar */}
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  className="rounded"
                  width="20.000000pt"
                  height="20.000000pt"
                  viewBox="0 0 500.000000 500.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                    fill="#ffffff"
                    stroke="none"
                  >
                    <path d="M0 3180 l0 -1820 63 0 62 0 238 1037 c131 571 238 1041 237 1046 0 4 -38 7 -84 7 l-84 0 7 28 7 27 439 0 439 0 226 -775 c124 -426 228 -781 231 -789 4 -11 350 1477 349 1502 0 4 -38 7 -85 7 -47 0 -85 2 -85 4 0 3 4 16 10 30 l10 26 215 0 c118 0 215 -2 215 -4 0 -3 -4 -16 -10 -30 -9 -25 -12 -26 -95 -26 -47 0 -85 -1 -85 -2 0 -2 -112 -487 -248 -1078 l-248 -1075 -221 -3 -221 -2 -19 62 c-10 35 -147 494 -303 1020 -157 527 -287 958 -290 958 -3 0 -106 -438 -229 -973 -123 -534 -226 -978 -228 -984 -4 -10 16 -13 81 -13 92 0 100 -5 76 -51 -10 -18 -23 -19 -190 -19 l-180 0 0 -645 0 -645 2500 0 2500 0 0 1725 0 1725 -59 0 -59 0 -27 -112 c-14 -62 -122 -531 -239 -1043 l-213 -930 83 -3 c89 -3 97 -9 74 -53 -10 -18 -26 -19 -485 -19 l-475 0 0 23 c0 40 12 46 100 49 l85 3 226 980 c125 539 225 982 223 984 -2 2 -6 2 -9 0 -2 -3 -214 -457 -470 -1009 -257 -553 -471 -1010 -477 -1017 -15 -18 -387 -19 -393 0 -2 6 -20 428 -40 937 -35 925 -46 1118 -58 1090 -3 -8 -106 -447 -227 -975 -122 -528 -223 -968 -226 -977 -5 -16 3 -18 80 -18 92 0 100 -6 76 -51 -10 -18 -23 -19 -220 -19 -226 0 -227 0 -200 51 9 16 22 19 95 19 l84 0 11 53 c6 28 113 497 239 1042 l227 990 -84 3 -83 3 3 27 3 27 430 0 430 0 22 -803 c11 -442 23 -805 25 -807 1 -1 172 361 378 806 l375 809 387 0 388 0 0 745 0 745 -2500 0 -2500 0 0 -1820z" />
                  </g>
                </svg>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
      {/* hero section*/}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Building smarter apps for brighter users
          </h1>
          <h2 className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Fullstack Developer
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Hi! I'm Nicolas Martinez Herrera, but you can call me Nico and I
            will help you to solve problems and satisfy software development
            needs, as a fullstack developer and systems engineer, my knowledge
            and expertise will be key for every situation in the IT world.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Let's Talk
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </a>
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">
              Tech Stack
            </span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
                  <path
                    d="M16.147 5.154l1.09 2.05a6.15 6.15 0 0 0 .824 1.024c.913.913 1.782 1.87 2.56 2.895 1.848 2.427 3.095 5.122 3.986 8.04.534 1.782.824 3.608.846 5.456.09 5.523-1.804 10.266-5.634 14.208a16.3 16.3 0 0 1-2.004 1.715c-.38 0-.557-.3-.713-.557-.3-.5-.468-1.047-.557-1.603-.134-.668-.223-1.336-.178-2.027v-.312c-.022-.067-.356-30.732-.223-30.888z"
                    fill="#599636"
                  />
                  <path
                    d="M16.147 5.088c-.045-.09-.09-.022-.134.022.022.445-.134.846-.38 1.225-.267.38-.624.668-.98.98-1.982 1.715-3.54 3.786-4.788 6.102-1.648 3.118-2.516 6.458-2.76 9.977-.11 1.27.4 5.746.802 7.037 1.09 3.43 3.05 6.302 5.6 8.796.624.6 1.292 1.158 1.982 1.692.2 0 .223-.178.267-.312a6.11 6.11 0 0 0 .2-.869c.2-1.113.312-2.227.445-3.34l-.245-31.31z"
                    fill="#6cac48"
                  />
                  <path
                    d="M17.24 41.9c.045-.512.3-.935.557-1.358-.267-.11-.468-.334-.624-.58-.134-.223-.245-.5-.334-.735-.312-.935-.38-1.915-.468-2.873v-.58c-.11.09-.134.846-.134.958-.067 1.024-.2 2.027-.4 3.006-.067.4-.11.802-.356 1.158 0 .045 0 .09.022.156.4 1.18.512 2.383.58 3.608v.445c0 .534-.022.423.423.6.178.067.38.09.557.223.134 0 .156-.11.156-.2l-.067-.735v-2.05c-.022-.356.045-.713.09-1.047z"
                    fill="#c2bfbf"
                  />
                  <g transform="matrix(1.021124 0 0 1.021124 -4.376266 -1.845946)">
                    <path
                      d="M37.73 33.72v2.077a1.45 1.45 0 0 0 .014.246c.027.246.178.396.4.465a4.97 4.97 0 0 0 .63.123c.123.014.164.068.178.2.014.465-.027.52-.478.492-1.052-.055-2.105-.068-3.157 0h-.1c-.328.014-.355-.014-.355-.342 0-.055.014-.123.014-.178 0-.1.068-.15.164-.15.22-.027.424-.082.63-.123.287-.068.45-.246.478-.533.04-.314.04-.642.04-.957l.014-3.662a.56.56 0 0 0-.3-.52 3.89 3.89 0 0 0-.78-.328c-.082-.027-.164-.04-.232-.082-.2-.096-.205-.273-.014-.383.068-.04.15-.068.232-.082a12.42 12.42 0 0 0 2.432-.615c.164-.055.205-.04.22.123.014.1 0 .22-.014.314-.027.178-.027.355-.027.52 0 .068.014.137.082.178s.137 0 .2-.04c.287-.22.574-.424.888-.6.45-.246.93-.465 1.45-.533.63-.082 1.175.082 1.654.492a3.1 3.1 0 0 1 .519.601c.137.2.15.205.328.068.52-.383 1.066-.724 1.654-.97.615-.26 1.244-.3 1.872-.082.642.232 1.08.683 1.34 1.298.22.492.314 1 .314 1.53v3.662c0 .246.1.4.342.52.26.1.547.15.82.205.178.04.178.04.178.22-.027.45-.068.478-.506.45a29.42 29.42 0 0 0-3.293 0c-.22.014-.22.014-.232-.205v-.068c-.014-.37-.014-.37.342-.45l.355-.096a.55.55 0 0 0 .424-.533l.04-1.025-.027-2.678a2.13 2.13 0 0 0-.15-.697c-.342-.834-1.093-1.134-1.818-1.052-.547.055-1.025.273-1.476.588-.096.068-.164.15-.15.287.123.875.04 1.75.055 2.624v1.9c0 .342.137.506.465.588l.63.137c.096.014.15.055.15.164v.1c-.014.383-.04.4-.424.396-1.093-.055-2.187-.04-3.266 0-.37.014-.4-.027-.383-.4.014-.22.04-.232.246-.273l.45-.082c.4-.082.547-.232.574-.656l.04-.916-.027-2.747c-.027-.342-.1-.67-.287-.984-.273-.506-.7-.765-1.285-.793-.588-.04-1.107.178-1.6.45-.342.2-.492.437-.465.834v1.995zm25.747.083v1.927a4.13 4.13 0 0 0 .027.41.42.42 0 0 0 .328.383 3.19 3.19 0 0 0 .724.123c.137.014.164.068.178.178v.096c-.014.478-.068.533-.533.506-1.04-.068-2.077-.055-3.116 0l-.4.014c-.082 0-.1-.04-.123-.096a1.39 1.39 0 0 1 0-.574c.014-.082.068-.1.15-.123.2-.027.37-.068.56-.1.342-.082.465-.22.478-.574l.04-1.148v-3.362c0-.246-.096-.396-.314-.506-.246-.137-.506-.232-.78-.328-.082-.027-.164-.055-.232-.096-.178-.123-.2-.3-.027-.437a.49.49 0 0 1 .273-.11c.875-.137 1.722-.328 2.542-.656.096-.04.137-.014.178.068s.055.178.04.273l-.04.642c0 .082-.04.2.027.232.082.055.137-.068.205-.1a6.09 6.09 0 0 1 1.326-.847c.424-.2.86-.328 1.353-.3.916.055 1.572.52 1.995 1.326.22.424.314.888.355 1.367l.04 1 .014 3.02c.014.232.096.383.328.465a4.47 4.47 0 0 0 .738.178c.22.027.232.068.246.273v.068c-.027.465-.055.478-.52.45a28.59 28.59 0 0 0-3.061 0c-.137.014-.273 0-.4.014-.082 0-.137-.014-.15-.096-.027-.178-.055-.355-.014-.547.014-.082.055-.123.15-.137l.63-.1c.22-.055.342-.2.37-.4l.027-.383-.014-2.856c0-.328-.014-.656-.082-.984-.164-.7-.697-1.2-1.42-1.27-.63-.068-1.2.096-1.722.437-.26.164-.37.396-.37.683v2.064c0-.04 0-.04.014-.04z"
                      fill="#47474a"
                    />
                    <path
                      d="M103.503 29.935c-.15-.998-.52-1.886-1.162-2.665a5.27 5.27 0 0 0-2.105-1.558c-.86-.355-1.777-.465-2.706-.492-.383-.014-5.603.068-5.986 0-.096-.014-.164.014-.22.096-.068.1-.137.205-.178.314-.164.37-.164.342.232.396.328.055.642.082.957.178.287.096.492.26.56.574.027.15.055 4.96.055 7.202l-.055 1.6c-.014.123-.027.246-.068.355-.055.164-.15.3-.314.37a1.62 1.62 0 0 1-.574.15c-.37.04-.424.055-.547.465l-.04.15c-.027.178-.014.205.164.205l4.086.04 1.6-.027 1.107-.137c1.257-.232 2.378-.752 3.334-1.585a5.55 5.55 0 0 0 1.312-1.722c.383-.765.547-1.6.588-2.446.068-.478.04-.97-.04-1.462zm-1.982 1.94c-.055.875-.232 1.722-.683 2.487-.574.998-1.394 1.695-2.528 1.94-.492.1-.984.15-1.5.082-.37-.04-.724-.082-1.066-.205-.615-.22-.834-.6-.847-1.2l-.014-8.24c0-.492.22-.6.574-.615.533-.04 1.08-.027 1.613.027a6.06 6.06 0 0 1 1.654.4 3.98 3.98 0 0 1 1.08.67c.738.63 1.23 1.42 1.5 2.35.22.752.26 1.517.22 2.282zm13.34 1.34c0-.082 0-.15-.014-.232-.123-.752-.52-1.326-1.134-1.763-.396-.287-.847-.478-1.312-.615-.082-.027-.15-.055-.232-.068.014-.068.055-.082.096-.096.273-.137.533-.287.765-.492.424-.355.7-.793.847-1.326.082-.287.082-.574.055-.875a2.35 2.35 0 0 0-.998-1.777c-.63-.465-1.367-.656-2.132-.67-1.476-.027-2.965 0-4.44 0-.424 0-.847.027-1.285-.04-.082-.014-.2-.04-.26.055-.1.178-.22.355-.26.56-.014.096.014.15.123.164l.943.137c.37.055.63.26.656.588a5.78 5.78 0 0 1 .04.683l-.027 2.555-.014 5.056c0 .3-.04.588-.096.888a.5.5 0 0 1-.355.41c-.273.082-.533.164-.82.164a.34.34 0 0 0-.355.232c-.055.123-.1.26-.123.383-.027.164.014.22.178.2.123-.014 4.633.096 5.48.014.506-.055 1-.123 1.503-.273.86-.273 1.654-.67 2.282-1.34.52-.547.82-1.203.847-1.968.04-.178.04-.355.04-.547zm-6.628-5.6l.04-1.093c0-.205.082-.3.287-.342.328-.068.656-.04.984-.027.328.027.642.068.97.164.6.178 1.066.52 1.34 1.093a1.96 1.96 0 0 1 .191.834c.014.383-.014.752-.164 1.12-.232.506-.6.834-1.134.93s-2.05.055-2.282.055c-.205 0-.22-.027-.22-.232V28.83a8.79 8.79 0 0 1-.014-1.203zm4.44 7.352c-.232.615-.656 1.04-1.257 1.27-.328.123-.656.2-1 .178-.424-.014-.847 0-1.27-.082-.574-.123-.834-.67-.875-1.066-.068-.697-.027-1.408-.04-1.927v-1.804c0-.22.027-.287.26-.287l1.285.014.875.1c.615.137 1.175.37 1.613.847.355.383.547.847.588 1.353.04.478.014.943-.164 1.394z"
                      fill="#c2bfbf"
                    />
                    <path
                      d="M77.95 30.85l.355.055c.383.014.834-.123.97-.656a1.38 1.38 0 0 0 0-.78c-.082 0-.123.068-.164.096-.205.164-.437.26-.683.287-.492.055-.984.027-1.462-.15l-.67-.232a3.95 3.95 0 0 0-1.45-.19c-.697.055-1.353.287-1.968.615-.656.355-1.12.888-1.34 1.613-.123.424-.137.86-.082 1.298.137.998.656 1.695 1.585 2.064.055.014.096.04.15.055.123.068.137.137.027.232l-.342.232-.82.506c-.205.123-.232.22-.164.437a1.43 1.43 0 0 0 .437.656 2.28 2.28 0 0 0 .629.383c.15.068.15.1.014.22l-.78.56c-.26.2-.52.4-.738.656a1.35 1.35 0 0 0-.328 1.23 2.31 2.31 0 0 0 .71 1.23 2.9 2.9 0 0 0 1.257.683c.765.22 1.558.232 2.337.082 1.12-.205 2.1-.7 2.87-1.544.533-.56.847-1.216.875-2a1.92 1.92 0 0 0-1.476-1.995l-.738-.137-2.255-.2c-.246-.014-.492-.055-.697-.178-.26-.164-.328-.478-.164-.683.123-.15.273-.246.465-.26l.437-.04a3.96 3.96 0 0 0 2.309-1.052 2.42 2.42 0 0 0 .697-1.162c.164-.588.164-1.2.027-1.8-.04-.15-.027-.164.164-.137zm-3.35 6.807c.082.014.164 0 .246 0 .574.027 1.162.068 1.722.22a3.58 3.58 0 0 1 .533.205c.547.3.752.82.683 1.38-.082.615-.424 1.052-.957 1.34-.355.2-.752.287-1.162.328-.15.014-.287 0-.437 0-.478.014-.943-.04-1.394-.232-.314-.123-.574-.3-.806-.547-.478-.478-.7-1.353.014-2.064.437-.4.93-.683 1.558-.63zm1.558-4.264c-.287.724-.916.943-1.544.847-.574-.082-.998-.396-1.27-.916-.355-.697-.45-1.42-.246-2.173.15-.56.492-.984 1.093-1.08.765-.137 1.5.137 1.886.902.2.37.287.82.287 1.462-.014.26-.068.615-.205.957zm-17.218-.93c-.123-.738-.396-1.408-.902-1.968-.752-.834-1.708-1.2-2.788-1.203-.943-.014-1.83.26-2.624.752a3.56 3.56 0 0 0-1.599 2.091c-.232.793-.22 1.6-.04 2.405.478 2.16 2.146 3.088 4.14 2.952.588-.04 1.148-.232 1.68-.492.793-.37 1.367-.957 1.763-1.736.314-.642.45-1.326.437-2.105l-.068-.697zM57 35.497a1.66 1.66 0 0 1-1.408 1.148c-.6.082-1.162-.068-1.667-.424a2.84 2.84 0 0 1-.861-1.025c-.56-1.148-.656-2.35-.37-3.58a2.05 2.05 0 0 1 .574-.998c.506-.465 1.093-.574 1.75-.437.63.137 1.107.478 1.5.998s.574 1.12.683 1.75c.055.314.055.642.068.847 0 .656-.055 1.2-.26 1.722zm31.8-2.924c-.1-.793-.396-1.517-.957-2.118-.738-.806-1.695-1.148-2.76-1.162-.916-.014-1.763.246-2.542.697-.875.52-1.476 1.257-1.708 2.255a4.77 4.77 0 0 0 .328 3.252c.45.957 1.216 1.572 2.228 1.845 1.12.3 2.187.164 3.225-.342.902-.437 1.544-1.12 1.913-2.05.22-.547.3-1.134.314-1.818.014-.123-.014-.342-.04-.56zm-1.886 2.747c-.22.738-.683 1.216-1.462 1.326-.574.082-1.12-.055-1.613-.383-.424-.287-.724-.67-.943-1.12-.246-.478-.383-.984-.437-1.503-.082-.642-.082-1.27.068-1.913a1.95 1.95 0 0 1 .123-.369c.383-.957 1.23-1.394 2.228-1.175.67.15 1.175.52 1.558 1.08.37.547.547 1.148.63 1.8.04.26.055.533.04.765 0 .533-.04 1.025-.2 1.503z"
                      fill="#47474a"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="60"
                  fillRule="evenodd"
                >
                  <g
                    transform="matrix(.06928 0 0 .06928 7.367398 13.505331)"
                    fill="none"
                  >
                    <circle
                      r="50.167"
                      cy="237.628"
                      cx="269.529"
                      fill="#00d8ff"
                    />
                    <g stroke="#00d8ff" strokeWidth="24">
                      <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z" />
                      <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z" />
                      <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z" />
                    </g>
                  </g>
                  <path
                    d="M64.62 38.848l-4.26-6.436c2.153-.19 4.093-1.75 4.093-4.6 0-2.9-2.058-4.756-4.945-4.756h-6.34v15.78h1.964v-6.27h3.147l4.022 6.27zm-5.347-7.997h-4.14v-6.033h4.14c1.87 0 3.147 1.23 3.147 3.005s-1.278 3.03-3.147 3.03zm12.658 8.28c1.87 0 3.407-.615 4.543-1.75l-.852-1.16c-.9.923-2.224 1.443-3.525 1.443-2.46 0-3.975-1.798-4.117-3.95h9.25v-.45c0-3.43-2.035-6.128-5.49-6.128-3.265 0-5.63 2.674-5.63 5.986 0 3.573 2.437 6 5.82 6zm3.55-6.72h-7.5c.095-1.75 1.3-3.81 3.738-3.81 2.603 0 3.738 2.106 3.762 3.81zm13.534 6.436v-7.855c0-2.768-2.01-3.857-4.424-3.857-1.87 0-3.336.615-4.566 1.893l.828 1.23c1.017-1.088 2.13-1.585 3.502-1.585 1.656 0 2.887.875 2.887 2.413v2.058c-.923-1.065-2.224-1.562-3.786-1.562-1.94 0-4 1.207-4 3.762 0 2.484 2.058 3.786 4 3.786 1.538 0 2.84-.544 3.786-1.585v1.3zm-4.92-.994c-1.656 0-2.816-1.04-2.816-2.484 0-1.467 1.16-2.508 2.816-2.508 1.254 0 2.46.473 3.147 1.42v2.153c-.686.946-1.893 1.42-3.147 1.42zm13.5 1.278c2.082 0 3.312-.852 4.188-1.987l-1.183-1.088c-.757 1.017-1.727 1.49-2.9 1.49-2.437 0-3.95-1.893-3.95-4.424s1.514-4.4 3.95-4.4c1.183 0 2.153.45 2.9 1.49l1.183-1.088c-.875-1.136-2.106-1.987-4.188-1.987-3.407 0-5.702 2.603-5.702 5.986 0 3.407 2.295 6 5.702 6zm9.56 0c1.04 0 1.68-.308 2.13-.733l-.52-1.325c-.237.26-.7.473-1.207.473-.78 0-1.16-.615-1.16-1.467v-7.098h2.32V27.42h-2.32v-3.123h-1.775v3.123h-1.893v1.562h1.893v7.477c0 1.704.852 2.674 2.532 2.674z"
                    fill="#00d8ff"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="60"
                  preserveAspectRatio="xMidYMid"
                >
                  <g transform="matrix(.217946 0 0 .217946 4.120542 14.085548)">
                    <path
                      d="M471.05 51.6c-1.245 0-2.455.257-3.526.863l-33.888 19.57c-2.193 1.263-3.526 3.65-3.526 6.188v39.07c0 2.537 1.333 4.92 3.526 6.187l8.85 5.1c4.3 2.12 5.886 2.086 7.843 2.086 6.366 0 10-3.863 10-10.577V81.542c0-.545-.472-.935-1.007-.935h-4.245c-.544 0-1.007.4-1.007.935v38.565c0 2.976-3.1 5.97-8.13 3.454l-9.2-5.396c-.325-.177-.576-.5-.576-.863v-39.07c0-.37.248-.748.576-.935l33.817-19.5c.317-.182.694-.182 1.007 0l33.817 19.5c.322.193.576.553.576.935v39.07c0 .373-.187.755-.504.935l-33.888 19.5c-.3.173-.7.173-1.007 0l-8.706-5.18c-.26-.152-.613-.14-.863 0-2.403 1.362-2.855 1.52-5.108 2.302-.555.193-1.4.494.288 1.44l11.368 6.7c1.082.626 2.288.935 3.526.935 1.255 0 2.443-.3 3.526-.935l33.888-19.5c2.193-1.276 3.526-3.65 3.526-6.187v-39.07c0-2.538-1.333-4.92-3.526-6.188l-33.888-19.57c-1.062-.606-2.28-.863-3.526-.863zm9.066 27.918c-9.65 0-15.397 4.107-15.397 10.936 0 7.4 5.704 9.444 14.966 10.36 11.08 1.085 11.944 2.712 11.944 4.893 0 3.783-3.016 5.396-10.145 5.396-8.956 0-10.925-2.236-11.584-6.7-.078-.478-.446-.863-.935-.863h-4.4a1.03 1.03 0 0 0-1.007 1.007c0 5.703 3.102 12.447 17.916 12.447 10.723 0 16.908-4.2 16.908-11.584 0-7.3-4.996-9.273-15.397-10.65-10.5-1.4-11.512-2.07-11.512-4.533 0-2.032.85-4.75 8.634-4.75 6.953 0 9.523 1.5 10.577 6.188.092.44.48.8.935.8h4.4c.27 0 .532-.166.72-.36.184-.207.314-.44.288-.72-.68-8.074-6.064-11.872-16.908-11.872z"
                      fill="#83cd29"
                    />
                    <path
                      d="M271.82.383a2.18 2.18 0 0 0-1.079.288 2.18 2.18 0 0 0-1.079 1.871v55.042c0 .54-.252 1.024-.72 1.295a1.5 1.5 0 0 1-1.511 0l-8.994-5.18a4.31 4.31 0 0 0-4.317 0L218.218 74.42c-1.342.774-2.16 2.264-2.16 3.813v41.443a4.31 4.31 0 0 0 2.159 3.741l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.31 4.31 0 0 0 2.159-3.741V16.356c0-1.572-.858-3.047-2.23-3.813L272.9.598c-.336-.187-.708-.22-1.08-.216zM40.86 52.115c-.685.028-1.328.147-1.943.504L3.015 73.34a4.3 4.3 0 0 0-2.158 3.741L.93 132.7c0 .774.4 1.492 1.08 1.87.667.4 1.494.4 2.158 0l21.297-12.232c1.35-.8 2.23-2.196 2.23-3.74V92.623c0-1.55.815-2.97 2.16-3.74l9.066-5.252a4.25 4.25 0 0 1 2.158-.576 4.24 4.24 0 0 1 2.159.576L52.3 88.88c1.343.77 2.158 2.192 2.158 3.74v25.974c0 1.546.9 2.95 2.23 3.74l21.297 12.232c.67.4 1.495.4 2.158 0 .66-.38 1.08-1.097 1.08-1.87l.072-55.617a4.28 4.28 0 0 0-2.158-3.741L43.235 52.618c-.607-.356-1.253-.476-1.943-.504h-.43zm322.624.504a4.29 4.29 0 0 0-2.159.576l-35.903 20.722c-1.34.775-2.16 2.192-2.16 3.74V119.1c0 1.558.878 2.97 2.23 3.74l35.615 20.3c1.315.75 2.92.807 4.245.07l21.585-12.016c.685-.38 1.148-1.09 1.15-1.87s-.403-1.482-1.08-1.87l-36.12-20.722c-.676-.386-1.15-1.167-1.15-1.943V91.83c0-.774.48-1.484 1.15-1.87l11.224-6.476c.668-.386 1.488-.386 2.16 0L375.5 89.96a2.15 2.15 0 0 1 1.079 1.87v10.217a2.15 2.15 0 0 0 1.079 1.87c.673.388 1.488.39 2.16 0L401.33 91.4c1.335-.776 2.16-2.197 2.16-3.74v-10a4.32 4.32 0 0 0-2.159-3.741l-35.687-20.722a4.28 4.28 0 0 0-2.159-.576zm-107.35 30.94a1.21 1.21 0 0 1 .576.143l12.303 7.123c.334.193.576.55.576.935v14.246c0 .387-.24.743-.576.935l-12.303 7.123c-.335.19-.744.19-1.08 0l-12.303-7.123c-.335-.193-.576-.55-.576-.935V91.758c0-.386.242-.74.576-.935l12.303-7.122c.168-.097.316-.143.504-.143v-.001z"
                      fill="#404137"
                    />
                    <path
                      d="M148.714 52.402a4.31 4.31 0 0 0-2.16.576l-35.903 20.65c-1.342.774-2.158 2.265-2.158 3.813v41.443a4.3 4.3 0 0 0 2.158 3.74l35.903 20.722a4.3 4.3 0 0 0 4.317 0l35.903-20.722a4.31 4.31 0 0 0 2.159-3.741V77.44c0-1.55-.816-3.04-2.16-3.813l-35.903-20.65a4.27 4.27 0 0 0-2.16-.576zm214.7 36.983c-.143 0-.302 0-.432.07l-6.907 4.03a.84.84 0 0 0-.432.719v7.915c0 .298.173.57.432.72l6.907 3.957a.75.75 0 0 0 .79 0l6.907-3.957c.256-.147.432-.422.432-.72v-7.915c0-.298-.175-.57-.432-.72l-6.907-4.03c-.128-.076-.216-.07-.36-.07z"
                      fill="#83cd29"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <div className="service_container min-h-screen" id="services">
        <h2 className="text-4xl font-bold text-gray-800 text-center mt-20">
          Services
        </h2>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  lg:pl-20 lg:pr-20 md:pl-10 md:pr-10 pb-20">
          <div className="bg-gray-100 p-4">
            <a
              
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Web apps (fullstack dev)
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Front-end development with ReactJS, NextJS or Angular
                technologies. Backend development with technologies such as
                Node, Express and SQl and NOSQL database management.
              </p>
            </a>
          </div>
          <div className="bg-gray-100 p-4">
            <a
              
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                IOS/Android Native develoment
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Development of native mobile applications for Android and IOS
                operating systems, along with industry standards.
              </p>
            </a>
          </div>
          <div className="bg-gray-100 p-4">
            <a
              
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cross-platform development
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Multiplatform software development with technologies such as
                React Native, allowing with a single development to have greater
                compatibility between devices.
              </p>
            </a>
          </div>
          <div className="bg-gray-100 p-4">
            <a
              
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                QA testing
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                software quality testing, test automation, incident report
                generation .
              </p>
            </a>
          </div>
        </div>
      </div>
      {/* projects */}
      <div
        className="project_container w-full flex justify-center items-center flex-col pb-20"
        id="projects"
      >
        <h2 className="text-4xl font-bold text-gray-800 text-center mt-10 mb-20">
          Projects
        </h2>

        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-10 gap-x-20 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-0 sm:text-left">
          <div
            className="relative"
            onClick={() =>
              window.open("https://github.com/Dakrfox/UserApp", "_blank")
            }
          >
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
            </div>
            <div className="transform transition duration-500 hover:scale-110 hover:z-10 z-0 relative overflow-hidden bg-white shadow-md rounded-xl h-full">
              <div className="p-9">
                <div className="inline-flex items-center justify-center">
                  <FaRegUser size={35} className="mr-2" />

                  <h3 className="text-2xl font-bold text-gray-900 ">UserApp</h3>
                </div>
                <img
                  className="w-full mt-6 rounded mb-6"
                  src="https://lh5.googleusercontent.com/76NxgDxUuhZGlRyrLekJYpYA8nHl2_Jeio4Ae13DAzNsX5p920m6eh10dWl4R-N__iWPuISgHqOkWh3YnvfzdKasPJtnHlTPQo3Y30Daji1YGEd4STUkQTByY-JIUCtk=w1280"
                  alt="userapp"
                />

                <h3 className="text-md  text-gray-400">MERNN Stack | JS</h3>

                <p className="mt-1 text-base text-gray-600">
                  This web app authenticates and CRUDs the user in order to
                  reuse code in other projects...
                </p>
              </div>
            </div>
          </div>
          <div onClick={() => window.open("https://github.com/Dakrfox/DKF-ToDo-List", "_blank")} className="transform transition duration-500 hover:scale-110 hover:z-10 z-0 overflow-hidden bg-white shadow-md rounded-xl">
            <div className="p-9">
              <div className="inline-flex items-center justify-center">
                <FaListOl className="mr-2" size={35} />

                <h3 className="text-2xl font-bold text-gray-900 ">
                  DKF ToDo List
                </h3>
              </div>
              <img
                className="w-full mt-6 rounded mb-6"
                src="https://lh3.googleusercontent.com/-b4rO0cbvibbI-8iJm14G-cI1KAqEC0r6B5xS_E8s5IqLmSDm5PRLpcLPoL-N2BaMQZAukyj_dngKVekg4WSkTZiUatzIfuYULC-Ox8WR0oirk5xg07n3MgF7rli_89CoA=w1280"
                alt="userapp"
              />
              <h3 className="text-md  text-gray-400">ReactJS/NextJS | TS</h3>
              <p className="mt-1 text-base text-gray-600">
                simple CRUD ToDo List with local database
              </p>
            </div>
          </div>
          <div onClick={() => window.open("https://github.com/Dakrfox/MERN-OB", "_blank")} className="transform transition duration-500 hover:scale-110 hover:z-10 z-0 relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
            </div>
            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
              <div className="p-9">
                <div className="inline-flex items-center justify-center">
                  <svg
                    className="w-12 h-12 mx-auto text-gray-400 sm:mx-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 8L20 8"
                      stroke="#111827"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M4 16L14 16"
                      stroke="#111827"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <ellipse
                      cx="7"
                      cy="8"
                      rx="3"
                      ry="3"
                      transform="rotate(90 7 8)"
                      stroke="#111827"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></ellipse>
                    <ellipse
                      cx="17"
                      cy="16"
                      rx="3"
                      ry="3"
                      transform="rotate(90 17 16)"
                      stroke="#111827"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></ellipse>
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900 ">
                    Node/ExpressJS | TS
                  </h3>
                </div>
                <img
                  className="w-full mt-6 rounded mb-6"
                  src="https://lh3.googleusercontent.com/awKbu7uCMw8mR1MPmOrQHOoxbvHA5gymcTpS9MfV-zBa31P0Hxo3UFWp6uO-ghpoLIXR2l8HJ6Fl3lBxJrcRVMUJ3KHx5ElJTX8xx90NcKUBNZ-RkAzTpo44r5gvF-58Cg=w1280"
                  alt="userapp"
                />
                <h3 className="text-md  text-gray-400">Node/ExpressJS | TS</h3>
                <p className="mt-1 text-base text-gray-600">
                  MERN Stack project backend of open Bootcamp, Auth user, CRUD,
                  middlewares and ...
                </p>
              </div>
            </div>
          </div>
          <div onClick={() => window.open("https://github.com/Dakrfox/Platzi_projects/tree/main/Fullstack%20Developer", "_blank")} className="transform transition duration-500 hover:scale-110 hover:z-10 z-0 overflow-hidden bg-white shadow-md rounded-xl">
            <div className="p-9">
              <div className="inline-flex items-center justify-center">
                <FiShoppingBag className="mr-2" size={35} />

                <h3 className="text-2xl font-bold text-gray-900 ">
                  E-Commerce
                </h3>
              </div>
              <img
                className="w-full mt-6 rounded mb-6"
                src="https://lh4.googleusercontent.com/nLr7cctTTjUbaLClIVNUZ9-k9Fb-KCnhshvix4Xbekm8QJ6zVoPXA6ut0Ub36AcWJSBjRbjAezuqdx9D9L76HbK_VLT4_42hQZ4WDyvNdwysMm5cup6n6kw_YZYUYNwIkg=w1280"
                alt="userapp"
              />
              <h3 className="text-md  text-gray-400">PERNN stack | JS/TS</h3>
              <p className="mt-1 text-base text-gray-600">
                Fullstack project of an e-commerce connected to a product API
                made with PERNN Stack
              </p>
            </div>
          </div>
          <div onClick={() => window.open("https://github.com/Dakrfox/DKF-MUSIC-PL", "_blank")} className="transform transition duration-500 hover:scale-110 hover:z-10 z-0 relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
            </div>
            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
              <div className="p-9">
                <div className="inline-flex items-center justify-center">
                  <div className="inline-flex items-center justify-center">
                    <FaMusic className="mr-2" size={35} />

                    <h3 className="text-2xl font-bold text-gray-900 ">
                      DKF Playlist
                    </h3>
                  </div>
                </div>
                <img
                  className="w-full mt-6 rounded mb-6"
                  src="https://lh4.googleusercontent.com/4-LPwoHwwM8JhifYuF5xx748JgJPDbDk6kXc1Wa7qfN7kEzGhO_AWxkOUB358phR5LovHGHO3Lj7QwfjbS6iYnCWF2_HMPl4WeKhF4bDIUUp_T7pipyjrBtJ0WT2p6fR4w=w1280"
                  alt="userapp"
                />
                <h3 className="text-md  text-gray-400">NextJS | JS</h3>
                <p className="mt-1 text-base text-gray-600">
                  Simple web page, showing the playlist of different genres.
                </p>
              </div>
            </div>
          </div>
          <div onClick={() => window.open("https://github.com/Dakrfox/GIF-Search-Engine", "_blank")} className="transform transition duration-500 hover:scale-110 hover:z-10 z-0 overflow-hidden bg-white shadow-md rounded-xl">
            <div className="p-9">
              <div className="inline-flex items-center justify-center">
                <MdOutlineGifBox className="mr-2" size={35} />

                <h3 className="text-2xl font-bold text-gray-900 ">
                  GIF search Engine
                </h3>
              </div>
              <img
                className="w-full mt-6 rounded mb-6"
                src="https://lh4.googleusercontent.com/onybNDkB1Uac_0JnWnHGX77wSc4p8upJvPoHI4WueZ9BAot-7HsaWOioES4FdlwTodMaPQh4ZaZkNUfrN2Zm30xNZbNjZrayqNEo02oKcShDt1UKX2tiMyKvYWENO-93xg=w1280"
                alt="userapp"
              />
              <h3 className="text-md  text-gray-400">React | JS</h3>
              <p className="mt-1 text-base text-gray-600">
                website that allows you to search within a limited and local
                database for different gifs by name.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => window.open("https://github.com/dakrfox", "_blank")}
          className=" transition duration-500 inline-flex items-center text-xl mt-10 mb-10 lg:w-1/2 sm:w-full md:ml-10 md:mr-10 sm:mr-2 sm:ml-2 lg:mr-20 lg:0ml-20 justify-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          <FaGithub className="mr-2" />
          See More Projects on GitHub
        </button>
      </div>
      {/* footer */}
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="/DF.svg" className="h-8 rounded" alt="NIMH Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                NiCoded
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li className="inline-flex items-center ">
                <FaLinkedin />
                <a
                  href="https://www.linkedin.com/in/dk-fox/"
                  className="hover:underline mr-4 ml-1 me-4 md:me-6 "
                >
                  @dk-fox
                </a>
              </li>
              <li className="inline-flex items-center ">
                <FaGithub />

                <a
                  href="https://github.com/Dakrfox"
                  className="hover:underline mr-4 ml-1 me-4 md:me-6"
                >
                  @Dakrfox
                </a>
              </li>
              <li className="inline-flex items-center">
                <MdMailOutline />

                <a
                  href="mailto:business.nimh@outlook.com"
                  className="hover:underline mr-4 ml-1 me-4 md:me-6"
                >
                  Business.nimh@outlook.com
                </a>
              </li>
              <li className="inline-flex items-center">
                <FaInstagram />

                <a
                  href="https://www.instagram.com/dakrfox/"
                  className="hover:underline mr-4 ml-1"
                >
                  @Dakrfox
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              NiCoded - Nicolas Ivan Martinez Herrera™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
