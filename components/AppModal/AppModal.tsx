/**
 * @description Modal design
 * @done_by Niyongabo
 */
import { MdClose } from "react-icons/md";

export enum Themes {
  default = "default",
  primary = "primary",
  secondary = "secondary",
  danger = "danger",
  success = "success",
  warning = "warning",
}

export enum ModalMarginTop {
  none = "top-0",
  small = "top-28",
  medium = "top-1/3",
  large = "top-1/2",
  extra = "top-2/3",
}

export enum ModalSize {
  small = "max-w-sm",
  medium = "max-w-screen-sm",
  large = "max-w-screen-md",
  extraLarge = "max-w-screen-lg",
  extraExtraLarge = "max-w-screen-xl",
  maxWidth = "max-w-screen h-full",
}

interface ModalInterface {
  title?: any;
  backDrop: boolean;
  theme: Themes;
  close: Function;
  backDropClose: boolean;
  footer?: any;
  children: any;
  widthSizeClass: ModalSize;
  displayClose: boolean;
  padding: { title?: boolean; body?: boolean; footer?: boolean };
  marginTop?: ModalMarginTop;
}

const AppModal = (props: ModalInterface): JSX.Element => {
  const {
    title,
    backDrop,
    theme,
    close,
    backDropClose,
    widthSizeClass,
    displayClose,
    padding = { title: true, body: true, footer: true },
  }: ModalInterface = props;

  let themeColor: string;

  switch (theme) {
    case Themes.primary:
      themeColor = "blue-500";
      break;
    case Themes.secondary:
      themeColor = "gray-300";
      break;
    case Themes.danger:
      themeColor = "red-500";
      break;
    case Themes.success:
      themeColor = "primary-800";
      break;
    case Themes.warning:
      themeColor = "yellow-500";
      break;
    default:
      themeColor = "white";
      break;
  }
  return (
    <>
      <div
        onClick={(): void => backDropClose && close()}
        className={`z-50 animate__animated animate__fadeIn animate__faster modal fixed bg-black bg-opacity-${
          backDrop === true ? "60" : "0"
        }`}
      ></div>
      <div
        className={`z-50 fixed items-center justify-items-center ${
          props.marginTop === undefined ? ModalMarginTop.none : props.marginTop
        } left-0 right-0 bottom-0 bg-white rounded-md shadow-xl self-center ${widthSizeClass} animate__animated ${
          props.marginTop !== undefined &&
          props.marginTop !== ModalMarginTop.none
            ? "animate__fadeInUp"
            : "animate__zoomIn"
        } animate__faster`}
        style={{
          width: "100%",
          maxHeight: "99vh",
          height: `${
            widthSizeClass === ModalSize.maxWidth
              ? props.marginTop === undefined
                ? "100%"
                : "unset"
              : "fit-content"
          }`,
          overflowY: "auto",
          margin: "auto",
          zIndex: 99999999,
        }}
      >
        <div
          className={`flex justify-between bg-${themeColor} ${
            padding.title === true ? "py-4 px-4" : ""
          } rounded-t-md text-${
            theme === Themes.default || theme === Themes.secondary
              ? "black"
              : "white"
          }`}
        >
          {!title || title === "" ? (
            <div></div>
          ) : (
            <h4 className={`text-lg font-bold `}>{title}</h4>
          )}
          {displayClose === false ? (
            ""
          ) : (
            <div className="hover:text-red-600 hover:bg-red-100 rounded-full p-1 h-8 w-8">
              <MdClose
                className="cursor-pointer font-extrabold text-2xl"
                onClick={(): void => close()}
              />
            </div>
          )}
        </div>
        <div
          className={`space-x-3 ${padding.body === true ? "py-4 px-4" : ""}`}
        >
          <div>{props.children !== "" ? props.children : ""}</div>
        </div>
        {props.footer !== undefined && props.footer !== "" ? (
          <div
            className={`flex float-right ${
              padding.footer === true ? "py-4 px-4" : ""
            }`}
          >
            {props.footer}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default AppModal;
