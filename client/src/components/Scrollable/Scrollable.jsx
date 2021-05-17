import "./Scrollable.css";

const Scrollable = ({
  className,
  scrollColor,
  scrollBorder,
  scrollWidth,
  scrollRadius,
  transitionDuration,
  transitionDelay,
  children,
}) => (
  <div
    className={`scrlContainer ${className}`}
    style={{
      "--scrlBg": scrollColor,
      "--scrlBorder": scrollBorder,
      "--scrlWidth": scrollWidth,
      "--scrlRadius": scrollRadius,
      "--scrlTransitionDuration": transitionDuration,
      "--scrlTransitionDelay": transitionDelay,
    }}
  >
    {children}
  </div>
);

export default Scrollable;
