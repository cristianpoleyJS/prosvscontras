export default function IconAdd (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="prefix__h-6 prefix__w-6"
      viewBox="0 0 24 24"
      stroke={props.fill}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  )
}
